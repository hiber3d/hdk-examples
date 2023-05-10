import { create } from "@hiber3d/hdk-core";
import { portal } from "@hiber3d/hdk-utils";

export const createWinPlatform = () =>
  create()
    .add(
      create("smooth_rock_cylinder_01", {
        y: -12,
        scale: 6,
      })
    )
    .add(
      create({ z: 6 })
        .add(
          portal({
            worldID: "4kf5jNK2a",
          })
        )
        .add(showKeyOnComplete)
    );

export const showKeyOnComplete = create().add(
  create("collectible_mandatory_key_01", {
    y: 3,
    z: -3,
    scale: 0,
    signalListener: {
      target: "showOnComplete",
      invisibleOnSignal: true,
    },
  })
);

export const centerWinPath = create({
  z: 15,
  y: 0,
  x: 15,
  rotX: 7,
  rotY: 7,
}).addMany(30, (index, total) =>
  create({
    z: (130 / total) * index,
  }).add(
    create({
      prefabId: "en_p_footbridge_01",
      rotY: 0,
      x: 0,
      y: 0,
      z: 0,
      scale: 2,
      signalListener: {
        target: "showOnComplete",
        invisibleOnSignal: true,
      },
    })
  )
);
