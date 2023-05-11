import { PrefabId, Scale3 } from "@hiber3d/hdk-core";
import {
  HDKComponent,
  HNode,
  Prefab,
  Random,
  useRandom,
  Material,
} from "@hiber3d/hdk-react";

import {
  Distribute,
  Hovering,
  Invisible,
  Damaging,
} from "@hiber3d/hdk-react-components";

import { Fish } from "./Fish";
import { Mist } from "./Mist";

const fishSpeed = 5;
const fishDimensions: Scale3 = [8, 0, 40];

const pondGarbage = [
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
      <Invisible>
        <Damaging amount={10} knockbackStrength={100}>
          <Prefab id="plane_01" s={[1, 2, 1.1]} p={[0, -35, 55]} />
        </Damaging>
      </Invisible>
      <HNode p={[0, -35.5, 40]}>
        <Distribute
          maxItems={100}
          outerBoundRadius={35}
          gapFreq={0.1}
          gapMin={8}
          gapMax={16}
          spaceMin={10}
          spaceMax={12}
          gladeRadius={15}
          renderItem={(item) => {
            return (
              item.isSpace && (
                <Prefab
                  x={item.x}
                  z={item.z}
                  id="glowing_mushroom"
                  s={[2, 1, 2]}
                />
              )
            );
          }}
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
            const g = random.fromArray(pondGarbage);

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
      {/* <Mist p={[0, -32, 60]} /> */}

      <Random seed={14}>
        {/* <HNode p={[30, -28, -40]}> */}
        <HNode p={[0, -30, 40]}>
          <Damaging amount={10} knockbackStrength={50}>
            <Material id="t_sci_fi_tile_02">
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
            </Material>
          </Damaging>
        </HNode>
      </Random>
      <Random seed={13}>
        <HNode p={[0, -26, 90]}>
          <Fish s={8} dimensions={[3, 0, 3]} speed={fishSpeed} />
        </HNode>
      </Random>
    </>
  );
};
