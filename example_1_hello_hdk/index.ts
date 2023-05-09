/**
 * This example shows how to create a simple Scene, with a simple animation,
 * and render it to a HTML element
 */

/**
 * The first thing to do is always to 'import' the things we will be using from hdk
 */
import { renderScene, create } from "@hiber3d/hdk-core";

/**
 * A world is created from a 'root' object, which usually is a ground plane.
 *
 * Use the y prop to move the world one step down
 * so that the player is spawned above the ground
 *
 * It is always a good idea to then add a spawn point, so we always start in a defined position
 * an facing a known direction.
 */
const root = create("grass_plane_01", { y: -1 }).add(
  create("gpl_spawn_point_01", { y: 1, rotY: 270 })
);

/**
 * In this world we will add a desk, a chair and a cozy lantern, using pos, rot and scale.
 */
root.add(create("desk_01", { x: 10, y: 2, z: 3.5, rotY: 260 }));
root.add(create("chair_01", { x: 9, y: 2, z: 3, rotY: 80 }).addTo(root));
root.add(
  create("en_p_lantern_02", {
    x: 9.9,
    y: 2.9,
    z: 2.5,
    rotY: 80,
    scale: 0.5,
  })
);

/**
 * ... a bookshelf...
 */
root.add(create("en_p_bookshelf", { x: 15, y: 2, z: 4, rotY: 260 }));

/**
 * ... and put two animated SegmentedStacks of books in it.
 */
root.add(
  create("books_01").animate(
    {
      x: [14.5, 10],
      y: [4.4, 2.8],
      rotY: [90, 0],
      z: [4, 4],
    },
    { duration: 2 }
  )
);

root.add(
  create("books_01").animate(
    {
      x: [14.5, 10],
      y: [4.4, 2.8],
      z: [4.2, 3.5],
      rotY: [0, 181],
    },
    { duration: 2 }
  )
);

/**
 * Last step is to take the root, with all the objects, and render it to the browser.
 *
 * Here we set the environment to `midday_01`, but you can change the environment by
 * changing the string to something else
 *
 * When rendering, the default option 'saveToFile: true' means we will save a scene.json
 * which can be used to upload the world later.
 */
renderScene({
  root,
  environment: "midday_01",
});
