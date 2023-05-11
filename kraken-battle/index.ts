/**
 * This example shows you how to create a simple Scene, with a simple animation,
 * and render it to a HTML element
 */

/**
 * The first thing to do is always to 'import' the things we will be using from hdk
 */
import { renderScene, Scene, create } from "@hiber3d/hdk-core";
import { portal } from "@hiber3d/hdk-utils";
import { createBoats } from "./src/createBoats";
import {
  createLogicGate,
  createLogicGateOnComplete,
  createMonster,
} from "./src/createMonster";
import { createTentacle } from "./src/createTentacle";
import { createVortex } from "./src/createVortex";
import { createWinPlatform } from "./src/createWinPlatform";

const world = create({
  y: -5,
})
  .add({
    audio: {
      id: "a_fx_blizzard_01",
      startPlayingDist: 1000000000,
      volume: 0.2,
      looping: true,
    },
  })
  .add({
    audio: {
      id: "a_am_dark_heaven_01",
      startPlayingDist: 1000000000,
      volume: 0.4,
      looping: true,
    },
  })
  .add({
    audio: {
      id: "a_fx_waterfall_01",
      startPlayingDist: 1000000000,
      volume: 0.4,
      looping: true,
    },
  });

createVortex(10).addTo(world);
createBoats(5).addTo(world);
createLogicGate().addTo(world);
createLogicGateOnComplete().addTo(world);
createMonster().addTo(world);

createWinPlatform().addTo(world);

// Create tentacles
create({ y: -15, x: 32, rotX: -20, rotZ: -20 })
  .add(createTentacle(0))
  .addTo(world);
create({ y: -15, x: -32, rotX: 20, rotZ: 20 })
  .add(createTentacle(1.3))
  .addTo(world);
create({ y: -30, x: 0, z: 90, rotX: -5, rotZ: 20 })
  .add(createTentacle(0.5))
  .addTo(world);
create({ y: -30, x: 80, z: 70, rotX: -5, rotZ: 20 })
  .add(createTentacle(2.7))
  .addTo(world);
create({ y: -15, x: 64, rotX: -20, rotZ: -20 })
  .add(createTentacle(5.7))
  .addTo(world);
create({ y: -15, x: -62, rotX: 20, rotZ: 20 })
  .add(createTentacle(4))
  .addTo(world);
create({ y: -30, x: 0, z: -90, rotX: -5, rotZ: 20 })
  .add(createTentacle(3.2))
  .addTo(world);
create({ y: -30, x: -60, z: 70, rotX: -20, rotZ: -20 })
  .add(createTentacle(8))
  .addTo(world);

renderScene({ root: world, environment: "aurora_01" });
