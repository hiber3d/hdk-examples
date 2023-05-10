import { create, HNode, renderScene } from "@hiber3d/hdk-core";

const world = create({ y: -1 });

/**
 * Checkpoints and spawnpoints
 */

create("gpl_spawn_point_01", {
  material: "palette_01_cerulean",
  rotY: -80,
  y: 2,
  x: -10,
  z: 18,
}).addTo(world);

create("gpl_spawn_point_01", {
  material: "palette_01_cerulean",
  rotY: -80,
  y: 2,
  x: -10,
  z: 9,
}).addTo(world);

create("gpl_spawn_point_01", {
  material: "palette_01_cerulean",
  rotY: -80,
  y: 2,
  x: -10,
  z: 27,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 44,
  z: 18,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 44,
  z: 9,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 44,
  z: 27,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 96,
  z: 18,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 96,
  z: 9,
}).addTo(world);

create("checkpoint_01", {
  material: "palette_01_blue",
  rotY: -80,
  y: 2,
  x: 96,
  z: 27,
}).addTo(world);

create("goal_01", {
  material: "palette_01_green",
  rotY: -80,
  y: 2,
  x: 148,
  z: 18,
  scale: 2,
}).addTo(world);

/**
 * The blue floors between each level
 */

const floor = create({
  prefabId: "rounded_cube_01",
  material: "palette_01_cerulean",
  y: 0,
  x: -10,
  z: 18,
  scaleX: 8,
  scaleZ: 20,
}).addTo(world);

const firstFloor = create({
  prefabId: "rounded_cube_01",
  material: "palette_01_cerulean",
  y: 0,
  x: 44,
  z: 18,
  scaleX: 6,
  scaleZ: 20,
}).addTo(world);

const secondFloor = create({
  prefabId: "rounded_cube_01",
  material: "palette_01_cerulean",
  y: 0,
  x: 96,
  z: 18,
  scaleX: 6,
  scaleZ: 20,
}).addTo(world);

const thirdFloor = create({
  prefabId: "rounded_cube_01",
  material: "palette_01_cerulean",
  y: 0,
  x: 150,
  z: 18,
  scaleX: 8,
  scaleZ: 20,
}).addTo(world);

/**
 * The maps are used to draw the path, 0 means it's a solid block
 */

const map1 = [
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
];

const map2 = [
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

const map3 = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
];

/**
 * The grid of blocks
 */

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    /**
     * Set colliders on blocks that are 0 in the map
     */
    let collider: HNode["collider"] = undefined;
    if (map1[i][j] == 0) {
      collider = {
        collider: {
          form: "mesh",
          meshId: "en_b_rounded_cube_03",
        },
      } as HNode["collider"];
    }

    /**
     * Create the blocks
     */
    create({
      rendering: {
        meshID: "en_b_rounded_cube_03",
      },
      collider,
      x: 0 + i * 4,
      y: 0,
      z: j * 4,
      scaleX: 2,
      scaleZ: 2,
      signalSource: {
        id: "block1" + i + "j" + j,
        playerProximitySensor: { minDistance: 0, maxDistance: 1.9 },
      },
      signalListener: {
        target: "block1" + i + "j" + j,
        materialOnSignal: {
          signalOnMaterial: "palette_01_green",
          signalOffMaterial: "palette_01_orange",
        },
        invisibleOnSignal: map1[i][j] == 1,
      },
    }).addTo(world);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let collider: HNode["collider"] = undefined;

    if (map2[i][j] == 0) {
      collider = {
        collider: {
          form: "mesh",
          meshId: "en_b_rounded_cube_03",
        },
      } as HNode["collider"];
    }

    create({
      rendering: {
        meshID: "en_b_rounded_cube_03",
      },
      collider,
      x: 52 + i * 4,
      y: 0,
      z: j * 4,
      scaleX: 2,
      scaleZ: 2,
      signalSource: {
        id: "block2" + i + "j" + j,
        playerProximitySensor: { minDistance: 0, maxDistance: 1.9 },
      },
      signalListener: {
        target: "block2" + i + "j" + j,
        materialOnSignal: {
          signalOnMaterial: "palette_01_green",
          signalOffMaterial: "palette_01_pink",
        },
        invisibleOnSignal: map2[i][j] == 1,
      },
    }).addTo(world);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let collider: HNode["collider"] = undefined;

    if (map3[i][j] == 0) {
      collider = {
        collider: {
          form: "mesh",
          meshId: "en_b_rounded_cube_03",
        },
      } as HNode["collider"];
    }

    create({
      rendering: {
        meshID: "en_b_rounded_cube_03",
      },
      collider,
      x: 104 + i * 4,
      y: 0,
      z: j * 4,
      scaleX: 2,
      scaleZ: 2,
      signalSource: {
        id: "block3" + i + "j" + j,
        playerProximitySensor: { minDistance: 0, maxDistance: 1.9 },
      },
      signalListener: {
        target: "block3" + i + "j" + j,
        materialOnSignal: {
          signalOnMaterial: "palette_01_green",
          signalOffMaterial: "palette_01_turqoise",
        },
        invisibleOnSignal: map3[i][j] == 1,
      },
    }).addTo(world);
  }
}

/**
 * Invisible proximity sensor that makes the wall invisible
 */

const wall1Trigger = create({
  x: 37,
  y: 2,
  z: 8,
  rotY: -90,
  scale: 1,
  signalSource: {
    id: "wall1",
    playerProximitySensor: { minDistance: 0, maxDistance: 2 },
  },
}).addTo(world);

/**
 * The wall for the first level
 */

const wall1 = create({
  x: 38,
  y: 12,
  z: 39.5,
  rotX: -90,
  rotZ: 90,
  scaleX: 10,
  scaleY: 20,
  scaleZ: 2,
  prefabId: "iron_cage_01_door",
  material: "palette_01_orange",
  signalListener: {
    target: "wall1",
    invisibleOnSignal: {},
  },
}).addTo(world);

const wall2Trigger = create({
  x: 89,
  y: 2,
  z: 28,
  rotY: -90,
  scale: 1,
  signalSource: {
    id: "wall2",
    playerProximitySensor: { minDistance: 0, maxDistance: 2 },
  },
}).addTo(world);

const wall2 = create({
  x: 90,
  y: 12,
  z: 39.5,
  rotX: -90,
  rotZ: 90,
  scaleX: 10,
  scaleY: 20,
  scaleZ: 2,
  prefabId: "iron_cage_01_door",
  material: "palette_01_pink",
  signalListener: {
    target: "wall2",
    invisibleOnSignal: {},
  },
}).addTo(world);

const wall3Trigger = create({
  x: 141,
  y: 2,
  z: 16,
  rotY: -90,
  scale: 1,
  signalSource: {
    id: "wall3",
    playerProximitySensor: { minDistance: 0, maxDistance: 2 },
  },
}).addTo(world);

const wall3 = create({
  x: 142,
  y: 12,
  z: 39.5,
  rotX: -90,
  rotZ: 90,
  scaleX: 10,
  scaleY: 20,
  scaleZ: 2,
  prefabId: "iron_cage_01_door",
  material: "palette_01_turqoise",
  signalListener: {
    target: "wall3",
    invisibleOnSignal: {},
  },
}).addTo(world);

/**
 * Render the scene
 */
renderScene(
  { root: world, environment: "cloud_mountains_01" },
  { saveToFile: true }
);
