import { create } from "@hiber3d/hdk-core";

export const createVortex = (circles) =>
  create({ y: -20 })
    .addMany(200, (index, total) =>
      create({ rotY: ((circles * 360) / total) * index })
        .add(
          create({
            rotZ: 30,
          }).add(
            create("rock_01_t1", {
              material: "t_ice_03",
              scaleX: 10,
              scaleY: 5,
              scaleZ: 5,
              rotY: 80,
              dealDamageOnTouch: { amount: 200 },
            })
          )
        )
        .animate(
          {
            x: [250, 1],
            scale: [10, 1],
          },
          {
            loop: "RESTART",
            easing: "LINEAR",
            duration: 30,
            startAt: (1 / total) * index,
          }
        )
    )
    .animate(
      { rotY: [0, -180, -360] },
      { loop: "RESTART", easing: "LINEAR", duration: 30 }
    );
