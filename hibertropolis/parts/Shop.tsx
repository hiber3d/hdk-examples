import { HDKComponent, HNode, PointLight, Prefab } from '@hiber3d/hdk-react';
import { ImagePanel, Portal } from '@hiber3d/hdk-react-components';
import { useContent } from '../useContent';
import { ProductsCircular } from './ProductCircular';

const Wall: HDKComponent = ({ ...props }) => {
  return (
    <HNode {...props}>
      <Prefab id="en_p_grid_fence_01" scale={2.55} x={-4.75}></Prefab>
      <Prefab id="en_p_grid_fence_01" scale={2.55} x={4.75}></Prefab>
      {props.children}
    </HNode>
  );
};

const Walls: HDKComponent = ({ ...props }) => {
  return (
    <HNode {...props}>
      <Wall z={-5.5} />
      <Wall x={14} rotY={90} />
      <Wall x={-14} rotY={-90} />
      <Wall z={14.0} />
      {props.children}
    </HNode>
  );
};

export const Shop: HDKComponent = () => {
  const content = useContent();
  return (
    <>
      <Prefab id="gpl_spawn_point_01" y={3} z={6} x={6} rotY={45} />
      <PointLight color={'#c0cdfe'} y={7} strength={8} />
      <Walls y={0.6} />
      <ProductsCircular rotY={-90} radius={10} y={0.6} x={1} z={2} scale={0.8} />
      {!!content.portal && (
        <HNode x={-7} z={7} y={1} rotY={140}>
          <Portal worldId={content.portal} />
          <ImagePanel
            scale={0.5}
            ratio={16 / 9}
            y={3}
            src="https://cdn.hibervr.com/external/music_mv/smash/SIP_sign_ToArcadia.jpg"
          />
        </HNode>
      )}
    </>
  );
};
