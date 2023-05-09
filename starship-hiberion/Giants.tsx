import {
  HNode,
  Prefab,
  PointLight,
  HDKComponent,
  useRandom,
} from "@hiber3d/hdk-react";
import { SegmentedStack, Avatar, Grid } from "@hiber3d/hdk-react-components";
import {
  Mesh,
  Material,
  animations,
  MaterialId,
  MeshId,
  meshes,
} from "@hiber3d/hdk-core";

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
    animations.an_default_emote_applaud,
    animations.an_default_emote_facepalm,
  ];
  let index = 0;
  return (
    <HNode {...props}>
      <HNode rotX={-90}>
        <Grid
          rows={3}
          columns={4}
          itemSpacing={15}
          children={(data) => {
            const animation = poses[index % poses.length];
            const meshID: Mesh = avatars[index % avatars.length];
            const materialID: MaterialId = materials[index % materials.length];
            index++;
            return (
              <HNode rotX={15}>
                <HNode
                  rotX={45}
                  s={8}
                  engineProps={{
                    rendering: {
                      meshID,
                      materialID,
                    },
                    skinnedAnimation: {
                      animationID: animation.id,
                      skeletonGroupID: animation.skeletonGroupID,
                      animationSpeed: random.range(0.001, 0.01),
                    },
                  }}
                ></HNode>
                <Prefab
                  material="t_ice_01"
                  id="rounded_cube_02"
                  rotX={35}
                  z={-2}
                  y={-1}
                  s={[3, 10, 3]}
                ></Prefab>
              </HNode>
            );
          }}
        />
      </HNode>
    </HNode>
  );
};
