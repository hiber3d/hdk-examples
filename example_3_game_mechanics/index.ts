/**
 * This example file shows gameplay mechanics by placing some objects into a simple world.
 *
 * See Example 1 for information about basic code structure.
 */

import { create, renderScene } from "@hiber3d/hdk-core";

/**
 * As always, we start by creating a root object, which is usually a ground plane.
 *
 * This time we make sure to specify a sand material.
 */
const root = create("grass_plane_01", {
  material: "t_sand_01",
  p: [0, 0, 0],
  s: 0.5,
});

root.add(
  create("cliff_02_01", {
    p: [-15, 1, 17],
    s: [2, 2, 4],
    r: [-6, 90, -3],
  })
);

root.add(
  create("jungle_tree_large", {
    p: [20, -10, 15],
    s: [1.9, 1.5, 1.7],
    r: [0, 90, 0],
  })
);

/**
 * Here we create a simple bridge, using the addMany method to create a series of footsteps.
 *
 * See Example 5 for more examples on how to use addMany, rotation and  animation.
 */
const bridge2 = create({ p: [-62, 23.5, -17.5], r: [-10, 65, -12] }).addTo(
  root
);

/**
 * This function creates one single footstep, as a part of a sloping bridge.
 */
const footStep = (index) => {
  const radius = 4; // curvature radius
  const size = 0.5; // horizontal spacing between objects
  const itemsCount = Math.ceil(2 * radius * Math.PI) / size;

  const x = index; // height between objects
  const y = radius * -Math.sin((index * 2 * Math.PI) / itemsCount);
  const z = itemsCount;

  // The 'step' is actually just a container...
  const step = create({
    p: [x, y, z],
    r: [0, 0, (index / itemsCount) * 40 - 12],
  });

  // ... which contains the actual footstep and two railings.
  step.add(
    create("en_p_footbridge_01"),
    create("rope_railing_01", { p: [0, 0.3, 0.75] }),
    create("rope_railing_01", { p: [0, 0.3, -0.75] })
  );

  return step;
};

bridge2.addMany(30, footStep);

/**
 * See Example 5 for more examples on how to use addMany, rotation and  animation.
 */
const swingingBridge = create({ p: [-11, 22.5, -36], r: [0, 0, -13] }).addTo(
  root
);

swingingBridge.addMany(27, (index, total) => {
  const step = create(footStep(index));

  const arc = -Math.sin((index * 2 * Math.PI) / total);

  step.children.push(
    {
      keyframe: { timestamp: 0, easing: "LINEAR" },
      transform: { pos: [0, 0, -0.3 * arc] },
    },
    {
      keyframe: { timestamp: 0.4 + 1, easing: "EASE_OUT_BACK" },
      transform: { pos: [0, 0, 0.1 * arc] },
    }
  );

  step.keyframeAnimated = { loopBehaviour: "REVERSE" };

  return step;
});

/**
 * Please see Example 5 for details about how to create a winding staircase
 */
const staircase = create({
  p: [20.5, 2.5, 15.5],
  r: [0, -120, 0],
  s: [1, 1, 1.5],
}).addTo(root);

staircase.addMany(30, (index) => {
  const radius = 3.2; // curvature radius
  const size = 1.3; // horizontal spacing between objects
  const itemsCount = Math.ceil(2 * radius * Math.PI) / size;

  const x = radius * Math.cos((index * 2 * Math.PI) / itemsCount);
  const y = index * 0.5; // height between objects
  const z = radius * -Math.sin((index * 2 * Math.PI) / itemsCount);

  return create({
    p: [x, y, z],
    r: [0, (index / itemsCount) * 360 + 90, 0],
  }).add(
    create("en_p_footbridge_01"),
    create("rope_railing_01", { p: [0, 0.3, 0.7] })
  );
});

/**
 * Please see Examples 1 and 2 for more on Animation
 * */
root.add(
  create({
    keyframeAnimated: { loopBehaviour: "RESTART" },

    p: [-17, -2, 0],
    r: [0, 3, 3],
    s: 0.5,

    children: [
      {
        keyframe: { easing: "EASE_IN_CUBIC", timestamp: 0 },
        transform: { p: [-9, 48.5, 10.5], r: [0, 90, 0] },
      },
      {
        keyframe: { timestamp: 2 },
        transform: { p: [-12, -2, 0], r: [130, 90, 0] },
      },
    ],
  }).add(create("rock_01_t2"))
);

/**
 * Bulk add decorations...
 */
root.add(
  ...[
    create("en_p_torch_standing_01", { p: [18.4, 16, 16.7], s: [1.5, 2, 1.5] }),
    create("tree_house_03", {
      p: [-28, 23, 16.7],
      r: [0, 90, 0],
      s: [2, 2, 1.5],
    }),
    create("campfire_01", { p: [-19, 24, 9], r: [0, 0, 7], s: [2, 2, 1.5] }),
    create("en_p_footbridge_01", {
      p: [16.5, 17, 16],
      r: [0, 180, 0],
      s: [1.2, 1, 1.2],
    }),
    create("rope_railing_01", {
      p: [16.5, 17.4, 16.8],
      r: [0, 180, 0],
      s: [1.2, 1, 1.2],
    }),
    create("cactus_01", { p: [-2, 11, 4.5], s: [2, 3, 2], r: [0, 0, 0] }),
    create("cactus_01", { p: [-3, 11, 4], s: [2, 2, 2], r: [-10, 50, 15] }),
    create("cactus_01", { p: [-9, 16.2, 7], s: [4, 3, 4], r: [0, 90, 0] }),
    create("cliff_02_02", {
      p: [-2, -1.5, -21],
      s: [2, 3, 2],
      r: [15, 170, 0],
    }),
    create("jungle_tree_small", {
      p: [-4, 20, -23],
      s: [1.1, 1, 1.3],
      r: [15, 170, 0],
    }),
    create("cliff_02_03", { p: [18, 2, -16], s: [2, 1, 1], r: [0, 60, 0] }),
    create("cactus_01", { p: [21, 5, -16], s: [3, 4, 3], r: [0, 0, 0] }),
    create("log_platform", { p: [-23, 21, 7], s: [2, 1.3, 2], r: [0, 205, 0] }),
  ]
);

/**
 * ...game mechanics...
 */
root.add(
  ...[
    create("gpl_spawn_point_01", { p: [-1, 20.8, -27], r: [0, 180, 0] }),

    create("collectible_mandatory_key_01", { p: [10, 18, 16] }),
    create("collectible_mandatory_key_01", { p: [-8.7, 18, -9] }),
    create("goal_01", { p: [-20, 23.6, 16.5], s: [2, 2, 2] }),
  ]
);

/**
 * ... and render scene.
 */
renderScene({
  root,
  environment: "midday_01",
});
