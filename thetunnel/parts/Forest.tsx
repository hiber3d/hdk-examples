import { HNode, PointLight, PowerUp, Prefab } from "@hiber3d/hdk-react";
import {
  InCircle,
  Line,
  Moving,
  SkySphere,
  SoundCell,
} from "@hiber3d/hdk-react-components";

export const Forest = () => (
  <HNode y={1} z={300}>
    <PowerUp
      abilities={[
        {
          effects: [
            {
              id: "slowrun",
              duration: 10,
              modifier: "SUBTRACT",
              attributes: {
                type: "SPRINT_SPEED",
                data: {
                  attribute: {
                    value: 4,
                  },
                },
              },
            },
          ],
        },
      ]}
      y={1.2}
      z={-9}
      spawnerProps={{ spawnRule: "SPAWN_ONCE" }}
    >
      <HNode
        engineProps={{
          collider: {
            collider: {
              form: "box",
              size: [1, 1, 1],
              offset: [0.0, 0.0, 0.0],
              meshId: "box",
            },
            friction: 0.5,
            restitution: 0.5,
            isGround: false,
            collisionGroup: 32,
            alwaysUseConvexColliders: false,
          },
        }}
      />
    </PowerUp>
    <HNode engineProps={{ teleporterReceiver: { channel: "A" } }} z={-10} />
    <Prefab id="checkpoint_01" material="t_glass_01" z={-10} />
    <SkySphere
      scale={15}
      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG"
      physical
    />
    <InCircle
      items={3}
      y={7}
      radius={12}
      faceCenter
      renderItem={<PointLight strength={100} radius={60} />}
    />
    <Line
      z={-10}
      renderItem={
        <HNode>
          <Prefab x={-5} id="cherry_tree_01" />
          <Prefab id="grass_tuft_02_cluster" />
          <Prefab x={5} id="cherry_tree_01" />
        </HNode>
      }
      numberOfItems={8}
      delta={[0, 0, 5]}
    />
    <Moving toY={1.5} y={0.5} z={10} duration={5}>
      <Prefab
        rotY={180}
        rotX={60}
        id="bull_skull_01"
        engineProps={{
          teleporterSender: { channel: "B" },
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
    </Moving>
    <SoundCell z={10} src={{ id: "a_am_birds_and_insects_01" }} radius={40} />
    <SoundCell z={10} src={{ id: "a_mu_halloween_theme_01" }} radius={40} />
    <Prefab id="grass_plane_01" y={-2} />
  </HNode>
);
