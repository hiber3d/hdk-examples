import { Prefab, Random } from '@hiber3d/hdk-react';
import { Avatar, SkyScraper, Tween } from '@hiber3d/hdk-react-components';

import { Gallery } from './Gallery';
import { Stairs } from './Stairs';

export const Building = () => (
  <>
    <Prefab id="gpl_spawn_point_01" z={-5} y={57} rotY={180} />
    <Prefab id="collectible_gem_01" y={56} z={11} />
    <Prefab id="collectible_gem_01" y={64} z={15} x={-16} />
    <Prefab id="collectible_gem_01" y={72} z={-5} x={-16} />
    <Prefab id="collectible_gem_01" x={-4} y={76} z={-5} />
    <Prefab id="collectible_gem_01" x={0} y={77.5} z={4} />
    <Prefab id="collectible_gem_01" x={0} y={11} z={0} scale={1.5} />
    <Random seed={2}>
      <SkyScraper y={10} rotY={-90} scale={0.5} theme="cyan" bottom={0} middle={[4, 2]} top={2} />
    </Random>
    <Gallery />
    <Stairs />
    <Tween
      scale={12}
      y={-44}
      z={30}
      rotY={180}
      options={{
        loopBehaviour: 'RESTART',
        duration: 16,
      }}
      kfs={[
        { ts: 0, p: [0, 0, 0] },
        { ts: 0.65, p: [0, 0, 0] },
        { ts: 0.7, p: [0, 7.2, 0] },
        { ts: 0.9, p: [0, 7.0, 0] },
        { ts: 1, p: [0, 40, 0] },
      ]}>
      <Avatar animation="an_default_flyidle" src={{ id: 'head5Male' }} />
    </Tween>
    <Prefab id="checkpoint_01" x={-6} y={77.5} z={3.7} />
    <Prefab
      id="gpl_booster_plate_02"
      x={11}
      y={75}
      z={5.5}
      rotX={0}
      rotY={-110}
      rotZ={35}
      scaleX={1.8}
      scaleY={20}
      scaleZ={3}
    />
  </>
);
