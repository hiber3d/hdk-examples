import { MaterialId, PrefabId } from '@hiber3d/hdk-core';
import { Animation, HNode, Prefab, SpotLight } from '@hiber3d/hdk-react';
import { Hovering, Mesh, Spinning, Tween } from '@hiber3d/hdk-react-components';

type OrbitingShipProps = {
  startAt?: number;
  yPos: number;
  scale?: number;
};

const ShipSpotLight = ({ startAt }: { startAt: number }) => (
  <HNode rotX={-180} y={4} z={11}>
    <Tween
      options={{
        loop: 'REVERSE',
        duration: 8,
        startAt,
      }}
      keyframes={[
        {
          timestamp: 0,
          rotation: [0, 0, 40],
        },
        {
          timestamp: 0.5,
          rotation: [10, 0, 140],
        },
        {
          timestamp: 1,
          rotation: [-20, 0, 80],
        },
      ]}>
      <SpotLight openingAngleDegs={30} radius={64} strength={50} color="#00aeff">
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

export const OrbitingShip = ({ startAt = 0, yPos, scale = 1 }: OrbitingShipProps) => {
  return (
    <HNode scale={0.1 * scale} rotX={10} y={yPos}>
      <Animation animation={{ y: [0, 90], duration: 8, easing: 'EASE_IN_OUT_QUAD' }}>
        <Spinning duration={32} direction={-1} startAt={startAt}>
          <HNode z={350 * (1 / scale)}>
            <Hovering driftOff={false} magnitude={2}>
              <Prefab rotY={87} id={'space_ship_01' as PrefabId} scale={3}>
                <ShipSpotLight startAt={startAt} />
              </Prefab>
            </Hovering>
          </HNode>
        </Spinning>
      </Animation>
    </HNode>
  );
};
