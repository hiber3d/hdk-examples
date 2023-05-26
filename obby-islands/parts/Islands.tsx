import { PrefabId } from "@hiber3d/hdk-core";
import { Prefab, useRandom } from "@hiber3d/hdk-react";
import { Distribute } from "@hiber3d/hdk-react-components";

export function Islands() {
  return (
    <Distribute
      maxItems={400}
      itemAreaSizeMin={35}
      itemAreaSizeMax={45}
      gladeRadius={20}
      gapFrequency={0}
      outerBoundRadius={200}
      renderItem={(item) => {
        const random = useRandom();
        const id: PrefabId = random.fromArray([
          "cliff_01_formation",
          "cliff_01_wall",
          "cliff_01_pillar",
        ]);
        const ret = (
          <Prefab
            id={id}
            y={random.range(-10, 3)}
            rotY={random.range(0, 360)}
            scale={random.range(1, 5)}
          />
        );
        return ret;
      }}
    />
  );
}
