import { Apply, HDKComponent, HNode, Prefab, Audio } from "@hiber3d/hdk-react";
import { InCircle, Spinning } from "@hiber3d/hdk-react-components";
import { CDN } from "../config";

export const Headphone: HDKComponent<{ url?: string }> = ({
  url,
  ...props
}) => {
  return (
    <HNode {...props}>
      <Spinning duration={20}>
        <Apply props={{ engineProps: { colliderIsDisabled: {} } }}>
          <Prefab id="headphones_01" scale={3} />
        </Apply>
      </Spinning>
      {!!url && (
        <Audio
          attenuationModel="LINEAR_DISTANCE"
          minAttenuationDist={5}
          maxAttenuationDist={6}
          src={{ url }}
          y={-2}
        />
      )}
    </HNode>
  );
};

export const Stairs: HDKComponent = ({ children, ...props }) => (
  <InCircle
    {...props}
    degrees={470}
    faceCenter
    items={47}
    radius={7.3}
    renderItem={({ index, progress }) => (
      <HNode y={18 * progress}>
        {index === 3 && (
          <Headphone url={`${CDN}/audio/video.mp3`} y={2.7} x={1.5} />
        )}
        {index === 13 && (
          <Headphone url={`${CDN}/audio/relaxed.mp3`} y={2.7} x={1.5} />
        )}
        {index === 22 && (
          <Headphone url={`${CDN}/audio/soul.mp3`} y={2.7} x={1.5} />
        )}
        {progress < 0.9 && (
          <Prefab
            id="cube_01"
            material="palette_01_grey"
            y={-0.4}
            scaleX={0.1}
            rotX={-13.2}
            rotZ={-11}
            x={2}
            scaleZ={0.9}
          />
        )}
        <Prefab
          id="cube_01"
          material="palette_01_grey"
          y={-0.51}
          scaleX={2}
          rotX={-20}
          rotY={2}
          scaleY={0.3}
          scaleZ={0.9}
        ></Prefab>
        <Prefab
          id="rounded_cube_01"
          material="palette_01_grey"
          scaleZ={2}
          scaleY={0.2}
          rotY={90}
        />
      </HNode>
    )}
  />
);
