import { InCircle, MediaDisplay, MediaDisplayOptions } from '@hiber3d/hdk-react-components';
import { useContent } from '../useContent';

export const Gallery = () => {
  const content = useContent();

  return (
    <InCircle
      radius={5}
      faceCenter
      degrees={320}
      y={56}
      rotY={143}
      items={content.mediaStand.length}
      renderItem={({ index }) => {
        const media = content.mediaStand[index] as MediaDisplayOptions;

        if (!media.src) {
          return null;
        }

        return <MediaDisplay rotY={90} scale={1.2} {...media} muted />;
      }}
    />
  );
};
