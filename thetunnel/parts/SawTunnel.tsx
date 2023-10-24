import { HNode, PointLight, useRandom, Prefab } from "@hiber3d/hdk-react";
import {
  Checkpoint,
  Line,
  InCircle,
  Spinning,
  SoundCell,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../constants";

export const SawTunnel = () => (
  <HNode y={5} z={-200} x={-300} rotY={-90}>
    <HNode
      y={3}
      z={-6}
      engineProps={{
        teleporterReceiver: { channel: "B" },
      }}
    />

    <Checkpoint y={-2} z={-3} material="t_gore_01" />
    <PointLight strength={100} radius={60} />
    <Line
      renderItem={() => {
        const random = useRandom();

        const a = random.value(2, 10);
        return (
          <>
            <Prefab id="en_m_wooden_platform_01" y={-6} z={-4} />
            <InCircle
              rotX={90}
              radius={7.2}
              faceCenter
              items={8}
              renderItem={
                <HNode>
                  <Prefab id="rock_03_t3" material="t_neon_red_01" scale={3} />
                  <Prefab id="evil_eye_01" scale={2} y={1.7} x={-4} rotZ={90} />
                </HNode>
              }
            />
            <Spinning rotX={90} duration={a}>
              <InCircle
                radius={6.3}
                faceCenter
                items={6}
                renderItem={
                  <Spinning direction={-1} x={-3} duration={2} rotZ={40}>
                    <Prefab id="h_sawblade_01" scale={2} />
                  </Spinning>
                }
              />
            </Spinning>
          </>
        );
      }}
      numberOfItems={10}
      delta={[0, 0, 4]}
    />
    <HNode z={20}>
      <SoundCell src={{ url: `${CDN}/saw.mp3` }} radius={40} volume={0.55} />
      <SoundCell src={{ id: "a_am_bubbly_fire_01" }} radius={50} />
      <SoundCell src={{ id: "a_mu_cockroaches_01" }} radius={40} />
      <HNode
        y={-2}
        z={5}
        scale={2.5}
        engineProps={{
          teleporterSender: { channel: "C" },
          colliderIsSensor: { dummy: false },
          collider: {
            collider: {
              form: "box",
              meshId: "",
              size: [1, 1, 1],
              offset: [0, 0, 0],
            },
            canGenerateEvent: true,
            collisionGroup: 32,
            collisionMask: 32,
          },
          vfxInVolume: {
            prefabId: "teleportEffect",
          },
        }}
      />
    </HNode>
  </HNode>
);
