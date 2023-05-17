import { HNode, render } from "@hiber3d/hdk-react";
import { Hovering } from "@hiber3d/hdk-react-components";
import { StarshipHiberion } from "./StarshipHiberion";
import { Wagyu } from "./Wagyu";

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
        <Hovering
          driftOff={true}
          driftOffDuration={4000}
          magnitude={0.001}
          rotX={90}
        >
          <HNode x={450} z={50} y={-150} rotX={-90}>
            <StarshipHiberion
              interior={false}
              scale={0.1}
              rotY={10}
              rotZ={-70}
            />
          </HNode>
          <StarshipHiberion
            interior={false}
            x={-100}
            z={-160}
            y={20}
            scale={0.1}
            rotZ={-20}
            rotX={-90}
          ></StarshipHiberion>
        </Hovering>
      </Wagyu>
    </HNode>
  );
};

render(<World />, {
  environment: "starry_night_01",
  //starry_night_01
  //planet_01
  //dark_city_night_01
  //underwater_01
  //hiberpunk_bloom_01
});
