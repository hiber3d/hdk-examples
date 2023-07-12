import { AudioId, PrefabId } from '@hiber3d/hdk-core';
import { Audio, HDKComponent, HNode, Prefab } from '@hiber3d/hdk-react';
import { Building } from './parts/Building';
import { City } from './parts/City';
import { DanceDisc } from './parts/DanceDisc';
import { FlameTrigger } from './parts/FlameTrigger';
import { KillerFloor } from './parts/KillerFloor';
import { Mist } from './parts/Mist';
import { OrbitingShip } from './parts/OrbitingShip';
import { Shop } from './parts/Shop';
import { ContentContext, HibertropolisContent } from './useContent';

export const Hibertropolis: HDKComponent<{ content: HibertropolisContent }> = ({ content }) => (
  <ContentContext.Provider value={content}>
    <HNode>
      <Prefab id={'showcase_scifi_arrow_01' as PrefabId} x={-0.0} y={55.61} z={6.7} rotY={-90} />
      <Prefab id={'showcase_scifi_arrow_01' as PrefabId} x={-0.0} y={55.61} z={5.2} rotY={-90} />
      {!!content.shop ? (
        <Shop />
      ) : (
        <>
          <Mist />
          <City />
          <Building />
          <DanceDisc />
          <FlameTrigger />
        </>
      )}
      <OrbitingShip startAt={0} yPos={60} />
      <OrbitingShip startAt={0.22} yPos={58} />
      <OrbitingShip startAt={0.5} yPos={45} />
      <OrbitingShip startAt={0.77} yPos={62} />
      <KillerFloor largeRadius={!!content.shop} />
      <Audio
        attenuationModel="LINEAR_DISTANCE"
        y={!!content.shop ? 0 : 56}
        minAttenuationDist={50}
        maxAttenuationDist={70}
        startPlayingDist={9999999}
        src={{ id: content.music as AudioId }}
      />
    </HNode>
  </ContentContext.Provider>
);
