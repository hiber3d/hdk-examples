import { RandomSeed } from '@hiber3d/hdk-utils';
import { Prefab, Animation } from '@hiber3d/hdk-react';

const random = new RandomSeed();

export const FallingRocks = () => (
  <>
    <Prefab id="sphere_01" material="t_rock_03" z={-20} y={85} scale={60} />
    {Array.from({ length: 180 }).map((_, i) => (
      <Animation
        key={'rock-' + i}
        animation={{
          y: [20, -250],
          duration: 6,
          easing: 'EASE_IN_OUT_QUAD',
          loop: 'RESTART',
        }}>
        <Prefab
          id="rock_01_t1"
          material="t_rock_03"
          engineProps={{
            dealDamageOnTouch: {},
          }}
          x={random.range(0, 100) - 50}
          y={random.range(60, 160)}
          z={random.range(-50, 50)}
          rotY={random.range(0, 360)}
          scale={random.range(0.2, 1.5)}
        />
      </Animation>
    ))}
  </>
);
