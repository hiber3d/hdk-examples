import { Vec3 } from "@hiber3d/hdk-core";
import { HDKComponent, HNode, Prefab, render } from "@hiber3d/hdk-react";
import { AnimateAlongPath, Distribute, Ground, Path } from "@hiber3d/hdk-react-components";


const points: Vec3[] = [
  [5, 2, -10],
  [17, 6, -15],
  [14, 6, 2],
  [26, 10, 14],
  [11, 6, 28],
  [-6, 3, 12],
  [-4, 8, -5],
  [2, 3, -8],
];

const Rails = () => (
  <>
    <Prefab id="cube_02" x={0.2}  scaleX={0.2} scaleY={0.2} scaleZ={1.4} material="t_metal_01" />
    <Prefab id="cube_02" x={-0.2} scaleX={0.2} scaleY={0.2} scaleZ={1.4} material="t_metal_01" />
  </>
)

const Cart: HDKComponent<{ startAt: number }> = ({startAt }) => (
    <AnimateAlongPath startAt={startAt} duration={points.length} points={points}>
      <Prefab rotY={90} id="en_p_jungle_stone_chest_01" />
      <Prefab id="gpl_spawn_point_01" z={2} y={0.3} />
    </AnimateAlongPath>
)

const Jungle = () => (
  <Distribute gladeRadius={40} itemAreaSizeMin={10} renderItem={<Prefab id="jungle_tree_medium" />} />
)

const Goal = () => (
  <HNode x={-5.1} y={6.3} z={-15.7}>
    <Prefab id="goal_01" y={2} />
    <Prefab id="en_p_jungle_stone_cube_02" />
  </HNode>
)

const World = () => (
  <HNode>
    <Ground hilly={1} />
    <Jungle />
    <Goal />
    <Path close numberOfItems={100} points={points} renderItem={({index}) => (
      <>
        {index % 5 === 0 && (
          <>
            <Prefab y={-5} id="en_m_jungle_temple_pillar_01" />
            <Prefab y={-10} id="en_m_jungle_temple_pillar_01" />
            <Prefab id="collectible_mandatory_key_01" />
          </>
        )}
        <Rails />
      </>
    )} />
    <Cart startAt={0} />
    <Cart startAt={0.4} />
    <Cart startAt={0.8} />
  </HNode>
);

render(<World />, {
  environment: "cloud_pillars_01",
});
