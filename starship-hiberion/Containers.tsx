import { HNode, Prefab, HDKComponent } from "@hiber3d/hdk-react";
import { Stack } from "@hiber3d/hdk-react-components";

// trashcontainer_01 // trashcontainer_01_t1 //

export const Containers: HDKComponent = (props) => (
  <HNode {...props} s={1.1}>
    <HNode p={[40, 0, 0]}>
      <Stack
        p={[0, 0, 0]}
        dim={4}
        segments={{ length: 2, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Prefab id="trashcontainer_01" p={[-20, 0, -30]} rotY={70} s={2} />
      <Prefab id="trashcontainer_01_t1" p={[-16, 0, -24]} rotY={30} s={2} />
      <Stack
        p={[0, 0, 12]}
        dim={4}
        segments={{ length: 2, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      >
        <Prefab id="en_p_shipping_container_02" y={4.0}></Prefab>
      </Stack>
      <Stack
        p={[0, 0, 24]}
        dim={4}
        segments={{ length: 2, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      >
        <Prefab id="en_p_shipping_container_02" y={4.0}>
          <Prefab id="en_p_shipping_container_01" y={4.0}></Prefab>
        </Prefab>
      </Stack>
    </HNode>
    <HNode p={[28, 0, 0]}>
      <Stack
        p={[0, 0, 0]}
        dim={4}
        segments={{ length: 4, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Stack
        p={[0, 0, 12]}
        dim={4}
        segments={{ length: 2, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Stack
        p={[0, 0, 24]}
        dim={4}
        segments={{ length: 3, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
    </HNode>
    <HNode p={[16, 0, 0]}>
      <Stack
        p={[0, 0, 0]}
        dim={4}
        segments={{ length: 4, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Stack
        p={[0, 0, 12]}
        dim={4}
        segments={{ length: 5, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Stack
        p={[0, 0, 24]}
        dim={4}
        segments={{ length: 5, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
    </HNode>
    <Prefab id="en_p_shipping_container_01">
      <Prefab id="en_p_shipping_container_01" y={5}></Prefab>
      <Stack
        p={[0, 0, 12]}
        dim={4}
        segments={{ length: 3, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Prefab id="en_p_shipping_container_01" x={5} z={15}></Prefab>
      <Prefab
        id="en_p_shipping_container_01"
        x={5}
        z={7}
        y={3.8}
        s={[0.8, 0.8, 1.2]}
        rotX={-30}
      ></Prefab>
      <Stack
        p={[0, 0, 24]}
        dim={4}
        segments={{ length: 4, direction: "UP" }}
        renderItem={(i) => (
          <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
        )}
      ></Stack>
      <Prefab id="en_p_grid_ramp_01" p={[0, 14, 16]} rotY={180} s={0.6} />
    </Prefab>
    <HNode p={[0, 40, -30]}>
      <Prefab
        id="en_p_garden_gate_01"
        s={[35, 15, 10]}
        rotX={90}
        p={[32, 30, 40]}
        material="palette_02_steel"
      ></Prefab>
      <Prefab
        id="en_p_garden_gate_01"
        s={[35, 15, 10]}
        rotX={270}
        p={[32, 30, 40]}
        material="palette_02_steel"
      ></Prefab>
    </HNode>
    <HNode
      p={[0, 40, -30]}
      animation={{
        rotY: [0, -90, -90, -180, -180, -270, -270, -360, 0],
        x: [0, 0, 40, 40, 40, 40, 0, 0, 0],
        z: [0, 0, 0, 0, 60, 60, 60, 60, 0],
        duration: 10,
        loop: "RESTART",
      }}
    >
      <Prefab id="en_p_shipping_container_01" s={[1, 0.8, 1]}></Prefab>
    </HNode>
  </HNode>
);
