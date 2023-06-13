import { PrefabId } from "@hiber3d/hdk-core";
import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import { SegmentedStack } from "@hiber3d/hdk-react-components";

type GravityWellOpts = {
  hologram: PrefabId;
};

export const GravityWell: HDKComponent<GravityWellOpts> = (input) => {
  const { hologram, ...props } = input;

  return (
    <HNode {...props}>
      <Prefab id="en_m_tunnel_bridge_02" z={45} scaleX={4}>
        <Prefab
          id="en_m_hiberpunk_building_02_top"
          z={90}
          y={-15}
          scaleX={0.1}
          scaleZ={0.6}
        />
        <Prefab id={hologram} z={-5}></Prefab>
      </Prefab>
      <SegmentedStack
        dimensions={35}
        segments={[{ length: 4, direction: "IN" }]}
        renderItem={() => (
          <Prefab
            id="en_m_tunnel_bridge_01"
            scaleY={1.3}
            scaleZ={3}
            scaleX={2}
          />
        )}
      ></SegmentedStack>
    </HNode>
  );
};
