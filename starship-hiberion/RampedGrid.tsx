import { SegmentedStack, Ramp } from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

export const RampedGrid: HDKComponent = (props) => (
  <HNode {...props}>
    <SegmentedStack
      dimensions={[5, 3, 3]}
      segments={[{ length: 2, direction: "LEFT" }]}
      renderItem={() => (
        <Ramp
        numberOfItems={5}
          gap={5.5}
          renderItem={() => <Prefab id="en_p_grid_platform_01" rotX={5} />}
        ></Ramp>
      )}
    ></SegmentedStack>
  </HNode>
);
