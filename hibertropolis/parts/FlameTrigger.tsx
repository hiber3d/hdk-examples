import { PrefabId } from '@hiber3d/hdk-core';
import { Apply, HDKComponent, Prefab } from '@hiber3d/hdk-react';

const signalId = 666;

const Flame: HDKComponent = props => (
  <Prefab
    {...props}
    id="hiberpunk_decoration_disc_t1"
    scaleX={2}
    scaleY={4}
    scaleZ={2}
    engineProps={{
      signalListener: { triggerObjectReference: { objectID: signalId, type: 'OBJECT_ID', prefabIndex: -1 } },
      spawnPrefabOnSignal: {
        prefabID: 'flame_01' as PrefabId,
      },
    }}
  />
);

export const FlameTrigger = () => (
  <>
    <Apply props={{ engineId: signalId }} when={p => p.engineProps?.name?.value === 'Switch'}>
      <Prefab id="gpl_button_01" scale={3} x={22} y={82} z={52} />
    </Apply>
    <Flame x={7} y={70} z={-4.5} />
    <Flame x={47} y={79.5} z={-3} />
    <Flame x={-60} y={76} z={-37} />
    <Flame x={15} y={10} z={-39} />
  </>
);
