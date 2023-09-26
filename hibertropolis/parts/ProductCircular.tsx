import { HDKComponent, HNode, InfoPanel, Material, Prefab } from '@hiber3d/hdk-react';
import { ImagePanel, InCircle, MannequinStand } from '@hiber3d/hdk-react-components';
import { useContent } from '../useContent';

type ProductsCircularProps = {
  radius?: number;
  spread?: number;
  mannequinScale?: number;
};

export const ProductsCircular: HDKComponent<ProductsCircularProps> = ({
  spread = 0.5,
  mannequinScale = 2,
  radius = 10,
  ...props
}) => {
  const { shop } = useContent();
  if (!shop?.products) {
    return null;
  }
  const { products } = shop;

  const count = products.length;
  const degrees = 360 * spread;
  const items = (
    <InCircle
      radius={radius}
      items={count}
      degrees={degrees}
      faceCenter={true}
      renderItem={({ index }) => {
        const { material, avatar, physical } = products[index];

        return (
          <HNode>
            <MannequinStand
              rotY={90}
              spin={true}
              isOpenInNewTabEnabled={false}
              mannequinScale={mannequinScale}
              podiumMaterial={material}
              {...avatar}
            />
            <InfoPanel
              header={physical.header}
              preBody="Buy the physical outfit now"
              url={physical.url}
              openUrlInNewTab={!physical.isOpenInOverlayEnabled}
              isOpenInOverlayEnabled={physical.isOpenInOverlayEnabled}
              isOpenInOverlayOnTouch={physical.isOpenInOverlayOnTouch}>
              <HNode z={3.5} x={-0.5} rotY={90}>
                <Material id={material}>
                  <Prefab id="display_shelf_04" x={0.05} />
                </Material>
                <ImagePanel src={physical.image} y={1} scale={1.5} z={1} />
                <Prefab id="storeprop_tshirt_stack_01" material="palette_01_black" y={1.15} x={-0.2} />
                <Prefab id="storeprop_tshirt_stack_01" material="palette_01_black" y={1.15} x={0.2} />
              </HNode>
            </InfoPanel>
          </HNode>
        );
      }}
    />
  );
  return <HNode {...props}>{items}</HNode>;
};
