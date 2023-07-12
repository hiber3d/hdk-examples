import { HDKComponent, HNode, PointLight, Prefab, useRandom } from '@hiber3d/hdk-react';
import { CircularStructure, CircularStructureProps, InCircle, WallOpening } from '@hiber3d/hdk-react-components';
import { CircularDisc } from './CircularDisc';

type MainWingProps = {
  roomSettings: CircularStructureProps;
  dim: number;
  radius: number;
  lightStrength?: number;
  tiltStrength?: number;
};

const wallOpening: WallOpening[] = [
  {
    // Inner wall
    type: 'door',
    progress: 0.25,
    widthInPercent: 0.31,
  },
  {
    type: 'window',
    progress: 0.61,
    widthInPercent: 0.6,
  },
];

export const MainWing: HDKComponent<MainWingProps> = ({
  radius,
  dim,
  roomSettings,
  lightStrength = 0.2,
  tiltStrength = 0.5,
  ...props
}) => {
  const random = useRandom();
  const items = (
    <HNode z={20.3} x={20.3} y={-1.2}>
      <InCircle
        faceCenter={true}
        y={dim * 1.7}
        items={[-0.35, -0.2, -0.15, 0.05, 0.13]}
        radius={radius * 1.3}
        renderItem={() => (
          <Prefab id="ivy_02" rotZ={90} rotY={90} scale={random.range(1.5, 2.5)} y={random.range(-12, -10)} rotX={5} />
        )}
      />
      {/* Main walls */}
      <CircularStructure
        {...roomSettings}
        radius={radius}
        dim={dim}
        tilt={-10 * tiltStrength}
        vertical={false}
        itemScaleAdjustment={1.5}
        wallOpening={wallOpening}></CircularStructure>
      {/* Roof outer circle */}
      <CircularStructure
        y={dim * 1.95}
        {...roomSettings}
        vertical={true}
        tilt={-20 * tiltStrength}
        numberOfSegments={30}
        itemScaleAdjustment={1.0}
        dim={dim * 0.08}
        radius={radius * 1.15}
        offset={radius * -0.2}
      />
      {/* Roof inner circle */}
      <CircularStructure
        y={dim * 2.0}
        {...roomSettings}
        vertical={true}
        tilt={-15 * tiltStrength}
        numberOfSegments={30}
        itemScaleAdjustment={1.0}
        dim={dim * 0.1}
        radius={radius * 0.75}
        offset={radius * -0.1}
      />
      {/* Floor */}
      <CircularDisc
        radius={radius * 0.7}
        {...roomSettings}
        y={-0.5}
        offset={2}
        material="palette_01_white"></CircularDisc>
      {/* Lights */}
      <InCircle
        y={10}
        items={2}
        radius={radius * 0.5}
        renderItem={() => <PointLight y={2} strength={3 * lightStrength} color="#ffffff" radius={20} />}
      />
      {props.children}
    </HNode>
  );

  return <HNode {...props}>{items}</HNode>;
};
