import { create } from "@hiber3d/hdk-core";

export const createLogicGateOnComplete = () =>
  create({
    signalSource: {
      id: "showOnComplete",
      logicGate: {
        type: "NOT",
        input1: "monster_killed",
        input2: "monster_killed",
      },
    },
  });

export const createLogicGate = () =>
  create({
    signalSource: {
      id: "monster_killed",
      logicGate: {
        type: "AND",
        input1: "cannon1",
        input2: {
          type: "AND",
          input1: "cannon2",
          input2: {
            type: "AND",
            input1: "cannon3",
            input2: {
              type: "AND",
              input1: "cannon4",
              input2: "cannon5",
            },
          },
        },
      },
    },
  });

export const createMonster = () =>
  create({ y: 2 })
    .add(
      create({ rotY: 180 })
        .add(
          create("vase_cactus_01", {
            dealDamageOnTouch: { amount: 1000 },
            scale: 130,
            y: -60,
            rotY: 90,
            material: "t_gore_01",
            signalListener: {
              target: "monster_killed",
              invisibleOnSignal: true,
            },
          })
        )
        .add(
          create("light_test", {
            material: "t_neon_red_01",
            scale: 10,
            scaleZ: 17,
            scaleX: 4,
            rotX: 10,
            y: 33,
            x: 26,
            z: -10,
            signalListener: {
              target: "monster_killed",
              invisibleOnSignal: true,
            },
          })
        )
        .add(
          create("light_test", {
            material: "t_neon_red_01",
            scale: 10,
            scaleZ: 17,
            scaleX: 4,
            rotX: -10,
            y: 33,
            x: 26,
            z: 10,
            signalListener: {
              target: "monster_killed",
              invisibleOnSignal: true,
            },
          })
        )
        .animate({ y: [-3, 3] }, { duration: 5 })
    )
    .animate(
      { rotY: [0, 180, 360] },
      { duration: 30, loop: "RESTART", easing: "LINEAR" }
    );
