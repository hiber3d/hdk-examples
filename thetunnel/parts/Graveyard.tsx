import {
  HNode,
  Prefab,
  InfoPanel,
  SpotLight,
  PointLight,
  Apply,
  VisibleOnSignal,
  SpawnPrefabOnSignal,
} from '@hiber3d/hdk-react';
import { Spawnpoint, Line, Grid, PointSound } from '@hiber3d/hdk-react-components';
import { PulseButton } from '../components/PulseButton';
import { MaterialId, PrefabId } from '@hiber3d/hdk-core';

export const Graveyard = () => (
  <HNode y={1}>
    <Prefab id="plane_01" material="t_dirt_02" y={-2} />
    <Spawnpoint rotY={40} x={10} z={10} />

    <Line numberOfItems={8} delta={[3, 0, 0]} renderItem={<Prefab id="rotten_fence_01" />} z={11} x={-11} />
    <Line numberOfItems={8} delta={[3, 0, 0]} renderItem={<Prefab id="rotten_fence_01" />} z={-11} x={-11} />
    <Line rotY={90} numberOfItems={7} delta={[3, 0, 0]} renderItem={<Prefab id="rotten_fence_01" />} z={9} x={-13} />
    <Line rotY={90} numberOfItems={7} delta={[3, 0, 0]} renderItem={<Prefab id="rotten_fence_01" />} z={9} x={12} />

    <Prefab id="fx_particlesystem_mist_01" x={-6} z={-6} />
    <Prefab id="fx_particlesystem_mist_01" x={6} z={-6} />
    <Prefab id="fx_particlesystem_mist_01" x={-6} z={6} />
    <Prefab id="fx_particlesystem_mist_01" x={6} z={6} />
    <Grid
      renderItem={({ row, column }) => {
        return (
          <HNode>
            <Prefab id="en_p_dirt_row_01" scaleY={1.2} scaleZ={0.5} />
            {row === 1 && column === 1 ? (
              <>
                <InfoPanel
                  maxShowDistance={3}
                  minShowDistance={0}
                  header="Here rests Thulgar Zurn"
                  preBody="Zhanafh nghayara huplokh vhal, butha zylha darhn ngah mnafl, yshavulh rhalok.">
                  <PulseButton
                    z={-1.5}
                    output="trigger"
                    meshId="en_p_tombstone_01"
                    materialOn={'en_p_tombstone_01' as MaterialId}
                    materialOff={'en_p_tombstone_01' as MaterialId}
                    maxDistance={3}
                  />
                </InfoPanel>
                <SpotLight y={2.5} z={-0.5} openingAngleDegs={100} color="red" strength={50} />
                <PointLight y={1} strength={6} />
                <PointSound src={{ id: 'a_am_no_mans_desert_01' }} radius={40} volume={1} />
                <Apply
                  when={props => !!props.engineProps?.particleSystemParticleMaterial}
                  props={{
                    engineProps: {
                      particleSystemParticleMaterial: { colorStart: [20, 0, 0, 10], colorEnd: [20, 0, 0, 10] },
                    },
                  }}>
                  <Prefab id="fx_particlesystem_fireflies_01" y={1} />
                </Apply>
                <VisibleOnSignal input="trigger">
                  <Prefab id="ancient_urn_01" />
                </VisibleOnSignal>
                <SpawnPrefabOnSignal input="trigger" id={'graveTeleporter' as PrefabId} />
              </>
            ) : (
              <Prefab id="tombstone_01" z={-1.5} />
            )}
          </HNode>
        );
      }}
    />
  </HNode>
);
