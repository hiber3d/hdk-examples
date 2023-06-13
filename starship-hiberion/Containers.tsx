import { HNode, Prefab, HDKComponent, Animation } from "@hiber3d/hdk-react";
import { SegmentedStack, Stack } from "@hiber3d/hdk-react-components";

// trashcontainer_01 // trashcontainer_01_t1 //
const maxx = 40;
const maxz = 60;

export const Containers: HDKComponent = (props) => (
  <HNode {...props} scale={1.1}>
    <HNode x={40}>
      <SegmentedStack
        dimensions={4}
        segments={[{ length: 2, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <HNode x={-20} z={-10}>
        <Prefab id="trashcontainer_01" rotY={70} scale={2} />
        <Prefab id="trashcontainer_01_t1" x={-16} z={-24} rotY={30} scale={2} />
      </HNode>
      <SegmentedStack
        z={12}
        dimensions={4}
        segments={[{ length: 2, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      >
        <Prefab id="en_p_shipping_container_02" y={4.0}></Prefab>
      </SegmentedStack>
      <SegmentedStack
        z={24}
        dimensions={4}
        segments={[{ length: 2, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      >
        <Prefab id="en_p_shipping_container_02" y={4.0}>
          <Prefab id="en_p_shipping_container_01" y={4.0}></Prefab>
        </Prefab>
      </SegmentedStack>
    </HNode>
    <HNode x={28}>
      <SegmentedStack
        dimensions={4}
        segments={[{ length: 4, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <SegmentedStack
        z={12}
        dimensions={4}
        segments={[{ length: 2, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <SegmentedStack
        z={24}
        dimensions={4}
        segments={[{ length: 3, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
    </HNode>
    <HNode x={16}>
      <SegmentedStack
        dimensions={4}
        segments={[{ length: 4, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <SegmentedStack
        z={12}
        dimensions={4}
        segments={[{ length: 5, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <SegmentedStack
        z={24}
        dimensions={4}
        segments={[{ length: 5, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
    </HNode>
    <Prefab id="en_p_shipping_container_01">
      <Prefab id="en_p_shipping_container_01" y={5}></Prefab>
      <SegmentedStack
        z={12}
        dimensions={4}
        segments={[{ length: 3, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <Prefab id="en_p_shipping_container_01" x={5} z={15}></Prefab>
      <Prefab
        id="en_p_shipping_container_01"
        x={5}
        z={7}
        y={3.8}
        scaleX={0.8}
        scaleY={0.8}
        scaleZ={1.2}
        rotX={-30}
      ></Prefab>
      <SegmentedStack
        z={24}
        dimensions={4}
        segments={[{ length: 4, direction: "UP" }]}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        )}
      ></SegmentedStack>
      <Prefab
        id="en_p_grid_ramp_01"
        x={0}
        y={12}
        z={16}
        rotY={180}
        scale={0.6}
      />
    </Prefab>
    <HNode x={0} y={14} z={26}>
      <Stack
        numberOfItems={7}
        rotY={90}
        rotZ={-60}
        rotX={10}
        dimensions={2.4}
        direction="UP"
        renderItem={<Prefab id="en_p_grid_fence_01" />}
      />
    </HNode>
    <HNode y={40} z={-30}>
      <Prefab
        id="en_p_garden_gate_01"
        scaleX={35}
        scaleY={15}
        scaleZ={10}
        rotX={90}
        x={32}
        y={30}
        z={40}
        material="palette_02_steel"
      ></Prefab>
      <Prefab
        id="en_p_garden_gate_01"
        scaleX={35}
        scaleY={15}
        scaleZ={10}
        rotX={270}
        x={32}
        y={30}
        z={40}
        material="palette_02_steel"
      ></Prefab>
    </HNode>
    <HNode y={30} z={-30}>
      <Animation
        animation={{
          rotY: [0, -90, -90, -180, -180, -270, -270, -360, 0],
          x: [0, 0, maxx, maxx, maxx, maxx, 0, 0, 0],
          z: [0, 0, 0, 0, maxz, maxz, maxz, maxz, 0],
          duration: 40,
          loop: "RESTART",
        }}
      >
        <HNode y={0} z={0}>
          <Prefab id="en_p_shipping_container_01" scaleY={0.8}></Prefab>
        </HNode>
      </Animation>
    </HNode>
  </HNode>
);
