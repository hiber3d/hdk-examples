import { create } from "@hiber3d/hdk-core";

export const createTentacle = (delay: number) => {
  const total = 7;
  const createPiece = (index) =>
    create("rounded_cylinder_01", { y: 2, material: "t_gore_01" }).animate(
      { rotX: [-10, 10] },
      {
        startAt: (1 / total) * index + delay,
        easing: "EASE_IN_OUT_CUBIC",
        duration: 2,
      }
    );

  return create({ scale: 3, scaleY: 8 }).add(
    createPiece(0).add(
      createPiece(1).add(
        createPiece(2).add(
          createPiece(3).add(
            createPiece(4).add(createPiece(5).add(createPiece(6)))
          )
        )
      )
    )
  );
};
