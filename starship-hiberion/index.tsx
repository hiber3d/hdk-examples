import { HNode, render } from "@hiber3d/hdk-react";

import { StarshipHiberion } from "./StarshipHiberion";
import { Wagyu } from "./Wagyu";

const World = () => {
  return (
    <HNode>
      <Wagyu>
        <StarshipHiberion />
      </Wagyu>
      {/* <Stack
      dim={5}
      segments={{ length: 4, direction: "IN" }}
      renderItem={() => <Prefab id="cube_01" />}
    >
      <Prefab id="cactus_01" p={[0, 2, 0]} />
    </Stack> */}
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
