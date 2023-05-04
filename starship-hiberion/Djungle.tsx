import { Prefab as PrefabId } from "@hiber3d/hdk-core";
import {
  HDKComponent,
  HNode,
  Prefab,
  Random,
  useRandom,
} from "@hiber3d/hdk-react";
import { Distribute, Hovering } from "@hiber3d/hdk-react-components";

import { Fish } from "./Fish";
import { Mist } from "./Mist";

const fishSpeed = 5;

const garbage = [
  { id: "bull_skull_01", s: 2, r: [0, 0, 0] },
  { id: "water_lily_flower_01", s: 1, r: [0, 0, 0] },
  { id: "water_lily_pad_01", s: 1, r: [0, 0, 0] },
  { id: "en_p_jaguar_head_01_t1", s: 0.5, r: [0, 0, 0] },
  { id: "en_p_infested_arm_01", s: 2, r: [0, 0, 90] },
  { id: "en_p_infested_hand_01", s: 2, r: [0, 0, 90] },
];

// tree_house_balcony // fantasy_tree_01 // fantasy_tree_01 // en_p_tomato_plant_01

export const Djungle: HDKComponent = (props) => {
  const random = useRandom();

  return (
    <>
      <Prefab
        dealDamageOnTouch={{
          amount: 10,
          knockbackStrengthInProcent: 0,
        }}
        visibility="never"
        id="plane_01"
        s={[1, 2, 1.1]}
        p={[0, -36, 55]}
      />
      <HNode p={[0, -33.5, 50]}>
        <Distribute
          outerBoundRadius={35}
          gapFreq={0.7}
          gapMax={4}
          gapMin={2}
          spaceMax={13}
          spaceMin={12}
          gladeRadius={12}
          renderItem={(item) => (
            <Prefab x={item.x} z={item.z} id="glowing_mushroom" s={[2, 1, 2]} />
          )}
        ></Distribute>
      </HNode>
      <HNode p={[0, -29.5, 40]}>
        <Distribute
          maxItems={100}
          outerBoundRadius={20}
          gapFreq={0.2}
          gapMax={30}
          gapMin={3}
          spaceMin={4}
          spaceMax={30}
          gladeRadius={1}
          renderItem={(item) => {
            const g = random.fromArray(garbage);

            return (
              <Hovering magnitude={0.05}>
                <Prefab
                  x={item.x}
                  z={item.z}
                  r={[g.r[0], g.r[1] + random.int(0, 360), g.r[2]]}
                  id={g.id as PrefabId}
                  s={g.s}
                />
              </Hovering>
            );
          }}
        ></Distribute>
      </HNode>
      <Prefab id="water_plane_01" s={[10, 10, 18]} p={[0, -50, 65]} />
      <Mist p={[0, -32, 60]} />
      <HNode p={[0, -31.2, 0]}>
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
        <Fish dim={[10, 0, 120]} speed={fishSpeed} />
      </HNode>
      <Random seed={12}>
        <HNode p={[20, -26, 68]}>
          <Fish s={8} dim={[15, 0, 8]} speed={fishSpeed} />
        </HNode>
      </Random>
    </>
  );
};
