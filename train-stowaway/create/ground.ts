import { create } from "@hiber3d/hdk-core";
import { WORLD_LENGTH } from "../constants";

export const createGround = (opt?: {
  forceStop?: boolean;
  duration?: number;
}) => {
  const Z_PLANES = 10;
  const X_PLANES = WORLD_LENGTH;
  const plane = create().addMany(X_PLANES, (index) =>
    create().addMany(Z_PLANES, (i2) =>
      create({
        prefabId: "plane_01",
        x: -200 + 60 * index,
        z: -(Z_PLANES * 30) + 60 * i2,
        dealDamageOnTouch: { amount: 999 },
        scaleX: 1,
        scaleZ: 1,
        material: "t_rocky_sand_01",
      })
    )
  );
  return create()
    .animate(
      { x: [0, opt?.forceStop ? 0 : -60] },
      {
        loop: "RESTART",
        easing: "LINEAR",
        duration: opt?.duration ?? 4,
      }
    )
    .add(plane);
};
