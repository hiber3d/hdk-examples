import { Scale3, scaleToVec3 } from "@hiber3d/hdk-core";
import {
  HDKComponent,
  Prefab,
  useRandom,
  PointLight,
  Animation,
} from "@hiber3d/hdk-react";
import { Hovering } from "@hiber3d/hdk-react-components";

type FishOptions = {
  dimensions?: Scale3;
  speed?: number;
};

const quadrants = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

export const Fish: HDKComponent<FishOptions> = (input) => {
  const { dimensions, speed = 5, ...props } = input;

  const random = useRandom();

  const box = scaleToVec3(dimensions || 10) ;

  const x: number[] = quadrants.map((q) => {
    const lowX = (q.x * box[0]) / 2;
    const highX = lowX + box[0] / 2;

    return random.range(lowX, highX) - box[0] / 2;
  });

  x.push(x[0]);

  const z: number[] = quadrants.map((q) => {
    const lowZ = (q.y * box[2]) / 2;
    const highZ = lowZ + box[2] / 2;

    return random.range(lowZ, highZ) - box[2] / 2;
  });

  z.push(z[0]);

  const step = random.int(0, z.length - 1);

  return (
    <Hovering {...props} magnitude={0.5}>
      <Animation
        animation={{
          x,
          z,
          duration: 2,
          loop: "RESTART",
          easing: "EASE_IN_OUT_QUAD",
          startAt: step,
          steps: [1 * speed, 2 * speed, 3 * speed, 4 * speed, 5 * speed],
        }}
      >
        <PointLight radius={5} color="white" strength={20} offset={[0, 4, 0]}>
          <Prefab
            id="sphere_01"
            scale={0.5}
            engineProps={{
              audio: {
                attenuationModel: "EXPONENTIAL_DISTANCE",
                id: "a_am_automated_factory_01",
                looping: true,
                rollOffFactor: 2,
                startPlayingDist: 10,
                maxAttenuationDist: 0,
                minAttenuationDist: 10,
                volume: 1,
              },
            }}
          />
        </PointLight>
      </Animation>
    </Hovering>
  );
};
