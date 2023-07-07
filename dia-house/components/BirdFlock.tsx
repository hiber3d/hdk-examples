import { HDKComponent, HNode, useRandom } from '@hiber3d/hdk-react';
import { Bird } from '@hiber3d/hdk-react-components';

type BirdFlockProps = {
  numberOfBirds?: number;
  radius?: number;
  verticalSpread?: number;
  flapSpeed?: number | undefined;
  flySpeed?: number | undefined;
};

/**
 * Insert a flock of birds into the scene.
 * @example
 * ```tsx
 * <BirdFlock numberOfBirds={10} y={45} radius={30} flapSpeed={3} flySpeed={0.3} />
 * ```
 * @param numberOfBirds The number of birds in the flock, default 4.
 * @param radius The radius of the flock, default 10.
 * @param verticalSpread The vertical spread of the flock, default 5.
 * @param flapSpeed The speed multiplier of the flapping, default 1.
 * @param flySpeed The speed multiplier of the bird's flight, default 1.
 */

export const BirdFlock: HDKComponent<BirdFlockProps> = ({
  numberOfBirds = 4,
  radius = 10,
  verticalSpread = 5,
  flySpeed = undefined,
  flapSpeed = undefined,
  ...props
}) => {
  const items = [];
  const random = useRandom();
  for (let index = 0; index < numberOfBirds; index++) {
    items.push(
      <Bird
        rotY={random.range(0, 360)}
        key={index}
        flySpeed={flySpeed}
        flapSpeed={flapSpeed}
        orbitRadius={radius}
        x={random.range(-radius, radius)}
        z={random.range(-radius, radius)}
        y={random.range(-verticalSpread, verticalSpread)}
        clockwise={random.fromArray([true, false])}
      />
    );
  }
  return <HNode {...props}>{items}</HNode>;
};
