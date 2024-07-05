import {
  Animation,
  Audio,
  ButtonSensor,
  HNode,
  InvisibleOnSignal,
  LookAtSphereSensor,
  MaterialOnSignal,
  PointLight,
  Prefab,
  PrefabDefinition,
  ProximitySensor,
  RaycastSenderSensor,
  SpawnPrefabOnSignal,
  SpotLight,
  TaggedSignalSourceSensor,
  VisibleOnSignal,
  XorGate,
  render,
} from '@hiber3d/hdk-react';
import {
  AsteroidSpinning,
  BoxCollider,
  Collider,
  Ground,
  Moving,
  OmnipresentSound,
  PointSound,
  Spawnpoint,
} from '@hiber3d/hdk-react-components';

const ButtonsExample = () => (
  <HNode>
    <HNode y={0}>
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
      <OmnipresentSound src={{ id: 'a_am_autumn_wind_01' }} />
      <OmnipresentSound src={{ id: 'a_am_amusement_park_01' }} playOnSignal={{ input: 'lookat', solo: true }} />

      <ProximitySensor output="closeToBox" y={3} x={20} showMaxDistance />
      <SpawnPrefabOnSignal id="balloons_01" input="closeToBox" y={3} />
      <MaterialOnSignal input="closeToBox">
        <Prefab id="cube_01" x={20} />
      </MaterialOnSignal>
    </HNode>

    <Spawnpoint z={-5} />

    <HNode z={-20} y={0}>
      <Collider z={3} x={2} showMesh mesh="en_m_ancient_cube_01" engineProps={{ physicsSimulated: { mass: 300 } }} />

      <RaycastSenderSensor output="raycast" showRay y={2} />

      <VisibleOnSignal input="raycast">
        <Prefab id="balloons_01" z={-1} y={1} />
      </VisibleOnSignal>

      <Moving toX={5} toY={0} x={-3} z={8}>
        <Prefab id="cactus_01" />
        <BoxCollider y={2} sensor={{ type: 'RAYCAST_RECEIVER', output: 'cactuswashit' }} />
        <VisibleOnSignal input="cactuswashit">
          <Prefab id="alien_grass_01" scale={0.2} y={4} />
        </VisibleOnSignal>
      </Moving>
    </HNode>

    <Animation
      x={-10}
      animation={{
        y: [0, 10],
        duration: 4,
        initialState: 'PAUSED',
        playOnSignal: { input: 'elevator', behavior: 'PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF' },
      }}>
      <Prefab id="disc_02" />
      <ProximitySensor output="elevator" maxDistance={3} showMaxDistance />
    </Animation>

    <HNode z={5} y={0}>
      <ButtonSensor output="turnOffAfter1Second" durationInSeconds={1} scale={10} />
      <VisibleOnSignal input="turnOffAfter1Second">
        <Moving toX={5} toY={0} x={-3} z={8}>
          <Prefab id="ancient_urn_01" y={1} />
        </Moving>
      </VisibleOnSignal>
      <Audio
        src={{ url: 'https://cdn.hibervr.com/external/hdk/filip/tunnel/scrape.mp3' }}
        playOnSignal={{ input: 'turnOffAfter1Second' }}
      />
    </HNode>

    <HNode z={10} y={0}>
      <BoxCollider showMesh sensor={{ type: 'COLLISION', output: 'colliding' }} />
      <VisibleOnSignal input="colliding">
        <Prefab id="cube_01" x={3} />
      </VisibleOnSignal>
    </HNode>

    <HNode z={-20} x={15} y={0}>
      <ProximitySensor output="externalProximity" maxDistance={5} showMaxDistance tag="externalSignal" />

      <PrefabDefinition id="element">
        <TaggedSignalSourceSensor output="bridgedSignal" sensorTag="externalSignal" />
        <MaterialOnSignal input="bridgedSignal" materialOn="m_emissive_green" materialOff="t_stone_tile_01">
          <Prefab id="abstract_sculpture_01" />
        </MaterialOnSignal>
      </PrefabDefinition>

      <ButtonSensor onPress="spawnPrefab" x={-6} output="" durationInSeconds={1} />
      <SpawnPrefabOnSignal id="element" input="spawnPrefab" />
    </HNode>
  </HNode>
);

const World = () => (
  <HNode>
    <Ground></Ground>
    <ButtonsExample />
  </HNode>
);
const baseUrl =
  'https://cdn.hibervr.com/hiber2/web/fix-render-overlay/v1.64.0-fix-render-overlay.0%2B02d7a9356/release';

render(<World />, {
  environment: 'cloud_city_01',
  engineUrl: `${baseUrl}/hiber.js`,
  wasmUrl: `${baseUrl}/Hiberworld.wasm.gz`,
});
