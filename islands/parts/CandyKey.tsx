import { materials, meshes } from '@hiber3d/hdk-assets';
import { HDKComponent, HNode } from '@hiber3d/hdk-react';
import { Spinning } from '@hiber3d/hdk-react-components';

export const CandyKey: HDKComponent = ({ ...props }) => (
  <Spinning {...props}>
    <HNode
      engineProps={{
        rendering: {
          meshID: meshes.en_p_sugar_candy_01.id,
          materialID: materials.t_striped_candy_01.id,
        },
        collectible: {
          type: 'MANDATORY',
          pointValue: 1,
          collectFxId: 'fx_collect_collectible_gem_01',
          resetFxId: 'fx_reset_collectible_gem_01',
          grabbingOffset: [0, 0, 0],
          grabbingRadius: 1,
        },
      }}
    />
  </Spinning>
);
