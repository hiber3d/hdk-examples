import { Prefab } from '@hiber3d/hdk-react';
import { Spawnpoint } from '@hiber3d/hdk-react-components';

export const StartIsland = () => (
  <>
    <Prefab id="cliff_01_pillar" y={-5} scale={2}></Prefab>
    <Spawnpoint y={10} rotY={45} />
  </>
);
