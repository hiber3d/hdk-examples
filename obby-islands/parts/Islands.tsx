import { PrefabId } from '@hiber3d/hdk-core';
import { Prefab, useRandom } from '@hiber3d/hdk-react';
import { Distribute } from '@hiber3d/hdk-react-components';

export function Islands() {
  return (
    <Distribute
      maxItems={400}
      spaceMin={35}
      spaceMax={45}
      gladeRadius={20}
      gapFreq={0}
      outerBoundRadius={200}
      renderItem={item => {
        const random = useRandom();
        if (!item.isSpace) return null;
        const { x, z } = item;
        const id: PrefabId = random.fromArray(['cliff_01_formation', 'cliff_01_wall', 'cliff_01_pillar']);
        const ret = (
          <Prefab id={id} x={x} z={z} y={random.range(-10, 3)} rotY={random.range(0, 360)} scale={random.range(1, 5)} />
        );
        return ret;
      }}
    />
  );
}
