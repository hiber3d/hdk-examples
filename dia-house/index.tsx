import { HNode, render } from '@hiber3d/hdk-react';
import { Ground, OmnipresentSound, Spawnpoint } from '@hiber3d/hdk-react-components';
import { CircularStructureProps } from '@hiber3d/hdk-react-components';
import { MainWing } from './parts/components/MainWing';
import { MainWingInterior } from './parts/components/MainWingInterior';
import { SideWing } from './parts/components/SideWing';
import { SideWingInterior } from './parts/components/SideWingInterior';
import { Surroundings } from './parts/components/Surroundings';
import { EnvironmentId } from '@hiber3d/hdk-core';

const roomSettings: CircularStructureProps = {
  numberOfSegments: 30,
  wallThickness: 1,
  itemScaleAdjustment: 1,
  prefabId: 'cube_01',
  topScale: 0.5,
  bottomScale: 0.07,
  offset: 0,
  vertical: false,
};

const lightStrength = 0.1;
const tiltStrength = 0.6;

const World = () => (
  <HNode>
    <Spawnpoint x={22.5} y={0.3} z={33.1} rotY={10} />
    <MainWing
      lightStrength={lightStrength}
      tiltStrength={tiltStrength}
      radius={12}
      dim={15}
      y={0}
      z={2.5}
      roomSettings={roomSettings}>
      <MainWingInterior rotY={45} />
    </MainWing>
    <SideWing
      lightStrength={lightStrength}
      tiltStrength={tiltStrength}
      radius={25}
      dim={8}
      y={-1}
      roomSettings={roomSettings}>
      <SideWingInterior rotY={35} tiltStrength={tiltStrength} />
    </SideWing>
    <Surroundings gladeRadius={60} outerBoundRadius={300} y={-2.5} />
    <Ground y={-2} scaleX={4} scaleZ={4} water={true} waterOffset={-1} material="palette_02_silver" />
    <OmnipresentSound src={{ id: 'a_am_rainforest_01' }} volume={0.1} />
  </HNode>
);

render(<World />, { environment: 'dawn_01' as EnvironmentId });
