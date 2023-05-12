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

export const StarshipHiberion: HDKComponent<{ interior?: Boolean }> = (
  props
) => {
  const { interior = true } = props;
  return (
    <HNode {...props}>
      <HNode>
        <Prefab
          id="en_m_hiberpunk_building_01_top"
          scale={1.3}
          rotZ={180}
          rotX={90}
        />
        <Corridor length={4} y={-20} z={-8}>
          <HNode x={0} y={0}>
            {interior && debug && (
              <Prefab id="hiberpunk_decoration_disc_t1" scale={2}>
                <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
              </Prefab>
            )}
          </HNode>
          <Hub y={22} z={-16} />
          <Corridor length={8} z={-24}>
            <HNode y={20}>
              {/* <Sentinels /> */}
              <Prefab id="torus_thick_01" rotX={90} scale={40} z={-20} y={2} />
              <Prefab id="torus_thin_01" rotX={90} scale={52} z={-20} y={2} />
              <HNode z={-140}>
                {/* <Platform  /> */}
                <InCircle
                  rotX={90}
                  faceCenter={true}
                  radius={52}
                  items={10}
                  renderItem={(item) => (
                    <Prefab
                      scaleX={7.5}
                      scaleY={32}
                      scaleZ={4}
                      rotY={90}
                      id="hiberpunk_blocks_m1_01"
                    />
                  )}
                ></InCircle>

                {/* <Prefab
                  id="rounded_cylinder_01"
                  rotX={90}
                  scale={[6, 1, 6]}
                  z={3}
                /> */}

                {/* <MeatGrinder z={11.5} x={0} y={0} rotX={90} /> */}
                {/* <HNode x={0} y={0} z={40}>
                  <Prefab id="hiberpunk_decoration_disc_t1" scale={2}>
                    <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                  </Prefab>
                </HNode> */}
                {interior && debug && (
                  <HNode x={200} y={0} z={0} rotY={90}>
                    <Prefab id="hiberpunk_decoration_disc_t1" scale={2}>
                      <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                    </Prefab>
                  </HNode>
                )}
                <HNode z={-10}>
                  <Prefab id="torus_thick_01" rotX={90} scale={40} y={2} />
                  <Prefab id="torus_thin_01" rotX={90} scale={52} y={2} />
                  <Corridor length={3} y={-20}>
                    <HNode y={20}>
                      {/* <Prefab
                        id="rounded_cylinder_01"
                        rotX={90}
                        scale={[6, 1, 6]}
                        z={-3}
                      /> */}
                      <Prefab
                        id="torus_thick_01"
                        rotX={90}
                        scale={40}
                        z={-20}
                        y={2}
                      />
                      <Prefab
                        id="torus_thin_01"
                        rotX={90}
                        scale={52}
                        z={-20}
                        y={2}
                      />
                      <HNode z={-140}>
                        <InCircle
                          rotX={90}
                          faceCenter={true}
                          radius={52}
                          items={10}
                          renderItem={(item) => (
                            <Prefab
                              scaleX={7.5}
                              scaleY={32}
                              scaleZ={4}
                              rotY={90}
                              id="hiberpunk_blocks_m1_01"
                            />
                          )}
                        ></InCircle>
                        {interior && <Djungle />}
                        {interior && <RoofWalkway y={10} z={73} />}
                        {interior && <VideoPanels y={21} z={70} />}
                        {interior && debug && (
                          <HNode x={0} y={-15} z={20} rotY={180}>
                            <Prefab id="hiberpunk_decoration_disc_t1" scale={2}>
                              <Prefab id="gpl_spawn_point_01" y={2} rotY={0} />
                            </Prefab>
                          </HNode>
                        )}
                        <HNode z={10}>
                          <Prefab
                            id="torus_thick_01"
                            rotX={90}
                            scale={40}
                            z={-20}
                            y={2}
                          />
                          <Prefab
                            id="torus_thin_01"
                            rotX={90}
                            scale={52}
                            z={-20}
                            y={2}
                          />
                          <HNode z={3}>
                            <HNode rotX={-90}>
                              <Prefab
                                id="candles_01"
                                scaleX={100}
                                scaleY={70}
                                scaleZ={80}
                              />
                              <Prefab
                                id="candles_01"
                                scaleX={75}
                                scaleY={50}
                                scaleZ={50}
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
