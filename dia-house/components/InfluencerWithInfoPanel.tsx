import { AnimationId, MaterialId } from '@hiber3d/hdk-core';
import { Apply, HDKComponent, InfoPanel, Prefab } from '@hiber3d/hdk-react';
import { Avatar, AvatarSource } from '@hiber3d/hdk-react-components';

export const InfluencerWithInfoPanel: HDKComponent<{
  animation?: AnimationId;
  src: AvatarSource;
  name: string;
  preBody?: string;
  url?: string;
  body?: string;
}> = ({ animation = 'an_default_emote_yes', name, preBody, src, body, url, ...props }) => {
  return (
    <InfoPanel
      {...props}
      maxShowDistance={2}
      header={name}
      preBody={preBody}
      body={body}
      url={url}
      isOpenInNewTabEnabled={true}
      isOpenInOverlayEnabled={false}
      isOpenInOverlayOnTouch={false}>
      <Avatar src={src} animation={animation} scale={1} />
      <Apply props={{ engineProps: { collider: { collisionMask: 0 } } }}>
        <Prefab id="cube_01" material={'invisible' as MaterialId} />
      </Apply>
    </InfoPanel>
  );
};
