import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { bakeSoftEnvCube, bakeSoftEnvPMREM } from './softEnvironment';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import {
  bubbleVertexShader,
  buildBubbleFragmentShader,
} from './bubbleShaders';
import { internalEnergyGLSL } from './internalEnergy.glsl';
import {
  VOICE_STATE_PRESETS,
  type OrbStateConfig,
  type VoiceState,
} from './voiceStates';

const BUBBLE = { background: 0x000000, radius: 2 };

const APPEARANCE = {
  primary: '#ffc4b0',
  secondary: '#fff5ee',
  shellTint: '#edd5c8',
  shellIridescence: '#e8c4d8',
  shellIridescenceStrength: 0.55,
  rim: '#fff8f4',
};

const STATE_KEYS = [
  'noiseLevel',
  'energyDensity',
  'petalCount',
  'petalStrength',
  'bloomRings',
  'fractalIters',
  'fractalScale',
  'fractalDecay',
  'smoothness',
  'asymmetry',
  'internalAnim',
  'animSpeed',
  'autoRotateSpeed',
] as const satisfies readonly (keyof OrbStateConfig)[];

function cloneState(config: OrbStateConfig): OrbStateConfig {
  return { ...config };
}

export class ClairOrb {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private controls: OrbitControls;
  private orb: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private envMap!: THREE.Texture;
  private localCam = new THREE.Vector3();
  private clock = new THREE.Clock();

  private currentState = cloneState(VOICE_STATE_PRESETS.idle);
  private targetState = cloneState(VOICE_STATE_PRESETS.idle);
  private selectedPreset: VoiceState | null = 'idle';
  private animSpeed = VOICE_STATE_PRESETS.idle.animSpeed;
  private readonly transitionRate = 2.8;

  refractionRatio = 0.985;
  reflectivity = 0.55;
  thickness = 1.5;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(BUBBLE.background);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 6);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    const baked = bakeSoftEnvCube(this.renderer);
    this.envMap = baked.texture;
    this.cubeRenderTarget = baked.target;
    this.scene.environment = bakeSoftEnvPMREM(this.renderer);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = false;
    this.controls.minDistance = 3.5;
    this.controls.maxDistance = 12;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.currentState.autoRotateSpeed;

    this.material = new THREE.ShaderMaterial({
      vertexShader: bubbleVertexShader,
      fragmentShader: buildBubbleFragmentShader(internalEnergyGLSL),
      uniforms: {
        uTime: { value: 0 },
        uNoiseLevel: { value: this.currentState.noiseLevel },
        uRefractionRatio: { value: this.refractionRatio },
        uReflectivity: { value: this.reflectivity },
        uThickness: { value: this.thickness },
        uEnvMap: { value: this.envMap },
        uLocalCamPos: { value: new THREE.Vector3() },
        uPrimaryColor: { value: new THREE.Color(APPEARANCE.primary) },
        uSecondaryColor: { value: new THREE.Color(APPEARANCE.secondary) },
        uShellTint: { value: new THREE.Color(APPEARANCE.shellTint) },
        uShellIridescence: { value: new THREE.Color(APPEARANCE.shellIridescence) },
        uShellIridescenceStrength: { value: APPEARANCE.shellIridescenceStrength },
        uRimColor: { value: new THREE.Color(APPEARANCE.rim) },
        uEnergyDensity: { value: this.currentState.energyDensity },
        uFractalIters: { value: this.currentState.fractalIters },
        uFractalScale: { value: this.currentState.fractalScale },
        uFractalDecay: { value: this.currentState.fractalDecay },
        uInternalAnim: { value: this.currentState.internalAnim },
        uSmoothness: { value: this.currentState.smoothness },
        uAsymmetry: { value: this.currentState.asymmetry },
        uPetalCount: { value: this.currentState.petalCount },
        uPetalStrength: { value: this.currentState.petalStrength },
        uBloomRings: { value: this.currentState.bloomRings },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
    });

    this.orb = new THREE.Mesh(
      new THREE.SphereGeometry(BUBBLE.radius, 128, 128),
      this.material
    );
    this.scene.add(this.orb);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.4,
        0.45,
        0.72
      )
    );

    window.addEventListener('resize', this.onResize);
  }

  private cubeRenderTarget!: THREE.WebGLCubeRenderTarget;

  getActiveVoiceState(): VoiceState | null {
    return this.selectedPreset;
  }

  getStateSnapshot(): OrbStateConfig {
    return cloneState(this.currentState);
  }

  getTargetStateSnapshot(): OrbStateConfig {
    return cloneState(this.targetState);
  }

  setVoiceState(state: VoiceState): void {
    this.selectedPreset = state;
    this.targetState = cloneState(VOICE_STATE_PRESETS[state]);
  }

  clearVoiceStateSelection(): void {
    this.selectedPreset = null;
    this.targetState = cloneState(this.currentState);
  }

  private applyStateConfig(config: OrbStateConfig): void {
    this.material.uniforms.uNoiseLevel.value = config.noiseLevel;
    this.material.uniforms.uEnergyDensity.value = config.energyDensity;
    this.material.uniforms.uFractalIters.value = config.fractalIters;
    this.material.uniforms.uFractalScale.value = config.fractalScale;
    this.material.uniforms.uFractalDecay.value = config.fractalDecay;
    this.material.uniforms.uInternalAnim.value = config.internalAnim;
    this.material.uniforms.uSmoothness.value = config.smoothness;
    this.material.uniforms.uAsymmetry.value = config.asymmetry;
    this.material.uniforms.uPetalCount.value = config.petalCount;
    this.material.uniforms.uPetalStrength.value = config.petalStrength;
    this.material.uniforms.uBloomRings.value = config.bloomRings;
    this.controls.autoRotateSpeed = config.autoRotateSpeed;
    this.animSpeed = config.animSpeed;
  }

  private lerpState(dt: number): void {
    const t = 1 - Math.exp(-this.transitionRate * dt);

    for (const key of STATE_KEYS) {
      this.currentState[key] = THREE.MathUtils.lerp(
        this.currentState[key],
        this.targetState[key],
        t
      );
    }

    this.applyStateConfig(this.currentState);
  }

  setNoiseLevel(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0, 1);
    this.currentState.noiseLevel = clamped;
    this.targetState.noiseLevel = clamped;
    this.material.uniforms.uNoiseLevel.value = clamped;
  }

  setRefractionRatio(value: number): void {
    this.refractionRatio = THREE.MathUtils.clamp(value, 0.915, 1.0);
    this.material.uniforms.uRefractionRatio.value = this.refractionRatio;
  }

  setReflectivity(value: number): void {
    this.reflectivity = THREE.MathUtils.clamp(value, 0, 3);
    this.material.uniforms.uReflectivity.value = this.reflectivity;
  }

  setThickness(value: number): void {
    this.thickness = THREE.MathUtils.clamp(value, 0, 5);
    this.material.uniforms.uThickness.value = this.thickness;
  }

  setEnergyDensity(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0.1, 3);
    this.currentState.energyDensity = clamped;
    this.targetState.energyDensity = clamped;
    this.material.uniforms.uEnergyDensity.value = clamped;
  }

  setPrimaryColor(hex: string): void {
    this.material.uniforms.uPrimaryColor.value.set(hex);
  }

  setSecondaryColor(hex: string): void {
    this.material.uniforms.uSecondaryColor.value.set(hex);
  }

  setShellTint(hex: string): void {
    this.material.uniforms.uShellTint.value.set(hex);
  }

  setShellIridescence(hex: string): void {
    this.material.uniforms.uShellIridescence.value.set(hex);
  }

  setShellIridescenceStrength(value: number): void {
    this.material.uniforms.uShellIridescenceStrength.value =
      THREE.MathUtils.clamp(value, 0, 1);
  }

  setRimColor(hex: string): void {
    this.material.uniforms.uRimColor.value.set(hex);
  }

  setPetalCount(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 2, 12);
    this.currentState.petalCount = clamped;
    this.targetState.petalCount = clamped;
    this.material.uniforms.uPetalCount.value = clamped;
  }

  setPetalStrength(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0, 1);
    this.currentState.petalStrength = clamped;
    this.targetState.petalStrength = clamped;
    this.material.uniforms.uPetalStrength.value = clamped;
  }

  setBloomRings(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0, 4);
    this.currentState.bloomRings = clamped;
    this.targetState.bloomRings = clamped;
    this.material.uniforms.uBloomRings.value = clamped;
  }

  setFractalIters(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 2, 8);
    this.currentState.fractalIters = clamped;
    this.targetState.fractalIters = clamped;
    this.material.uniforms.uFractalIters.value = clamped;
  }

  setFractalScale(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0.65, 1.0);
    this.currentState.fractalScale = clamped;
    this.targetState.fractalScale = clamped;
    this.material.uniforms.uFractalScale.value = clamped;
  }

  setFractalDecay(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, -28, -8);
    this.currentState.fractalDecay = clamped;
    this.targetState.fractalDecay = clamped;
    this.material.uniforms.uFractalDecay.value = clamped;
  }

  setSmoothness(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0, 0.1);
    this.currentState.smoothness = clamped;
    this.targetState.smoothness = clamped;
    this.material.uniforms.uSmoothness.value = clamped;
  }

  setAsymmetry(value: number): void {
    const clamped = THREE.MathUtils.clamp(value, 0, 0.8);
    this.currentState.asymmetry = clamped;
    this.targetState.asymmetry = clamped;
    this.material.uniforms.uAsymmetry.value = clamped;
  }

  start(): void {
    this.setVoiceState('idle');
    this.applyStateConfig(this.currentState);
    this.animate();
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize);
    this.cubeRenderTarget.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  private onResize = (): void => {
    const { innerWidth, innerHeight } = window;
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
    this.composer.setSize(innerWidth, innerHeight);
  };

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const dt = this.clock.getDelta();
    this.lerpState(dt);
    this.material.uniforms.uTime.value += dt * this.animSpeed;

    this.orb.updateMatrixWorld();
    this.localCam.copy(this.camera.position);
    this.orb.worldToLocal(this.localCam);
    this.material.uniforms.uLocalCamPos.value.copy(this.localCam);

    this.controls.update();
    this.composer.render();
  };
}
