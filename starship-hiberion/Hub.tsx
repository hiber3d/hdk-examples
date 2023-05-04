import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import { Spinning } from "@hiber3d/hdk-react-components";
import { GravityWell } from "./GravityWell";

const Axis: HDKComponent = (props) => {
  return (
    <HNode>
      <Prefab id="quarter_pipe_wall_01" rotZ={0} s={[8, 4, 8]} x={13} z={8} />
      <Prefab
        id="quarter_pipe_wall_01"
        rotZ={180}
        s={[8, 4, 8]}
        x={-13}
        y={8}
        z={8}
      />
      <Prefab
        id="quarter_pipe_wall_01"
        rotY={90}
        s={[8, 4, 8]}
        x={13}
        y={0}
        z={-8}
      />
      <Prefab
        id="quarter_pipe_wall_01"
        rotY={180}
        s={[8, 4, 8]}
        x={-13}
        y={0}
        z={-8}
      />
    </HNode>
  );
};

export const Hub: HDKComponent = (props) => (
  <Spinning duration={100} r={[90, 0, 0]} p={[0, 0, -16]}>
    <GravityWell p={[0, 0, 30]} hologram="hologram_01_hibert"></GravityWell>
    <GravityWell
      r={[0, 180, 0]}
      p={[0, 0, -30]}
      hologram="hologram_01_hibertina"
    ></GravityWell>
    <Axis />
  </Spinning>
);
