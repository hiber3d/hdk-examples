import {
  HNode,
  Prefab,
  PointLight,
  ProximitySensor,
  Apply,
  Animation,
} from "@hiber3d/hdk-react";
import { Line, PointSound } from "@hiber3d/hdk-react-components";
import { CDN } from "../constants";

export const City = () => (
  <HNode rotY={180} z={1000}>
    <HNode
      engineProps={{ teleporterReceiver: { channel: "C" } }}
      y={2}
      z={-5}
    />
    <Line
      renderItem={({ index }) => {
        return (
          <HNode>
            <PointSound
              src={{ url: `${CDN}/scrape.mp3` }}
              radius={30}
              volume={1.8}
              looping={false}
              playOnSignal={{
                input: "shrink0",
                playUntilFinishedIfNotLooping: true,
              }}
            />
            <PointSound
              radius={30}
              src={{ url: `${CDN}/scrape.mp3` }}
              volume={1.8}
              looping={false}
              playOnSignal={{
                input: "shrink1",
                playUntilFinishedIfNotLooping: true,
              }}
            />
            <PointSound
              radius={30}
              src={{ url: `${CDN}/scrape.mp3` }}
              volume={1.8}
              looping={false}
              playOnSignal={{
                input: "shrink2",
                playUntilFinishedIfNotLooping: true,
              }}
            />
            <Animation
              animation={{
                scaleX: [1, 0.5],
                playOnSignal: {
                  input: "shrink0",
                  behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF",
                },
              }}
            >
              <Animation
                animation={{
                  scaleX: [1, 0.5],
                  playOnSignal: {
                    input: "shrink1",
                    behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF",
                  },
                }}
              >
                <Animation
                  animation={{
                    scaleX: [1, 0.2],
                    playOnSignal: {
                      input: "shrink2",
                      behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF",
                    },
                  }}
                >
                  <Prefab id="highrise_05" x={-34} scale={0.8} />
                  <Prefab id="streetlight_02" x={-10} />
                  <Prefab id="street_01" />
                  <PointLight y={40} radius={60} strength={60} color="white" />
                  <Prefab id="streetlight_02" x={10} />
                  <Prefab id="highrise_05" x={34} scale={0.8} />
                </Animation>
              </Animation>
            </Animation>
            {index === 2 && (
              <>
                <Prefab
                  id="evil_eye_01"
                  y={3.5}
                  rotX={-90}
                  z={3}
                  engineProps={{
                    teleporterSender: { channel: "D" },
                    colliderIsSensor: {},
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
                <PointSound
                  src={{ id: "a_am_automated_factory_01" }}
                  volume={3}
                  radius={100}
                />
              </>
            )}
            <ProximitySensor
              output={`shrink${index}`}
              maxDistance={50}
              z={50 - index * 10}
            />
            <Apply
              when={(props) => props.engineProps?.name?.value === "particles"}
              props={{
                engineProps: {
                  particleSystemParticleMaterial: {
                    colorStart: [1, 0, 0, 2],
                    colorEnd: [1, 0, 0, 2],
                  },
                  particleSystemEmitter: {
                    spawnRate: 40,
                    size: [5, 0, 10],
                    particleCountMax: 1000,
                    velocity: [0, -5, 0],
                  },
                  particleSystemParticle: {
                    lifetime: 10,
                  },
                },
              }}
            >
              <Prefab
                id="fx_particlesystem_dripping_water_01"
                y={10}
                scale={3}
              />
            </Apply>
          </HNode>
        );
      }}
      numberOfItems={3}
      delta={[0, 0, 32]}
    />
  </HNode>
);
