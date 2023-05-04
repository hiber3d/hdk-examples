import { Prefab as HPrefab } from "@hiber3d/hdk-core";
import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import { Stack } from "@hiber3d/hdk-react-components";

type GravityWellOpts = {
  hologram: HPrefab;
};

export const GravityWell: HDKComponent<GravityWellOpts> = (input) => {
  const { p, s, r, ...props } = input;

  const { hologram } = input;

  return (
    <HNode p={p} r={r}>
      <Prefab id="en_m_tunnel_bridge_02" z={45} s={[4, 1, 1]}>
        <Prefab
          id="en_m_hiberpunk_building_02_top"
          z={90}
          y={-15}
          s={[0.1, 1, 0.6]}
        />
        <Prefab id={hologram} z={-5}></Prefab>
      </Prefab>
      <Stack
        {...props}
        dim={35}
        segments={{ length: 4, direction: "IN" }}
        renderItem={() => (
          <Prefab id="en_m_tunnel_bridge_01" s={[1, 1.3, 3]} scaleX={2} />
        )}
      ></Stack>
    </HNode>
  );
};
