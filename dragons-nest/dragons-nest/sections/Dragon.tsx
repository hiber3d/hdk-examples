import React from 'react';
import { HNode, Prefab } from '@hiber3d/hdk-react';
import { Animation } from '@hiber3d/hdk-react';

const Fireball = ({ direction }: { direction: number }) => (
  <Animation rotY={direction} animation={{ z: [0.5, 40], duration: 2, loop: 'RESTART', easing: 'LINEAR' }}>
    <Prefab
      id="sphere_01"
      scale={0.3}
      material="t_lava_01"
      // signalListener={{ target: 'head', invisibleOnSignal: {} }}
    />
    <Prefab id="fx_particlesystem_fire_01" scale={1.5} />
  </Animation>
);

const BodyPart = ({ index, total }: { index: number; total: number }) => (
  <Animation animation={{ x: [-3, 3], duration: 2, easing: 'EASE_IN_OUT_QUAD', startAt: (2 / total) * index }}>
    <Prefab
      id="sphere_01"
      z={-1 * index}
      scale={0.7}
      material="t_gore_01"
      // signalListener={{ target: 'head', invisibleOnSignal: {} }}
    ></Prefab>
  </Animation>
);

const Head = () => (
  <Animation animation={{ x: [-3, 3], duration: 2, easing: 'EASE_IN_OUT_QUAD', startAt: -0.1 }}>
    <Animation animation={{ rotY: [-45, 45], duration: 2, easing: 'EASE_IN_OUT_QUAD', startAt: -0.4 }}>
      <Prefab
        id="en_p_jaguar_head_01_t1"
        material="t_gore_01"
        // signalListener={{
        //   target: 'head',
        //   invisibleOnSignal: {},
        //   spawnPrefabOnSignal: { prefabID: 'collectible_mandatory_key_01' },
        // }}
        // signalSource={{ id: 'head', signalSwitch: {} }}
      />
    </Animation>
    <Fireball direction={-15} />
    <Fireball direction={0} />
    <Fireball direction={15} />
  </Animation>
);

export const Dragon = () => (
  <Animation
    x={108}
    y={139}
    z={-28}
    animation={{ rotY: [0, -180, -360], duration: 20, loop: 'RESTART', easing: 'LINEAR' }}>
    <HNode x={20} y={1}>
      {Array.from({ length: 20 }, (_, index) => {
        if (index === 0) {
          return <Head key={index} />;
        }
        return <BodyPart index={index} total={20} key={index} />;
      })}
    </HNode>
  </Animation>
);
