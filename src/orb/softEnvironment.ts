import * as THREE from 'three';

/** Light-only scene — no room geometry, avoids square cubemap artifacts */
export function createSoftEnvScene(): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0908);

  scene.add(new THREE.AmbientLight(0xffeedd, 1.8));

  const warmColors = [0xfff8f0, 0xffefe4, 0xfff5f0, 0xffeed8];
  const directions: [number, number, number][] = [
    [1, 0.3, 0.2],
    [-0.9, 0.4, -0.3],
    [0.2, 1, -0.3],
    [-0.3, -0.8, 0.5],
    [0.6, -0.2, 1],
    [-0.5, 0.3, -1],
    [0.8, 0.6, 0.5],
    [-0.7, -0.5, 0.7],
  ];

  for (let i = 0; i < directions.length; i++) {
    const [x, y, z] = directions[i];
    const len = Math.hypot(x, y, z);
    const light = new THREE.PointLight(warmColors[i % warmColors.length], 3.5, 0, 2);
    light.position.set((x / len) * 30, (y / len) * 30, (z / len) * 30);
    scene.add(light);
  }

  return scene;
}

export function bakeSoftEnvCube(
  renderer: THREE.WebGLRenderer
): { texture: THREE.Texture; target: THREE.WebGLCubeRenderTarget } {
  const target = new THREE.WebGLCubeRenderTarget(256, {
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });
  target.texture.mapping = THREE.CubeReflectionMapping;

  const cubeCamera = new THREE.CubeCamera(0.1, 100, target);
  cubeCamera.update(renderer, createSoftEnvScene());

  return { texture: target.texture, target };
}

export function bakeSoftEnvPMREM(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const texture = pmrem.fromScene(createSoftEnvScene(), 0.22).texture;
  pmrem.dispose();
  return texture;
}
