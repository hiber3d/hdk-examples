import { PrefabId } from '@hiber3d/hdk-core';
import { HNode, InfoPanel, Prefab } from '@hiber3d/hdk-react';
import { Avatar, ImagePanel, InCircle, PointSound, Portal, Spinning } from '@hiber3d/hdk-react-components';
import { useContent } from '../useContent';
import { getYoutubeEmbedUrl } from '@hiber3d/hdk-utils';

export const DanceDisc = () => {
  const content = useContent();
  return (
    <HNode x={14} y={78.2} z={67.9} scale={8}>
      {content.portal && (
        <HNode y={0.5} x={-1.5} rotY={90}>
          <Portal scale={0.15} worldId={content.portal} />
          <ImagePanel
            scale={0.075}
            ratio={16 / 9}
            y={0.44}
            src={'https://cdn.hibervr.com/external/music_mv/smash/SIP_sign_ToTheOfficialShop.jpg'}
          />
        </HNode>
      )}
      <Spinning duration={16}>
        <Prefab id={'tron_decoration_disc_t2_orange' as PrefabId}>
          <HNode x={-0.5} y={0.5} z={-0.3} scale={0.25} rotY={90}>
            {content.useSIPAvatars ? (
              <Prefab id={'rpm_sip_chris' as PrefabId} />
            ) : (
              <Avatar src={{ id: 'punkHairFemale' }} animation="an_default_emote_hiphopspindance" />
            )}
          </HNode>
          <HNode y={0.5} z={0.5} scale={0.25} rotY={200}>
            {content.useSIPAvatars ? (
              <Prefab id={'rpm_sip_per' as PrefabId} />
            ) : (
              <Avatar src={{ id: 'RPMPunkMale' }} animation="an_default_emote_applaud" />
            )}
          </HNode>
          <Prefab id="fx_particlesystem_musicnotes_01" y={0.5} scale={0.25} />
          <Prefab id="fx_particlesystem_magic_01" x={0.2} y={0.5} scale={0.33} rotZ={90} />
          <Prefab id="invisible_light_magenta" x={0.2} y={0.5} scale={0.33} rotZ={90} />
        </Prefab>
      </Spinning>
      <HNode x={-1} y={0.32} z={-2.17} scale={0.25} rotY={187} rotX={-17}>
        {content.useSIPAvatars ? (
          <Prefab id={'rpm_sip_benjamin' as PrefabId} />
        ) : (
          <Avatar src={{ id: 'goatieDenimTHJacketMale' }} animation="an_default_emote_leaning_idle_02" />
        )}
      </HNode>
      <InCircle items={8} radius={0.8} renderItem={<Prefab id="collectible_gem_01" x={0} y={0.5} scale={0.2} />} />
      {content.useSIPAvatars && (
        <>
          <PointSound src={{ url: 'https://cdn.hibervr.com/external/music_mv/smash/Flow.mp3' }} radius={30} />
          <InfoPanel
            preBody={'Flow'}
            header="See video on YouTube"
            url={getYoutubeEmbedUrl('https://www.youtube.com/watch?v=QPAsGcCWs6A')}
            isOpenInNewTabEnabled={false}
            isOpenInOverlayEnabled={true}>
            <ImagePanel
              ratio={1}
              src="https://cdn.hibervr.com/external/music_mv/smash/Flow_Artwork_notext.jpg"
              scale={0.3}
              y={0.7}
              z={1}
            />
          </InfoPanel>
        </>
      )}
    </HNode>
  );
};
