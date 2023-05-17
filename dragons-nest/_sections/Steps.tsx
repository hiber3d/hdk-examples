import { HNode, Prefab } from '@hiber3d/hdk-react';
import { Hovering } from '@hiber3d/hdk-react-components';

export const Steps = () => {
  const length = 8;
  const items = Array.from({ length });

  return (
    <>
      {items.map((_, i) => (
        <Hovering y={-1} x={i * 8} magnitude={i === 0 ? 0 : 1} rotY={90}>
          <Prefab id="rock_cube_01_t2" scale={2}>
            <Prefab id="particle_jar_of_fireflies_01" y={1} />
            {i === 0 && <HNode spawnpoint={{}} y={2} x={i * 8} />}
            {i === length - 1 && <HNode checkpoint={{}} y={2} triggerBox={{ size: [2, 2, 2] }} />}
          </Prefab>
        </Hovering>
      ))}
    </>
  );
};
