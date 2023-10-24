import {
  HNode,
  Prefab,
  ProximitySensor,
  SpotLight,
  useRandom,
  ResistorSensor,
  VisibleOnSignal,
  PointLight,
  Animation,
  PowerUp,
  HDKComponent,
  Apply,
  PrefabDefinition,
} from "@hiber3d/hdk-react";
import {
  SoundCell,
  Path,
  InCircle,
  PointSound,
  ZombieHand,
  Grid,
  Hovering,
  OmnipresentSound,
  Collider,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../constants";
import { PrefabId, generateId } from "@hiber3d/hdk-core";

const LanternPowerUp: HDKComponent = (props) => {
  const lanternRoot = generateId();

  return (
    <>
      <PowerUp
        abilities={[
          {
            effects: [
              {
                duration: 7,
                stackRule: "UNSTACKABLE",
                attributes: {
                  type: "FX",
                  data: {
                    onActiveVfxPrefabId: "carryingLantern",
                  },
                },
              },
            ],
          },
        ]}
        {...props}
      >
        <Prefab id="en_p_lantern_02" scale={0.5} y={1.6} />
        <PointLight color={[3.0, 0.949, 0.836]} strength={70.5} radius={4} />
      </PowerUp>
      <PrefabDefinition id="carryingLantern">
        <HNode engineId={lanternRoot}>
          <HNode
            engineProps={{
              snapTo: {
                parentObjectId: {
                  objectID: lanternRoot,
                  type: "OBJECT_ID",
                  prefabIndex: -1,
                },
              },
            }}
          >
            <Apply props={{ engineProps: { colliderIsDisabled: {} } }}>
              <PointLight
                z={-1}
                y={2}
                radius={15}
                rotX={-90}
                strength={40}
                color="antiquewhite"
              />
              <HNode y={1.5} scale={0.4} x={-0.3} z={0.3}>
                <Prefab id="en_p_lantern_02" />
                <PointSound src={{ id: "a_fx_bonfire_01" }} />
                <PointSound src={{ id: "a_fx_lever_01" }} looping={false} />
                {/* <Animation animation={{ x: [0, 0] }}>
            <Prefab id="en_p_lantern_02"/>
            <Prefab
              id="cube_02"
              y={-0.2}
              scaleX={0.4}
              scaleY={0.1}
              scaleZ={0.1}
              material="t_glass_01"
            />
          </Animation>
          <Animation name="ANIMATED" animation={{ scaleX: [4, 0.1], duration: lanternTime, easing: 'LINEAR' }}>
            <Prefab id="cube_02" y={-0.2} scale={0.1} material="m_emissive_yellow" />
          </Animation> */}
              </HNode>
            </Apply>
          </HNode>
        </HNode>
      </PrefabDefinition>
    </>
  );
};

export const Tunnel = () => (
  <HNode z={400} x={400}>
    <Prefab id="plane_01" y={-1} material="t_gravel_01" scale={0.7} z={8} />
    <HNode engineProps={{ teleporterReceiver: { channel: "X" } }} />
    <LanternPowerUp z={18} />
    <SoundCell src={{ url: `${CDN}/scare.mp3` }} volume={0} />
    <SoundCell src={{ url: `${CDN}/zombies.mp3` }} volume={0} />
    <SoundCell src={{ url: `${CDN}/scrape.mp3` }} volume={0} />
    <Path
      rotY={-90}
      z={30}
      y={5}
      points={[
        [0, 0, 0],
        [30, 0, 0],
        [20, 0, 40],
        [30, 0, 100],
      ]}
      numberOfItems={60}
      renderItem={({ index, last }) => (
        <>
          <InCircle
            faceCenter
            rotX={90}
            radius={8}
            items={10}
            renderItem={<Prefab id="rock_03_t3" scale={3} />}
          />
          {index === 29 && <LanternPowerUp y={-4} />}
          {index > 35 && index < 45 && (
            <>
              {index == 40 && (
                <>
                  <ProximitySensor output="arms" maxDistance={10} />
                  <SoundCell
                    src={{ url: `${CDN}/zombies.mp3` }}
                    playOnSignal={{
                      input: "arms",
                      playUntilFinishedIfNotLooping: false,
                    }}
                    radius={10}
                    volume={5}
                  />
                  <SoundCell
                    src={{ url: `${CDN}/scare.mp3` }}
                    playOnSignal={{
                      input: "arms",
                      playUntilFinishedIfNotLooping: true,
                    }}
                    looping={false}
                    radius={10}
                    volume={1}
                  />
                  <HNode
                    y={-4.8}
                    z={-7}
                    engineProps={{
                      collider: {
                        collider: {
                          form: "box",
                          meshId: "",
                          size: [1, 1, 1],
                          offset: [0, 0, 0],
                        },
                        canGenerateEvent: true,
                      },
                      abilityCollidable: { abilityIds: ["camshake"] },
                    }}
                  />
                  <PowerUp
                    y={-4.8}
                    z={-7}
                    abilities={[
                      {
                        effects: [
                          {
                            duration: 1.5,
                            attributes: {
                              type: "CAMERA_SHAKE",
                              data: {
                                frequency: 100,
                                strength: {
                                  value: 0.3,
                                  outroCurve: "EASE_OUT_CUBIC",
                                },
                                smooth: true,
                              },
                            },
                          },
                        ],
                      },
                    ]}
                  >
                    <Collider />
                  </PowerUp>
                  <PointSound
                    src={{ url: `${CDN}/zombies2.mp3` }}
                    volume={1.5}
                    radius={30}
                  />
                </>
              )}
              <InCircle
                rotZ={-50}
                items={14}
                degrees={280}
                rotX={90}
                radius={4}
                faceCenter
                renderItem={
                  <Animation
                    animation={{
                      x: [10, 0],
                      duration: 0.5,
                      playOnSignal: {
                        input: "arms",
                        behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF",
                      },
                    }}
                  >
                    <ZombieHand scale={1.5} rotY={90} rotZ={90} />
                  </Animation>
                }
              />
            </>
          )}
          {last && (
            <HNode>
              <Prefab
                id="tombstone_02"
                y={-4}
                rotY={180}
                scale={2.5}
                engineProps={{
                  teleporterSender: { channel: "A" },
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
                src={{ url: `${CDN}/whispers.mp3` }}
                volume={1.5}
                radius={30}
              />
              <SpotLight
                z={-8}
                y={1}
                dir={[0.5, -1, 2]}
                radius={60}
                openingAngleDegs={250}
                color="red"
                strength={90}
              />
              <Grid
                rows={15}
                columns={15}
                rotX={90}
                z={7}
                itemSpacing={0.8}
                renderItem={() => {
                  const random = useRandom();
                  return (
                    <Hovering magnitude={1}>
                      <HNode scale={5}>
                        <Prefab
                          id={"skull_01" as PrefabId}
                          rotX={90}
                          rotY={180}
                        />
                        <Animation
                          animation={{
                            rotX: [0, 20],
                            duration: random.value(0.4, 3),
                          }}
                        >
                          <Prefab id={"skull_jaw_01" as PrefabId} />
                        </Animation>
                      </HNode>
                    </Hovering>
                  );
                }}
              />
            </HNode>
          )}
        </>
      )}
    />
    <HNode x={-13.9} y={1.1} z={57.8}>
      <ProximitySensor output="scare" maxDistance={4} />
      <ResistorSensor input="scare" output="delayScare" delayInSeconds={0.15} />
      <VisibleOnSignal input="delayScare">
        <Animation
          animation={{
            x: [-4, 4],
            z: [-1, 2],
            duration: 0.5,
            easing: "EASE_IN_CUBIC",
            playOnSignal: {
              input: "delayScare",
              behavior: "PLAY_UNTIL_HALF_WHEN_ON_REVERSE_WHEN_OFF",
            },
          }}
        >
          <Prefab
            x={-10}
            z={-6}
            y={-4}
            id="scarecrow_01"
            scale={3}
            rotY={70}
            engineProps={{
              collider: {
                collider: {
                  meshId: "",
                  form: "box",
                  size: [0, 0, 0],
                  offset: [0, 0, 0],
                },
              },
            }}
          >
            <PointLight
              strength={80}
              radius={20}
              color="white"
              lightOnSignal={{ input: "delayScare" }}
            />
            <SoundCell
              radius={20}
              looping={false}
              volume={1}
              playOnSignal={{
                input: "scare",
                playUntilFinishedIfNotLooping: true,
              }}
              src={{ url: `${CDN}/maniac.mp3` }}
            />
          </Prefab>
        </Animation>
      </VisibleOnSignal>
    </HNode>
    <PointSound volume={0} src={{ url: `${CDN}/maniac.mp3` }} />
    <OmnipresentSound src={{ id: "a_am_ghostly_presence_01" }} volume={2} />
  </HNode>
);
