import { HNode, render } from '@hiber3d/hdk-react';
import { Dragon } from './sections/Dragon';
import { FallingRocks } from './sections/FallingRocks';
import { RocksUnderTree } from './sections/RocksUnderTree';
import { Steps } from './sections/Steps';
import { Tree } from './sections/Tree';

const World = () => (
  <HNode>
    <Steps />
    <FallingRocks />
    <Tree />
    <Dragon />
    <RocksUnderTree />
  </HNode>
);

render(<World />, { environment: 'planet_01' });
