import React from "react";
import {
  SegmentedStack,
  InCircle,
  MediaDisplay,
  ImagePanel,
} from "@hiber3d/hdk-react-components";

import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";

import { Hub } from "./Hub";
import { Sentinels } from "./Sentinels";
import { Platform } from "./Platform";
import { MeatGrinder } from "./MeatGrinder";

import { Djungle } from "./Djungle";
import { RoofWalkway } from "./RoofWalkway";
import { VideoPanels } from "./VideoPanels";
import { Corridor } from "./Corridor";

import { VideoPanel } from "@hiber3d/hdk-react-components";

const debug = true;

export const StarshipHiberion = ({ interior = true }) => {
  return (
    <HNode s={1}>
      <HNode>
        <Prefab
          id="en_m_hiberpunk_building_01_top"
          s={1.3}
          rotZ={180}
          rotX={90}
        />
        <Corridor length={4} p={[0, -20, -8]}>
          <HNode x={0} y={0}>
            {interior && debug && (
              <Prefab id="hiberpunk_decoration_disc_t1" s={2}>
                <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
              </Prefab>
            )}
          </HNode>
          <Hub p={[0, 22, -16]} />
          <Corridor length={8} p={[0, 0, -24]}>
            <HNode p={[0, 20, 0]}>
              {/* <Sentinels /> */}
              <Prefab id="torus_thick_01" rotX={90} s={40} z={-20} y={2} />
              <Prefab id="torus_thin_01" rotX={90} s={52} z={-20} y={2} />
              <HNode p={[0, 0, -140]}>
                {/* <Platform p={[0, 0, 0]} /> */}
                <InCircle
                  r={[90, 0, 0]}
                  faceCenter={true}
                  radius={52}
                  items={10}
                  renderItem={(item) => (
                    <Prefab
                      s={[7.5, 32, 4]}
                      rotY={90}
                      id="hiberpunk_blocks_m1_01"
                    />
                  )}
                ></InCircle>

                {/* <Prefab
                  id="rounded_cylinder_01"
                  rotX={90}
                  s={[6, 1, 6]}
                  z={3}
                /> */}

                {/* <MeatGrinder z={11.5} x={0} y={0} rotX={90} /> */}
                {/* <HNode x={0} y={0} z={40}>
                  <Prefab id="hiberpunk_decoration_disc_t1" s={2}>
                    <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                  </Prefab>
                </HNode> */}
                {debug && (
                  <HNode x={200} y={0} z={0} rotY={90}>
                    <Prefab id="hiberpunk_decoration_disc_t1" s={2}>
                      <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                    </Prefab>
                  </HNode>
                )}
                <HNode z={-10}>
                  <Prefab id="torus_thick_01" rotX={90} s={40} y={2} />
                  <Prefab id="torus_thin_01" rotX={90} s={52} y={2} />
                  <Corridor length={3} p={[0, -20, 0]}>
                    <HNode p={[0, 20, 0]}>
                      {/* <Prefab
                        id="rounded_cylinder_01"
                        rotX={90}
                        s={[6, 1, 6]}
                        z={-3}
                      /> */}
                      <Prefab
                        id="torus_thick_01"
                        rotX={90}
                        s={40}
                        z={-20}
                        y={2}
                      />
                      <Prefab
                        id="torus_thin_01"
                        rotX={90}
                        s={52}
                        z={-20}
                        y={2}
                      />
                      <HNode p={[0, 0, -140]}>
                        <InCircle
                          r={[90, 0, 0]}
                          faceCenter={true}
                          radius={52}
                          items={10}
                          renderItem={(item) => (
                            <Prefab
                              s={[7.5, 32, 4]}
                              rotY={90}
                              id="hiberpunk_blocks_m1_01"
                            />
                          )}
                        ></InCircle>
                        {interior && <Djungle />}
                        {interior && <RoofWalkway p={[0, 10, 73]} />}
                        {interior && <VideoPanels p={[0, 21, 70]} />}
                        {debug && (
                          <HNode x={0} y={-15} z={20} rotY={180}>
                            <Prefab id="hiberpunk_decoration_disc_t1" s={2}>
                              <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                            </Prefab>
                          </HNode>
                        )}
                        <HNode z={10}>
                          <Prefab
                            id="torus_thick_01"
                            rotX={90}
                            s={40}
                            z={-20}
                            y={2}
                          />
                          <Prefab
                            id="torus_thin_01"
                            rotX={90}
                            s={52}
                            z={-20}
                            y={2}
                          />
                          <HNode p={[0, 0, 3]}>
                            <HNode r={[-90, 0, 0]}>
                              <Prefab id="candles_01" s={[100, 70, 80]} />
                              <Prefab
                                id="candles_01"
                                s={[75, 50, 50]}
                                rotY={90}
                              />
                            </HNode>
                          </HNode>
                        </HNode>
                      </HNode>
                    </HNode>
                  </Corridor>
                </HNode>
              </HNode>
            </HNode>
          </Corridor>
        </Corridor>
      </HNode>
    </HNode>
  );
};
