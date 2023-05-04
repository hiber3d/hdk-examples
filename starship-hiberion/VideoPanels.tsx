import React from "react";

import { HDKComponent, HNode } from "@hiber3d/hdk-react";
import { VideoPanel } from "@hiber3d/hdk-react-components";

export const VideoPanels: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      <VideoPanel
        p={[44, 0, 0]}
        r={[-40, 90, 0]}
        ratio={833 / 1480}
        s={8}
        emissiveStrength={1.5}
        src="./static/gurl.mp4"
      ></VideoPanel>
      <VideoPanel
        p={[44, 0, 10]}
        r={[-40, 90, 0]}
        ratio={833 / 1480}
        s={8}
        emissiveStrength={1.5}
        src="./static/boi.mp4"
      ></VideoPanel>
      <VideoPanel
        p={[44, 0, 20]}
        r={[-40, 90, 0]}
        ratio={833 / 1480}
        s={8}
        emissiveStrength={1.5}
        src="./static/fayle.mp4"
      ></VideoPanel>
      <VideoPanel
        p={[-44, 0, 0]}
        r={[40, 90, 0]}
        ratio={498 / 211}
        s={8}
        emissiveStrength={1.5}
        src="./static/messug.mp4"
      ></VideoPanel>
    </HNode>
  );
};
