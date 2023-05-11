import React from "react";

import { HDKComponent, HNode } from "@hiber3d/hdk-react";

import { LoopBehaviour } from "@hiber3d/hdk-core";

const keyframeAnimated = { loopBehaviour: "REVERSE" as LoopBehaviour };

const pause = 600;
const speed = 20;

export const Wagyu: HDKComponent = (props) => {
  return (
    <HNode>
      <HNode {...props} keyframeAnimated={keyframeAnimated}>
        <HNode
          keyframe={{ easing: "EASE_IN_OUT_CUBIC", timestamp: 0 }}
          r={[0, 0, 0]}
        />
        <HNode
          keyframe={{ easing: "EASE_IN_OUT_CUBIC", timestamp: pause }}
          r={[0, 0, 0]}
        />
        <HNode
          keyframe={{
            easing: "EASE_IN_OUT_CUBIC",
            timestamp: pause + 2 * speed,
          }}
          r={[-90, 0, 0]}
        />
        <HNode
          keyframe={{
            easing: "EASE_IN_OUT_CUBIC",
            timestamp: pause + 2 * speed + 2,
          }}
          r={[-90, 0, 0]}
        />
        <HNode p={[0, 0, 140]}>{props.children}</HNode>
      </HNode>
    </HNode>
  );
};
