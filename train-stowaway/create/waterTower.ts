import { create } from "@hiber3d/hdk-core";
import { GROUND_DURATION, WORLD_LENGTH } from "../constants";

export const createWaterTower = (options?: {
  intensity?: number;
  forceStop?: boolean;
}) => {
  const quantity = options?.intensity ? options?.intensity * 2 : 0;
  // const spacing = (WORLD_LENGTH * (59.9 + quantity * 0.1)) / quantity;
  const spacing = (WORLD_LENGTH * 60 * 2) / quantity;

  return create({ y: -0.1 })
    .addMany(quantity, (index) =>
      create({ z: 6, y: 8, x: 0 + index * spacing })
        .add(
          create({
            prefabId: "cylinder_01",
            material: "t_metal_01",
            rotZ: 45,
            rotX: -90,
            scale: 0.3,
            y: 0,
            scaleY: 3.75,
            dealDamageOnTouch: { knockbackStrengthInProcent: 200, amount: 999 },
          })
        )
        .add(
          create({
            prefabId: "cylinder_01",
            material: "t_metal_01",
            scale: 0.3,
            z: -7.5,
            y: -0.5,
          })
        )
        .add(
          create({
            prefabId: "cylinder_01",
            material: "t_wooden_floor_01",
            scale: 2.8,
            y: -1,
          })
        )
        .add(
          create({
            prefabId: "cupola",
            y: 4.5,
            scale: 3,
            scaleY: 1,
            material: "t_metal_01",
          })
        )
        .add(
          create({
            prefabId: "fx_particlesystem_waterfall_01",
            scale: 0.5,
            z: -7.5,
            y: -0.5,
          })
        )
        .add(
          create({
            prefabId: "half_sphere_01",
            scale: 0.3,
            material: "t_metal_01",
            z: -7.5,
          })
        )
        .add(
          create({
            prefabId: "en_m_primitive_floor_01",
            scaleY: 0.1,
            y: -1,
            scaleZ: 1.5,
            scaleX: 1.5,
            material: "t_wooden_floor_01",
          })
        )
        .addMany(2, (i2) =>
          create().addMany(2, (index) =>
            create({
              prefabId: "cylinder_01",
              material: "t_wood_01",
              y: -7,
              scale: 0.4,
              scaleY: 4,
              x: 2.8 - index * 5.6,
              z: 2.8 - i2 * 5.6,
              rotZ: 10 - index * 20,
              rotX: -10 + i2 * 20,
            })
          )
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
};
