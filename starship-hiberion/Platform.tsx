import React from "react";
import { Grid } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Containers } from "./Containers";
import { RampedGrid } from "./RampedGrid";

export const Platform: HDKComponent = (input) => (
  <HNode p={[-10, -39.5, -72]}>
    <Grid
      rows={15}
      columns={15}
      itemSpacing={8}
      children={(row, column) => {
        return <Prefab id="en_p_grid_platform_01" s={[2.2, 1, 2.2]} />;
      }}
    ></Grid>
    <Containers z={0} x={-20} />
    <RampedGrid p={[8, 20, 64]} s={[1, 1, 1]} />
  </HNode>
);
