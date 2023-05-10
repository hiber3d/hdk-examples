import { renderScene, create, Scene } from "@hiber3d/hdk-core";

const platfomrs = create({
  prefabId: "crate_02",
  rotY: -20,
  x: 79,
  y: -5,
  z: 5,
  scale: 4,
})
  .animate(
    { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
    { duration: 10, startAt: 10, easing: "EASE_IN_OUT_CUBIC", loop: "REVERSE" }
  )
  .add(
    create({
      prefabId: "crate_02",
      rotY: 20,
      x: 3,
      y: 0.3,
      z: 0,
      scale: 1,
    })
      .animate(
        { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
        {
          duration: 10,
          startAt: 20,
          easing: "EASE_IN_OUT_CUBIC",
          loop: "REVERSE",
        }
      )
      .add(
        create({
          prefabId: "barrel_wood_01",
          rotX: 90,
          x: 2.5,
          y: 1,
          z: 0,
          scale: 1,
        })
          .animate(
            { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
            {
              duration: 10,
              startAt: 30,
              easing: "EASE_IN_OUT_CUBIC",
              loop: "REVERSE",
            }
          )
          .add(
            create({
              prefabId: "crate_01",
              rotX: 0,
              x: 2,
              y: 2,
              z: 0,
              scale: 1,
            })
              .animate(
                { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
                {
                  duration: 10,
                  startAt: 40,
                  easing: "EASE_IN_OUT_CUBIC",
                  loop: "REVERSE",
                }
              )
              .add(
                create({
                  prefabId: "crate_02",
                  rotX: 270,
                  rotY: 10,
                  x: 3,
                  y: 2,
                  z: 0,
                  scale: 1,
                })
                  .animate(
                    { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
                    {
                      duration: 10,
                      startAt: 50,
                      easing: "EASE_IN_OUT_CUBIC",
                      loop: "REVERSE",
                    }
                  )
                  .add(
                    create({
                      prefabId: "barrel_wood_01",
                      rotX: 60,
                      rotZ: 50,
                      x: 3,
                      y: 0.5,
                      z: 0,
                      scale: 1,
                    })
                      .animate(
                        { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
                        {
                          duration: 10,
                          startAt: 60,
                          easing: "EASE_IN_OUT_CUBIC",
                          loop: "REVERSE",
                        }
                      )
                      .add(
                        create({
                          prefabId: "crate_02",
                          rotX: 60,
                          rotY: 30,
                          x: 0,
                          y: 2,
                          z: 1,
                          scale: 1,
                        })
                          .animate(
                            { y: [-0.1, 0, 0.1, 0], x: [-0.1, 0, 0.1, 0] },
                            {
                              duration: 10,
                              startAt: 70,
                              easing: "EASE_IN_OUT_CUBIC",
                              loop: "REVERSE",
                            }
                          )
                          .add(
                            create({
                              prefabId: "crate_01",
                              rotX: 0,
                              x: -0.2,
                              y: 2,
                              z: 1,
                              scale: 1,
                            })
                              .animate(
                                {
                                  y: [-0.01, 0, 0.01, 0],
                                  x: [-0.1, 0, 0.1, 0],
                                },
                                {
                                  duration: 10,
                                  startAt: 80,
                                  easing: "EASE_IN_OUT_CUBIC",
                                  loop: "REVERSE",
                                }
                              )
                              .add(
                                create({
                                  prefabId: "crate_02",
                                  rotX: -60,
                                  rotY: 0,
                                  x: 0,
                                  y: 3,
                                  z: 1,
                                  scale: 1,
                                })
                                  .animate(
                                    {
                                      y: [-0.01, 0, 0.01],
                                      x: [-0.1, 0, 0.1, 0],
                                    },
                                    {
                                      duration: 10,
                                      startAt: 90,
                                      easing: "EASE_IN_OUT_CUBIC",
                                      loop: "REVERSE",
                                    }
                                  )
                                  .add(
                                    create({
                                      prefabId: "crate_01",
                                      rotX: 60,
                                      x: -0.1,
                                      y: 2,
                                      z: 0.7,
                                      scale: 1,
                                    })
                                      .animate(
                                        {
                                          y: [-0.01, 0, 0.01, 0],
                                          x: [-0.1, 0, 0.1, 0],
                                        },
                                        {
                                          duration: 10,
                                          startAt: 90,
                                          easing: "EASE_IN_CUBIC",
                                        }
                                      )
                                      .add(
                                        create({
                                          prefabId: "barrel_wood_01",
                                          rotX: 90,
                                          x: -0.1,
                                          y: 3.5,
                                          z: -1,
                                          scale: 1,
                                        })
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          )
      )
  );

export const traverseShips = create().add(platfomrs);
