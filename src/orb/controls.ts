import type { ClairOrb } from './ClairOrb';
import {
  VOICE_STATE_LABELS,
  VOICE_STATE_PRESETS,
  type OrbStateConfig,
  type VoiceState,
} from './voiceStates';

function bindColor(
  id: string,
  onChange: (hex: string) => void
): void {
  const input = document.getElementById(id) as HTMLInputElement | null;
  if (!input) return;

  const update = () => onChange(input.value);
  input.addEventListener('input', update);
  update();
}

function bindSlider(
  id: string,
  valueId: string,
  onChange: (value: number) => void,
  format: (value: number) => string,
  onManualChange?: () => void
): void {
  const slider = document.getElementById(id) as HTMLInputElement | null;
  const label = document.getElementById(valueId);
  if (!slider || !label) return;

  const update = () => {
    const value = Number(slider.value);
    onChange(value);
    label.textContent = format(value);
    onManualChange?.();
  };

  slider.addEventListener('input', update);
  update();
}

function setSlider(id: string, valueId: string, value: number, format: (v: number) => string): void {
  const slider = document.getElementById(id) as HTMLInputElement | null;
  const label = document.getElementById(valueId);
  if (!slider || !label) return;
  slider.value = String(value);
  label.textContent = format(value);
}

function syncSlidersFromState(config: OrbStateConfig): void {
  setSlider('noise-level', 'noise-level-value', config.noiseLevel, (v) => `${Math.round(v * 100)}%`);
  setSlider('wave-density', 'wave-density-value', config.energyDensity, (v) => v.toFixed(1));
  setSlider('petal-count', 'petal-count-value', config.petalCount, (v) => v.toFixed(0));
  setSlider('petal-strength', 'petal-strength-value', config.petalStrength, (v) => `${Math.round(v * 100)}%`);
  setSlider('bloom-rings', 'bloom-rings-value', config.bloomRings, (v) => v.toFixed(1));
  setSlider('fractal-iters', 'fractal-iters-value', config.fractalIters, (v) => v.toFixed(0));
  setSlider('fractal-scale', 'fractal-scale-value', config.fractalScale, (v) => v.toFixed(2));
  setSlider('fractal-decay', 'fractal-decay-value', config.fractalDecay, (v) => v.toFixed(1));
  setSlider('smoothness', 'smoothness-value', config.smoothness, (v) => v.toFixed(3));
  setSlider('asymmetry', 'asymmetry-value', config.asymmetry, (v) => v.toFixed(2));
}

function setActiveStateButton(state: VoiceState | null): void {
  document.querySelectorAll<HTMLButtonElement>('[data-voice-state]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.voiceState === state);
  });
}

function bindVoiceStates(orb: ClairOrb): void {
  const picker = document.getElementById('voice-state-picker');
  if (!picker) return;

  picker.querySelectorAll<HTMLButtonElement>('[data-voice-state]').forEach((button) => {
    button.addEventListener('click', () => {
      const state = button.dataset.voiceState as VoiceState;
      orb.setVoiceState(state);
      syncSlidersFromState(VOICE_STATE_PRESETS[state]);
      setActiveStateButton(state);
    });
  });

  syncSlidersFromState(VOICE_STATE_PRESETS.idle);
  setActiveStateButton('idle');
}

export function createOrbControls(orb: ClairOrb): void {
  const clearPresetSelection = () => {
    orb.clearVoiceStateSelection();
    setActiveStateButton(null);
  };

  bindVoiceStates(orb);

  bindSlider(
    'noise-level',
    'noise-level-value',
    (v) => orb.setNoiseLevel(v),
    (v) => `${Math.round(v * 100)}%`,
    clearPresetSelection
  );

  bindSlider(
    'wave-density',
    'wave-density-value',
    (v) => orb.setEnergyDensity(v),
    (v) => v.toFixed(1),
    clearPresetSelection
  );

  bindSlider(
    'refraction-ratio',
    'refraction-ratio-value',
    (v) => orb.setRefractionRatio(v),
    (v) => v.toFixed(3)
  );

  bindSlider(
    'reflectivity',
    'reflectivity-value',
    (v) => orb.setReflectivity(v),
    (v) => v.toFixed(2)
  );

  bindSlider(
    'thickness',
    'thickness-value',
    (v) => orb.setThickness(v),
    (v) => v.toFixed(1)
  );

  bindColor('wave-primary', (hex) => orb.setPrimaryColor(hex));
  bindColor('wave-secondary', (hex) => orb.setSecondaryColor(hex));
  bindColor('shell-tint', (hex) => orb.setShellTint(hex));
  bindColor('shell-iridescence', (hex) => orb.setShellIridescence(hex));
  bindColor('rim-color', (hex) => orb.setRimColor(hex));

  bindSlider(
    'iridescence-strength',
    'iridescence-strength-value',
    (v) => orb.setShellIridescenceStrength(v),
    (v) => `${Math.round(v * 100)}%`
  );

  bindSlider(
    'petal-count',
    'petal-count-value',
    (v) => orb.setPetalCount(v),
    (v) => v.toFixed(0),
    clearPresetSelection
  );

  bindSlider(
    'petal-strength',
    'petal-strength-value',
    (v) => orb.setPetalStrength(v),
    (v) => `${Math.round(v * 100)}%`,
    clearPresetSelection
  );

  bindSlider(
    'bloom-rings',
    'bloom-rings-value',
    (v) => orb.setBloomRings(v),
    (v) => v.toFixed(1),
    clearPresetSelection
  );

  bindSlider(
    'fractal-iters',
    'fractal-iters-value',
    (v) => orb.setFractalIters(v),
    (v) => v.toFixed(0),
    clearPresetSelection
  );

  bindSlider(
    'fractal-scale',
    'fractal-scale-value',
    (v) => orb.setFractalScale(v),
    (v) => v.toFixed(2),
    clearPresetSelection
  );

  bindSlider(
    'fractal-decay',
    'fractal-decay-value',
    (v) => orb.setFractalDecay(v),
    (v) => v.toFixed(1),
    clearPresetSelection
  );

  bindSlider(
    'smoothness',
    'smoothness-value',
    (v) => orb.setSmoothness(v),
    (v) => v.toFixed(3),
    clearPresetSelection
  );

  bindSlider(
    'asymmetry',
    'asymmetry-value',
    (v) => orb.setAsymmetry(v),
    (v) => v.toFixed(2),
    clearPresetSelection
  );
}

export { VOICE_STATE_LABELS, VOICE_STATE_PRESETS, type VoiceState };
