import { EnvironmentId } from '@hiber3d/hdk-core';
import { HNode, render } from '@hiber3d/hdk-react';
import { OmnipresentSound } from '@hiber3d/hdk-react-components';
import { Building } from './parts/Building';
import { City } from './parts/City';
import { DanceDisc } from './parts/DanceDisc';
import { FlameTrigger } from './parts/FlameTrigger';
import { KillerFloor } from './parts/KillerFloor';
import { Mist } from './parts/Mist';
import { OrbitingShip } from './parts/OrbitingShip';

const World = () => (
  <HNode>
    <City />
    <Mist />
    <Building />
    <OrbitingShip progress={0} yPos={60} />
    <OrbitingShip progress={0.22} yPos={58} />
    <OrbitingShip progress={0.5} yPos={45} />
    <OrbitingShip progress={0.77} yPos={62} />
    <KillerFloor />
    <DanceDisc />
    <FlameTrigger />
    <OmnipresentSound id="a_mu_border_of_neo_tokyo_01" />
  </HNode>
);

render(<World />, { environment: 'dark_city_night_01' as EnvironmentId });
