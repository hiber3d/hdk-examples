import { renderScene, create, Scene } from "@hiber3d/hdk-core";
import { centerWinPath } from "./createWinPlatform";
import { traverseShips } from "./obby";

const hullRight = create({ z: 0, y: 0 }).addMany(8, (index, total) =>
  create({
    x: (64 / total) * index,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_roof",
      //material: 't_bark_02',
      rotY: 90,
      rotX: 180,
      scale: 2,
    })
  )
);
const hullLeft = create({ z: 8, y: 0, x: 56, rotY: 180 }).addMany(
  8,
  (index, total) =>
    create({
      x: (64 / total) * index,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_roof",
        //material: 't_bark_02',
        rotY: 90,
        rotX: 180,
        scale: 2,
      })
    )
);

const shipDeck = create({ z: 0, y: 0, x: -1.85 }).addMany(15, (index, total) =>
  create({
    x: (64 / total) * index,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_floor",
      scaleY: 0.5,
      scaleZ: 4,
      scaleX: 1.07,
      x: 0,
      y: 0,
      z: 4,
    })
  )
);

const shipFrontDeck = create({
  prefabId: "en_m_log_cabin_01_floor",
  scaleY: 0.5,
  scaleZ: 3.6,
  scaleX: 1.07,
  x: 62,
  y: 0,
  z: 4,
}).add(
  create({
    prefabId: "en_m_log_cabin_01_floor",
    scaleY: 1,
    scaleZ: 0.7,
    scaleX: 1,
    x: 4,
    y: 0,
    z: 0,
  })
);

const shipLowerDeck = create({ z: 0, y: 0, x: -1.85 }).addMany(
  15,
  (index, total) =>
    create({
      x: (64 / total) * index,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_floor",
        scaleY: 0.5,
        scaleZ: 2,
        scaleX: 1.07,
        x: 0,
        y: -4,
        z: 4,
      })
    )
);

const shipFront = create({
  prefabId: "en_m_log_cabin_01_roof",
  rotY: 70, //rotate around
  rotX: 180,
  rotZ: 0,
  scale: 2,
  scaleY: 2,
  x: 62,
  y: 0,
  z: 1,
})
  .add(
    create({
      prefabId: "en_m_log_cabin_01_roof",
      rotY: 140, //rotate around
      rotX: 0,
      rotZ: 0,
      scale: 1,
      scaleY: 1,
      x: -2.8,
      y: 0,
      z: -1,
    })
  )
  .add(
    create({
      prefabId: "en_m_victorian_roof_03",
      rotY: 114, //rotate around
      rotX: 0,
      rotZ: 0,
      scale: 0.909,
      scaleY: 1,
      x: -0.65,
      y: 0.82,
      z: -2.51,
    })
  );

const shipMast = create().add(
  create({
    prefabId: "en_p_log_02",
    scaleY: 15,
    scaleZ: 4,
    scaleX: 4,
    x: 35,
    y: 0,
    z: 4.5,
  })
);

const cabinRailsLeft = create({ z: 0, y: 0, x: -1.85 }).addMany(
  7,
  (index, total) =>
    create({
      x: (13 / total) * index,
    }).add(
      create({
        prefabId: "rope_railing_01",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: -1.2,
        y: 4,
        z: -4.6,
      })
    )
);

const cabinRailsRight = create({ z: 0, y: 0, x: -1.85 }).addMany(
  7,
  (index, total) =>
    create({
      x: (13 / total) * index,
    }).add(
      create({
        prefabId: "rope_railing_01",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: -1.2,
        y: 4,
        z: 12.6,
      })
    )
);

const cabinRailsBack = create({ z: 0, y: 0, x: -1.85 }).addMany(
  10,
  (index, total) =>
    create({
      z: (17 / total) * index,
    }).add(
      create({
        prefabId: "rope_railing_01",
        rotY: 90,
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: -2,
        y: 4,
        z: -3.64,
      })
    )
);

const roofBackCabin = create({ z: 0, y: 0, x: -1.85 }).addMany(
  3,
  (index, total) =>
    create({
      x: (13 / total) * index,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_floor",
        scaleY: 0.5,
        scaleZ: 4.35,
        scaleX: 1.07,
        x: 0,
        y: 4,
        z: 4,
      })
    )
);

const rightBackCabin = create().add(
  create({
    prefabId: "en_m_log_cabin_01_wall",
    scaleY: 1,
    scaleZ: 0.5,
    scaleX: 1,
    x: -1.8,
    y: 0.11,
    z: -3.9,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_wall",
      scaleY: 1,
      scaleZ: 1,
      scaleX: 1,
      x: 4.33,
      y: 0,
      z: 0,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_wall",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 4.33,
        y: 0,
        z: 0,
      })
    )
  )
);

const leftBackCabin = create().add(
  create({
    prefabId: "en_m_log_cabin_01_wall",
    scaleY: 1,
    scaleZ: 0.5,
    scaleX: 1,
    x: -1.8,
    y: 0.11,
    z: 13.7,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_wall",
      scaleY: 1,
      scaleZ: 1,
      scaleX: 1,
      x: 4.33,
      y: 0,
      z: 0,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_wall",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 4.33,
        y: 0,
        z: 0,
      })
    )
  )
);

const backBackCabin = create().add(
  create({
    prefabId: "en_m_log_cabin_01_wall",
    rotY: 90,
    scaleY: 1,
    scaleZ: 0.5,
    scaleX: 1.02,
    x: -3,
    y: 0.11,
    z: 10.63,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_wall",
      scaleY: 1,
      scaleZ: 1,
      scaleX: 1,
      x: 4.33,
      y: 0,
      z: 0,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_wall",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 4.33,
        y: 0,
        z: 0,
      }).add(
        create({
          prefabId: "en_m_log_cabin_01_wall",
          scaleY: 1,
          scaleZ: 1,
          scaleX: 1,
          x: 4.33,
          y: 0,
          z: 0,
        })
      )
    )
  )
);

const frontBackCabin = create().add(
  create({
    prefabId: "en_m_log_cabin_01_wall",
    rotY: 90,
    scaleY: 1,
    scaleZ: 0.5,
    scaleX: 1.02,
    x: 9.95,
    y: 0.11,
    z: 10.63,
  }).add(
    create({
      prefabId: "en_m_log_cabin_01_wall_door",
      scaleY: 1,
      scaleZ: 1,
      scaleX: 1,
      x: 4.33,
      y: 0,
      z: 0,
    }).add(
      create({
        prefabId: "en_m_log_cabin_01_wall_door",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 4.33,
        y: 0,
        z: 0,
      }).add(
        create({
          prefabId: "en_m_log_cabin_01_wall",
          scaleY: 1,
          scaleZ: 1,
          scaleX: 1,
          x: 4.33,
          y: 0,
          z: 0,
        })
      )
    )
  )
);

const stairsRight = create().add(
  create({
    prefabId: "tree_house_stair_01",
    scaleY: 1.5,
    scaleZ: 1.5,
    scaleX: 1,
    rotY: 90,
    rotZ: -10,
    x: 9,
    y: 3.61,
    z: -1.5,
  })
);

const stairsLeft = create().add(
  create({
    prefabId: "tree_house_stair_01",
    scaleY: 1.5,
    scaleZ: 1.5,
    scaleX: 1,
    rotY: 90,
    rotZ: -10,
    x: 9,
    y: 3.61,
    z: 9.5,
  })
);

const sailSection = create({
  z: 4,
  y: 16,
  x: 30,
  scaleZ: 30,
  scaleY: 1.3,
  scaleX: 1.3,
}).addMany(30, (index, total) =>
  create({
    rotZ: (180 / total) * index,
  }).add(
    create({
      prefabId: "cube_02",
      material: "palette_01_white",
      scaleY: 0.5,
      scaleZ: 1,
      scaleX: 1,
      x: 0,
      y: -10,
      z: 0,
    })
  )
);

const boxRight = create({
  prefabId: "crate_02",
  rotY: 19,
  x: 61,
  y: 0,
  z: 11,
}).add(
  create({
    prefabId: "crate_02",
    rotY: 0,
    x: 4,
    y: 0,
    z: -0.2,
  }).add(
    create({
      prefabId: "crate_02",
      rotY: 90,
      x: 2,
      y: 0,
      z: -0.5,
    })
  )
);

const boxLeft = create({
  prefabId: "crate_02",
  rotY: -19,
  x: 61,
  y: 0,
  z: -3,
}).add(
  create({
    prefabId: "crate_02",
    rotY: 0,
    x: 4,
    y: 0,
    z: -0.2,
  }).add(
    create({
      prefabId: "crate_02",
      rotY: 90,
      x: 2,
      y: 0,
      z: 1,
    })
  )
);

const lowerBarrelLeft = create({ z: 0, y: 0, x: -1.85 }).addMany(
  15,
  (index, total) =>
    create({
      x: (64 / total) * index,
    }).add(
      create({
        prefabId: "barrel_wood_01",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 0,
        y: -4,
        z: 1,
      })
    )
);

const lowerBarrelRight = create({ z: 0, y: 0, x: -1.85 }).addMany(
  15,
  (index, total) =>
    create({
      x: (64 / total) * index,
    }).add(
      create({
        prefabId: "barrel_wood_01",
        scaleY: 1,
        scaleZ: 1,
        scaleX: 1,
        x: 0,
        y: -4,
        z: 7,
      })
    )
);

const deco1Upper = create({
  prefabId: "crate_02",
  rotY: 20,
  x: 30,
  y: 0,
  z: -2,
}).add(
  create({
    prefabId: "barrel_wood_01",
    rotY: 0,
    x: 4,
    y: 0,
    z: -0.2,
  }).add(
    create({
      prefabId: "barrel_wood_01",
      rotY: 90,
      x: 2,
      y: 0,
      z: 1,
    })
  )
);

const deco2Upper = create({
  prefabId: "crate_02",
  rotY: 20,
  x: 25,
  y: 0,
  z: 9,
}).add(
  create({
    prefabId: "barrel_wood_01",
    rotY: 0,
    x: 4,
    y: 0,
    z: -0.2,
  }).add(
    create({
      prefabId: "crate_02",
      rotY: 90,
      x: 2,
      y: 0,
      z: 1,
    })
  )
);

const deco3Upper = create({
  prefabId: "barrel_wood_01",
  rotY: 20,
  x: 15,
  y: 0,
  z: 2,
}).add(
  create({
    prefabId: "barrel_wood_01",
    rotY: 0,
    x: 1.5,
    y: 0,
    z: 1,
  }).add(
    create({
      prefabId: "barrel_wood_01",
      rotY: 90,
      x: -1.5,
      y: 0,
      z: 1,
    })
  )
);

const deco4Upper = create({
  prefabId: "barrel_wood_01",
  rotY: 20,
  x: -2,
  y: 4,
  z: 9.5,
}).add(
  create({
    prefabId: "barrel_wood_01",
    rotY: 0,
    x: 1.5,
    y: 0,
    z: 1,
  }).add(
    create({
      prefabId: "barrel_wood_01",
      rotY: 90,
      x: -1.5,
      y: 0,
      z: 1,
    })
  )
);

const deco5Upper = create({
  prefabId: "crate_02",
  rotY: 20,
  x: -2,
  y: 4,
  z: -1,
}).add(
  create({
    prefabId: "barrel_wood_01",
    rotY: 0,
    x: 4,
    y: 0,
    z: -0.2,
  }).add(
    create({
      prefabId: "crate_02",
      rotY: 90,
      x: 2,
      y: 0,
      z: 1,
    })
  )
);

const bedsLeftCabin = create({ z: -0.5, y: 0, x: -0.7 }).addMany(
  6,
  (index, total) =>
    create({
      x: (13 / total) * index,
    }).add(
      create({
        prefabId: "bed_01",
        rotY: 0,
        x: -2,
        y: 0.1,
        z: -2.5,
      })
    )
);

const bedsRightCabin = create({ z: 13.5, y: 0, x: -0.7 }).addMany(
  6,
  (index, total) =>
    create({
      x: (13 / total) * index,
    }).add(
      create({
        prefabId: "bed_01",
        rotY: 180,
        x: -2,
        y: 0.1,
        z: -2.5,
      })
    )
);

const shipsWheel = create({
  prefabId: "en_p_wooden_wheel_01",
  material: "t_wood_01",
  scale: 1.5,
  x: 6,
  y: 4.5,
  z: 4,
}).add(
  create({ y: 0.48 })
    .addMany(8, (index, total) =>
      create({
        rotX: (360 / total) * index,
      }).add(
        create({
          prefabId: "rounded_cylinder_01",
          material: "t_bark_02",
          scale: 0.07,
          rotY: 180,
          x: 0,
          y: 0.45,
          z: 0,
        })
      )
    )
    .add(
      create({
        prefabId: "cube_01",
        material: "t_wood_01",
        scale: 0.2,
        scaleY: 0.5,
        scaleX: 0.1,
        x: 0.21,
        y: -0.8,
        z: 0,
      })
    )
);

const backPlate = create({
  prefabId: "wedge_triangle_01",
  material: "t_wood_tile_01",
  rotY: 135,
  rotZ: 90,
  scaleX: 5.5,
  scaleY: 0,
  scaleZ: 5.5,
  x: -4,
  y: 0,
  z: 4,
});

const sideJump1 = create({
  prefabId: "log_platform",
  rotY: -90,
  rotZ: 0,
  x: -4,
  y: -2,
  z: 0,
}).add(
  create({
    prefabId: "log_platform",
    rotY: 0,
    rotZ: 0,
    x: 8,
    y: 0,
    z: 0,
  }).add(
    create({
      prefabId: "log_platform",
      rotY: 0,
      rotZ: 0,
      x: -4,
      y: 3,
      z: 0,
    })
  )
);

const CheckPoint = create({
  prefabId: "checkpoint_01",
  scale: 1.5,
  x: 2,
  y: 4.2,
  z: 4,
});

const decorations = create({ x: 0, z: 0 }).add(
  deco5Upper,
  deco4Upper,
  deco3Upper,
  deco2Upper,
  deco1Upper,
  lowerBarrelLeft,
  lowerBarrelRight,
  boxLeft,
  boxRight
);
const jumps = create({ x: 0, z: 0 }).add(sideJump1);
const sail = create({ x: -9, z: -7, rotY: -10 }).add(shipMast, sailSection);
const sail2 = create({ scale: 0.8, x: 25, z: -4, rotY: -10 }).add(
  shipMast,
  sailSection
);

const backCabinInterior = create().add(bedsLeftCabin, bedsRightCabin);
const backCabin = create().add(
  CheckPoint,
  shipsWheel,
  backCabinInterior,
  cabinRailsBack,
  cabinRailsLeft,
  cabinRailsRight,
  roofBackCabin,
  stairsRight,
  stairsLeft,
  backBackCabin,
  frontBackCabin,
  rightBackCabin,
  leftBackCabin
);
const boatObby = create().add(traverseShips);
export const boat = create({ rotZ: 3 }).add(
  centerWinPath,
  boatObby,
  jumps,
  backPlate,
  decorations,
  shipFrontDeck,
  shipLowerDeck,
  shipFront,
  sail,
  sail2,
  backCabin,
  hullRight,
  hullLeft,
  shipDeck
);
