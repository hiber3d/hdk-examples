import { create } from "@hiber3d/hdk-core";
import { RAIL_WIDTH } from "../constants";

export const createRail = (length: number, z?: number) => {
  const railPiece = create().addMany(2, (index) =>
    create({
      y: 0.2,
      z: -1.5 + RAIL_WIDTH * index,
      scaleX: 2,
      scaleY: 0.1,
      scaleZ: 0.1,
      prefabId: "cube_01",
      material: "t_metal_03",
    })
  );
  // Board
  create({
    prefabId: "cube_01",
    material: "t_wooden_floor_01",
    scaleZ: 0.4,
    scaleX: 2,
    scaleY: 0.1,
    rotY: 90,
  }).addTo(railPiece);

  const rail = create({ x: -200, y: 2, z: z ?? 0 }).addMany(length, (index) => {
    const railPiece = create({ x: index * 2 }).addMany(2, (index) =>
      create({
        y: 0.2,
        z: -1.5 + 3 * index,
        scaleX: 2,
        scaleY: 0.1,
        scaleZ: 0.1,
        prefabId: "cube_01",
        material: "t_metal_03",
      })
    );
    create({
      prefabId: "cube_01",
      material: "t_wooden_floor_01",
      scaleZ: 0.4,
      scaleX: 2,
      scaleY: 0.1,
      rotY: 90,
    }).addTo(railPiece);

    return railPiece;
  });

  return rail;
};
