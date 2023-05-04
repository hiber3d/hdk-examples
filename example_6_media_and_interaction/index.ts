/**
 * This example file will explain how to use external assets like web pages,
 * meshes, videos and images.
 *
 * Refer to Example 1 for information about basic code structure.
 */

import { renderScene, create, animations, Vec3 } from "@hiber3d/hdk-core";
import { video, image } from "@hiber3d/hdk-utils";

const root = create("smooth_rock_cylinder_01", { y: -1 });

/**
 * If you just want a screen to show a video or an image on, you can use the corresponding helper.
 */
video({
  url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ratio: 16 / 9,
  scale: 2,
  y: 3,
  x: -10,
  z: 8,
}).addTo(root);

image({
  url: "https://cdn.hibervr.com/static/images/collage.jpg",
  ratio: 16 / 9,
  scale: 2,
  x: 8,
  y: 3,
  z: 8,
}).addTo(root);

/**
 * This example shows applying an image to an object.
 */
const hiberHeroImage =
  "https://images.ctfassets.net/jcfs1gimcmty/7mcRNmecRZ6zGobnQEUKhZ/e0c2bda3856279fe70eabd0dc2eb337b/hero.jpg?fm=jpg&q=75&fl=progressive";

const cliff = create("cliff_01_pillar", {
  transform: {
    pos: [7, 6, 5],
  },

  remoteTexture: { textureUrl: hiberHeroImage },
});

root.add(cliff);

/**
 * This can be used to bring in generated images from outside,
 * which is handy if you want to add text signs, or generated content.
 */
const signText = "You can generate text as image.";
const textImageServiceUrl = `https://placehold.co/200x100/111/FFF/JPG?text=${signText}`;

const ratio = 16 / 9;
const scale: Vec3 = [ratio, 1, 0.001];

const signWithText = create("cube_01", {
  remoteTexture: { textureUrl: textImageServiceUrl },
  name: "Image Cube Example",
  transform: {
    scale,
  },
  z: 1,
  y: 4,
  rotY: 0,
});

root.add(signWithText);

/**
 * You can also add an 'InfoPanel' to an object, which will show a flat panel that is always facing the user.
 * It's interactive, so pressing interaction buttons can open a web page.
 */
create("sign_arrow_01", {
  y: 2,
  rotY: 180,
  z: 1,
  infoPanel: {
    header: "Header",
    preBody: "Pre body: ",
    body: "This is the body text",
    url: "https://hiberworld.github.io/codekit",
    isOpenInOverlayEnabled: true,
    isOpenInNewTabEnabled: true,
  },
}).addTo(root);

/**
 * As shown in Example 4, you can bring in external GLB meshes.
 */
create({
  transform: { pos: [0, 4, 0] },
  glb: "https://d1a370nemizbjq.cloudfront.net/f01afd2c-e487-4309-8c5f-ef1fa6c2b59d.glb",

  skinnedAnimation: {
    animationID: animations.an_default_backflip.id,
    skeletonGroupID: "skg_rpm_female",
  },
}).addTo(cliff);

/**
 *  Finally, we render the scene.
 */

renderScene({
  root,
  environment: "planet_01",
});
