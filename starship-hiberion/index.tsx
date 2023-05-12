import { HNode, render } from "@hiber3d/hdk-react";

import { StarshipHiberion } from "./StarshipHiberion";
import { Wagyu } from "./Wagyu";
import { Giants } from "./Giants";
import { Prefab } from "@hiber3d/hdk-react";
import { Hovering, SegmentedStack } from "@hiber3d/hdk-react-components";
import React from "react";

const World = () => {
  return (
    <HNode>
      {/* <SegmentedStack
        dimensions={5}
        segments={{ length: 4, direction: "IN" }}
        renderItem={() => <Prefab id="cube_01" />}
      >
        <Prefab id="cactus_01" p={[0, 2, 0]} />
      </SegmentedStack> */}
      <Wagyu>
        <StarshipHiberion />
        <HNode x={500} z={-600} y={40}>
          <Hovering
            driftOff={true}
            driftOffDuration={3000}
            magnitude={0.001}
            rotX={90}
          >
            <StarshipHiberion
              interior={false}
              scale={0.2}
              rotY={20}
              rotX={-90}
              rotZ={-70}
            />
          </Hovering>
        </HNode>
        <Hovering driftOff={true} driftOffDuration={3000} magnitude={0.1}>
          <StarshipHiberion
            interior={false}
            x={100}
            z={100}
            y={100}
            scale={0.1}
            rotZ={-20}
          />
        </Hovering>
      </Wagyu>
    </HNode>
  );
};

const baseUrl = "https://dao-pr.dev.hiberdev.net/engine/dev/latest/production";

render(<World />, {
  environment: "starry_night_01",
  //starry_night_01
  //planet_01
  //dark_city_night_01
  //underwater_01
  //hiberpunk_bloom_01

  engineUrl: `${baseUrl}/hiber.js`,
  wasmUrl: `${baseUrl}/Hiberworld.wasm.gz`,
});
