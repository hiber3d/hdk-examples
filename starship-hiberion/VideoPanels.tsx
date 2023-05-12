import React from "react";

import { HDKComponent, HNode } from "@hiber3d/hdk-react";
import { VideoPanel } from "@hiber3d/hdk-react-components";

export const VideoPanels: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      <VideoPanel
        x={44}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={3}
        src="https://lbsa71.github.io/starship-hiberion/gurl.mp4"
      ></VideoPanel>
      <VideoPanel
        x={44}
        z={10}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={3}
        src="https://lbsa71.github.io/starship-hiberion/boi.mp4"
      ></VideoPanel>
      <VideoPanel
        x={44}
        z={20}
        rotX={-40}
        rotY={90}
        ratio={833 / 1480}
        scale={8}
        emissiveStrength={3}
        src="https://lbsa71.github.io/starship-hiberion/fayle.mp4"
      ></VideoPanel>
      <VideoPanel
        x={-44}
        rotX={40}
        rotY={90}
        ratio={498 / 211}
        scale={8}
        emissiveStrength={3}
        src="https://lbsa71.github.io/starship-hiberion/messug.mp4"
      ></VideoPanel>
    </HNode>
  );
};
