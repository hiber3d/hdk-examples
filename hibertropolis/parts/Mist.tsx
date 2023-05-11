import { PrefabId } from '@hiber3d/hdk-core';
import { useRandom, Prefab } from '@hiber3d/hdk-react';
import { InCircle, Spinning } from '@hiber3d/hdk-react-components';

export const Mist = () => (
  <Spinning duration={256} direction={-1}>
    <InCircle
      y={140}
      radius={45}
      items={13}
      renderItem={() => {
        const random = useRandom();
        return (
          <Prefab
            id={'fx_particlesystem_mist_02' as PrefabId}
            x={random.range(-6, 6)}
            y={random.range(-40, 40)}
            z={random.range(-6, 6)}
            scale={3}
          />
        );
      }}
    />
  </Spinning>
);
