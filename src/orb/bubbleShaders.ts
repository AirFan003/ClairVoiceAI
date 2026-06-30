/**
 * Custom GLSL bubble — visible on black backgrounds.
 * Combines SoapBubble noise/iridescence + Stemkoski-style env refraction + fresnel glass shell.
 */
export const bubbleVertexShader = /* glsl */ `
uniform float uTime;
uniform float uNoiseLevel;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying float vNoise;

vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float permute(float x) { return floor(mod(((x * 34.0) + 1.0) * x, 289.0)); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}

float snoise(vec4 v) {
  const vec2 C = vec2(0.138196601125010504, 0.309016994374947451);
  vec4 i = floor(v + dot(v, C.yyyy));
  vec4 x0 = v - i + dot(i, C.xxxx);
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;
  i = mod(i, 289.0);
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));
  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);
  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4, p4));
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);
  m0 = m0 * m0; m1 = m1 * m1;
  return 49.0 * (dot(m0*m0, vec3(dot(p0,x0), dot(p1,x1), dot(p2,x2))) + dot(m1*m1, vec2(dot(p3,x3), dot(p4,x4))));
}

void main() {
  float t = uTime * uNoiseLevel;
  vNoise = snoise(vec4(position / 1.5, t));

  vec3 displaced = position + normal * vNoise * uNoiseLevel / 7.0;

  vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
  vWorldPosition = worldPos.xyz;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = viewMatrix * worldPos;
  vViewPosition = -mvPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;
}
`;

export const bubbleFragmentShader = /* glsl */ `
uniform float uNoiseLevel;
uniform float uRefractionRatio;
uniform float uReflectivity;
uniform float uThickness;
uniform samplerCube uEnvMap;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying float vNoise;

vec3 hsl2rgb(vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

// Blur cubemap samples to soften hard/env seams
vec3 sampleSoftEnv(samplerCube map, vec3 dir) {
  vec3 sum = vec3(0.0);
  float w = 0.0;
  sum += textureCube(map, dir).rgb * 2.0; w += 2.0;

  const float spread = 0.045;
  sum += textureCube(map, normalize(dir + vec3(spread, 0.0, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(-spread, 0.0, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, spread, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, -spread, 0.0))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, 0.0, spread))).rgb; w += 1.0;
  sum += textureCube(map, normalize(dir + vec3(0.0, 0.0, -spread))).rgb; w += 1.0;

  return sum / w;
}

vec3 softenEnv(vec3 env) {
  env *= vec3(1.04, 1.0, 0.94);
  float luma = dot(env, vec3(0.299, 0.587, 0.114));
  env = mix(vec3(luma), env, 0.55);
  return pow(env, vec3(1.15));
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewPosition);

  // Fresnel — defines the glass bubble silhouette on black
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.4);
  float facing = max(dot(n, v), 0.0);

  // Warm pearl iridescence — peach, cream, soft rose (Clair palette)
  float warmHue = mix(0.03 + vNoise * 0.05, 0.97 + vNoise * 0.03, smoothstep(-0.3, 0.5, vNoise));
  vec3 film = hsl2rgb(vec3(warmHue, 0.22 + abs(vNoise) * 0.1, 0.72));
  film = mix(film, vec3(1.0, 0.97, 0.93), 0.45);

  // Soft environment sampling — blurred + lower contrast
  vec3 viewDir = normalize(vWorldPosition - cameraPosition);
  vec3 reflectDir = reflect(viewDir, n);
  vec3 refractDir = refract(viewDir, n, uRefractionRatio);
  vec3 envSample = softenEnv(
    mix(sampleSoftEnv(uEnvMap, reflectDir), sampleSoftEnv(uEnvMap, refractDir), 0.5)
  );

  // Glass body — warm film + env blend (reflectivity can exceed 1)
  float bodyMask = mix(0.4 + uThickness * 0.1, 0.9, fresnel);
  vec3 glass = film * bodyMask * 0.85;
  float envMix = uReflectivity * mix(0.28, 0.62, fresnel);
  glass = mix(glass, envSample, min(envMix, 1.0));
  glass += envSample * max(envMix - 1.0, 0.0) * 0.3;

  // Very soft warm highlight — broad, not a sharp hotspot
  vec3 lightDir = normalize(vec3(0.4, 0.9, 0.5));
  vec3 halfDir = normalize(lightDir + v);
  float spec = pow(max(dot(n, halfDir), 0.0), 12.0);
  glass += vec3(1.0, 0.98, 0.94) * spec * 0.08 * min(uReflectivity, 1.5);

  // Warm white rim
  glass += vec3(1.0, 0.96, 0.91) * fresnel * 0.42;

  // Subtle inner depth from facing angle
  glass += film * facing * 0.12 * uNoiseLevel;

  float alpha = 0.55 + fresnel * 0.4;
  gl_FragColor = vec4(glass, alpha);
}
`;
