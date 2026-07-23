/** Volumetric smoke whose density form follows the Clair logo mark */
export const internalEnergyGLSL = /* glsl */ `
uniform float uTime;
uniform vec3 uLocalCamPos;
uniform vec3 uPrimaryColor;
uniform vec3 uSecondaryColor;
uniform float uEnergyDensity;
uniform float uFractalIters;
uniform float uFractalScale;
uniform float uFractalDecay;
uniform float uInternalAnim;
uniform float uSmoothness;
uniform float uAsymmetry;
uniform float uPetalCount;
uniform float uPetalStrength;
uniform float uBloomRings;
uniform float uLogoCoherence;
uniform float uSmokeDisrupt;
uniform sampler2D uLogoMap;

mat2 logoSpin() {
  float spin = uTime * uInternalAnim * 0.04;
  return mat2(cos(spin), sin(spin), -sin(spin), cos(spin));
}

float logoMarkSample(vec2 p) {
  float scale = mix(0.4, 0.5, uPetalStrength);
  vec2 uv = vec2(p.x * scale + 0.5, 0.5 - p.y * scale);
  if (uv.x < 0.01 || uv.x > 0.99 || uv.y < 0.01 || uv.y > 0.99) return 0.0;
  vec3 tex = texture2D(uLogoMap, uv).rgb;
  float luma = max(tex.r, max(tex.g, tex.b));
  return smoothstep(0.02, 0.72, luma);
}

float clairLogoField(vec3 pos) {
  if (uPetalStrength < 0.001) return 0.0;

  vec2 p = logoSpin() * pos.xy;
  float mark = logoMarkSample(p);
  float zSoft = exp(-pos.z * pos.z * 1.8);
  float radial = length(pos.xy);
  float focus = 1.0 - smoothstep(0.85, 1.35, radial);

  return mark * mix(0.55, 1.0, zSoft) * mix(0.7, 1.0, focus);
}

float softLogo(vec3 pos) {
  float s = 0.0;
  s += clairLogoField(pos) * 0.34;
  s += clairLogoField(pos * vec3(0.98, 0.98, 1.01)) * 0.24;
  s += clairLogoField(pos * vec3(1.02, 1.02, 0.99)) * 0.2;
  s += clairLogoField(pos * vec3(1.05, 1.05, 0.97)) * 0.14;
  s += clairLogoField(pos * vec3(0.95, 0.95, 1.02)) * 0.08;
  return clamp(s, 0.0, 1.0);
}

float logoForm(vec3 pos) {
  float l = softLogo(pos);
  return pow(l, mix(0.45, 0.82, uLogoCoherence));
}

vec3 logoWarp(vec3 pos) {
  vec2 p = logoSpin() * pos.xy;
  float eps = 0.028;
  float l0 = logoMarkSample(p);
  float lx = logoMarkSample(p + vec2(eps, 0.0));
  float ly = logoMarkSample(p + vec2(0.0, eps));
  vec2 grad = vec2(lx - l0, ly - l0) / eps;

  float warpAmt = uLogoCoherence * uPetalStrength * mix(0.04, 0.11, uPetalStrength);
  float turb = sin(uTime * uInternalAnim * 2.0 + dot(pos, vec3(3.1, 2.4, 1.7))) * uSmokeDisrupt * 0.025;
  vec2 offset = logoSpin() * (grad * warpAmt + vec2(turb));
  return pos + vec3(offset, turb * 0.5);
}

float clairPetalBias(float azimuth) {
  float wings = pow(abs(cos(azimuth)), 0.5);
  float seeds = pow(abs(sin(azimuth)), 1.75);
  return mix(seeds, wings, 0.7);
}

float volumeEnvelope(vec3 anchor) {
  float radius = length(anchor);
  float core = smoothstep(0.0, 0.15, radius);
  float edge = 1.0 - smoothstep(1.25, 1.88, radius);
  return core * edge;
}

float evaluateFractal(vec3 pos, vec3 anchor, float logo) {
  float densityAcc = 0.0;
  float animTime = uTime * uInternalAnim;
  float s = sin(animTime);
  float c = cos(animTime);
  mat2 rotAnim = mat2(c, s, -s, c);

  float a = 0.5 * uAsymmetry;
  mat2 rotAsym1 = mat2(cos(a), sin(a), -sin(a), cos(a));
  float b = 0.3 * uAsymmetry;
  mat2 rotAsym2 = mat2(cos(b), sin(b), -sin(b), cos(b));

  for (int step = 0; step < 12; ++step) {
    if (float(step) >= uFractalIters) break;

    pos.xy *= rotAnim;
    pos.yz *= rotAnim;
    pos.xz *= rotAsym1;
    pos.yz *= rotAsym2;
    pos += vec3(0.05, -0.02, 0.03) * uAsymmetry * (1.0 + uSmokeDisrupt * 0.45);

    if (uLogoCoherence > 0.01) {
      float angle = atan(pos.y, pos.x);
      float wingBias = clairPetalBias(angle);
      float pinch =
        1.0 +
        uLogoCoherence *
          uPetalStrength *
          0.12 *
          cos(6.0 * angle + float(step) * 0.28) *
          wingBias;
      pos.xy *= pinch;
    }

    vec3 foldedPos = sqrt(pos * pos + uSmoothness);
    float magnitudeSq = max(dot(foldedPos, foldedPos), 0.00001);
    pos = (uFractalScale * foldedPos / magnitudeSq) - uFractalScale;

    float ySq = pos.y * pos.y;
    float zSq = pos.z * pos.z;
    float yz2 = 2.0 * pos.y * pos.z;
    pos.yz = vec2(ySq - zSq, yz2);
    pos = vec3(pos.z, pos.x, pos.y);

    float fold = exp(uFractalDecay * abs(dot(pos, anchor)));
    float logoWeight = mix(1.0, 0.45 + logo * 0.95, uLogoCoherence * uPetalStrength);
    densityAcc += fold * logoWeight;
  }

  return densityAcc * 0.5;
}

float evaluateStructure(vec3 pos) {
  vec3 warped = logoWarp(pos);
  float logo = logoForm(pos);
  float envelope = volumeEnvelope(pos);
  float smoke = evaluateFractal(warped, pos, logo) * envelope;

  if (uPetalStrength < 0.001) {
    return smoke;
  }

  float form = mix(1.0, 0.25 + logo * 0.95, uLogoCoherence * uPetalStrength);
  float field = smoke * form;

  float turbulence =
    smoke *
    uSmokeDisrupt *
    (0.08 + 0.14 * (1.0 - uLogoCoherence)) *
    (0.65 + 0.35 * sin(uTime * uInternalAnim * 3.0 + pos.x * 5.0 + pos.y * 4.0));

  field += turbulence * mix(0.35, 1.0, logo);

  if (uBloomRings > 0.01 && uSmokeDisrupt > 0.2) {
    float radius = length(pos.xy);
    float rings = abs(sin(radius * uBloomRings * 2.4 - uTime * uInternalAnim * 0.5));
    field += smoke * rings * uSmokeDisrupt * 0.12 * logo;
  }

  return field;
}

vec2 getVolumeBounds(vec3 origin, vec3 dir, float radius) {
  float b = dot(origin, dir);
  float c = dot(origin, origin) - radius * radius;
  float discriminant = b * b - c;
  if (discriminant < 0.0) return vec2(-1.0);
  float root = sqrt(discriminant);
  return vec2(-b - root, -b + root);
}

vec3 traceEnergy(vec3 origin, vec3 dir, vec2 limits) {
  float currentDepth = limits.x;
  float marchStep = 0.02;
  vec3 finalEnergy = vec3(0.0);
  float fieldVal = 0.0;

  for (int i = 0; i < 64; i++) {
    currentDepth += marchStep * exp(-2.0 * fieldVal);
    if (currentDepth > limits.y) break;

    vec3 samplePoint = origin + currentDepth * dir;
    fieldVal = evaluateStructure(samplePoint);
    fieldVal = pow(max(fieldVal, 0.0), mix(1.0, 0.82, uSmokeDisrupt * 0.35));

    float logoVal = logoForm(samplePoint);
    float vSq = fieldVal * fieldVal;
    float gradientBlend = smoothstep(0.0, 0.32, fieldVal);
    vec3 currentGradient = mix(uSecondaryColor, uPrimaryColor, gradientBlend);
    currentGradient = mix(currentGradient, mix(uSecondaryColor, uPrimaryColor, 0.15), logoVal * uLogoCoherence * 0.2);

    vec3 emission = currentGradient * (fieldVal * 1.75 + vSq * 0.75);
    finalEnergy = 0.99 * finalEnergy + (0.08 * uEnergyDensity) * emission;
  }

  return finalEnergy;
}

vec3 traceInteriorEnergy(vec3 localSurfacePos) {
  vec3 rayOrig = uLocalCamPos;
  vec3 rayDir = normalize(localSurfacePos - uLocalCamPos);

  float t = uTime * 0.1;
  float s = sin(t);
  float c = cos(t);
  mat2 rotXZ = mat2(c, s, -s, c);
  rayOrig.xz *= rotXZ;
  rayDir.xz *= rotXZ;

  vec2 limits = getVolumeBounds(rayOrig, rayDir, 1.95);
  if (limits.x < 0.0) return vec3(0.0);

  vec3 volume = traceEnergy(rayOrig, rayDir, limits);
  return 0.5 * log(1.0 + volume);
}
`;
