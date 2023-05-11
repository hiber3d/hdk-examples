import React from "react";
import { Hovering, Spinning } from "@hiber3d/hdk-react-components";

import { HNode, Prefab } from "@hiber3d/hdk-react";

import { Sentinels } from "./Sentinels";

const Sentinel = (props: {
  y: number;
  z: number;
  startAt: number;
  duration: number;
}) => {
  return (
    <HNode
      y={props.y}
      z={props.z}
      animation={{
        z: [-60, -30, 0, 30, 60, 100],
        duration: props.duration,
        loop: "REVERSE",
        startAt: props.startAt,
        easing: "LINEAR",
      }}
    >
      <Hovering magnitude={5} rotZ={90}>
        <Spinning axis="z">
          <Spinning axis="y">
            <Prefab id="glowing_orb_01" s={[1, 1, 1]} />
          </Spinning>
          <Spinning axis="y">
            <Prefab id="h_sawblade_01" s={[1, 1, 1]} y={0.5} />
          </Spinning>
        </Spinning>
      </Hovering>
    </HNode>
  );
};

export const Sentinels = (props) => (
  <HNode>
    <Sentinel y={0} z={0} startAt={0} duration={2} />
    <Sentinel y={1} z={10} startAt={2} duration={3} />
    <Sentinel y={-1} z={-10} startAt={4} duration={3.5} />
    <Sentinel y={4} z={5} startAt={3} duration={1.5} />
    <Sentinel y={5} z={-5} startAt={4} duration={5} />
    <Sentinel y={-4} z={-10} startAt={5} duration={6} />
    <Sentinel y={-10} z={0} startAt={0} duration={2} />
    <Sentinel y={-10} z={-6} startAt={1} duration={8} />
    <Sentinel y={10} z={-6} startAt={2} duration={1.3} />
  </HNode>
);
