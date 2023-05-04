import { create } from "@hiber3d/hdk-core";
import { GROUND_DURATION, WORLD_LENGTH } from "../constants";

export const createTunnel = (options?: {
  forceStop?: boolean;
  intensity?: number;
}) => {
  const quantity = options?.intensity ? options?.intensity * 2 : 0;
  const spacing = (WORLD_LENGTH * 60) / quantity;

  const tunnel = create({ y: 0.7 })
    .addMany(quantity, (index) =>
      create({ x: 10 + index * spacing })
        // Deadly part of tunnel
        .addMany(2, (index) =>
          create({
            prefabId: "quarter_pipe_wall_01",
            scale: 2,
            scaleY: 0.5,
            z: -2 + index * 4,
            y: 7,
            rotY: 180 + 90 * index,
            rotZ: -90,
            dealDamageOnTouch: { amount: 999 },
          })
        )
        .addMany(2, (index) =>
          create({
            y: 1,
            x: 0.5,
            z: -2.4 + 7.2 * index,
            scale: 1,
            scaleX: 0.25,
            scaleZ: 0.8,
            prefabId: "en_m_primitive_wall_01",
            dealDamageOnTouch: { amount: 999 },
          })
        )
        // Non-Deadly part of tunnel
        .addMany(2, (index) =>
          create({
            prefabId: "quarter_pipe_wall_01",
            scale: 2,
            scaleY: 3,
            z: -2 + index * 4,
            x: 1,
            y: 7,
            rotY: 180 + 90 * index,
            rotZ: -90,
          })
        )
        .addMany(2, (index) =>
          create({
            y: 1,
            x: 4,
            z: -2.4 + 7.2 * index,
            scale: 1,
            scaleX: 1.5,
            scaleZ: 0.8,
            prefabId: "en_m_primitive_wall_01",
          })
        )
        .add(
          create({
            y: 10,
            prefabId: "cliff_02_02",
            rotX: 180,
            scale: 1,
            scaleZ: 0.7,
            z: -5.5,
            x: 2,
          })
        )
        .add(
          create({
            y: 10,
            prefabId: "cliff_02_02",
            rotX: 90,
            rotZ: 90,
            scale: 1,
            scaleZ: 0.7,
            scaleY: 1.3,
            z: -6.5,
            x: 2,
          })
        )
        .add(
          create({
            y: 2,
            prefabId: "cliff_02_02",
            rotX: 25,
            rotY: 180,
            scale: 1,
            scaleZ: 0.7,
            z: 6.5,
            x: 2,
          })
        )
        .add(
          create({
            y: 0,
            prefabId: "cliff_02_01",
            z: 10.5,
            scaleX: 2,
            rotY: 27,
            scaleZ: 1.5,
            scaleY: 4.2,
            x: 2,
          })
        )
        .add(
          create({
            y: -1,
            prefabId: "cliff_02_03",
            z: -11.5,
            scale: 2,
            scaleY: 4.2,
            rotY: -27,
            x: 5,
          })
        )
        .add(
          create({
            y: 10,
            prefabId: "cliff_02_01",
            z: 0,
            scale: 2,
            scaleY: 2,
            scaleZ: 1,
            scaleX: 3,
            rotY: 90,
            x: 5,
          })
        )
    )

    .animate(
      { x: options?.forceStop ? [0, 0] : [-0, (-60 * WORLD_LENGTH) / 2] },
      {
        easing: "LINEAR",
        duration: (GROUND_DURATION * WORLD_LENGTH) / 2,
        loop: "RESTART",
      }
    );

  return tunnel;
};
