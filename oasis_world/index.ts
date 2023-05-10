import { renderScene, create } from "@hiber3d/hdk-core";

if (import.meta.hot) {
  import.meta.hot.accept(() => console.info("Hot reload: updated index.ts"));
}

const world = create("en_p_jungle_grass_01", { y: -3 });

create("large_sand_plane_01", { transform: { pos: [0, -2.5, -10] } }).addTo(
  world
);

create("water_plane_01", {
  transform: { pos: [24, -1, -10], rot: [0, 180, 0], scale: [2.5, 1.2, 2.1] },
}).addTo(world);
create("fx_particlesystem_mist_01", {
  transform: { pos: [22, 1, -2], rot: [5, 10, 1], scale: [1, 1, 1] },
}).addTo(world);

create("smooth_rock_01", {
  transform: { pos: [20, -1, 1], rot: [0, 300, 0], scale: [3, 2, 2] },
}).addTo(world);

create("smooth_rock_01", {
  transform: { pos: [24, -1, 1], rot: [0, -300, 0], scale: [3, 2, 2] },
}).addTo(world);

create("smooth_rock_cylinder_02", {
  transform: {
    pos: [36, -1, -16],
    rot: [0, 0, 0],
    scale: [1, 1.2, 2],
  },
}).addTo(world);

create("smooth_rock_cylinder_02", {
  transform: {
    pos: [36, 1, -12],
    rot: [0, 0, 0],
    scale: [1, 1.1, 2],
  },
}).addTo(world);

create("smooth_rock_cylinder_02", {
  transform: {
    pos: [36, -1, -19],
    rot: [0, 50, 0],
    scale: [1, 1.1, 2],
  },
}).addTo(world);

create("smooth_rock_cylinder_02", {
  transform: { pos: [33, 0.3, -19], rot: [0, 80, 0], scale: [1, 1.1, 2] },
}).addTo(world);
create("smooth_rock_cylinder_02", {
  transform: { pos: [28, -1.1, -20], rot: [0, 100, 0], scale: [1, 1.1, 2] },
}).addTo(world);
create("smooth_rock_cylinder_02", {
  transform: { pos: [23, -1, -20], rot: [0, 100, 0], scale: [1, 1.1, 2] },
}).addTo(world);
create("smooth_rock_cylinder_02", {
  transform: { pos: [19, -1.2, -20], rot: [0, 135, 0], scale: [1, 1.1, 2] },
}).addTo(world);
create("smooth_rock_cylinder_02", {
  transform: { pos: [15, -1.2, -16], rot: [0, 150, 0], scale: [1, 1.4, 2] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [35, -10, -110], rot: [0, 150, 0], scale: [3, 5, 3] },
}).addTo(world);
create("gpl_spawn_point_01", {
  transform: {
    pos: [37, 19.5, -112],
    rot: [0, 150, 0],
    scale: [0.5, 0.5, 0.5],
  },
}).addTo(world);
create("fx_particlesystem_waterfall_01", {
  transform: { pos: [21, 15, -1], rot: [5, 10, 1], scale: [4, 6, 4] },
}).addTo(world);
create("fx_particlesystem_waterfall_01", {
  transform: { pos: [21, 15, -2], rot: [5, 10, 1], scale: [4, 6, 4] },
}).addTo(world);
create("ancient_urn_01", {
  transform: {
    pos: [27, 19, 13],
    rot: [295, 15, 100],
    scale: [7, 8, 7],
  },
  material: "t_rock_01",
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [21, -20, 0], rot: [0, 0, 0], scale: [6, 6, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [21, -20, 10], rot: [0, 0, 0], scale: [6, 7, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [32, -20, 10], rot: [0, 0, 0], scale: [4, 8, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [50, 0, 40], rot: [0, 0, 0], scale: [4, 8, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [70, 0, 80], rot: [0, 180, 0], scale: [6, 8, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-20, 0, 50], rot: [0, 180, 0], scale: [6, 8, 6] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-37, 0, 0], rot: [0, 0, 0], scale: [6, 8, 6] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-63, 0, -20], rot: [0, 180, 0], scale: [4, 5, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [15, 0, 50], rot: [0, 180, 0], scale: [5, 9, 4] },
}).addTo(world);
create("fx_particlesystem_waterfall_01", {
  transform: { pos: [18, 45, 36], rot: [5, 10, 1], scale: [4, 1, 4] },
}).addTo(world);
create("water_plane_01", {
  transform: { pos: [0, 0, 0], rot: [0, 0, 0], scale: [24, 0.1, 27] },
}).addTo(world);
create("fx_particlesystem_waterfall_01", {
  transform: { pos: [-54, 19, -32.5], rot: [5, 10, 1], scale: [4, 6, 4] },
}).addTo(world);
create("ancient_urn_01", {
  transform: {
    pos: [-69, 26, -31],
    rot: [-175, 20, 64],
    scale: [6, 8, 6],
  },
  material: "t_rock_01",
}).addTo(world);

create("ancient_urn_01", {
  transform: {
    pos: [49, 21.5, 45],
    rot: [80, 185, -150],
    scale: [6, 8, 6],
  },
  material: "t_rock_01",
}).addTo(world);

create("jungle_tree_medium", {
  transform: { pos: [-70, -3, -8], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);

create("jungle_tree_medium", {
  transform: { pos: [0, -3, 10], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);

create("jungle_tree_medium", {
  transform: { pos: [-5, -3, -4], rot: [0, 0, 0], scale: [1, 1, 1] },
}).addTo(world);

create("jungle_tree_large", {
  transform: { pos: [-70, -3, -20], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("jungle_tree_large", {
  transform: { pos: [-70, -3, -70], rot: [0, 0, 0], scale: [1.5, 1.5, 1.5] },
}).addTo(world);
create("jungle_tree_small", {
  transform: { pos: [-50, 0, -50], rot: [0, 0, 0], scale: [4, 4, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-70, 0, -60], rot: [0, 0, 0], scale: [4, 4, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-60, 0, -45], rot: [0, 0, 0], scale: [4, 6, 4] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [-50, 0, -70], rot: [0, 195, 0], scale: [4, 4, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-50, 0, -90], rot: [0, 195, 0], scale: [5, 6, 5] },
}).addTo(world);
create("jungle_tree_medium", {
  transform: { pos: [-38, -7, -115], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [-25, 0, -115], rot: [0, 0, 0], scale: [4, 4, 4] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [-30, 0, -100], rot: [0, 0, 0], scale: [3, 4, 3] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [75, 0, 35], rot: [0, 0, 0], scale: [5, 4, 5] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [90, 0, 28], rot: [0, 180, 0], scale: [5, 6, 5] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [100, 0, 10], rot: [0, 0, 0], scale: [3, 3, 3] },
}).addTo(world);
create("jungle_tree_large", {
  transform: { pos: [70, 0, 18], rot: [0, 180, 0], scale: [1, 1, 1] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [90, 0, -5], rot: [0, 80, 0], scale: [4, 4, 3] },
}).addTo(world);
create("smooth_rock_02", {
  transform: { pos: [90, 0, -30], rot: [0, 130, 0], scale: [4, 6, 4] },
}).addTo(world);
create("jungle_tree_large", {
  transform: { pos: [90, 0, -50], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_grass_01", {
  transform: { pos: [29, 0, -11], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [60, 0, 18], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [7, 0, 24], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [-15, 0, -15], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [77, 0, -19], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [-25, 0, -80], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [-16, 0, -100], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_grass_01", {
  transform: { pos: [-6, 0, 10], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("fx_particlesystem_waterfall_01", {
  transform: { pos: [52, 20, 29], rot: [5, 10, 1], scale: [4, 6, 4] },
}).addTo(world);
create("ancient_urn_01", {
  transform: {
    pos: [58, 24.5, 47],
    rot: [295, 15, 100],
    scale: [6, 8, 6],
  },
  material: "t_rock_01",
});
create("smooth_rock_01", {
  transform: { pos: [98, 0, -55], rot: [0, 80, 0], scale: [4, 4, 3] },
}).addTo(world);

create("smooth_rock_01", {
  transform: { pos: [90, 0, -95], rot: [0, 122, 0], scale: [4, 4, 3] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [70, 0, -110], rot: [0, 180, 0], scale: [4, 4, 3] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [36, 0, -110], rot: [0, 180, 0], scale: [4, 4, 3] },
}).addTo(world);
create("smooth_rock_01", {
  transform: { pos: [15, 0, -110], rot: [0, 180, 0], scale: [4, 4, 3] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [25, 0, -70], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("en_p_jungle_bush_cluster", {
  transform: { pos: [80, 0, -90], rot: [0, 0, 0], scale: [2, 2, 2] },
}).addTo(world);
create("jungle_tree_medium", {
  transform: { pos: [49, 0, -100], rot: [0, 0, 0], scale: [1, 1, 1] },
}).addTo(world);

create("en_p_jungle_bush_cluster", { transform: { pos: [-30, 0, -32] } }).addTo(
  world
);

//fish_fall
create("gummy_fish_01", {
  transform: { pos: [-49, 20, -32], rot: [0, 0, 0], scale: [1, 1, 1] },
  material: "t_swamp_water",
})
  .addTo(world)
  .animate(
    {
      rotX: [-60, -50, -23.3, 0, 23.3, 30, 0, 0, 40, 70],
      rotY: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
      rotZ: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      x: [-5, -2.5, 0, 2.5, 5, 7.5, 10, 15, 18, 19],
      y: [-2, -1.5, -4, -8, -14, -20.4, -20, -20, -20, -20],
      z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    { loop: "RESTART", easing: "LINEAR", duration: 1.6 }
  )
  .addTo(world);

//fish_right
create("gummy_fish_01", {
  transform: { pos: [29, 1, -14], rot: [0, 0, 0], scale: [0.8, 0.8, 0.8] },
  material: "t_swamp_water",
})
  .addTo(world)
  .animate(
    {
      rotX: [-60, -46.6, -23.3, 0, 23.3, 46.6, 60],
      rotY: [90, 90, 90, 90, 90, 90, 90],
      rotZ: [0, 0, 0, 0, 0, 0, 0],
      x: [-5, -4, -3, -2, -1, 0, 1],
      y: [-2, -1.3, 1.5, 2.5, 1.5, -1.3, -4],
      z: [0, 0, 0, 0, 0, 0, 0],
    },
    { loop: "RESTART", easing: "LINEAR", duration: 1.1 }
  )
  .addTo(world);

//fish_left
create("gummy_fish_01", {
  transform: { pos: [29, 1, -14], rot: [0, 0, 0], scale: [0.8, 0.8, 0.8] },
  material: "t_swamp_water",
})
  .addTo(world)
  .animate(
    {
      rotX: [-60, -46.6, -23.3, 0, 23.3, 46.6, 60],
      rotY: [-90, -90, -90, -90, -90, -90, -90],
      rotZ: [0, 0, 0, 0, 0, 0, 0],
      x: [-5, -6, -7, -8, -9, -10, -11],
      y: [-2, -1.1, 2.3, 4, 2.3, -1.1, -4],
      z: [0, 0, 0, 0, 0, 0, 0],
    },
    { loop: "RESTART", easing: "LINEAR", duration: 1.3 }
  )
  .addTo(world);

//fish_center
create("gummy_fish_01", {
  transform: { pos: [29, 1, -14], rot: [0, 0, 0], scale: [0.8, 0.8, 0.8] },
  material: "t_coins_01",
})
  .addTo(world)
  .animate(
    {
      rotX: [-90, -10, 70, 160, 250, 320, 430],
      rotY: [-90, -90, -90, -90, -90, -90, -90],
      rotZ: [0, 0, 0, 0, 0, 0, 0],
      x: [-5, -5, -5, -5, -5, -5, -5],
      y: [-2.5, 3, 5.4, 6.2, 5.4, 3, -2.5],
      z: [0, 0, 0, 0, 0, 0, 0],
    },
    { loop: "RESTART", easing: "LINEAR", duration: 1.4 }
  )
  .addTo(world);

//fish_swim
create("gummy_fish_01", {
  transform: { pos: [80, 1, -85], rot: [0, 0, 0], scale: [1, 1, 1] },
  material: "t_asphalt_01",
})
  .addTo(world)
  .animate(
    {
      rotX: [0, 0, 0, 0, 0, 0, 0],
      rotY: [-50, -20, 50, 70, -30, 0, 100],
      rotZ: [0, 0, 0, 0, 0, 0, 0],
      x: [0, -10, -13, -5, 3, -10, -2],
      y: [-1.1, -1.1, -1.1, -1.1, -1.1, -1.1, -1.4],
      z: [0, 15, 25, 30, 40, 55, 67],
    },
    { loop: "RESTART", easing: "LINEAR", duration: 3.5 }
  )
  .addTo(world);

// Create the scene and add the grass
renderScene({
  root: world,
  environment: "midday_clear_01",
});
