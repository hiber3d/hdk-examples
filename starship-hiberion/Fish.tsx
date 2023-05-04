import { Scale3, scaleToVec3 } from "@hiber3d/hdk-core";
import { HDKComponent, Prefab, useRandom } from "@hiber3d/hdk-react";
import { Hovering } from "@hiber3d/hdk-react-components";

type FishOptions = {
  dim?: Scale3;
  speed?: number;
};

const quadrants = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

export const Fish: HDKComponent<FishOptions> = (input) => {
  const { dim, speed = 5, ...props } = input;

  const random = useRandom();

  const box = scaleToVec3(dim) || [10, 10, 10];

  const x: number[] = quadrants.map((q) => {
    const lowX = (q.x * box[0]) / 2;
    const highX = lowX + box[0] / 2;

    return random.range(lowX, highX) - box[0] / 2;
  });

  x.push(x[0]);

  const z: number[] = quadrants.map((q) => {
    const lowZ = (q.y * box[2]) / 2;
    const highZ = lowZ + box[2] / 2;

    return random.range(lowZ, highZ) + box[2] / 2;
  });

  z.push(z[0]);

  const step = random.int(0, z.length - 1);

  return (
    <Hovering {...props} magnitude={0.5}>
      <Prefab
        id="sphere_01"
        s={0.5}
        material="t_sci_fi_tile_02"
        audio={{
          attenuationModel: "EXPONENTIAL_DISTANCE",
          id: "a_am_automated_factory_01",
          looping: true,
          rollOffFactor: 1,
          startPlayingDist: 10,
          maxAttenuationDist: 0,
          minAttenuationDist: 10,
          volume: 1,
        }}
        pointlight={{
          color: "aquamarine",
          strength: 20,
          offset: [0, 0, 0],
          radius: 8,
        }}
        animation={{
          x,
          z,
          duration: 2,
          loop: "RESTART",
          easing: "EASE_IN_OUT_QUAD",
          startAt: step,
          steps: [speed * 2, speed * 3, speed * 4, speed * 5, speed * 6],
        }}
      />
    </Hovering>
  );
};
