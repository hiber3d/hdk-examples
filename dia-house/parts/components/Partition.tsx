import { MaterialId, Vec3 } from '@hiber3d/hdk-core';
import { HDKComponent, Prefab, HNode } from '@hiber3d/hdk-react';
import { Path, GlassCube } from '@hiber3d/hdk-react-components';

type PartitionProps = {
  offsetX?: number;
  numberOfItems?: number;
  scaleX?: number;
  scaleY?: number;
  scaleZ?: number;
  tiltX?: number;
  tilt?: number;
  waveAmplitude?: number;
  radius?: number;
  points?: Vec3[];
  material?: MaterialId;
  showPoints?: boolean;
};

export const Partition: HDKComponent<PartitionProps> = ({
  offsetX = -16.0,
  numberOfItems = 20,
  scaleY = 3.5,
  scaleX = 0.1,
  scaleZ = 0.1,
  tiltX = 0,
  tilt = 0,
  waveAmplitude = 2,
  radius = 10,
  material = undefined,
  points = [
    [0, 0, 0],
    [radius * -0.333, 0, 1],
    [radius * -0.666, 0, -1],
    [radius * -1, 0, 0],
  ],
  showPoints = false,
  ...props
}) => {
  // material
  const segmentProps = {
    scaleX: scaleX,
    scaleY: scaleY,
    scaleZ: scaleZ,
    rotX: tiltX,
    rotZ: -tilt,
  };

  const items = (
    <HNode x={offsetX}>
      <Path
        showPoints={showPoints}
        numberOfItems={numberOfItems}
        points={points}
        renderItem={step =>
          material ? (
            <Prefab
              id="cylinder_01"
              {...segmentProps}
              material={material}
              rotY={step.rotation[1]}
              rotX={180}
              y={scaleY * 3}
              scaleY={scaleY + Math.cos(step.progress * -1.3 * Math.PI) * waveAmplitude}
            />
          ) : (
            <GlassCube {...segmentProps} rotY={step.rotation[1]} />
          )
        }></Path>

      {props.children}
    </HNode>
  );
  return <HNode {...props}>{items}</HNode>;
};
