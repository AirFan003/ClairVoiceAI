import type { ClairOrb } from './ClairOrb';

function bindSlider(
  id: string,
  valueId: string,
  onChange: (value: number) => void,
  format: (value: number) => string
): void {
  const slider = document.getElementById(id) as HTMLInputElement | null;
  const label = document.getElementById(valueId);
  if (!slider || !label) return;

  const update = () => {
    const value = Number(slider.value);
    onChange(value);
    label.textContent = format(value);
  };

  slider.addEventListener('input', update);
  update();
}

export function createOrbControls(orb: ClairOrb): void {
  bindSlider(
    'noise-level',
    'noise-level-value',
    (v) => orb.setNoiseLevel(v),
    (v) => `${Math.round(v * 100)}%`
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
}
