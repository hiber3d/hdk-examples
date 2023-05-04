import { create } from "@hiber3d/hdk-core";
import { boat } from "./boat";

const createCannon = (id: string) =>
  create("en_p_jaguar_head_01_t1", {
    y: 4,
    x: 2,
    z: 12,
    rotY: 10,
    signalSource: {
      id,
      signalSwitch: true,
    },
    signalListener: {
      target: id,
      playMusicOnSignal: {
        id: "a_fx_checkpoint_recorded_01",
        shouldLoop: false,
        rollOffFactor: 1,
        volume: 1,
      },
    },
  }).add(
    create({
      signalListener: {
        target: id,
        playMusicOnSignal: {
          id: "a_fx_forcefield_01",
          rollOffFactor: 1,
          shouldLoop: true,
          volume: 1,
        },
      },
    }),
    create()
      .add(
        create("cylinder_01", {
          y: 0.6,
          material: "t_lava_01",
          rotX: 90,
          scaleY: 60,
          scaleX: 0.2,
          scaleZ: 0.2,
          signalListener: {
            target: {
              type: "NOT",
              input1: id,
              input2: id,
            },
            invisibleOnSignal: true,
          },
        }).animate(
          { rotY: [0, 180, 360] },
          { easing: "LINEAR", loop: "RESTART" }
        )
      )
      .add(
        create("fx_speed_sparks_01", {
          y: 0.4,
          signalListener: {
            target: {
              type: "NOT",
              input1: id,
              input2: id,
            },
            invisibleOnSignal: true,
          },
        }).animate(
          {
            z: [0, 100],
          },
          { easing: "LINEAR", loop: "RESTART" }
        )
      )
      .add(
        create("sign_wooden_01_exclamtion", {
          y: 1,
          x: 3,
          rotY: 190,
        })
      )
  );

export const createBoats = (nrOfBoats) =>
  create({ y: 30 }).addMany(nrOfBoats, (index, total) =>
    create({ rotY: (360 / total) * index })
      .add(
        create({ x: 150, y: 20, rotY: -100, rotZ: 10, rotX: 5 })
          .add(boat)
          .add(createCannon(`cannon${index + 1}`))
          .add(create("gpl_spawn_point_01", { z: 0 }))
      )
      .animate(
        { y: [-1, 1], rotX: [-0.5, 0.5], rotZ: [-0.5, 0.5] },
        {
          easing: "EASE_IN_OUT_QUAD",
          duration: 4,
          startAt: (1 / total) * index,
        }
      )
  );
