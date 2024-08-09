import React from 'react';
import { Prefab, HNode, Animation } from '@hiber3d/hdk-react';
import { useRandom } from '@hiber3d/hdk-react';
import { Checkpoint } from '@hiber3d/hdk-react-components';

export const Tree = () => {
  const random = useRandom();
  return (
    <Prefab id="jungle_tree_large" x={125} y={-8} scaleX={8} scaleY={4} scaleZ={8}>
      {Array.from({ length: 30 }).map((_, index) => (
        <Animation
          key={'sand-' + index}
          animation={{
            rotY: [0, 180, 360],
            loop: 'RESTART',
            easing: 'LINEAR',
            duration: 12,
            startAt: random.range(0, 12),
          }}>
          <Prefab
            id="rock_01_t1"
            material="t_rocky_sand_01"
            x={random.range(5, 9)}
            y={random.range(5, 25)}
            scale={random.range(0.1, 0.4)}
            rotY={(360 / 30) * index}
          />
        </Animation>
      ))}
      {Array.from({ length: 70 }).map((_, index) => (
        <HNode rotY={(220 / 50) * index} key={'wood-' + index}>
          <Prefab
            id="gpl_booster_plate_02"
            material="t_wood_01"
            x={-8}
            y={2 + index * 0.5}
            z={0}
            scale={0.5}
            rotX={20}
            rotY={180}>
            <Prefab id="fx_particlesystem_mist_01" />
            {index % 5 == 0 && <Checkpoint y={2.7} scale={2} engineProps={{ triggerBox: { size: [2, 2, 2] } }} />}
          </Prefab>
        </HNode>
      ))}
      <Prefab id="smooth_rock_02" material="t_rock_01" rotX={180} y={36.5} x={-3} z={-3}>
        <Prefab id="goal_01" material="palette_02_gold" rotZ={180} scaleX={0.5} scaleZ={0.5} />
      </Prefab>
    </Prefab>
  );
};
