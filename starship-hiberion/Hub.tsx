import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import { Spinning } from "@hiber3d/hdk-react-components";
import { GravityWell } from "./GravityWell";

const Axis: HDKComponent = (props) => {
  return (
    <HNode>
      <Prefab
        id="quarter_pipe_wall_01"
        rotZ={0}
        scaleX={8}
        scaleY={4}
        scaleZ={8}
        x={13}
        z={8}
      />
      <Prefab
        id="quarter_pipe_wall_01"
        rotZ={180}
        scaleX={8}
        scaleY={4}
        scaleZ={8}
        x={-13}
        y={8}
        z={8}
      />
      <Prefab
        id="quarter_pipe_wall_01"
        rotY={90}
        scaleX={8}
        scaleY={4}
        scaleZ={8}
        x={13}
        y={0}
        z={-8}
      />
      <Prefab
        id="quarter_pipe_wall_01"
        rotY={180}
        scaleX={8}
        scaleY={4}
        scaleZ={8}
        x={-13}
        y={0}
        z={-8}
      />
    </HNode>
  );
};

export const Hub: HDKComponent = (props) => (
  <HNode {...props}>
    <HNode rotX={90}>
      <Spinning duration={100}>
        <GravityWell z={30} hologram="hologram_01_hibert"></GravityWell>
        <GravityWell
          rotY={180}
          z={-30}
          hologram="hologram_01_hibertina"
        ></GravityWell>
        <Axis />
      </Spinning>
    </HNode>
  </HNode>
);
