import { Material, create } from "@hiber3d/hdk-core";
import { RAIL_WIDTH } from "../constants";
import { createLocomotive } from "./locomotive";

export const CART_MATERIAL: Material = "palette_01_black";
export const CART_SPACING = 22;
export const LOCOMOTIVE_HIGHLIGHT_MATERIAL: Material = "palette_02_red";
export const LOCOMOTIVE_CABIN_MATERIAL: Material = "palette_02_blue";
const NUMBER_OF_LOG_ROWS = 5;
const logMaterials: Material[] = [
  "t_bark_02",
  "t_bark_05",
  "t_bark_01",
  "t_bark_02",
  "t_bark_01",
  "t_bark_05",
  "t_bark_02",
];

const cartColors: Material[] = ["t_planks_02"];

export const createWheelPiece = (z: number) => {
  const piece = create({ z });
  piece
    .addMany(2, (index) =>
      create({
        scale: 0.9,
        y: 0.5,
        z: 0,
        x: -1.5 + index * RAIL_WIDTH,
      })
        .add(
          create({
            y: -0.48,
            prefabId: "en_p_wooden_wheel_01",
            material: CART_MATERIAL,
          })
        )
        .animate({ rotX: [0, 180, 360] }, { easing: "LINEAR", loop: "RESTART" })
    )
    .addMany(2, (index) =>
      create({
        scale: 0.9,
        y: 0.5,
        z: 1,
        x: -1.5 + index * RAIL_WIDTH,
      })
        .add(
          create({
            y: -0.48,
            prefabId: "en_p_wooden_wheel_01",
            material: CART_MATERIAL,
          })
        )
        .animate({ rotX: [0, 180, 360] }, { easing: "LINEAR", loop: "RESTART" })
    )
    .addMany(2, (index) =>
      create({
        scale: 0.9,
        y: 0.5,
        z: 2,
        x: -1.5 + index * RAIL_WIDTH,
      })
        .add(
          create({
            y: -0.48,
            prefabId: "en_p_wooden_wheel_01",
            material: CART_MATERIAL,
          })
        )
        .animate({ rotX: [0, 180, 360] }, { easing: "LINEAR", loop: "RESTART" })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "cube_01",
        material: CART_MATERIAL,
        scaleY: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: 1,
        y: 0.4,
        scaleX: 0.1,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "wedge_45",
        material: CART_MATERIAL,
        scaleY: 0.31,
        scaleZ: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: -0.3,
        y: 1.0,
        scaleX: 0.1,
        rotX: 180,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "wedge_45",
        material: CART_MATERIAL,
        scaleY: 0.31,
        scaleZ: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: 2.3,
        y: 1.0,
        scaleX: 0.1,
        rotX: 180,
        rotY: 180,
      })
    );

  return piece;
};

const buildCart = (
  cartIndex: number,
  options?: { yellow?: boolean; hasCheckpoint?: boolean }
) => {
  const cartMaterial: Material = options?.yellow
    ? "t_wood_tile_02"
    : cartColors[cartIndex % cartColors.length];
  const cart = create({
    y: 2.4,
    x: 0 + CART_SPACING * cartIndex,
    z: 0,
    rotY: 90,
  });

  cart.addMany(2, (index) => createWheelPiece(0));
  cart.addMany(2, (index) => createWheelPiece(8));

  // Floor
  create({
    prefabId: "cube_01",
    y: 0.9,
    z: 5,
    scaleZ: 8.5,
    scaleY: 0.1,
    scaleX: 1.8,
    material: CART_MATERIAL,
  }).addTo(cart);

  // Wall
  cart
    .addMany(2, (index) =>
      create({ z: -1, x: -1.6 + index * 3.5 }).addMany(7, (index) =>
        create({
          rotY: 90,
          y: 1,
          scaleX: 0.5,
          scaleZ: 0.1,
          scaleY: 0.8,
          prefabId: "en_m_primitive_window_01",
          material: cartMaterial,
          z: 0 + index * 2,
        })
      )
    )
    .addMany(2, (index) =>
      create({
        prefabId: "en_m_primitive_door_01",
        material: cartMaterial,
        scaleZ: 0.1,
        scaleY: 0.8,
        scaleX: 0.9,
        y: 1,
        z: -1.8 + 14 * index,
      })
    )
    // Windows
    .addMany(7, (index) =>
      create({
        prefabId: "en_m_primitive_wall_01",
        material: "glass" as Material,
        scaleZ: 0.1,
        scaleY: 0.4,
        scaleX: 0.255,
        rotY: 90,
        y: 1.8,
        x: 1.9,
        z: -1 + index * 2,
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "en_m_primitive_wall_01",
        material: "glass" as Material,
        scaleZ: 0.1,
        scaleY: 0.4,
        scaleX: 0.255,
        rotY: 90,
        y: 1.8,
        x: -1.6,
        z: -1 + index * 2,
      })
    )
    // Seats
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: 1,
        scaleX: 2.2,
        z: -1.5 + index * 1.95,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: 1,
        scaleX: 2.2,
        z: -0 + index * 1.95,
        rotY: 180,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: -1,
        scaleX: 2,
        z: -1.5 + index * 1.95,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: -1,
        scaleX: 2,
        z: -0 + index * 1.95,
        rotY: 180,
        material: "t_wooden_floor_01",
      })
    )
    // Roof
    .addMany(2, (index) =>
      create({
        prefabId: "quarter_cylinder",
        y: 4,
        x: 1 - index * 2,
        z: 5,
        rotY: 90 + 180 * index,
        scaleX: 8.5,
        scaleY: 0.5,
        material: options?.yellow ? "t_planks_01" : CART_MATERIAL,
      })
    )
    // Connection
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 12,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 16,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        y: 0,
        z: 14.5,
        scale: 0.5,
        scaleZ: 0.1,
        material: CART_MATERIAL,
      })
    );

  // Ladder
  cart.add(
    create({
      prefabId: "en_m_wooden_stairs_01",
      y: 1,
      z: -4.2,
      x: 1.2,
      material: CART_MATERIAL,
      rotY: 180,
      scaleY: 0.8,
      scaleX: 0.3,
      scaleZ: 0.5,
    })
  );

  cart.add(
    create({
      prefabId: "cube_01",
      y: 0.9,
      z: -5,
      scaleZ: 1.5,
      scaleY: 0.1,
      scaleX: 1.8,
      material: CART_MATERIAL,
    })
  );

  if (options?.hasCheckpoint) {
    cart.add(create({ prefabId: "checkpoint_01", y: 1, z: 5 }));
    cart.add(
      create({
        prefabId: "sign_wooden_01_arrow_down",
        y: 4.2,
        z: -3.4,
        scale: 1,
        scaleY: 0.3,
        rotY: 180,
      })
    );
  }

  if (!options?.hasCheckpoint) {
    // Ladder
    cart.add(
      create({
        prefabId: "en_m_wooden_stairs_01",
        y: 1,
        z: -4.2,
        x: 1.2,
        material: CART_MATERIAL,
        rotY: 180,
        scaleY: 0.8,
        scaleX: 0.3,
        scaleZ: 0.5,
      })
    );
    cart.addMany(2, (index) =>
      create({
        prefabId: "iron_cage_01_door",
        z: -2 + index * 14,
        y: 1.1,
        x: 0.9,
        scaleY: 1.1,
        scaleX: 1.7,
      })
    );
  }

  return cart;
};

const buildCargoCart = (cartIndex: number) => {
  const cart = create({
    y: 2.4,
    x: 0 + CART_SPACING * cartIndex,
    z: 0,
    rotY: 90,
  });

  // Cart floor
  create({
    prefabId: "cube_01",
    y: 0.9,
    z: 5,
    scaleZ: 8.5,
    scaleY: 0.1,
    scaleX: 1.8,
    material: CART_MATERIAL,
  }).addTo(cart);

  cart.addMany(2, (index) => createWheelPiece(0));
  cart.addMany(2, (index) => createWheelPiece(8));
  cart.addMany(9, (index) =>
    create({
      prefabId: "cube_01",
      y: 0.9,
      scale: 0.1,
      scaleY: 1.5,
      z: -3 + index * 2,
      x: 1.8,
    })
  );
  cart.addMany(9, (index) =>
    create({
      prefabId: "cube_01",
      y: 0.9,
      scale: 0.1,
      scaleY: 1.5,
      z: -3 + index * 2,
      x: -1.8,
    })
  );

  cart.addMany(NUMBER_OF_LOG_ROWS, (logRow) => {
    const haveThreeLogs = logRow % 2 === 1;
    return create().addMany(haveThreeLogs ? 3 : 4, (index) =>
      create({
        prefabId: "cylinder_01",
        y: 1.6 + logRow * 0.8,
        z: -3 + logRow * 0.4,
        x: (haveThreeLogs ? -0.8 : -1.25) + index * 0.8,
        scale: 0.46,
        scaleY: 8 - logRow * 0.4,
        rotX: 90,
        material: logMaterials[(index * logRow) % logMaterials.length],
      })
    );
  });
  // Connection
  cart
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 12,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 16,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        y: 0,
        z: 14.5,
        scale: 0.5,
        scaleZ: 0.1,
        material: CART_MATERIAL,
      })
    );

  return cart;
};

export const createTrain = (options?: {
  numberOfCarts?: number;
  cargoCarts?: (1 | 0)[];
  checkPoints?: (1 | 0)[];
  z?: number;
  x?: number;
}) => {
  // Locomotive
  const {
    numberOfCarts = 0,
    cargoCarts = [],
    checkPoints = [],
  } = options ?? {};
  const locomotive = createLocomotive(
    CART_SPACING + CART_SPACING * numberOfCarts - 2
  );

  for (let i = 1; i < numberOfCarts; i++) {
    if (cargoCarts.length < i) {
      cargoCarts.push(0);
    }
    if (checkPoints.length < i) {
      checkPoints.push(0);
    }
  }

  return create({ z: options?.z ?? 0, x: options?.x ?? 0 })
    .add(locomotive)
    .addMany(numberOfCarts, (index) => {
      if (cargoCarts[index]) {
        return buildCargoCart(index);
      }

      const hasCheckpoint = checkPoints[index] === 1;
      return buildCart(index, { yellow: hasCheckpoint, hasCheckpoint });
    });
};
