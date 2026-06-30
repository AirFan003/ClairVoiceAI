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
  },
  listening: {
    noiseLevel: 0.5,
    energyDensity: 1.35,
    petalCount: 2,
    petalStrength: 0.5,
    bloomRings: 1.0,
    fractalIters: 4,
    fractalScale: 0.97,
    fractalDecay: -14,
    smoothness: 0.032,
    asymmetry: 0.18,
    internalAnim: 0.32,
    animSpeed: 0.38,
    autoRotateSpeed: 0.35,
  },
  thinking: {
    noiseLevel: 0.82,
    energyDensity: 2.3,
    petalCount: 9,
    petalStrength: 0.78,
    bloomRings: 3.0,
    fractalIters: 6,
    fractalScale: 0.96,
    fractalDecay: -21,
    smoothness: 0.022,
    asymmetry: 0.28,
    internalAnim: 0.58,
    animSpeed: 0.62,
    autoRotateSpeed: 0.5,
  },
  answering: {
    noiseLevel: 0.62,
    energyDensity: 1.65,
    petalCount: 5,
    petalStrength: 0.58,
    bloomRings: 1.9,
    fractalIters: 5,
    fractalScale: 0.97,
    fractalDecay: -16.5,
    smoothness: 0.028,
    asymmetry: 0.22,
    internalAnim: 0.44,
    animSpeed: 0.48,
    autoRotateSpeed: 0.4,
  },
};

export const VOICE_STATE_LABELS: Record<VoiceState, string> = {
  idle: 'Idle',
  listening: 'Listening',
  thinking: 'Thinking',
  answering: 'Answering',
};
