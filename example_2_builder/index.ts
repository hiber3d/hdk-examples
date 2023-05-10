/**
 * This example file shows how to use a 'builder' as an alternate way to specify objects.
 *
 * Builder is a part of the 'hdk-utils' library, where you can find many useful functions.
 *
 * See Example 1 for information about basic code structure.
 */

import { renderScene, create } from "@hiber3d/hdk-core";
import { builder, RandomSeed } from "@hiber3d/hdk-utils";

/**
 * This example file shows how to use a 'builder' as an alternate way to specify objects.
 *
 * The builder is a simple wrapper around the create function, which makes it easier to chain
 * speficifations of single properties.
 *
 * See also Example 1 for information about basic code structure.
 */

/**
 * If you want to add an amount of organic variety to your scene, you can use
 * the 'RandomSeed' random series generator. This is guaranteed to always give
 * the same sequence of numbers, and will reset to give the same sequence on hot reload.
 */
const randomY = new RandomSeed(6).value(-4, 4);

/**
 * Here we use 'builder' instead of create. The resulting objects are interchangeable,
 * so they can be used together. In this case we'll just use create to add a spawn point.
 */
const root = builder("grass_plane_01").add(
  create("gpl_spawn_point_01", { x: 1, y: 1, z: -3, rotY: 180 })
);

/**
 * See Example 6 for a more advanced use of the InfoPanel.
 */
builder("ancient_urn_01")
  .setTransform({ pos: [1, randomY + 3, 3] })
  .setName("my_urn")
  .setInfoPanel({
    header: "I'm a urn",
  })
  .animate({ scale: [1, 2] })
  .addTo(root);

renderScene({
  environment: "above_clouds_01",
  root,
});
