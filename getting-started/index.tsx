import { Collectible, HDKComponent, HNode, Prefab, PrefabDefinition, render, useRandom } from '@hiber3d/hdk-react';
import {
  AsteroidSpinning,
  Avatar,
  Distribute,
  Ground,
  Mesh,
  Orbiting,
  RandomTilt,
  Room,
  Spawnpoint,
  VideoPanel,
} from '@hiber3d/hdk-react-components';

const Foliages: HDKComponent = props => {
  return (
    <Distribute
      {...props}
      gladeRadius={20}
      renderItem={() => {
        const random = useRandom();
        return (
          <RandomTilt scale={random.range(1, 5)}>
            <Prefab id={random.fromArray(['bush_01', 'bush_02', 'birch_01_t1'])} />
          </RandomTilt>
        );
      }}
    />
  );
};

const OrbitingAsteroids: HDKComponent = props => {
  return (
    <HNode {...props}>
      <Orbiting duration={64}>
        <Distribute
          gladeRadius={40}
          outerBoundRadius={100}
          itemAreaSizeMin={15}
          itemAreaSizeMax={25}
          renderItem={() => {
            const random = useRandom();
            return (
              <AsteroidSpinning y={random.range(-10, 10)} scale={random.range(1, 5)}>
                <Prefab id={random.fromArray(['rock_01_t1'])} />
              </AsteroidSpinning>
            );
          }}
        />
      </Orbiting>
    </HNode>
  );
};

const Building: HDKComponent = props => {
  return (
    <Room
      {...props}
      floorThickness={1}
      dim={7}
      roof={false}
      wallThickness={0.5}
      height={10}
      windowWidth={3}
      wallTypes={['WINDOW', 'WINDOW', 'DOOR', 'WINDOW']}>
      <Prefab id="sofa_01_t2" rotY={180} scale={2}>
        <Avatar animation="an_default_emote_sitting_idle_02" y={0.16} z={0.12} rotY={20} />
      </Prefab>
      <Prefab id="floor_lamp_01" rotY={210} x={4} y={0.1} scale={2} />
      <VideoPanel src={'https://cdn.hibervr.com/video/Hiber3D.mp4'} y={7} z={-8.5} scale={5} rotY={180} />
    </Room>
  );
};

const World = () => {
  return (
    <HNode>
      <Collectible type="MANDATORY" z={5} thumbnailUrl="https://m.media-amazon.com/images/I/710dct68n1L.jpg">
        <Mesh id="en_p_radio_01" material="chrome" />
      </Collectible>
      <Prefab id="cube_01" y={-2} scaleX={8} scaleZ={8} />
    </HNode>
  );
};

render(<World />, { environment: 'midday_01' });
