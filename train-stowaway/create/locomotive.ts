import { create } from "@hiber3d/hdk-core";
import {
  CART_MATERIAL,
  createWheelPiece,
  LOCOMOTIVE_CABIN_MATERIAL,
  LOCOMOTIVE_HIGHLIGHT_MATERIAL,
} from "./train";

export const createLocomotive = (x: number) => {
  const train = create({ x });

  // Cabin
  const cabin = create({ x: -1, y: 1 });
  // Floor

  // Windows
  cabin
    // Floor
    .add(
      create({
        y: 2.8,
        z: -1.6,
        x: -11,
        scaleX: 1,
        scaleY: 0.8,
        scaleZ: 0.1,
        rotX: 90,
        prefabId: "en_m_primitive_wall_01",
        material: CART_MATERIAL,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        material: CART_MATERIAL,
        y: 2,
        z: 0,
        scaleX: 2,
        scaleZ: 1.6,
        scaleY: 0.5,
        x: -11,
      })
    )
    // Windows
    .addMany(2, (index) =>
      create({
        prefabId: "en_m_primitive_window_01",
        scale: 0.5,
        scaleZ: 0.1,
        y: 3.6,
        x: -10,
        z: -1.4 + index * 3.1,
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )

    // Walls
    .addMany(2, (index) =>
      create({
        y: 3,
        z: -1.4 + index * 3.1,
        x: -11,
        scaleX: 1,
        scaleY: 0.2,
        scaleZ: 0.1,
        prefabId: "en_m_primitive_wall_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .add(
      create({
        y: 3,
        z: 0,
        x: -8.9,
        rotY: 90,
        scaleX: 0.8,
        scaleY: 0.65,
        scaleZ: 0.1,
        prefabId: "en_m_primitive_wall_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "quarter_cylinder",
        y: 5.5,
        z: 1 - index * 2,
        x: -11,
        rotY: 0 + 180 * index,
        scaleX: 2,
        scaleZ: 1,
        scaleY: 0.2,
        material: CART_MATERIAL,
      })
    );

  // Cylinder
  create()
    .add(
      create({
        y: 4.7,
        rotZ: 90,
        scale: 1,
        scaleY: 5,
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
      })
    )

    // Chimney
    .add(
      create({ y: -0.5 })
        .add(
          create({
            prefabId: "cylinder_01",
            material: CART_MATERIAL,
            y: 6,
            x: -1,
            scale: 0.5,
            scaleY: 1.5,
            rotY: 90,
          })
        )
        .addMany(10, () =>
          create({ prefabId: "fx_particlesystem_smoke_01", y: 10, x: -1 })
        )
        .add(
          create({
            prefabId: "cone",
            material: CART_MATERIAL,
            y: 9,
            x: -1,
            scale: 1,
            rotZ: 180,
          })
        )
        .add(
          create({
            prefabId: "en_p_plant_pot_dirt_01",
            material: CART_MATERIAL,
            y: 10,
            x: -1,
            scale: 4,
            scaleY: 2,
            rotZ: 180,
          })
        )
        .add(
          create({
            prefabId: "torus_thin_01",
            material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
            y: 8.9,
            x: -1,
            scale: 1.2,
          })
        )
    )

    // Rings on engine
    .addMany(6, (index) =>
      create({
        prefabId: "torus_thin_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotZ: 90,
        y: 4.7,
        x: 0.1 - (index * 2 - (index % 2) * 0.5),
        scale: 1.1,
        scaleY: 0.9,
      })
    )
    .addTo(train);

  // Engine
  train
    .addMany(3, (index) =>
      create({
        prefabId: "wedge_45",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 3.5,
        x: -3 - index * 2.5,
        z: 0,
        scaleX: 0.8,
        scaleZ: 0.6,
        scaleY: 0.6,
        rotY: 90,
        rotZ: -90,
      })
    )
    .addMany(3, (index) =>
      create({
        prefabId: "wedge_45",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 4.1,
        x: -4 - index * 2.5,
        z: 0,
        scaleX: 0.8,
        scaleZ: 1,
        scaleY: 0.6,
        rotY: 90,
        rotZ: -90,
        rotX: 90,
      })
    )
    .addMany(3, (index) =>
      create({
        scale: 0.1,
        y: 3.3,
        z: -1.5,
        x: -3 - index * 2.5,
        scaleY: 1.5,
        rotX: 90,
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
      })
    );

  // Wheel
  create({ y: 3.3, z: -1.5, x: -3 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: -1.5, x: -5.5 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: -1.5, x: -8 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -3 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -5.5 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -8 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);

  // FRONT PIECE
  const angles = [29, 45, 59, 68, 59, 45, 29];
  const lengths = [1.13, 1.15, 1.4, 1.85, 1.4, 1.15, 1.13];
  train
    .addMany(2, (index) =>
      create({
        x: 3,
        z: -0.8 + index * 1.6,
        y: 2.5,
        rotY: 60 - index * 120,
        scale: 0.1,
        scaleZ: 1.7,
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .addMany(7, (index) =>
      create({
        x: 1,
        y: 4,
        rotZ: angles[index],
        rotX: 225 - 15 * index,
        scale: 0.1,
        scaleY: lengths[index],
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 3.5,
        x: -0.5,
        scale: 0.5,
        scaleY: 0.3,
        scaleX: 2,
      })
    );

  cabin.addTo(train);

  const coalCart = create({ y: 2.4, x: -25, rotY: 90 });

  const wheelPiece = createWheelPiece(-0.5);
  const wheelPiece2 = createWheelPiece(5);

  coalCart.add(
    create({
      y: 0.7,
      z: -1.6,
      x: 0,
      scaleX: 1,
      scaleY: 2.5,
      scaleZ: 0.2,
      rotX: 90,
      prefabId: "en_m_primitive_wall_01",
      material: CART_MATERIAL,
    })
  );
  coalCart.addMany(2, (index) =>
    create({
      y: 1.1,
      z: 3.4,
      x: 2.2 - index * 3.8,
      scaleX: 2.5,
      scaleY: 0.5,
      scaleZ: 0.2,
      rotY: 90,
      prefabId: "en_m_primitive_wall_01",
      material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
    })
  );
  coalCart.addMany(2, (index) =>
    create({
      y: 1.1,
      z: 8.6 - index * 10,
      x: 0,
      scaleX: 1,
      scaleY: 0.5,
      scaleZ: 0.2,
      prefabId: "en_m_primitive_wall_01",
      material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
    })
  );
  // HiberHead
  coalCart.addMany(2, (index) =>
    create({
      prefabId: "hiber_neon_01",
      material: "palette_02_gold",
      rotY: 90,
      scale: 0.4,
      y: 2,
      z: 1 + index * 5,
      x: 2,
    })
  );
  coalCart.addMany(2, (index) =>
    create({
      prefabId: "hiber_neon_01",
      material: "palette_02_gold",
      rotY: 90,
      scale: 0.4,
      y: 2,
      z: 1 + index * 5,
      x: -2.1,
    })
  );
  coalCart.add(wheelPiece);
  coalCart.add(wheelPiece2);

  coalCart.addTo(train);

  const coal = create({ y: 3.5, x: -22 })
    .add(
      create({
        x: 0.3,
        prefabId: "cube_01",
        material: "t_moon_ground_01",
        scaleX: 5,
        scaleZ: 1.7,
        scaleY: 0.5,
      })
    )
    .add(
      create({
        prefabId: "mountain_02",
        material: "t_moon_ground_01",
        y: 1,
        scaleY: 0.07,
        scaleZ: 0.18,
        scaleX: 0.38,
      })
    );

  const connection = create({ z: 0, x: -30, y: 3, rotY: 90 })
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
  train.add(connection);
  train.add(coal);
  train.add(
    create({
      y: 5.6,
      scale: 1.2,
      x: -4,
      material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      prefabId: "goal_01",
      goal: { dummy: true },
    })
  );
  return train;
};
