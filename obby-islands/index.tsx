import { HNode, Prefab, render } from '@hiber3d/hdk-react';
import { Checkpoint, OmnipresentSound, Portal } from '@hiber3d/hdk-react-components';
import { Audience } from './parts/Audience';
import { CandyKey } from './parts/CandyKey';
import { Donut } from './parts/Donut';
import { ExpandingSphere } from './parts/ExpandingSphere';
import { Islands } from './parts/Islands';
import { LiftingPlatforms } from './parts/LiftingPlatforms';
import { PalmTreesWithGoal } from './parts/PalmTreesWithGoal';
import { StartIsland } from './parts/StartIsland';
import { SwingingPlatforms } from './parts/SwingingPlatforms';

const World = () => (
  <HNode>
    <Prefab id="water_plane_01" scaleX={80} scaleZ={80} />
    <Islands />
    <StartIsland />
    <SwingingPlatforms></SwingingPlatforms>
    <ExpandingSphere />
    <Checkpoint x={-49} y={13.8} z={-44} />
    <Prefab id="gpl_booster_plate_02" scaleZ={2} rotY={52} rotX={20} x={-58} y={13.1} z={-50.2} />
    <Donut />
    <Audience />
    <Checkpoint x={-134} y={16.3} z={-71.6} />
    <LiftingPlatforms />
    <PalmTreesWithGoal />
    <Portal worldId="4u94-hy2d" x={-135.8} y={13.5} z={-125.9} />
    <CandyKey x={-33.1} y={14.3} z={-39.3} />
    <CandyKey x={-39.4} y={13.7} z={-40.2} />
    <CandyKey x={-43.6} y={13.6} z={-45.0} />
    <CandyKey x={-55.4} y={14.1} z={-48.0} />
    <CandyKey x={-94.7} y={17.6} z={-81.7} />
    <CandyKey x={-105.5} y={16.7} z={-78.4} />
    <CandyKey x={-113.8} y={16.4} z={-79.7} />
    <CandyKey x={-122.9} y={18.5} z={-74.0} />
    <OmnipresentSound src={{ id: 'a_mu_breath_of_the_wind_01' }} />
    <OmnipresentSound src={{ id: 'a_am_rainforest_01' }} volume={0.1} />
  </HNode>
);

render(<World />, { environment: 'midday_clear_01' });
