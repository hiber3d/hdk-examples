import { PrefabId } from '@hiber3d/hdk-core';
import { HDKComponent, HNode, InfoPanel, Prefab, render, useRandom } from '@hiber3d/hdk-react';
import {
  AsteroidSpinning,
  Avatar,
  Distribute,
  InCircle,
  Invisible,
  Orbiting,
  Portal,
} from '@hiber3d/hdk-react-components';

const Stalk: HDKComponent = () => (
  <InCircle
    faceCenter
    radius={10}
    items={35}
    renderItem={({ progress }) => (
      <Prefab id="hiberpunk_blocks_a4_01" y={progress * 20} scale={1 - progress} x={-10 * progress} />
    )}
  />
);

const Asteroids: HDKComponent = () => (
  <Orbiting duration={60} rotX={20}>
    <Distribute
      gladeRadius={10}
      renderItem={() => {
        const random = useRandom();
        return (
          <AsteroidSpinning scale={random.range(0.5, 4)} y={random.range(-30, 30)}>
            <Prefab id="rock_01_t3" />
          </AsteroidSpinning>
        );
      }}
    />
  </Orbiting>
);

const World = () => (
  <HNode>
    <Prefab id={'floating_island_01' as PrefabId} scale={0.3} scaleY={1} y={-11} material="t_rock_03" />
    <Portal worldId="4pWiybY3c" z={6} y={1} />
    <Portal worldId="4n6Pg7c2n" z={-6} y={1} />
    <InCircle y={-1} radius={0} items={3} renderItem={<Stalk />} faceCenter />
    <Asteroids />

    <InfoPanel header="Test" body="Test!">
      <Invisible>
        <Prefab id="cube_01" />
      </Invisible>
      <Avatar src={{ id: 'RPMPunkMale' }} animation="an_default_emote_applaud" />
    </InfoPanel>
  </HNode>
);

render(<World />, { environment: 'starry_night_01' });
