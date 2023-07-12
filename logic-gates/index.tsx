import {
  ButtonSensor,
  HNode,
  InvisibleOnSignal,
  LookAtSphereSensor,
  MaterialOnSignal,
  PointLight,
  Prefab,
  ProximitySensor,
  SpawnPrefabOnSignal,
  SpotLight,
  Animation,
  XorGate,
  render,
} from '@hiber3d/hdk-react';
import { AsteroidSpinning, Ground, OmnipresentSound, PointSound, Spawnpoint } from '@hiber3d/hdk-react-components';

const ButtonsExample = () => (
  <HNode>
    <ButtonSensor output={1} z={2} />
    <ButtonSensor output={2} z={-2} />
    <XorGate output="xorButtons" inputs={[1, 2]} />

    <MaterialOnSignal input="xorButtons" materialOn="palette_01_black" materialOff="t_chocolate_floor_01">
      <AsteroidSpinning playOnSignal={{ input: 'xorButtons' }}>
        <Prefab id="ancient_urn_01" />
      </AsteroidSpinning>
    </MaterialOnSignal>

    <InvisibleOnSignal input="lookat">
      <Prefab id="apple_tree_01_t1" x={10} />
    </InvisibleOnSignal>
    <LookAtSphereSensor output="lookat" y={3} x={4} showSphere />

    <SpotLight y={3} lightOnSignal={{ input: 'lookat' }} />
    <PointLight x={10} color="crimson" lightOnSignal={{ input: 'lookat' }} />

    <PointSound radius={30} src={{ id: 'a_fx_damage_01' }} looping playOnSignal={{ input: 'lookat' }} />
    <OmnipresentSound src={{ url: 'a_am_autumn_wind_01' }} />
    <OmnipresentSound src={{ id: 'a_am_amusement_park_01' }} playOnSignal={{ input: 'lookat', solo: true }} />

    <ProximitySensor output="closeToBox" y={3} x={20} showMaxDistance />
    <SpawnPrefabOnSignal id="balloons_01" input="closeToBox" y={3} />
    <MaterialOnSignal input="closeToBox">
      <Prefab id="cube_01" x={20} />
    </MaterialOnSignal>
    <Spawnpoint z={-5} />

    <Animation x={-10} animation={{
        y: [0, 10],
        duration: 4,
        initialState: "PAUSED",
        playOnSignal: { input: "elevator", behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF" }
      }}>
      <Prefab id="disc_02" />
      <ProximitySensor output="elevator" maxDistance={3} showMaxDistance />
    </Animation>
  </HNode>
);

const World = () => (
  <HNode>
    <Ground></Ground>
    <ButtonsExample />
  </HNode>
);

render(<World />, { environment: 'midday_clear_01' });
