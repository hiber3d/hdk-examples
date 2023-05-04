/**
 * This example file will explain how relative rotation and positioning works,
 * and also gives some hints of different ways to use it.
 * Refer to Example 1 for information about basic code structure.
 */

import { renderScene, create, HNodeWithMethods } from "@hiber3d/hdk-core";
import {
  builder,
  inCircle,
  placeInCircle,
  PlaceInCircleOnEachProps,
} from "@hiber3d/hdk-utils";

/**
 * This is a simple helper function to add a subtle animation to a node,
 * which will be used in these examples to draw attention to single nodes.
 *
 * @param node The node to add the animation to
 */

function addSubtleAnimation(node: HNodeWithMethods) {
  node.animate({ y: [0, 0.3], z: [0, 0.2] });
  return node;
}

/**
 * As before, we start with defining a root object, and add a spawn point for good measure.
 */
const root = create("grass_plane_01").add(
  create("gpl_spawn_point_01", { p: [10, 1, -10], r: [0, 170, 0] })
);

/**
 * This section shows a simple examples of rotation by changing the 'rot' transpormation property.
 * Four ancient vases are put in a line in the air by placing them in X/Z space, and at a fixed Y height.
 * Positions and rotations are all relative to the parent object, which will be the root object,
 * i.e. the grass plane.
 *
 * We also add an infopanel to each urn to show which is which.
 */
root.addMany(4, (index, total) => {
  const progression = index / total;

  const r = [0, 0, 0];
  let header;

  if (index > 0) {
    const i = 3 - index;
    r[i] = 27;

    header = "Rotated around the " + ["X", "Y", "Z"][i] + " axis";
  } else {
    header = "Not rotated along any axix";
  }

  return builder("ancient_urn_01", {
    p: [26, 3, 7 + 10 * progression],
    r,
  }).setInfoPanel({
    header,
  });
});

/**
 * This section shows how to use 'addMany' to create 15 bridge railings to a
 * group, and space them out evenly by calculating their X position.
 * All parts will have the bridge as its parent, so all parts will be spaced
 * relative to the bridge object, and rotated together if the bridge object
 * rotate.
 *
 * The bridge will be put into the world at 45 degrees around the Y axis to
 * the parent, which in this context will be the grass plane.
 *
 * We will also add a subtle animation to the middle bridge segment to show that
 * it is controlled individually.
 */

root.add(
  create({ p: [10, 1.5, 27], r: [0, 45, 0] }).addMany(15, (index) => {
    const step = create({ p: [1.5 * index, 1, 0], r: [0, 0, 0] });

    if (index === 7) {
      addSubtleAnimation(step);
    }

    return step.add(
      create("en_p_footbridge_01"),
      create("rope_railing_01", { p: [0, 0, -0.8] }),
      create("rope_railing_01", { p: [0, 0, 0.8] })
    );
  })
);

/**
 * If you just want to place things in a circle, the simplest way is to use the 'inCircle' verb
 */
create("campfire_01", { p: [-5, 2, -5] })
  .addMany(5, inCircle("bench_01_t1", { rot: [0, 90, 0] }))
  .addTo(root);

/**
 * This section creates a form where every segment is the child of the one before,
 * which allows us to specify the rotation of each segment as relative to the one before.
 *
 * This is a simple and handy way of creating cyclic objects.
 *
 * The 'cubeSpiralBase' will animate its rotation relative to the world,
 * and 10 subsequents 'segments' will specify rotation relative to the one before.
 */

const braceletBase = create({
  p: [9, 2.5, 9],
}).animate({ rotY: [-60, 60] }, { loop: "REVERSE" });

let currentCubeSegment = braceletBase;

for (let i = 0; i < 10; i++) {
  const cube1 = create("en_p_footbridge_01", {
    p: [2, 1, 0],
    r: [4, -18, 30],
    s: 1,
  });

  currentCubeSegment.add(cube1);
  currentCubeSegment = cube1;
}

root.add(braceletBase);

/**
 * Sometimes, you want more control over the exact placement and rotation of an object.
 * In that case, you might choose to calculate each objects placement individually
 * instead of relying on a parent/child inherited rotation.
 *
 * This section creates a winding staircase by placing 15 steps relative to the base object
 * using the placeInCircle helper.
 * This will allow them to act individually without changing any other objects in the stair,
 * for example, by adding an animation to it.
 */

const createFootbridgeSegment = (props: PlaceInCircleOnEachProps) => {
  const x = props.pos[0];
  const y = props.pos[1] + props.index * 0.35;
  const z = props.pos[2];

  const step = create({
    r: props.rot,
    p: [x, y, z],
  }).add(
    create("en_p_footbridge_01", { r: [0, 90, 0] }),
    create("rope_railing_01", { p: [0.7, 0.2, 0], r: [0, 90, 0] })
  );

  if (props.index === 7) addSubtleAnimation(step);

  return step;
};

const steps = placeInCircle<HNodeWithMethods>({
  onEach: createFootbridgeSegment,
  numberOfItems: 15,
  radius: 5,
  degToRotate: 270,
});

const placeInCircleStaircaseBase = create({
  p: [-5, 2.1, 10],
  r: [0, 0, 0],
}).add(...steps);

root.add(placeInCircleStaircaseBase);

/**
 * This section recreate the same staircase, but with a parent/child relationship
 * between each step, taking advantage of relative positioning and rotation.
 *
 * This is simpler, but notice the difference when applying an animation to an
 * object in the middle -  all subsequent segments are moved together with the child.
 *
 * Contrast this to the example above.
 */

const relativeStaircaseBase = create({ p: [-14, 2.1, 17], r: [0, 0, 0] }).addTo(
  root
);

// Variable to keep track of the current stair step
let currentParentStep = relativeStaircaseBase;

for (let index = 0; index < 15; index++) {
  const step = create({
    p: [1.6, 0.3, 0],
    r: [0, -24, 0],
  });

  step.add(
    create("en_p_footbridge_01"),
    create("rope_railing_01", { p: [0, 0, 0.7] })
  );
  currentParentStep.children?.push(step);
  currentParentStep = step;

  // If this is the step in the middle, store the reference
  // so we can add an animation to it later.

  if (index === 7) {
    addSubtleAnimation(step!);
  }
}

/**
 * Please see Example 1 for details about setting up hot reloading, scene construction et c
 */
renderScene({
  root,
  environment: "midday_01",
});
