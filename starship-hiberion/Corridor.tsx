import React from "react";
import {
  Stack,
  InCircle,
  MediaDisplay,
  ImagePanel,
} from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Hub } from "./Hub";
import { Sentinels } from "./Sentinels";
import { Platform } from "./Platform";
import { MeatGrinder } from "./MeatGrinder";

import { Djungle } from "./Djungle";
import { RoofWalkway } from "./RoofWalkway";
import { VideoPanels } from "./VideoPanels";

import { VideoPanel } from "@hiber3d/hdk-react-components";

export const Corridor: HDKComponent<{ length: number }> = (input) => {
  const { children, ...props } = input;
  const length = input.length;

  return (
    <HNode {...props}>
      <Stack
        numberOfItems={length}
        dimensions={16}
        direction="OUT"
        renderItem={() => <Prefab id="hiberpunk_blocks_o1_01" s={8} />}
      >
        {children}
      </Stack>
    </HNode>
  );
};
