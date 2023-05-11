import { HNode, render } from "@hiber3d/hdk-react";

import { StarshipHiberion } from "./StarshipHiberion";
import { Wagyu } from "./Wagyu";
import { Giants } from "./Giants";
import { Prefab } from "@hiber3d/hdk-react";
import { SegmentedStack } from "@hiber3d/hdk-react-components";

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
        <StarshipHiberion
          interior={false}
          x={600}
          z={-600}
          y={40}
          scale={0.3}
          rotY={20}
          rotZ={20}
        />
        <StarshipHiberion
          interior={false}
          x={-100}
          z={50}
          y={100}
          scale={0.2}
          rotZ={-20}
        />
      </Wagyu>
    </HNode>
  );
};

const baseUrl = "https://dao-pr.dev.hiberdev.net/engine/dev/latest/production";

render(<World />, {
  environment: "planet_01",
  //starry_night_01
  //planet_01
  //dark_city_night_01
  //underwater_01
  //hiberpunk_bloom_01

  engineUrl: `${baseUrl}/hiber.js`,
  wasmUrl: `${baseUrl}/Hiberworld.wasm.gz`,
});
