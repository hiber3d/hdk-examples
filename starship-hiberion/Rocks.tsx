import React from "react";
import { Distribute } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

export const Rocks: HDKComponent = (input) => (
  <HNode z={-240}>
    <Distribute
      spaceMax={1}
      spaceMin={0.5}
      gapMin={0.5}
      gapMax={1}
      gapFreq={0.1}
      outerBoundRadius={30}
      gladeRadius={10}
      renderItem={(item) => {
        return <Prefab {...item} id="rock_pile_01_t1" s={2} />;
      }}
    />
  </HNode>
);
