import { Animation, HNode, Prefab } from '@hiber3d/hdk-react';
import { Avatar, Spinning } from '@hiber3d/hdk-react-components';

export const Audience = () => (
  <>
    <HNode x={-163} y={12} z={-62} rotY={90}>
      <Animation animation={{ y: [-1, 1], duration: 3 }}>
        <Spinning duration={8}>
          <Prefab id="gummy_bear_01" scale={4} />
        </Spinning>
      </Animation>
    </HNode>
    <Prefab id="en_p_rainbow_01" scale={30} x={-363} rotY={90} />
    <Avatar
      rotY={90}
      x={-157}
      y={8.2}
      z={-63.8}
      scale={1.5}
      src={{ id: 'blackLobCroppedGreenJumperFemale' }}
      animation="an_default_emote_cheering_while_sitting_01"
    />
    <Avatar
      rotY={90}
      x={-162}
      y={9.1}
      z={-66.9}
      scale={1.5}
      src={{ id: 'blondeHairBraidsDenimDressFemale' }}
      animation="an_default_emote_point"
    />
    <Avatar
      rotY={110}
      x={-159}
      y={9.1}
      z={-60.7}
      scale={1.5}
      src={{ id: 'shavedHeadMale' }}
      animation="an_default_emote_wave"
    />
  </>
);
