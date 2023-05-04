import { renderScene, Vec3, create, HNode } from "@hiber3d/hdk-core";

const world = create({ s: [1, 1, 1] });

function makeCube(
  x: number,
  y: number,
  z: number,
  material: HNode["material"]
) {
  const id = `cube-${x}-${y}-${z}`;
  const dirtCube = create("cube_01", {
    x,
    y,
    z,
    material,
    signalSource: { id, signalSwitch: true },
    signalListener: {
      invisibleOnSignal: true,
      target: id,
      playMusicOnSignal: {
        id: "a_fx_footstep_01",
        shouldLoop: false,
        attenuationModel: "LINEAR_DISTANCE",
        maxAttenuationDist: 10,
        minAttenuationDist: 2,
      },
      spawnPrefabOnSignal: { prefabID: "fx_smoke_puff_01" },
    },
  });
  const shouldPlaceGem = Math.random() < 0.1;
  if (shouldPlaceGem) {
    create({
      rendering: { meshID: "gpl_gem_01", materialID: "gem_01_blue" },
      s: 2,
      rotX: 20,
      rotY: 20,
      collectible: {
        type: "GEM",
        pointValue: 1,
        grabbingRadius: 1,
        collectFxId: "fx_collect_collectible_gem_01",
      },
    }).addTo(dirtCube);
  }

  return dirtCube;
}

function cubePillar(x: number, startY: number, z: number) {
  const grassMaterial = "t_grass_01";
  const earthMaterial = "t_dirt_02" as HNode["material"];
  return create().addMany(10, (y) =>
    makeCube(x, startY - y * 2, z, y === 0 ? grassMaterial : earthMaterial)
  );
}

const getLandscape = () => {
  const dim = 21;
  // Calculate y position based on cosine noise function
  const cosiNoise = (x: number, z: number) => {
    const size = 0.1;
    const amplitude = -4;
    const noise = Math.cos(x * size) * Math.cos(z * size) * amplitude;
    return noise;
  };
  const wrapper = create();
  const offset = (dim / 2) * 2;
  for (let indexZ = 0; indexZ < dim; indexZ++) {
    for (let indexX = 0; indexX < dim; indexX++) {
      const x = 2 * indexX - offset;
      const z = 2 * indexZ - offset;
      const y = Math.floor(cosiNoise(x, z)) * 2;
      const cube = cubePillar(x, y, z);
      wrapper.add(cube);
    }
  }
  return wrapper;
};

const landscape = getLandscape();
world.add(landscape);

const lava = create("plane_01", {
  material: "t_lava_01",
  dealDamageOnTouch: { amount: 1000 },
  y: -32,
  s: [15, 1, 15],
});
world.add(lava);

const goal = create("sphere_01", {
  material: "palette_02_green",
  triggerBox: { size: [2, 2, 2] },
  pointlight: {
    strength: 15,
    color: [0, 255, 0],
    radius: 18,
  },
  colliderIsSensor: {},
  goal: {},
  s: [0.99, 0.99, 0.99],
  y: -18,
  x: 17,
  z: 17,
});
world.add(goal);

const spawn = create("gpl_spawn_point_01", {
  y: 7,
  x: -20,
  z: 0,
  rotY: -90,
});
world.add(spawn);

renderScene({
  root: world,
  environment: "cloud_mountains_01",
});
