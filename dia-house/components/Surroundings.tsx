import { HDKComponent, Prefab, HNode, useRandom } from '@hiber3d/hdk-react';
import { Distribute } from '@hiber3d/hdk-react-components';
import { BirdFlock } from './BirdFlock';

type SurroundingsProps = {
  gladeRadius?: number;
  outerBoundRadius?: number;
};

export const Surroundings: HDKComponent<SurroundingsProps> = ({
  outerBoundRadius = 200,
  gladeRadius = 20,
  ...props
}) => {
  return (
    <HNode {...props}>
      <BirdFlock numberOfBirds={10} y={58} z={-30} radius={30} flapSpeed={3} flySpeed={0.3} />

      <Distribute
        gladeRadius={400}
        outerBoundRadius={700}
        itemAreaSizeMin={150}
        itemAreaSizeMax={200}
        renderItem={() => {
          const random = useRandom();

          return (
            <Prefab
              id="mountain_01"
              rotY={random.range(0, 360)}
              scaleX={random.range(3, 5)}
              scaleZ={random.range(3, 5)}
            />
          );
        }}
      />
    </HNode>
  );
};
