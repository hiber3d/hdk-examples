import React from "react";
import { Grid } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

export const RoofWalkway: HDKComponent = (props) => (
  <HNode {...props}>
    <Grid
      rows={14}
      columns={1}
      itemSpacing={8}
      children={(row, column) => {
        return <Prefab id="en_p_grid_platform_01" s={[2.2, 1, 2.2]} />;
      }}
    ></Grid>
  </HNode>
);
