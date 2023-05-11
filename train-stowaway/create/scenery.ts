import { Material, create, Prefab } from "@hiber3d/hdk-core";

// Can't use this type: HNodeWithMethods$1;
const CLIFF_Z_SPAN = { min: 80, max: 0 };
const Z_SPAN = { min: 4, max: 100 };
const X_SPAN = { min: 0, max: 60 };
const ROCK_PREFAB: Prefab[] = ["rock_01_t2", "rock_03_t3", "rock_pile_01_t2"];
const ROCK_MATERIAL: Material = "t_rock_02";
const CLIFF_PREFAB: Prefab[] = ["cliff_02_01", "cliff_02_02", "cliff_02_03"];

export const createScenery = (options: {
  cactiIntensity?: number;
  rockIntensity?: number;
  cliffIntensity?: number;
  numberOfPlanes: number;
}) => {
  const cacti: any[] = [];
  const rocks: any[] = [];
  const cliffs: any[] = [];

  const numberOfCacti = options?.cactiIntensity
    ? 13 * options.cactiIntensity
    : 0;
  const numberOfRockes = options?.rockIntensity ? 9 * options.rockIntensity : 0;
  const numberOfCliffs = options?.cliffIntensity
    ? 2 * options.cliffIntensity
    : 0;

  // Create the random Cacti
  for (let i = 0; i < numberOfCacti; i++) {
    cacti.push({
      prefabId: "cactus_01",
      y: 1.8,
      z: Z_SPAN.min + Math.random() * (Z_SPAN.max - Z_SPAN.min),
      x: X_SPAN.min + Math.random() * (X_SPAN.max - X_SPAN.min),
      rotY: Math.random() * 360,
      scaleY: 1 + (Math.random() - 0.5) * 0.8,
    });
  }

  // Create all the random rocks
  for (let i = 0; i < numberOfRockes; i++) {
    rocks.push({
      prefabId: ROCK_PREFAB[Math.floor(Math.random() * ROCK_PREFAB.length)],
      y: 1.8,
      z: Z_SPAN.min + Math.random() * (Z_SPAN.max - Z_SPAN.min),
      x: X_SPAN.min + Math.random() * (X_SPAN.max - X_SPAN.min),
      rotY: Math.random() * 360,
      scale: 0.5 + (Math.random() - 0.5) * 0.4,
      material: ROCK_MATERIAL,
    });
  }

  // Create random Cliffs
  for (let i = 0; i < numberOfCliffs; i++) {
    const z =
      CLIFF_Z_SPAN.min + Math.random() * (CLIFF_Z_SPAN.max - CLIFF_Z_SPAN.min);

    cliffs.push({
      prefabId: CLIFF_PREFAB[Math.floor(Math.random() * CLIFF_PREFAB.length)],
      y: 1.8,
      z,
      x: X_SPAN.min + Math.random() * (X_SPAN.max - X_SPAN.min),
      rotY: Math.random() * 360,
      scaleY: 3 + (Math.random() - 0.5) * 3,
      scaleX: 3 + (Math.random() - 0.5) * 2,
      scaleZ: 3 + (Math.random() - 0.5) * 2,
      material: ROCK_MATERIAL,
    });
  }

  const fields = create()
    .addMany(options.numberOfPlanes, (index) =>
      create({ x: -120 + index * 60 })
        .addMany(numberOfCacti, (index) => create(cacti[index]))
        .addMany(numberOfRockes, (index) => create(rocks[index]))
        .addMany(numberOfCliffs, (index) =>
          create({ ...cliffs[index], z: 120 - cliffs[index].z })
        )
    )
    .addMany(options.numberOfPlanes, (index) =>
      create({ x: -120 + index * 60, z: -Z_SPAN.max - Z_SPAN.min })
        .addMany(numberOfCacti, (index) => create(cacti[index]))
        .addMany(numberOfRockes, (index) => create(rocks[index]))
        .addMany(numberOfCliffs, (index) => create(cliffs[index]))
    );

  return fields;
};
