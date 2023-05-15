import { Animation, Prefab } from '@hiber3d/hdk-react';
import { Path } from '@hiber3d/hdk-react-components';

export function LiftingPlatforms() {
  return (
    <Path
      points={[
        [-135, 16, -79.8],
        [-136, 13, -106],
      ]}
      numberOfItems={5}
      renderItem={({ progress }) => (
        <Animation
          animation={{
            y: [-20, 0],
            duration: 2,
            easing: 'EASE_OUT_EXPO',
            startAt: progress,
          }}>
          <Prefab id="en_m_wooden_platform_01_ceiling" />
        </Animation>
      )}
    />
  );
}
