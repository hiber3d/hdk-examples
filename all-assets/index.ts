import { renderScene, create, prefabs, materials } from "@hiber3d/hdk-core";

const world = create({ y: -1 });

/////////////////////////////////////////// - NOTE - ////////////////////////////////////////
///// Due to the large number of assets being added you will need to have DevTools open /////
/////////////////////////////////////////////////////////////////////////////////////////////
const enableLargeAssets = true;
const enableMaterials = true;
const enableGround = true;

// Add separate placement for larger assets currently in 'optionalIds"
const optionalIds = [
  "gpl_mechanic_count_down_timer_01",
  "large_snow_plane_01",
  "large_sand_plane_01",
  "large_stone_floor_plane_01",
  "large_stone_tiles_plane_03",
  "plane_terrain_01",
  "plane_terrain_02",
  "grass_plane_01",
  "plane_01",
  "plane_02",
  "plane_03",
  "mountain_02",
  "mountain_01",
  "unnamed",
  "en_m_hiberpunk_building_01_bottom",
  "en_m_hiberpunk_building_01_middle",
  "en_m_hiberpunk_building_02_bottom",
  "en_m_hiberpunk_building_02_middle",
  "en_m_hiberpunk_building_02_middle_02",
  "en_m_hiberpunk_building_02_top",
  "en_m_hiberpunk_building_01_top",
  "en_m_hiberpunk_building_01_middle_02",
  "en_m_hiberpunk_building_03_bottom",
  "en_m_hiberpunk_building_03_middle",
  "en_m_hiberpunk_building_03_top",
];

// Add ID if specific prefabs should be completely excluded
const excludeIds = ["gpl_mechanic_count_down_timer_01"];

// Adding all assets not included in "excludeIds"
let z = 20; // Increase to have more space between each row to acommadate larger assets
let x = 0;
let offset = 100;
let i = 0;

for (const prefab in prefabs) {
  if (
    !optionalIds.includes(prefabs[prefab].id) &&
    !excludeIds.includes(prefabs[prefab].id)
  ) {
    x += 35; // Increase to have more space between asset in the rows
    create({
      prefabId: prefabs[prefab].id,
      y: 20, //Set higher for assets to be above fog
      x: 0 + x,
      z: z + offset,
      infoPanel: {
        header: "Asset ID:",
        preBody: prefabs[prefab].id,
        maxShowDistance: 40,
        minShowDistance: 0,
      },
    }).addTo(world);
    i += 1;
    if (i % 10 === 0) {
      offset += z;
      x = 0;
      i = 0;
    }
  }
}

// Adds all larger prefabs added in "excludeIds" - Can be enabled/disabled by changin "enableLargeAssets"
if (enableLargeAssets) {
  let z_L = -150; // Increase to have more space between each row to acommadate larger assets
  let x_L = -100;
  let offset_L = -20;
  let i_L = 0;

  for (const prefab in prefabs) {
    if (
      optionalIds.includes(prefabs[prefab].id) &&
      !excludeIds.includes(prefabs[prefab].id)
    ) {
      x_L += 190; // Increase to have more space between asset in the rows
      create({
        prefabId: prefabs[prefab].id,
        y: 20, //Set higher for assets to be above fog
        x: -50 + x_L,
        z: z_L + offset_L,
        infoPanel: {
          header: "Asset ID:",
          preBody: prefabs[prefab].id,
          maxShowDistance: 40,
          minShowDistance: 0,
        },
      }).addTo(world);
      i_L += 1;
      if (i_L % 6 === 0) {
        offset_L += z_L;
        x_L = 0;
        i_L = 0;
      }
    }
  }
}

//Adds cube for each of the available materials
if (enableMaterials) {
  let z_m = 20; // Increase to have more space between each row to acommadate larger assets
  let x_m = 0;
  let offset_m = 100;
  let i_m = 0;

  for (const material in materials) {
    x_m += 20; // Increase to have more space between asset in the rows
    create({
      prefabId: "cube",
      material: materials[material].id,
      y: 20, //Set higher for assets to be above fog
      x: -150 + x_m,
      z: z_m + offset_m,
      infoPanel: {
        header: "Asset ID:",
        preBody: materials[material].id,
        maxShowDistance: 40,
        minShowDistance: 0,
      },
    }).addTo(world);
    i_m += 1;
    if (i_m % 6 === 0) {
      offset_m += z_m;
      x_m = 0;
      i_m = 0;
    }
  }
}

// Plane to add specific assets
const TestPlane = create({ prefabId: "plane_02", y: 20, z: 60 }).addTo(world);

if (enableGround) {
  create({
    prefabId: "plane_02",
    y: 17,
    x: 100,
    z: 590,
    scaleY: 0.5,
    scaleX: 18,
    scaleZ: 30,
  }).addTo(world);
}

create("tree_02", {
  x: 0,
  y: 3,
  z: 0,
}).addTo(TestPlane);

create("gpl_spawn_point_01", {
  y: 1,
  x: 5,
}).addTo(TestPlane);

renderScene({ root: world, environment: "midday_clear_01" });
