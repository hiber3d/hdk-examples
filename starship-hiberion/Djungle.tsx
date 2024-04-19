import { PrefabId, Scale3, Vec3 } from "@hiber3d/hdk-core";
import {
  HDKComponent,
  HNode,
  Prefab,
  Random,
  useRandom,
  ApplyMaterial,
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

const pondGarbage: {
  id: PrefabId;
  scale: number;
  rot: Vec3;
}[] = [
  { id: "bull_skull_01", scale: 2, rot: [0, 0, 0] },
  { id: "water_lily_flower_01", scale: 1, rot: [0, 0, 0] },
  { id: "water_lily_pad_01", scale: 1, rot: [0, 0, 0] },
  { id: "en_p_jaguar_head_01_t1", scale: 0.5, rot: [0, 0, 0] },
  { id: "en_p_infested_arm_01", scale: 2, rot: [0, 0, 90] },
  { id: "en_p_infested_hand_01", scale: 2, rot: [0, 0, 90] },
];

// tree_house_balcony // fantasy_tree_01 // fantasy_tree_01 // en_p_tomato_plant_01

export const Djungle: HDKComponent = (props) => {
  const random = useRandom();

  return (
    <>
      <Invisible>
        <Damaging amount={10} knockbackStrength={100}>
          <Prefab id="plane_01" scaleY={2} scaleZ={1.1} x={0} y={-35} z={55} />
        </Damaging>
      </Invisible>
      <HNode x={0} y={-35.5} z={40}>
        <Distribute
          outerBoundRadius={35}
          gapFrequency={0.1}
          gapSizeMin={8}
          gapSizeMax={16}
          itemAreaSizeMin={10}
          itemAreaSizeMax={12}
          gladeRadius={15}
          renderItem={(item) => {
            return (
              item.isItem && (
                <Prefab
                  x={item.x}
                  z={item.z}
                  id="glowing_mushroom"
                  scaleX={2}
                  scaleY={1}
                  scaleZ={2}
                />
              )
            );
          }}
        ></Distribute>
      </HNode>
      <HNode x={0} y={-29.5} z={40}>
        <Distribute
          outerBoundRadius={20}
          gapFrequency={0.2}
          gapSizeMax={30}
          gapSizeMin={3}
          itemAreaSizeMin={4}
          itemAreaSizeMax={30}
          gladeRadius={1}
          renderItem={(item) => {
            const garbage = random.fromArray(pondGarbage);

            return (
              <Hovering magnitude={0.05}>
                <Prefab
                  x={item.x}
                  z={item.z}
                  rotX={garbage.rot[0]}
                  rotY={garbage.rot[1] + random.int(0, 360)}
                  rotZ={garbage.rot[2]}
                  id={garbage.id as PrefabId}
                  scale={garbage.scale}
                />
              </Hovering>
            );
          }}
        ></Distribute>
      </HNode>
      <Prefab
        id="water_plane_01"
        scaleX={10}
        scaleY={10}
        scaleZ={18}
        x={0}
        y={-50}
        z={65}
      />
      {/* <Mist p={[0, -32, 60]} /> */}

      <Random seed={14}>
        <HNode x={0} y={-30} z={40}>
          <Damaging amount={10} knockbackStrength={50}>
            <ApplyMaterial id="t_sci_fi_tile_02">
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
              <Fish dimensions={fishDimensions} speed={fishSpeed} />
            </ApplyMaterial>
          </Damaging>
        </HNode>
      </Random>
      <Random seed={13}>
        <HNode x={0} y={-26} z={90}>
          <Fish scale={8} dimensions={[3, 0, 3]} speed={fishSpeed} />
        </HNode>
      </Random>
    </>
  );
};
