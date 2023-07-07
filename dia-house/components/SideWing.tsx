import { HDKComponent, HNode, PointLight, Prefab, useRandom } from '@hiber3d/hdk-react';
import { CircularStructure, CircularStructureProps, InCircle, WallOpening } from '@hiber3d/hdk-react-components';
import { CircularDisc } from './CircularDisc';

type SideWingProps = {
  roomSettings: CircularStructureProps;
  dim: number;
  radius: number;
  lightStrength?: number;
  tiltStrength?: number;
};

const wallOpening: WallOpening[] = [
  {
    type: 'door',
    progress: 0.84,
    widthInPercent: 0.12,
  },
  {
    type: 'window',
    progress: 0,
    widthInPercent: 0.15,
  },
  {
    type: 'window',
    progress: 0.25,
    widthInPercent: 0.15,
  },
  {
    type: 'window',
    progress: 0.5,
    widthInPercent: 0.15,
  },
  {
    type: 'window',
    progress: 0.75,
    widthInPercent: 0.15,
  },
];

const wallOpeningInnerWall: WallOpening[] = [
  {
    type: 'window',
    progress: 0,
    widthInPercent: 1,
  },
  {
    type: 'door',
    progress: 0.37,
    widthInPercent: 0.1,
  },
];

export const SideWing: HDKComponent<SideWingProps> = ({
  radius,
  dim,
  roomSettings,
  lightStrength = 0.2,
  tiltStrength = 0.5,
  ...props
}) => {
  const random = useRandom();
  const items = (
    <HNode>
      {/* Lights */}
      <InCircle
        y={10}
        items={3}
        radius={radius * 0.8}
        renderItem={() => <PointLight y={3} strength={6 * lightStrength} color="#ffffff" radius={20} />}
      />
      {/* Ivy */}
      <InCircle
        faceCenter={true}
        y={dim * 2.5}
        items={[0.05, 0.17, 0.3, 0.4, 0.6, 0.77]}
        radius={radius * 1.1}
        renderItem={() => (
          <Prefab id="ivy_02" rotZ={90} rotY={90} scale={random.range(1.5, 2.5)} y={random.range(-12, -10)} rotX={5} />
        )}
      />
      {/* Outer walls */}
      <CircularStructure
        {...roomSettings}
        radius={radius}
        dim={dim}
        tilt={-10 * tiltStrength}
        vertical={false}
        itemScaleAdjustment={1.2}
        wallOpening={wallOpening}></CircularStructure>
      {/* Inner walls: Sound room */}
      <CircularStructure
        {...roomSettings}
        y={0.5}
        numberOfSegments={25}
        radius={radius * 0.57}
        dim={dim * 1.1}
        tilt={-10 * tiltStrength}
        glassInWindow={true}
        vertical={false}
        itemScaleAdjustment={1.15}
        wallOpening={wallOpeningInnerWall}>
        {/* Lights */}
        <InCircle
          y={7}
          items={3}
          radius={radius * 0.5}
          renderItem={() => <PointLight y={3} strength={6 * lightStrength} color="#ffffff" radius={20} />}
        />
      </CircularStructure>
      {/* Roof outer circle */}
      <CircularStructure
        y={dim * 1.96}
        {...roomSettings}
        radius={radius}
        vertical={true}
        tilt={-20 * tiltStrength}
        itemScaleAdjustment={1}
        dim={dim * 0.2}
        offset={radius * -0.1}
      />
      {/* Roof middle circle */}
      <CircularStructure
        y={dim * 2.2}
        {...roomSettings}
        radius={radius * 0.95}
        vertical={true}
        tilt={-15 * tiltStrength}
        numberOfSegments={30}
        itemScaleAdjustment={0.6}
        dim={dim * 0.2}
        offset={radius * -0.5}
      />
      <CircularDisc
        {...roomSettings}
        y={-1}
        radius={radius * 1.1}
        offset={1}
        material="palette_01_white"></CircularDisc>
      {props.children}
    </HNode>
  );

  return <HNode {...props}>{items}</HNode>;
};
