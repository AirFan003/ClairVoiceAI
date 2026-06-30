import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/** Soft Clair palette — tuned for a warm, feminine glass bubble */
const BUBBLE = {
  background: 0xf5f0f2,
  tint: 0xffe8f0,
  attenuation: 0xffb3c6,
  rim: 0xf472b6,
  radius: 2,
};

export class ClairOrb {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private orb: THREE.Mesh;
  private clock = new THREE.Clock();

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

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    // Environment reflections give the bubble its glassy specular highlights
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = false;
    this.controls.minDistance = 3.5;
    this.controls.maxDistance = 12;

    this.setupLights();
    this.orb = this.createBubble();
    this.scene.add(this.orb);

    window.addEventListener('resize', this.onResize);
  }

  private setupLights(): void {
    const ambient = new THREE.AmbientLight(0xfff5f8, 0.65);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(2, 4, 5);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0xffd6e8, 0.55);
    fill.position.set(-4, 1, 2);
    this.scene.add(fill);

    const rim = new THREE.PointLight(BUBBLE.rim, 0.6, 20);
    rim.position.set(-3, 2, -2);
    this.scene.add(rim);
  }

  private createBubble(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(BUBBLE.radius, 128, 128);

    const material = new THREE.MeshPhysicalMaterial({
      color: BUBBLE.tint,
      metalness: 0,
      roughness: 0.04,
      transmission: 1,
      thickness: 0.75,
      ior: 1.33,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      attenuationColor: new THREE.Color(BUBBLE.attenuation),
      attenuationDistance: 0.55,
      transparent: true,
      side: THREE.FrontSide,
      envMapIntensity: 1.2,
    });

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  start(): void {
    this.animate();
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }

  private onResize = (): void => {
    const { innerWidth, innerHeight } = window;
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  };

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const t = this.clock.getElapsedTime();
    this.orb.rotation.y = t * 0.08;
    this.orb.rotation.x = Math.sin(t * 0.15) * 0.06;

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}
