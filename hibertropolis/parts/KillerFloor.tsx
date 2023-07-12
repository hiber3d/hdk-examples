import { useRandom, HNode, Prefab, PointLight, HDKComponent } from '@hiber3d/hdk-react';
import { Grid, InCircle, Orbiting, Spinning } from '@hiber3d/hdk-react-components';

export const KillerFloor: HDKComponent<{ largeRadius?: boolean }> = ({ largeRadius = false }) => {
  const random = useRandom();

  return (
    <>
      <Grid rows={17} columns={17} itemSpacing={4} scale={5} renderItem={<Prefab id="en_p_grid_block_01" />} />
      <HNode y={8}>
        <Orbiting duration={32} direction={1} axis="y">
          <InCircle
            radius={largeRadius ? 80 : 40}
            items={largeRadius ? 12 : 20}
            renderItem={() => (
              <>
                <Spinning duration={2} direction={1} startAt={random.value()} scale={2}>
                  <Spinning duration={1} direction={-1} z={6} rotX={110} scale={3}>
                    <Prefab id="h_sawblade_01" material="t_rusted_metal_01" />
                  </Spinning>
                  <Orbiting radius={10} duration={16} startAt={random.value()}>
                    <PointLight color="red" radius={20} />
                  </Orbiting>
                </Spinning>
              </>
            )}
          />
        </Orbiting>
      </HNode>
    </>
  );
};
