import { renderScene, create, basic_types } from "@hiber3d/hdk-core";
import { RandomSeed } from "@hiber3d/hdk-utils";

/**
 * Create a world
 *
 * Use the transform prop to move the world one step down
 * so that the player is spawned above the ground
 *
 * NOTE: Make sure to press R for 'respawn' first time you land in the world.
 */
const world = create({ y: -1 });

// 1293 ok seed
// 1337 is leet seed
const seed = new RandomSeed(1337);

/**
 * Add a spawn point with a custom material
 */
create("gpl_spawn_point_01", {
  material: "t_snow_01",
  y: 3,
  x: 0,
  z: 0,
}).addTo(world);

/**
 * Create something that looks kind of like a clould
 */
create("rock_01_t4", {
  scale: 0.3,
  scaleX: 3,
  scaleZ: 2,
  y: 2.5,
  x: 0,
  z: 0,
  material: "t_snow_01",
}).addTo(world);

create("rock_01_t4", {
  scale: 0.3,
  scaleX: 3,
  scaleZ: 2,
  y: 260,
  x: 0,
  z: 0,
  material: "t_snow_01",
}).addTo(world);

create("rock_01_t4", {
  scale: 0.3,
  scaleX: 3,
  scaleZ: 2,
  y: 130,
  x: 0,
  z: 0,
  material: "t_snow_01",
}).addTo(world);

/**
 * Add a goal and checkpoint with custom material
 */
create("goal_01", {
  y: 260.5,
  x: 0,
  z: 0,
  material: "t_snow_01",
}).addTo(world);

create("checkpoint_01", {
  y: 130.5,
  x: 0,
  z: 0,
  material: "t_snow_01",
}).addTo(world);

/**
 * Add one balloon that the player always will be able to jump on
 */
create("balloon_01", {
  material: "palette_01_red",
  scale: 3,
  x: 6,
  y: -5,
})
  //Add the bouncy properties
  .add(
    create({
      scale: 1.1,
      collider: {
        canGenerateEvent: true,
        collider: {
          form: basic_types.ColliderForm.mesh,
          meshId: "en_p_balloon_01",
        },
        collisionMask: basic_types.PhysicsFilter.Character,
      },
      colliderIsSensor: {},
      accelerationVolume: {
        dir: [0, 1, 0],
        maxSpeed: 25,
        acceleration: 6000,
      },
    })
  )
  .animate({ y: [-0.1, 0.1] }, { duration: 3 })
  .addTo(world);

/**
 * Add 98 other balloons randomly that the player always will be able to jump on
 */

create()
  .addMany(98, (index, total) =>
    create({ rotY: (360 / total) * index }).add(
      create("balloon_01", {
        material: "palette_01_red",
        scale: 3,
        x: seed.range(-25, 25),
        y: -20 + index * 3.3 + seed.range(-5, 5),
      })
        .animate(
          { y: [-0.1, 0.1] },
          { duration: 3, startAt: seed.range(0, 10) }
        )
        //Add the bouncy properties
        .add(
          create({
            scale: 1.1,
            collider: {
              canGenerateEvent: true,
              collider: {
                form: basic_types.ColliderForm.mesh,
                meshId: "en_p_balloon_01",
              },
              collisionMask: basic_types.PhysicsFilter.Character,
            },
            colliderIsSensor: {},
            accelerationVolume: {
              dir: [0, 1, 0],
              maxSpeed: 27,
              acceleration: 6000,
            },
          })
        )
    )
  )
  .addTo(world);

/**
 * Render the scene
 */
renderScene({ root: world, environment: "above_clouds_01" });

/**
 * Next steps: Go to
 */
