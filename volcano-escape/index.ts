import { create, renderScene } from "@hiber3d/hdk-core";
import { RandomSeed } from "@hiber3d/hdk-utils";

const world = create({ y: -1 });

const pipeRadius = 13;

/**
 * Change the seed to get a different random sequence
 */
const random = new RandomSeed(1234);

create("plane_01", {
  y: -1,
  material: "t_lava_01",
  dealDamageOnTouch: {},
}).addTo(world);

// Adds a rising wave of lava
const addLavaWave = (startAt: number) =>
  create()
    .add(
      create("disc_02", {
        y: -1,
        scaleX: 8,
        scaleZ: 8,
        material: "t_lava_01",
        dealDamageOnTouch: {},
      })
    )
    .animate(
      { y: [0, 56] },
      { duration: 35, loop: "RESTART", easing: "EASE_IN_CUBIC", startAt }
    )
    .addMany(10, (index, total) =>
      create("rock_03_t3", {
        x: random.value(0, 20) - 10,
        z: random.value(0, 20) - 10,
        scale: 0.3,
        material: "t_lava_01",
        colliderIsDisabled: {},
      }).animate(
        { y: [-2, 10] },
        {
          duration: random.value(1, 4),
          easing: "EASE_OUT_QUAD",
        }
      )
    )
    .addTo(world);

addLavaWave(0);
addLavaWave(0.33);
addLavaWave(0.66);

// Volcano
create()
  .addMany(20, (index, total) =>
    create({ y: index * 3 }).addMany(20, (index, total) =>
      create({ rotY: (360 / total) * index, y: 2 }).add(
        create("rock_03_t3", {
          material: "t_rock_02",
          x: pipeRadius,
          scale: 2,
        })
      )
    )
  )
  .animate({ x: [0, 0.2], z: [0, 0.2] }, { duration: 0.01, easing: "LINEAR" })
  .addTo(world);

// Spawn point
create("cylinder_01", { y: 5, material: "t_rock_01" })
  .addTo(world)
  .add(create("gpl_spawn_point_01", { y: 2 }));

// Obstacles
create()
  .addMany(30, (index, total) =>
    create({ y: 4 + index * 2, rotY: index * 40 }).add(
      create("rock_01_t1", { material: "t_rock_01", x: pipeRadius - 4 })
    )
  )
  .addTo(world);

// Goal
create("goal_01", { y: 63, x: -10, z: -7 }).addTo(world);

renderScene({ root: world, environment: "cloud_mountains_01" });
