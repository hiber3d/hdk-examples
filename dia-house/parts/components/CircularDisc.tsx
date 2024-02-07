import { HDKComponent, Prefab } from '@hiber3d/hdk-react';
import { CircularStructureProps } from '@hiber3d/hdk-react-components';

export const CircularDisc: HDKComponent<CircularStructureProps> = ({
  radius = 10,
  material = 'palette_01_white',
  wallThickness = 0.5,
  offset = 0,
  ...props
}) => {
  return (
    <Prefab
      scaleX={radius + wallThickness + offset}
      scaleZ={radius + wallThickness + offset}
      scaleY={wallThickness}
      {...props}
      id="cylinder_01"
      material={material}>
      {props.children}
    </Prefab>
  );
};
