import React from "react";
import { Distribute } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

export const Rocks: HDKComponent = (input) => (
  <HNode z={-240}>
    <Distribute
      itemAreaSizeMax={1}
      itemAreaSizeMin={0.5}
      gapSizeMin={0.5}
      gapSizeMax={1}
      gapFrequency={0.1}
      outerBoundRadius={30}
      gladeRadius={10}
      renderItem={(item) => {
        return <Prefab {...item} id="rock_pile_01_t1" scale={2} />;
      }}
    />
  </HNode>
);
