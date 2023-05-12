import { PrefabId } from "@hiber3d/hdk-core";
import { HNode, Prefab } from "@hiber3d/hdk-react";
import { Avatar, InCircle, Spinning } from "@hiber3d/hdk-react-components";

export const DanceDisc = () => (
  <HNode x={14} y={78.2} z={67.9} scale={8}>
    <Spinning duration={16}>
      <Prefab id={"tron_decoration_disc_t2_orange" as PrefabId}>
        <Avatar
          src={{ id: "punkHairFemale" }}
          animation="an_default_emote_hiphopspindance"
          x={-0.5}
          y={0.5}
          z={-0.3}
          scale={0.25}
          rotY={90}
        />
        <Avatar
          src={{ id: "RPMPunkMale" }}
          animation="an_default_emote_applaud"
          y={0.5}
          z={0.5}
          scale={0.25}
          rotY={200}
        />
        <Prefab id="fx_particlesystem_musicnotes_01" y={0.5} scale={0.25} />
        <Prefab
          id="fx_particlesystem_magic_01"
          x={0.2}
          y={0.5}
          scale={0.33}
          rotZ={90}
        />
        <Prefab
          id="invisible_light_magenta"
          x={0.2}
          y={0.5}
          scale={0.33}
          rotZ={90}
        />
      </Prefab>
    </Spinning>
    <Avatar
      src={{ id: "goatieDenimTHJacketMale" }}
      animation="an_default_emote_leaning_idle_02"
      x={0.7}
      y={0.32}
      z={-2.17}
      scale={0.25}
      rotY={187}
      rotX={-17}
    />
    <InCircle
      items={8}
      radius={0.8}
      renderItem={<Prefab id="collectible_gem_01" x={0} y={0.5} scale={0.2} />}
    />
  </HNode>
);
