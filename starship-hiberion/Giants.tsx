import {
  HNode,
  Prefab,
  PointLight,
  HDKComponent,
  useRandom,
  SpotLight,
} from "@hiber3d/hdk-react";
import { SegmentedStack, Avatar, Grid } from "@hiber3d/hdk-react-components";
import { animations, MaterialId, MeshId } from "@hiber3d/hdk-core";

export const Giants: HDKComponent = (props) => {
  const materials: MaterialId[] = [
    "t_ice_01",
    "t_ice_02",
    "t_ice_03",
    "t_icy_water_01",
  ];
  const avatars: MeshId[] = [
    "ch_pl_gaia_01",
    "ch_pl_hibert_astronaut_01",
    "ch_pl_hibert_diver_01",
    "ch_pl_hibert_scifi_01",
    "ch_pl_hibertina_astronaut_01",
  ];
  const random = useRandom();

  const poses = [
    animations.an_default_buildidle,
    animations.an_default_emote_yes,
    animations.an_default_emote_no,
    animations.an_default_emote_chickendance,
    animations.an_default_emote_facepalm,
  ];
  let index = 0;
  return (
    <HNode {...props}>
      <HNode rotX={-90}>
        <Grid
          rows={2}
          columns={4}
          itemSpacing={15}
          children={(data) => {
            const animation = poses[index % poses.length];
            const meshID: MeshId = avatars[index % avatars.length];
            const materialID: MaterialId = materials[index % materials.length];
            index++;
            return (
              <HNode rotX={15}>
                <HNode
                  rotX={45}
                  scale={8}
                  engineProps={{
                    rendering: {
                      meshID,
                      materialID,
                    },
                    skinnedAnimation: {
                      animationID: animation.id,
                      skeletonGroupID: animation.skeletonGroupID,
                      animationSpeed: random.range(0.01, 0.02),
                    },
                  }}
                ></HNode>
                <Prefab
                  material="glass"
                  id="rounded_cube_02"
                  rotX={35}
                  z={0}
                  y={-4}
                  scaleX={5}
                  scaleY={10}
                  scaleZ={5}
                ></Prefab>
                <Prefab
                  z={5}
                  id="hiberpunk_blocks_f1_01"
                  x={7}
                  scaleZ={7.6}
                  scaleY={4}
                />
              </HNode>
            );
          }}
        />
      </HNode>
    </HNode>
  );
};
