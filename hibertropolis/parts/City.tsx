import {
  HDKComponent,
  useRandom,
  HNode,
  Prefab,
  Random,
} from "@hiber3d/hdk-react";
import {
  SkyScraper,
  Distribute,
  VideoPanel,
} from "@hiber3d/hdk-react-components";

import { lookAt } from "@hiber3d/hdk-utils";

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
};

export const Ad: HDKComponent<AdProps> = ({ parentHeight, ...props }) => {
  const random = useRandom();

  if (random.value() <= 0.7) {
    return null;
  }

  const y = parentHeight * random.range(0.25, 0.5);
  const src = random.fromArray([
    "https://cdn.hibervr.com/video/Hiber3D-noaudio.mp4",
    "https://cdn.hibervr.com/video/Cubes_Loop.mp4",
    "https://cdn.hibervr.com/video/Cubes_Waves.mp4",
  ]);

  return (
    <HNode {...props}>
      <VideoPanel y={y} scale={13} z={-22} src={src} emissiveStrength={20} />
    </HNode>
  );
};

export const City = () => (
  <Random seed={10}>
    <Distribute
      rotY={90}
      outerBoundRadius={150}
      gladeRadius={45}
      spaceMin={35}
      spaceMax={45}
      gapMin={5}
      gapMax={5}
      gapFreq={0}
      renderItem={(item) => {
        if (!item.isSpace) {
          return null;
        }

        const { x, z } = item;

        const adRotation = lookAt([0, 0, 0], [x, 0, z]);
        const adRotationY = roundToClosest90(adRotation[1]);

        return (
          <SkyScraper x={x} z={z} theme="cyan" scale={0.9}>
            {({ height }) => (
              <Random seed={12345}>
                <Ad parentHeight={height} rotY={adRotationY} />
              </Random>
            )}
          </SkyScraper>
        );
      }}
    />
    <HNode x={67} y={80} z={52} scaleX={1.8} scaleY={20} scaleZ={3}>
      <Prefab id="gpl_booster_plate_02" rotY={120} rotX={30} />
    </HNode>
    <Prefab id="animated_light_02" x={54} y={82} z={32} />
    <Prefab id="collectible_gem_01" x={54} y={82} z={32} scale={3} />
    <Prefab id="collectible_gem_01" x={-7} y={25} z={8} scale={1.5} />
    <Prefab id="collectible_gem_01" x={0} y={25} z={0} scale={1.5} />
  </Random>
);
