import React from "react";
import { Grid } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Containers } from "./Containers";
import { RampedGrid } from "./RampedGrid";
import { Giants } from "./Giants";

export const Platform: HDKComponent = (input) => (
  <HNode {...input}>
    <Grid
      rows={10}
      columns={2}
      itemSpacing={8}
      children={() => {
        return <Prefab id="en_p_grid_platform_01" scale={[2.2, 1, 2.2]} />;
      }}
    ></Grid>
    <Containers z={0} x={-20} />
    <Giants p={[-10, 2, -10]} />
    <RampedGrid p={[8, 20, 64]} scale={[1, 1, 1]} />
  </HNode>
);
