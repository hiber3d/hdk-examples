import React from "react";
import { Grid } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Containers } from "./Containers";
import { RampedGrid } from "./RampedGrid";

export const Platform: HDKComponent = (input) => (
  <HNode {...input}>
    <Grid
      rows={10}
      columns={2}
      itemSpacing={8}
      children={() => {
        return <Prefab id="en_p_grid_platform_01" s={[2.2, 1, 2.2]} />;
      }}
    ></Grid>
    <Containers z={0} x={-20} />
    <RampedGrid p={[8, 20, 64]} s={[1, 1, 1]} />
  </HNode>
);
