import { Animation, HNode, Prefab } from '@hiber3d/hdk-react';
import { AsteroidSpinning, FibonacciSphere } from '@hiber3d/hdk-react-components';

export function ExpandingSphere() {
  return (
    <HNode x={-72} y={18} z={-60}>
      <AsteroidSpinning>
        <FibonacciSphere
          renderItem={
            <Animation
              animation={{
                z: [9, -3],
                duration: 5,
                easing: 'EASE_IN_OUT_ELASTIC',
              }}>
              <Prefab rotX={90} id="rock_01_t1" scale={0.3} />
            </Animation>
          }
        />
      </AsteroidSpinning>
    </HNode>
  );
}
