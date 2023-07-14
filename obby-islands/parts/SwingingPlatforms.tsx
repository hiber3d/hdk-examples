import { HNode, Prefab } from '@hiber3d/hdk-react';
import { Path, Swinging } from '@hiber3d/hdk-react-components';

export function SwingingPlatforms() {
  return (
    <Path
      y={-10}
      points={[
        [-7, 4.8, -7],
        [-31, 13, -36],
      ]}
      numberOfItems={5}
      renderItem={() => (
        <HNode rotY={45} rotX={10}>
          <Swinging degZ={20} duration={3}>
            <Prefab y={10} id="en_m_wooden_platform_01_ceiling" />
          </Swinging>
        </HNode>
      )}
    />
  );
}
