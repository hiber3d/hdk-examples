import { HNode, Prefab, HDKComponent, useRandom } from "@hiber3d/hdk-react";
import { Stack, Avatar, Grid } from "@hiber3d/hdk-react-components";
import { Mesh, Material, animations } from "@hiber3d/hdk-core";

export const Giants: HDKComponent = (props) => {
  const meshID: Mesh = "ch_pl_gaia_01";
  const materialID: Material = "t_icy_water_01";
  // const materialID: Material = "ch_pl_gaia_01_t1";

  const random = useRandom();

  const poses = [
    animations.an_default_buildidle,
    animations.an_default_emote_yes,
    animations.an_default_emote_applaud,
    animations.an_default_defeat_01,
    animations.an_default_emote_facepalm,
  ];
  let index = 0;
  return (
    <HNode {...props}>
      <HNode rotX={-90}>
        <Grid
          rows={5}
          columns={5}
          itemSpacing={15}
          children={(data) => {
            const animation = poses[index % poses.length];
            index++;
            return (
              <HNode rotX={15}>
                <HNode
                  rotX={45}
                  s={10}
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
                  rotX={30}
                  z={0}
                  y={-1}
                  s={[3, 10, 2]}
                />
              </HNode>
            );
          }}
        />
      </HNode>
    </HNode>
  );
};
