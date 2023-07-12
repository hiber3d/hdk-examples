import { HDKComponent, useRandom, HNode, Prefab, Random } from '@hiber3d/hdk-react';
import { SkyScraper, Distribute, VideoPanel } from '@hiber3d/hdk-react-components';

import { lookAt } from '@hiber3d/hdk-utils';
import { useContent } from '../useContent';

function roundToClosest90(degrees: number): number {
  // Ensure the input degree is between 1 and 360
  const normalizedDegrees = ((degrees % 360) + 360) % 360;

  // Round the degree to the nearest 90
  const roundedDegrees = Math.round(normalizedDegrees / 90) * 90;

  // Ensure the result is between 0 and 360 (0 and 360 are equivalent)
  return roundedDegrees % 360;
}

type AdProps = {
  parentHeight: number;
  videoAds: string[];
};

export const Ad: HDKComponent<AdProps> = ({ parentHeight, videoAds, ...props }) => {
  const random = useRandom();

  if (random.value() <= 0.7) {
    return null;
  }

  const y = parentHeight * random.range(0.25, 0.5);
  const src = random.fromArray(videoAds);

  return (
    <HNode {...props}>
      <VideoPanel y={y} scale={13} z={-22} src={src} emissiveStrength={20} muted />
    </HNode>
  );
};

export const City: HDKComponent = () => {
  const content = useContent();

  return (
    <Random seed={10}>
      <Distribute
        rotY={90}
        outerBoundRadius={150}
        gladeRadius={45}
        itemAreaSizeMin={35}
        itemAreaSizeMax={45}
        gapSizeMin={5}
        gapSizeMax={5}
        gapFrequency={0}
        renderItem={item => {
          const { x, z } = item;

          const adRotation = lookAt([0, 0, 0], [x, 0, z]);
          const adRotationY = roundToClosest90(adRotation[1]);

          return (
            <SkyScraper theme="cyan" scale={0.9}>
              {({ height }) => (
                <Random seed={12345}>
                  <Ad parentHeight={height} rotY={adRotationY} videoAds={content.videoAds} />
                </Random>
              )}
            </SkyScraper>
          );
        }}
      />
      {!content.shop && (
        <>
          <HNode x={67} y={80} z={52} scaleX={1.8} scaleY={20} scaleZ={3}>
            <Prefab id="gpl_booster_plate_02" rotY={120} rotX={30} />
          </HNode>
          <Prefab id="animated_light_02" x={54} y={82} z={32} />
          <Prefab id="collectible_gem_01" x={54} y={82} z={32} scale={3} />
          <Prefab id="collectible_gem_01" x={-7} y={25} z={8} scale={1.5} />
          <Prefab id="collectible_gem_01" x={0} y={25} z={0} scale={1.5} />
        </>
      )}
    </Random>
  );
};
