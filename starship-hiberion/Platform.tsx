import React from "react";
import { Grid } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Containers } from "./Containers";
import { RampedGrid } from "./RampedGrid";
import { Giants } from "./Giants";
import { StarshipComponent } from "./types";

export const Platform: StarshipComponent = ({
  debug = false,
  interior = true,
  ...props
}) => (
  <HNode z={80} y={-26}>
    <Grid
      rows={19}
      columns={11}
      itemSpacing={8}
      renderItem={() => {
        return <Prefab id="en_p_grid_platform_01" scaleX={2.2} scaleZ={2.2} />;
      }}
    ></Grid>
    <Containers z={0} x={-20} />
    {debug && interior && (
      <HNode x={0} y={0} z={0} rotY={90}>
        <Prefab id="hiberpunk_decoration_disc_t1" scale={2}>
          <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
        </Prefab>
      </HNode>
    )}
    <HNode y={11} z={-43}>
      <HNode x={35}>
        <Giants rotY={-90} />
      </HNode>
      <HNode x={-35} rotY={180}>
        <Giants rotY={-90} />
      </HNode>
    </HNode>
    <RampedGrid x={8} y={20} z={64} />
  </HNode>
);
