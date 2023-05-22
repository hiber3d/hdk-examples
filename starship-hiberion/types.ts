import { HDKComponent } from "@hiber3d/hdk-react";

type StarshipProps = {
  debug?: boolean;
  interior?: boolean;
};

export type StarshipComponent<T = undefined> = T extends undefined
  ? HDKComponent<StarshipProps>
  : HDKComponent<StarshipProps & T>;
