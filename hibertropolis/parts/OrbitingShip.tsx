import { MaterialId, PrefabId } from '@hiber3d/hdk-core';
import { Animation, HNode, Prefab, SpotLight } from '@hiber3d/hdk-react';
import { Hovering, Mesh, Spinning, Tween } from '@hiber3d/hdk-react-components';

type OrbitingShipProps = {
  progress?: number;
  yPos: number;
  scale?: number;
};

const ShipSpotLight = ({ progress }: { progress: number }) => (
  <HNode rotX={-180} y={4} z={11}>
    <Tween
      options={{
        loopBehaviour: 'REVERSE',
        duration: 8,
        progress,
      }}
      kfs={[
        {
          ts: 0,
          r: [0, 0, 40],
        },
        {
          ts: 0.5,
          r: [10, 0, 140],
        },
        {
          ts: 1,
          r: [-20, 0, 80],
        },
      ]}>
      <SpotLight openingAngleDegs={30} radius={200} strength={50} color="#00aeff">
        <Prefab id="hiberpunk_blocks_j2_01" rotX={180} scaleY={10} />
        <Mesh
          id="en_p_light_cone_02"
          material={'t_light_cone_01' as MaterialId}
          y={-2.2}
          rotX={180}
          scale={3}
          physical={false}
        />
      </SpotLight>
    </Tween>
  </HNode>
);

export const OrbitingShip = ({ progress = 0, yPos, scale = 1 }: OrbitingShipProps) => {
  return (
    <HNode scale={0.1 * scale} rotX={10} y={yPos}>
      <Animation animation={{ y: [0, 90], duration: 8, easing: 'EASE_IN_OUT_QUAD' }}>
        <Spinning duration={32} direction={-1} progress={progress}>
          <HNode z={350 * (1 / scale)}>
            <Hovering driftOff={false} magnitude={2}>
              <Prefab rotY={87} id={'space_ship_01' as PrefabId} scale={3}>
                <ShipSpotLight progress={progress} />
              </Prefab>
            </Hovering>
          </HNode>
        </Spinning>
      </Animation>
    </HNode>
  );
};
