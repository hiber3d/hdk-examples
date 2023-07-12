import { HNode, Prefab } from '@hiber3d/hdk-react';
import { InCircle } from '@hiber3d/hdk-react-components';

export const PalmTreesWithGoal = () => (
  <HNode x={-136} y={13.2} z={-119}>
    <Prefab id="goal_01" />
    <InCircle rotY={20} radius={8} faceCenter renderItem={<Prefab id="palm_tree" scale={1.5} rotZ={-20} />} />
  </HNode>
);
