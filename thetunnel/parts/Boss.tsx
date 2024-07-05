import { MaterialId } from "@hiber3d/hdk-core";
import {
  Animation,
  HNode,
  PointLight,
  PowerUp,
  Prefab,
} from "@hiber3d/hdk-react";
import {
  Checkpoint,
  FibonacciSphere,
  Hovering,
  Mesh,
  PointSound,
  SoundCell,
  Spinning,
  Waving,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../constants";

export const Boss = () => (
  <HNode z={500}>
    <Prefab id="disc_02" scale={3} material="palette_02_gold" z={60} y={-5.5}>
      <HNode engineProps={{ teleporterReceiver: { channel: "D" } }} z={-1.5} />
      <Checkpoint scale={0.4} z={-1.5} y={0.1} />
      <PointLight strength={90} radius={60} y={3} />
    </Prefab>
    <PowerUp
      abilities={[
        {
          effects: [
            {
              duration: 30,
              attributes: {
                type: "MOVEMENT_MODE",
                data: {
                  type: "SUPERMAN",
                },
              },
            },
            {
              duration: 30,
              attributes: {
                type: "FX",
                data: {
                  onActiveVfxPrefabId: "drillhat",
                },
              },
            },
          ],
        },
      ]}
      y={-6}
      z={62}
    >
      <Spinning y={2} scale={0.2} direction={-1}>
        <Prefab
          id="h_drill_01"
          rotX={20}
          material={"h_drill_01" as MaterialId}
        />
      </Spinning>
    </PowerUp>
    <Hovering z={100} y={-3} rotY={180} magnitude={4}>
      <Spinning duration={3}>
        <FibonacciSphere
          radius={10}
          renderItem={
            <Animation
              animation={{
                x: [0, 0, 0, 0, 20],
                rotY: [0, 0, 0, 0, 90],
                duration: 5,
              }}
            >
              <Prefab id="h_sawblade_01" rotX={90} scale={1.5} />
            </Animation>
          }
        />
      </Spinning>
      <Animation
        animation={{ rotY: [-5, 5], easing: "EASE_IN_OUT_CUBIC", duration: 2 }}
      >
        <HNode>
          <SoundCell src={{ id: "a_mu_mysterious_lights_01" }} radius={100} />
          <HNode scale={60}>
            <Mesh id="en_p_skull_01" material={"boss_material" as MaterialId} />
            <Animation
              animation={{
                rotX: [0, 20, 0, 0],
                steps: [0, 0.1, 0.5, 0.6, 0.99],
                duration: 10,
                loop: "RESTART",
              }}
            >
              <Mesh
                id="en_p_skull_01_jaw"
                material={"boss_material" as MaterialId}
              />
            </Animation>
            <PointSound src={{ url: `${CDN}/boss-scream.mp3` }} radius={100} />
          </HNode>
          <Spinning z={-1}>
            <Prefab
              id="coffin_01"
              material="t_gore_01"
              scale={1.5}
              y={2}
              rotX={90}
              engineProps={{
                billboard: {},
                teleporterSender: { channel: "E" },
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
          </Spinning>
          <Waving z={5} y={2} x={-2} rotX={80}>
            <Prefab id="gpl_death_ray_01" />
          </Waving>
          <Waving z={5} y={2} x={2} rotX={100}>
            <Prefab id="gpl_death_ray_01" />
          </Waving>
        </HNode>
      </Animation>
    </Hovering>
  </HNode>
);
