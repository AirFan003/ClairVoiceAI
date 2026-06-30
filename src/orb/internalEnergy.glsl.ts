/** Volumetric fractal energy — Magical AI Orb, tuned for floral radial structure */
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

float petalEnvelope(vec3 anchor) {
  if (uPetalStrength < 0.001) return 1.0;

  float azimuth = atan(anchor.y, anchor.x);
  float radius = length(anchor);
  float elevation = atan(length(anchor.xy), anchor.z + 0.001);
  float spin = uTime * uInternalAnim * 0.15;

  float lobeWave = cos(uPetalCount * azimuth + spin);
  float lobes = pow(clamp(0.5 + 0.5 * lobeWave, 0.0, 1.0), mix(1.0, 2.2, uPetalStrength));
  float tips = pow(abs(sin(uPetalCount * 0.5 * azimuth + spin * 0.5)), mix(1.0, 1.6, uPetalStrength));
  float depth = 0.55 + 0.45 * cos(uPetalCount * 0.5 * elevation + spin * 0.5);
  float rings = 1.0;

  if (uBloomRings > 0.01) {
    float ringWave = abs(sin(radius * uBloomRings * 2.8 - spin * 0.7));
    rings = 0.28 + 0.72 * pow(ringWave, 0.75);
  }

  float core = smoothstep(0.0, 0.18, radius);
  float edge = 1.0 - smoothstep(1.35, 1.82, radius);
  float stamen = exp(-radius * radius * 10.0);
  float envelope = lobes * mix(1.0, tips, 0.45) * depth * rings * core * edge;
  envelope = mix(envelope, 1.0, stamen * uPetalStrength * 0.55);
  envelope = pow(envelope, mix(1.0, 0.58, uPetalStrength));

  return mix(1.0, envelope, uPetalStrength);
}

float evaluateStructure(vec3 pos) {
  float densityAcc = 0.0;
  vec3 anchor = pos;

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
    pos += vec3(0.05, -0.02, 0.03) * uAsymmetry;

    if (uPetalStrength > 0.001) {
      float angle = atan(pos.y, pos.x);
      float pinch = 1.0 + uPetalStrength * 0.2 * cos(uPetalCount * angle + float(step) * 0.35);
      pos.xy *= pinch;
      pos.z *= 1.0 - uPetalStrength * 0.06 * (1.0 - cos(uPetalCount * angle));
    }

    vec3 foldedPos = sqrt(pos * pos + uSmoothness);
    float magnitudeSq = max(dot(foldedPos, foldedPos), 0.00001);
    pos = (uFractalScale * foldedPos / magnitudeSq) - uFractalScale;

    float ySq = pos.y * pos.y;
    float zSq = pos.z * pos.z;
    float yz2 = 2.0 * pos.y * pos.z;
    pos.yz = vec2(ySq - zSq, yz2);
    pos = vec3(pos.z, pos.x, pos.y);

    densityAcc += exp(uFractalDecay * abs(dot(pos, anchor)));
  }

  return densityAcc * 0.5 * petalEnvelope(anchor);
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
    fieldVal = pow(max(fieldVal, 0.0), mix(1.0, 0.68, uPetalStrength));

    float vSq = fieldVal * fieldVal;
    float gradientBlend = smoothstep(0.0, mix(0.4, 0.22, uPetalStrength), fieldVal);
    vec3 currentGradient = mix(uSecondaryColor, uPrimaryColor, gradientBlend);
    vec3 emission = currentGradient * (fieldVal * 1.8 + vSq * 1.0);

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
