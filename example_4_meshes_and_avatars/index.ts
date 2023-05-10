import { animations, create, materials, renderScene } from "@hiber3d/hdk-core";
import { builder } from "@hiber3d/hdk-utils";

const hiberHeroImage =
  "https://images.ctfassets.net/jcfs1gimcmty/7mcRNmecRZ6zGobnQEUKhZ/e0c2bda3856279fe70eabd0dc2eb337b/hero.jpg?fm=jpg&q=75&fl=progressive";

/**
 * For this world, we will create an empty group as the world, to allow
 * for more flexibility in child rotation and positioning.
 */
const root = create({});

/**
 *
 * As shown in Example 6, you can add image to large objects, like a ground plane.
 *
 * Here we add an image directly to a plane to give the impression of water.
 * The plane is upscaled to stretch into the horizon.
 *
 * This will make the image repeat.
 */

root.add(
  builder("grass_plane_01", { p: [0, 0, 0], s: [10, 1, 10] }).setRemoteTexture({
    textureUrl:
      "https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg",
  })
);

root.add(create("gpl_spawn_point_01", { y: 1.5 }));

/**
 * Instead of using prefabs, you can render meshes directly.
 */
const sphere = builder({ p: [0, 5, 0] })
  .setRemoteTexture({ textureUrl: hiberHeroImage })
  .setRendering({ meshID: "en_b_sphere_01" });

root.add(sphere);

/**
 * You can switch out the material that is used. Here we choose a rocky sand for an island.
 */
const island = create("half_sphere_01", {
  p: [0, 2, 0],
  s: [10, 0.01, 10],
  material: "t_rocky_sand_01",
});

root.add(island);

/**
 * Some avatars are also available as meshes;
 * useful if you want to populate the scene with non-player characters or statues
 */
create({
  p: [-4, 2, -4],
  rendering: { meshID: "ch_pl_gaia_01", materialID: "t_stone_floor_01" },
}).addTo(root);

/**
 * Of course, as avatars are just meshes, you can animate them with simple animations.
 *
 * Here we choose to create two animations with different durations, which creates a more
 * organic, less repetitive effect.
 */
const inner = builder()
  .setRendering({
    meshID: "ch_pl_gaia_01",
    materialID: "ch_pl_gaia_01_t1" as keyof typeof materials,
  })
  .animate(
    { x: [0, 0.2], y: [0.3, 0], z: [0, 0.2] },
    { loop: "REVERSE", easing: "EASE_IN_OUT_QUAD", duration: 5 }
  );

const outer = create({ p: [-2, 3, -4] })
  .animate(
    { rotX: [15, -15], rotY: [0, 90], rotZ: [15, -15] },
    { loop: "REVERSE", easing: "EASE_IN_OUT_QUAD", duration: 7 }
  )
  .add(inner);

root.add(outer);

/**
 * You can apply pre-recorded skeletal animations to meshes. All built-in animations are available in the 'animations' collection.
 * Make sure you supply the right skeleton for your animation.
 */
const animation = animations.an_default_backflip;

builder({ p: [2, 2, -4] })
  .setRemoteTexture({
    textureUrl: hiberHeroImage,
  })
  .setRendering({ meshID: "ch_pl_gaia_01" })
  .setSkinnedAnimation({
    animationID: animation.id,
    skeletonGroupID: animation.skeletonGroupID,
  })
  .addTo(root);

/**
 * You can even use animation for external '.glb' meshes.
 * At the moment, there are only skeleton groups available for Hiber avatars and
 * Ready Player Me avatars, so make sure that you specify the correct skeleton
 * for the GLB and corresponding and correctly cased skeletonGroupId for the animation.
 */
const inner2 = builder()
  .setGlb(
    "https://d1a370nemizbjq.cloudfront.net/f01afd2c-e487-4309-8c5f-ef1fa6c2b59d.glb"
  )
  .setSkinnedAnimation({
    animationID: animation.id,
    skeletonGroupID: "skg_rpm_male",
  });

/**
 * Here we do the same trick as above, combining skeletal with keyframe animations
 * to add some organic variation.
 */
const outer2 = create({ p: [4, 2, -4] })
  .animate(
    { rotY: [0, -70, 0, 70] },
    { loop: "REVERSE", easing: "EASE_IN_OUT_QUAD", duration: 5 }
  )
  .addTo(root);

outer2.add(inner2);

/**
 * Please see Example 1 for details about scene construction and rendering.
 */
renderScene({
  environment: "above_clouds_01",
  root,
});
