import { HNode, render } from "@hiber3d/hdk-react";
import { Grid, Ground, SkyScraper } from "@hiber3d/hdk-react-components";

const World = () => (
  <HNode>
    <Ground />
    <Grid itemSpacing={65} renderItem={<SkyScraper />} />
  </HNode>
);

render(<World />, { environment: "sunrise_01" });
