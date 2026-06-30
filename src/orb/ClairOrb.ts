import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { bakeSoftEnvCube, bakeSoftEnvPMREM } from './softEnvironment';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { bubbleFragmentShader, bubbleVertexShader } from './bubbleShaders';

const BUBBLE = { background: 0x000000, radius: 2 };

export class ClairOrb {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private controls: OrbitControls;
  private orb: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private envMap!: THREE.Texture;
  private clock = new THREE.Clock();

  noiseLevel = 1;
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
    this.controls.autoRotateSpeed = 0.45;

    this.material = new THREE.ShaderMaterial({
      vertexShader: bubbleVertexShader,
      fragmentShader: bubbleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uNoiseLevel: { value: this.noiseLevel },
        uRefractionRatio: { value: this.refractionRatio },
        uReflectivity: { value: this.reflectivity },
        uThickness: { value: this.thickness },
        uEnvMap: { value: this.envMap },
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
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.35,
      0.45,
      0.75
    );
    this.composer.addPass(bloom);

    window.addEventListener('resize', this.onResize);
  }

  private cubeRenderTarget!: THREE.WebGLCubeRenderTarget;

  setNoiseLevel(value: number): void {
    this.noiseLevel = THREE.MathUtils.clamp(value, 0, 1);
    this.material.uniforms.uNoiseLevel.value = this.noiseLevel;
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

  start(): void {
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
    this.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.controls.update();
    this.composer.render();
  };
}
