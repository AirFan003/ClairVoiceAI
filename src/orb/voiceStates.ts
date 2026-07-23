export type VoiceState = 'idle' | 'listening' | 'thinking' | 'answering';

export interface OrbStateConfig {
  noiseLevel: number;
  energyDensity: number;
  petalCount: number;
  petalStrength: number;
  bloomRings: number;
  fractalIters: number;
  fractalScale: number;
  fractalDecay: number;
  smoothness: number;
  asymmetry: number;
  internalAnim: number;
  animSpeed: number;
  autoRotateSpeed: number;
  /** How cleanly smoke follows the Clair logo silhouette (1 = crisp logo read) */
  logoCoherence: number;
  /** How much fractal smoke breaks up / overflows the logo shape */
  smokeDisrupt: number;
}

export const VOICE_STATE_PRESETS: Record<VoiceState, OrbStateConfig> = {
  idle: {
    noiseLevel: 0.3,
    energyDensity: 0.9,
    petalCount: 2,
    petalStrength: 0,
    bloomRings: 0,
    fractalIters: 3,
    fractalScale: 0.95,
    fractalDecay: -11,
    smoothness: 0.04,
    asymmetry: 0.12,
    internalAnim: 0.15,
    animSpeed: 0.22,
    autoRotateSpeed: 0.2,
    logoCoherence: 0,
    smokeDisrupt: 0.2,
  },
  listening: {
    noiseLevel: 0.42,
    energyDensity: 1.2,
    petalCount: 6,
    petalStrength: 0.68,
    bloomRings: 0.2,
    fractalIters: 3,
    fractalScale: 0.98,
    fractalDecay: -12,
    smoothness: 0.038,
    asymmetry: 0.06,
    internalAnim: 0.26,
    animSpeed: 0.32,
    autoRotateSpeed: 0.3,
    logoCoherence: 0.98,
    smokeDisrupt: 0.08,
  },
  thinking: {
    noiseLevel: 0.78,
    energyDensity: 2.0,
    petalCount: 6,
    petalStrength: 0.68,
    bloomRings: 2.4,
    fractalIters: 6,
    fractalScale: 0.96,
    fractalDecay: -19,
    smoothness: 0.022,
    asymmetry: 0.32,
    internalAnim: 0.52,
    animSpeed: 0.55,
    autoRotateSpeed: 0.44,
    logoCoherence: 0.48,
    smokeDisrupt: 0.82,
  },
  answering: {
    noiseLevel: 0.58,
    energyDensity: 1.55,
    petalCount: 6,
    petalStrength: 0.58,
    bloomRings: 1.2,
    fractalIters: 4,
    fractalScale: 0.97,
    fractalDecay: -15,
    smoothness: 0.03,
    asymmetry: 0.18,
    internalAnim: 0.4,
    animSpeed: 0.44,
    autoRotateSpeed: 0.38,
    logoCoherence: 0.72,
    smokeDisrupt: 0.4,
  },
};

export const VOICE_STATE_LABELS: Record<VoiceState, string> = {
  idle: 'Idle',
  listening: 'Listening',
  thinking: 'Thinking',
  answering: 'Answering',
};
