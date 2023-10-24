import {
  HNode,
  InfoPanel,
  PointLight,
  PowerUp,
  Prefab,
  SpotLight,
} from "@hiber3d/hdk-react";
import {
  Hovering,
  InCircle,
  PointSound,
  SoundCell,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../constants";

export const Ending = () => (
  <HNode y={1} z={-300}>
    <HNode
      y={2.5}
      x={-1}
      z={3}
      engineProps={{
        teleporterReceiver: { channel: "E", destinationPointOffset: [0, 2, 0] },
      }}
    />
    <Prefab id="goal_01" y={2.5} x={-1} z={3} material="t_white_paint_01" />
    <PointSound
      z={20}
      src={{ url: `${CDN}/bossdie.mp3` }}
      looping={true}
      volume={1}
      radius={30}
    />
    <PowerUp
      y={2}
      abilities={[
        {
          effects: [
            {
              id: "stopflying",
              duration: 100000,
              attributes: {
                type: "MOVEMENT_MODE",
                data: {
                  type: "GROUNDED",
                },
              },
            },
          ],
        },
      ]}
    >
      <HNode
        engineProps={{
          collider: {
            collider: {
              form: "box",
              size: [2, 2, 2],
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
    <SoundCell
      src={{ id: "a_am_mystical_heaven_01" }}
      radius={20}
      volume={0.7}
    />
    <Prefab
      id="chocolatechip_cookie_01"
      material="chrome"
      y={2}
      scaleX={5}
      scaleZ={5}
    />
    <HNode z={-3} y={2.5}>
      <Prefab id="en_p_dirt_row_01" scaleY={1.2} scaleZ={0.5} />
      <InfoPanel header={"         It has begun"}>
        <Prefab id="tombstone_01" z={-1.5} />
      </InfoPanel>
    </HNode>
    <InCircle
      faceCenter
      radius={12}
      z={2}
      y={0.8}
      renderItem={
        <Hovering>
          <Prefab id="en_p_jungle_flower_01" />
        </Hovering>
      }
    />
    <Prefab id="water_plane_01" scaleX={15} scaleZ={15} />
    <PointLight y={5} radius={30} strength={40} z={2} />
    <SpotLight y={5} radius={30} strength={40} />
  </HNode>
);
