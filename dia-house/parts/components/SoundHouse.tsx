import { MaterialId } from '@hiber3d/hdk-core';
import { Apply, Audio, HDKComponent, HNode, InfoPanel, Prefab, SpotLight } from '@hiber3d/hdk-react';
import {
  Avatar,
  CircularStructure,
  ImagePanel,
  ImageTexture,
  InCircle,
  Mesh,
  Spinning,
  SpinningProps,
} from '@hiber3d/hdk-react-components';
import { InfluencerWithInfoPanel } from './InfluencerWithInfoPanel';
import { CDN } from '../../config';

const roomRadius = 6;

const DJBooth: HDKComponent = ({ ...props }) => (
  <InfoPanel header="DIA SOUND" url="https://www.dia-sound.com/" isOpenInNewTabEnabled {...props}>
    <Prefab id="en_p_dj_pioneer_01" y={1} />
    <HNode scale={0.5}>
      <Prefab id="cube_01" scaleX={2} material="palette_01_black" />
    </HNode>
    <Avatar
      src={{ url: 'https://models.readyplayer.me/64883b203133f8119d3efa50.glb' }}
      animation="an_default_emote_listening_to_music_01"
      rotY={180}
      z={1}
    />
    <ImagePanel src="https://cdn.hibervr.com/dia/diapanel.png" ratio={1000 / 621} z={-0.5} y={0} scale={0.62} />
    <ImageTexture src="https://cdn.hibervr.com/dia/blue.png">
      <Prefab id="cube_01" rotY={90} x={1} scale={0.5} scaleY={0.62} scaleZ={0.01} />
      <Prefab id="cube_01" rotY={90} x={-1} scale={0.5} scaleY={0.62} scaleZ={0.01} />
    </ImageTexture>
  </InfoPanel>
);

const Particles: HDKComponent = () => (
  <>
    <Apply
      props={{
        engineProps: {
          particleSystemParticleMaterial: {
            colorStart: [0, 0, 1, 3.922],
            colorEnd: [0, 0, 1, 1.961],
          },
        },
      }}
      when={props => !!props.engineProps?.particleSystemParticleMaterial}>
      <Prefab id="fx_particlesystem_fireflies_01" y={-1} />
      <Prefab id="fx_particlesystem_fireflies_01" y={-1} rotY={90} />
    </Apply>

    <HNode y={4}>
      <Prefab id="fx_particlesystem_mist_01" />
    </HNode>
  </>
);

const DiscoLight: HDKComponent<SpinningProps> = ({ ...props }) => (
  <Spinning {...props}>
    <SpotLight openingAngleDegs={40} radius={64} strength={50} scale={0.2} color="#2121ff">
      <Prefab id="hiberpunk_blocks_j2_01" scaleY={10} />
      <Mesh id="en_p_light_cone_02" material={'t_light_cone_01' as MaterialId} rotZ={180} scale={3} physical={false} />
    </SpotLight>
  </Spinning>
);

export const SoundHouse: HDKComponent = ({ ...props }) => {
  return (
    <HNode {...props}>
      <InCircle
        radius={roomRadius + 1}
        items={10}
        degrees={260}
        faceCenter
        rotY={26}
        renderItem={<Prefab id="cube_01" material="t_metal_01" scaleY={0.1} scaleZ={3} scaleX={3} />}
      />
      <Prefab id="disc_02" material="t_metal_01" scaleX={2.7} scaleZ={2.7} scaleY={2.01} />
      <CircularStructure
        y={-0.5}
        scale={1.5}
        wallThickness={0.5}
        radius={roomRadius * 1.11}
        vertical={false}
        numberOfSegments={20}
        itemScaleAdjustment={1.5}
        tilt={-28}
        dim={5}
        bottomScale={0.15}
        material={'palette_01_black' as MaterialId}
      />
      <ImageTexture src="https://cdn.hibervr.com/dia/blue.png">
        <Prefab id="disc_02" y={9} material="palette_02_blue" scale={8} />
      </ImageTexture>
      <DJBooth rotY={-90} x={-7} y={0.2} scale={2} />

      <InCircle
        rotY={20}
        radius={13.5}
        y={8}
        faceCenter
        renderItem={<Prefab id="en_p_speaker_02" rotY={-90} rotX={20} scale={1.5} />}
      />
      <Particles />
      <ImageTexture src="https://cdn.hibervr.com/dia/blue.png">
        <Prefab id="display_shelf_02" y={0.1} scale={0.7} scaleY={1.2} x={3} />
        <Prefab id="display_shelf_04" y={0.1} scale={0.7} x={3} z={2} />
        <Prefab id="display_shelf_03" y={0.1} scale={0.7} x={4} z={1.2} rotY={-130} />
        <Prefab id="display_shelf_04" y={0.1} scale={0.7} x={2.7} z={-1.5} rotY={200} />
        <Prefab id="display_shelf_04" y={0.1} scale={0.7} x={3.5} z={-3} rotY={100} />
      </ImageTexture>
      <Audio
        attenuationModel="LINEAR_DISTANCE"
        maxAttenuationDist={16}
        minAttenuationDist={11}
        y={5}
        src={{ url: `${CDN}/audio/dj_metaverse_mix.mp3` }}></Audio>

      <InfluencerWithInfoPanel
        y={0.25}
        x={0}
        z={8}
        rotY={180}
        name="Kanaan Pitan"
        url="https://www.instagram.com/kanaan._"
        src={{ url: 'https://models.readyplayer.me/64930f5c7e9186ff7e3e6d43.glb' }}
        animation="an_default_emote_listening_to_music_01"
      />
      <InfluencerWithInfoPanel
        name="Chloe Scantlebury"
        y={0.25}
        x={1.5}
        z={7}
        rotY={-90}
        url="https://www.instagram.com/chloescantlebury"
        src={{ url: 'https://models.readyplayer.me/649316fb7e9186ff7e3ea045.glb' }}
        animation="an_default_emote_talking_01"
      />
      <InfluencerWithInfoPanel
        name="Ida Zeile"
        y={0.25}
        x={-0.6}
        z={6}
        rotY={60}
        url="https://www.instagram.com/idazeile"
        src={{ url: 'https://models.readyplayer.me/64931801683398e4159b27b9.glb' }}
        animation="an_default_emote_breakdance_ready_01"
      />

      <InfluencerWithInfoPanel
        name="Lilah Pi"
        y={0.25}
        x={2}
        z={0.1}
        rotY={-90}
        url="https://www.instagram.com/lilahpi"
        src={{ url: 'https://models.readyplayer.me/64931a13683398e4159b3281.glb' }}
        animation="an_default_emote_cheering_while_sitting_01"
      />
      <DiscoLight x={-9} y={1} z={1.5} rotX={-20} rotZ={150} duration={10} />
      <DiscoLight x={-9} y={1} z={-1.5} rotZ={150} rotX={20} duration={10} direction={-1} />

      <InfoPanel
        y={0.1}
        x={4}
        z={-7}
        rotY={-40}
        header="DIA SOUND T-Shirt"
        url="https://www.digitaliconagency.com/diamerch"
        isOpenInOverlayEnabled>
        <ImageTexture src="https://cdn.hibervr.com/dia/blue.png">
          <Prefab id="display_shelf_04" />
        </ImageTexture>
        <Prefab id="storeprop_tshirt_stack_01" y={1.2} x={-0.2} z={0.05} />
        <Prefab id="storeprop_tshirt_stack_01" y={1.2} x={0.2} z={0.05} />
        <ImagePanel y={1} z={-1} scale={1.5} src={`${CDN}/images/dia_sound_tshirt.jpg`} />
      </InfoPanel>
      {props.children}
    </HNode>
  );
};
