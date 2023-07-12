import { MaterialId } from '@hiber3d/hdk-core';
import { Apply, HDKComponent, HNode, InfoPanel, Prefab } from '@hiber3d/hdk-react';
import { ImagePanel, VideoPanel } from '@hiber3d/hdk-react-components';
import { CDN } from '../../config';
import { Influencers } from './Influencers';
import { Partition } from './Partition';
import { SoundHouse } from './SoundHouse';
import { Headphone, Stairs } from './Stairs';

type SideWingInteriorProps = {
  tiltStrength?: number;
};

export const SideWingInterior: HDKComponent<SideWingInteriorProps> = ({ tiltStrength = 0.5, ...props }) => {
  const material: MaterialId = 'palette_01_white';
  const items = (
    <HNode y={1}>
      <HNode rotY={33} y={2.2}>
        <Partition rotY={0} material={material} tilt={-10 * tiltStrength} />
        <Partition rotY={-83} material={material} tilt={-10 * tiltStrength} />
        <Partition rotY={-166} material={material} tilt={-10 * tiltStrength} />
        <Partition rotY={-250} material={material} tilt={-10 * tiltStrength} />
      </HNode>
      <HNode scale={1.5} rotY={-6}>
        <Prefab id="display_shelf_04" scale={1} scaleX={2.7} scaleZ={3.3} scaleY={0.3} />
        <Prefab id="display_shelf_04" y={2.35} scale={1} scaleX={2.7} scaleZ={3.3} scaleY={0.3} />
        <VideoPanel
          y={0.35}
          src={`${CDN}/video/winter.mp4`}
          soundMinDistance={5.5}
          soundFadeDistance={2}
          ratio={960 / 540}
          x={-0.2}
        />
      </HNode>

      <HNode scale={2} x={-7.8} z={-7} rotY={-10}>
        <Prefab id="display_shelf_04" scale={1} scaleX={2} scaleZ={1.5} scaleY={0.3} />

        <Prefab id="display_shelf_04" scale={1} scaleX={2} scaleZ={1.5} scaleY={0.3} y={3.2} />

        <VideoPanel
          y={0.4}
          src={`${CDN}/video/amalfi.mp4`}
          soundMinDistance={5.5}
          soundFadeDistance={2}
          ratio={563 / 1001}
          rotY={-50}
          scale={1.4}
        />
      </HNode>
      <HNode x={-9.3} y={0.0} z={22.3} rotY={-23}>
        <Headphone y={1.9} z={-2} url={`${CDN}/audio/pod_two_for_one.mp3`} />
        <InfoPanel
          maxShowDistance={4}
          header="Two For One"
          body="Listen on Spotify"
          url="https://open.spotify.com/show/3qhmZKo4bMNahfgEUirzir?si=c927eeecbdac4f27"
          openUrlInNewTab>
          <ImagePanel src={`${CDN}/images/pod_two_for_one_thumbnail.jpg`} y={2} />
          <Apply props={{ engineProps: { collider: { collisionMask: 0 } } }}>
            <Prefab id="cube_01" material={'invisible' as MaterialId} />
          </Apply>
        </InfoPanel>
      </HNode>
      <SoundHouse y={18} />
      <Stairs rotY={150} y={-0.4} />
      <Influencers rotY={-35} />
    </HNode>
  );
  return <HNode {...props}>{items}</HNode>;
};
