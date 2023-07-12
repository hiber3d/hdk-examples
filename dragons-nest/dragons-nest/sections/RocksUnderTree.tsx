import { Prefab } from '@hiber3d/hdk-react';
import { useRandom } from '@hiber3d/hdk-react';

export const RocksUnderTree = () => {
  const random = useRandom();

  return (
    <>
      {Array.from({ length: 100 }).map((_, i) => (
        <Prefab
          key={'rock-' + i}
          id="rock_pile_01_t2"
          x={100 + random.int(0, 70)}
          y={-30 - random.int(0, 200)}
          z={-60 + random.int(0, 100)}
          scale={random.int(3, 13)}
          rotX={random.range(0, 360)}
          rotY={random.range(0, 360)}
          rotZ={random.range(0, 360)}
        />
      ))}
    </>
  );
};
