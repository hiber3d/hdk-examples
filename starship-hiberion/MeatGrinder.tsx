import { MaterialId, materials } from "@hiber3d/hdk-core";
import { HDKComponent, HNode, Prefab, useRandom } from "@hiber3d/hdk-react";
import {
  SegmentedStack,
  InCircle,
  Spinning,
} from "@hiber3d/hdk-react-components";

export const MeatGrinder: HDKComponent = (props) => {
  const random = useRandom();

  return (
    <HNode {...props}>
      <HNode y={-23}>
        <Spinning duration={60}>
          <Prefab
            id="gpl_rotating_twist_01"
            scaleX={2.6}
            scaleZ={2.6}
            material={materials.palette_02_silver.id as MaterialId}
          />
        </Spinning>

        <HNode y={-10}>
          <SegmentedStack
            dimensions={7.1}
            segments={[{ length: 4, direction: "DOWN" }]}
            renderItem={(index) => (
              <HNode>
                <Spinning duration={60}>
                  <InCircle
                    radius={14}
                    items={17}
                    renderItem={({ index, progress }) => {
                      return (
                        <Prefab
                          material="t_rusted_metal_01"
                          id={
                            index % 2
                              ? "rounded_cylinder_01"
                              : "rounded_cylinder_02"
                          }
                          y={3 * (index % 3)}
                          scaleX={0.8}
                          scaleY={0.6}
                          scaleZ={0.8}
                        />
                      );
                    }}
                  />
                </Spinning>
                <Spinning direction={-1} duration={50}>
                  <InCircle
                    radius={10}
                    items={8}
                    renderItem={({ index, progress }) => {
                      return (
                        <Prefab
                          material="t_sci_fi_tile_03"
                          id={
                            index % 2
                              ? "rounded_cylinder_01"
                              : "rounded_cylinder_02"
                          }
                          y={3 * (index % 3) + random.range(0, 2)}
                          scaleX={2}
                          scaleY={1}
                          scaleZ={2}
                        />
                      );
                    }}
                  />
                </Spinning>
                <Spinning direction={1} duration={30}>
                  <InCircle
                    radius={5}
                    items={3}
                    renderItem={({ index, progress }) => {
                      return (
                        <HNode>
                          <Prefab
                            material="t_sci_fi_tile_04"
                            id={
                              index % 2
                                ? "rounded_cylinder_01"
                                : "rounded_cylinder_02"
                            }
                            y={3 * (index % 3) + random.range(0, 2)}
                            scaleX={2}
                            scaleY={1}
                            scaleZ={2}
                          />
                        </HNode>
                      );
                    }}
                  />
                </Spinning>
              </HNode>
            )}
          >
            <HNode y={-17}>
              <Spinning duration={60}>
                <Prefab
                  id="gpl_rotating_twist_01"
                  scaleX={2.6}
                  scaleZ={2.6}
                  material={materials.palette_02_silver.id}
                />
              </Spinning>
            </HNode>
          </SegmentedStack>
        </HNode>
      </HNode>
    </HNode>
  );
};
