import { HDKComponent, useRandom, HNode, Prefab, Random } from '@hiber3d/hdk-react';
import { StairSystem, StairSystemItem, StairSystemOptions } from '@hiber3d/hdk-react-components';

import { PrefabId, TransformProperties } from '@hiber3d/hdk-core';

const stairTop: StairSystemOptions = {
  sections: [
    {
      repeats: 2,
      direction: 'IN',
    },
    {
      repeats: 2,
      direction: 'UP_RIGHT',
      offset: [-1, 0, -1],
    },
    {
      repeats: 1,
      direction: 'RIGHT',
    },
    {
      repeats: 2,
      direction: 'OUT',
    },
    {
      repeats: 2,
      direction: 'UP_OUT',
    },
    {
      repeats: 2,
      direction: 'OUT',
    },
    {
      repeats: 1,
      direction: 'UP_LEFT',
      offset: [1, 0, 1],
    },
    {
      repeats: 5,
      direction: 'LEFT',
    },
  ],
};

const stairsBottom: StairSystemOptions = {
  sections: [
    {
      repeats: 2,
      direction: 'IN',
    },
    {
      repeats: 1,
      direction: 'UP_IN',
    },
    {
      repeats: 3,
      direction: 'RIGHT',
    },
    {
      repeats: 5,
      direction: 'UP_RIGHT',
    },
    {
      repeats: 4,
      direction: 'OUT',
    },
    {
      repeats: 4,
      direction: 'UP_OUT',
    },
    {
      repeats: 5,
      direction: 'LEFT',
    },
    {
      repeats: 1,
      direction: 'UP_IN',
      offset: [-1, 0, 1],
    },
  ],
};

const Platform: HDKComponent = props => (
  <HNode {...props}>
    <Prefab id="en_p_grid_platform_01" y={-0.15} scale={0.5} rotY={180} children={props.children} />
  </HNode>
);
const Stair: HDKComponent = props => (
  <HNode {...props}>
    <Prefab id="en_p_grid_ramp_01" scale={0.5} y={-0.15} rotY={180} children={props.children} />
  </HNode>
);

const renderStairs = (data: StairSystemItem) => {
  const random = useRandom();
  const { direction, index, rotation } = data;
  const isRamp = direction.includes('_');

  const Component = isRamp ? Stair : Platform;

  if (data.progress < 0.1 || data.progress >= 0.85) {
    return <Component />;
  }

  const hasLight = index % 2 === 1;

  // Add transforms
  const transform: TransformProperties = {};
  if (!hasLight && random.value() < 0.5) {
    if (isRamp) {
      if (rotation[1] === -90) {
        transform.x = -0.5;
        transform.rotY = -15;
      } else if (![-180, -270, 90].includes(rotation[1])) {
        transform.y = -0.5;
        transform.rotZ = -15;
      }
    } else {
      if (rotation[1] === -90) {
        transform.x = -0.5;
        transform.y = -1;
        transform.rotX = 70;
        transform.rotZ = 10;
      } else if (rotation[1] === -180) {
        transform.y = -1;
        transform.z = -1;
        transform.rotX = 100;
        transform.rotZ = -10;
      } else if (rotation[1] === -270) {
        transform.y = -1;
        transform.z = -0.5;
      } else if (rotation[1] === 90) {
        transform.z = -0.5;
        transform.y = -1;
        transform.rotX = 70;
        transform.rotZ = 10;
      } else {
        transform.y = -1;
        transform.z = -0.5;
        transform.rotX = 70;
        transform.rotZ = 10;
      }
    }
  }

  return (
    <Component {...transform}>
      {hasLight && (
        <Prefab
          id={`animated_light_0${random.fromArray([1, 2, 3])}` as PrefabId}
          x={-1}
          y={isRamp ? 2 : 0.1}
          rotX={isRamp ? 45 : 0}
          scale={0.5}
        />
      )}
    </Component>
  );
};

export const Stairs = () => (
  <>
    <Random seed={1347}>
      <StairSystem {...stairTop} z={11} scale={2} y={55.7} renderItem={renderStairs} />
    </Random>
    <Random seed={12}>
      <StairSystem {...stairsBottom} x={15} y={12} z={5} scale={2} renderItem={renderStairs} />
    </Random>
  </>
);
