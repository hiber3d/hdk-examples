/**
 * This example explains how to use signals to trigger events by
 * looking at objects or being in their vincinity.
 *
 * Refer to Example 1 for information about basic code structure.
 */

import { renderScene, create } from "@hiber3d/hdk-core";

const root = create("grass_plane_01");

/**
 * The sphere will have a signalSource, that emits a signal when looked at, or when the player is close.
 */
create("sphere_01", {
  y: 3,
  x: -3,
  z: 5,
  signalSource: {
    id: "sphere1",
    lookAtSensor: true,
    playerProximitySensor: { maxDistance: 5 },
  },
}).addTo(root);

/**
 * ... and the same for the cube.
 */
create("cube_01", {
  y: 3,
  x: 3,
  z: 5,
  signalSource: {
    id: "sphere2",
    lookAtSensor: true,
    playerProximitySensor: { maxDistance: 5 },
  },
}).addTo(root);

/**
 * The wall segment will have a signalListener that has a target that is the OR of the two signals.
 *
 * Of course, you could wire it directly to the target if you only wanted to listen to a single object.
 *
 * This means the segment will disappear when either of the two objects is looked at.
 */
create("en_m_log_cabin_01_wall", {
  y: 6,
  z: 10,
  signalListener: {
    target: {
      type: "OR",
      input1: "sphere1",
      input2: "sphere2",
    },
    invisibleOnSignal: true,
  },
}).addTo(root);

/**
 * The rock cube will have a signalListener that has a target that is the AND of the two proximity signals.
 *
 * This means that you will have to position the avatar between the two objects to make the cube change material.
 */
create("rock_cube_01_t1", {
  y: 8,
  z: 5,
  scale: 1,
  signalListener: {
    target: {
      type: "AND",
      input1: "sphere1",
      input2: "sphere2",
    },
    materialOnSignal: {
      signalOffMaterial: "t_bark_01",
      signalOnMaterial: "t_bricks_01",
    },
  },
}).addTo(root);

renderScene({ root, environment: "midday_01" });
