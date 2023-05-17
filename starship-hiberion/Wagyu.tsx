import { HDKComponent, HNode, Animation } from "@hiber3d/hdk-react";

import { LoopBehaviour } from "@hiber3d/hdk-core";

const keyframeAnimated = { loopBehaviour: "REVERSE" as LoopBehaviour };

const pause = 1;
const speed = 1;

export const Wagyu: HDKComponent = ({ children, ...props }) => {
  return (
    <HNode {...props}>
      <Animation
        animation={{
          rotX: [0, 0, -90, -90],
          loop: "REVERSE",
          easing: "EASE_IN_OUT_CUBIC",
          steps: [pause, speed, pause, speed],
          duration: 20,
        }}
      >
        {children}
      </Animation>
    </HNode>
  );
};
