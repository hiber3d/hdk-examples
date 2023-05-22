import { HDKComponent, HNode, Animation } from "@hiber3d/hdk-react";

import { LoopBehaviour } from "@hiber3d/hdk-core";

const keyframeAnimated = { loopBehaviour: "REVERSE" as LoopBehaviour };

const duration = 180;
const speed = 20;
const pause = duration - speed;

export const Wagyu: HDKComponent = ({ children, ...props }) => {
  return (
    <HNode {...props}>
      <Animation
        animation={{
          rotX: [0, 0, -90, -90],
          loop: "REVERSE",
          easing: "EASE_IN_OUT_QUAD",
          steps: [0, speed / duration, pause / duration, 1],
          duration,
        }}
      >
        <HNode z={240}>{children}</HNode>
      </Animation>
    </HNode>
  );
};
