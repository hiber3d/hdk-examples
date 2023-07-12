import { HNode, Prefab } from '@hiber3d/hdk-react';
import { Hovering, Spinning } from '@hiber3d/hdk-react-components';

export function Donut() {
  return (
    <HNode x={-19} y={37.0} z={-77.7} rotX={30}>
      <Hovering magnitude={3}>
        <Spinning duration={10}>
          <Prefab id="donut_01" scale={3} />
        </Spinning>
      </Hovering>
    </HNode>
  );
}
