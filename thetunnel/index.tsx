import { EnvironmentId, MaterialId, PrefabId } from "@hiber3d/hdk-core";
import {
  Apply,
  HNode,
  Prefab,
  render,
  PrefabDefinition,
} from "@hiber3d/hdk-react";
import { Mesh, Spinning } from "@hiber3d/hdk-react-components";
import { bossMaterial, environment } from "./constants";
import { Boss } from "./parts/Boss";
import { City } from "./parts/City";
import { Ending } from "./parts/Ending";
import { Forest } from "./parts/Forest";
import { Graveyard } from "./parts/Graveyard";
import { SawTunnel } from "./parts/SawTunnel";
import { Tunnel } from "./parts/Tunnel";

const World = () => (
  <HNode>
    <Graveyard />
    <Tunnel />
    <City />
    <Forest />
    <SawTunnel />
    <Boss />
    <Ending />

    <PrefabDefinition id="teleportEffect">
      <Apply
        when={(props) => !!props.engineProps?.particleSystemParticleMaterial}
        props={{
          engineProps: {
            particleSystemParticleMaterial: {
              colorStart: [20, 0, 0, 5],
              colorEnd: [20, 0, 0, 5],
            },
          },
        }}
      >
        <Prefab id={"fx_teleporting_02" as PrefabId} />
      </Apply>
    </PrefabDefinition>

    <PrefabDefinition id="graveTeleporter">
      <HNode
        engineProps={{
          teleporterSender: { channel: "X" },
          collider: {
            collider: {
              form: "box",
              meshId: "",
              size: [1, 1, 1],
              offset: [0, 0, 0],
            },
            canGenerateEvent: true,
            collisionGroup: 32,
            collisionMask: 32,
          },
          removeGroupOnCollide: {},
          colliderIsSensor: {},
          removeEntityAfterDelay: { removalDelayInSeconds: 1 },
          vfxInVolume: {
            prefabId: "teleportEffect",
          },
        }}
        scale={2}
      />
    </PrefabDefinition>

    <PrefabDefinition id="drillhat">
      <Spinning>
        <Mesh
          id="h_drill_01"
          material={"h_drill_01" as MaterialId}
          scale={0.2}
          y={2}
        />
      </Spinning>
    </PrefabDefinition>
  </HNode>
);

await render(<World />, {
  environment: "test_environment" as EnvironmentId,
  assets: {
    materials: [bossMaterial],
    environments: [environment],
  },
});
