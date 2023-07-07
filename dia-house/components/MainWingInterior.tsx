import { GLB, HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import {
  InCircle,
  PointSound,
  VideoPanel,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../config";

const Sofa: HDKComponent = (props) => (
  <HNode {...props}>
    <InCircle
      faceCenter
      degrees={200}
      radius={1}
      items={8}
      renderItem={
        <>
          <Prefab
            id="rounded_cube_01"
            scaleX={0.8}
            scaleZ={0.3}
            scaleY={0.3}
            material="t_white_paint_01"
          />
          <Prefab
            id="rounded_cube_01"
            scaleX={0.2}
            scaleZ={0.4}
            scaleY={0.5}
            x={0.61}
            material="t_white_paint_01"
          />
        </>
      }
    />
    <Prefab
      id="rounded_cube_01"
      scaleX={0.8}
      scaleZ={0.8}
      scaleY={0.3}
      z={1}
      x={1.1}
      material="t_white_paint_01"
    />
    <InCircle
      x={2.2}
      z={2}
      rotY={180}
      faceCenter
      degrees={200}
      radius={1}
      items={8}
      renderItem={
        <>
          <Prefab
            id="rounded_cube_01"
            scaleX={0.8}
            scaleZ={0.3}
            scaleY={0.3}
            material="t_white_paint_01"
          />
          <Prefab
            id="rounded_cube_01"
            scaleX={0.2}
            scaleZ={0.4}
            scaleY={0.5}
            x={0.61}
            material="t_white_paint_01"
          />
        </>
      }
    />
    <GLB src="https://cdn.hibervr.com/dia/Epic-Duup.glb" y={2} scale={2} />
    <GLB
      src="https://cdn.hibervr.com/dia/Funky-Migelo-Luulia.glb"
      y={2}
      x={5}
    />
  </HNode>
);

const SofaWithDisplays: HDKComponent = (props) => (
  <HNode {...props}>
    <Sofa y={1.5} z={3} x={3} rotY={-140} />

    <Prefab id="display_shelf_04" y={1.5} x={0} z={-4} rotY={20}>
      <Prefab id="shoes_01" y={1.2} x={-0.2} z={0.05} />
      <Prefab id="shoes_03" y={1.2} x={0.2} z={0.05} />
    </Prefab>
    <Prefab id="display_shelf_04" y={1.5} x={1} z={-0.5} rotY={0}>
      <Prefab id="storeprop_purse_02" y={1.2} z={0.05} />
    </Prefab>
    <Prefab id="display_shelf_04" y={1.5} x={-3} z={-2} rotY={50}>
      <Prefab id="storeprop_tshirt_stack_01" y={1.2} x={-0.2} z={0.05} />
      <Prefab id="storeprop_tshirt_stack_01" y={1.2} x={0.2} z={0.05} />
    </Prefab>

    <Prefab id="display_shelf_04" y={1.5} x={5} z={7} rotY={120}>
      <Prefab id="storeprop_purse_03" y={1.2} z={0.05} />
    </Prefab>
    <Prefab id="display_shelf_04" y={1.5} x={2.5} z={6} rotY={60}>
      <Prefab id="storeprop_tshirt_02" y={1.2} z={0.05} />
    </Prefab>
    <Prefab id="display_shelf_04" y={1.5} x={5} z={-1.5} rotY={30}>
      <Prefab id="shoes_02" y={1.2} x={-0.2} z={0.05} />
      <Prefab id="shoes_01" y={1.2} x={0.2} z={0.05} />
    </Prefab>
  </HNode>
);

export const MainWingInterior: HDKComponent = ({ ...props }) => {
  return (
    <HNode {...props}>
      <GLB
        src="https://cdn.hibervr.com/dia/diahouse.glb"
        x={-3}
        y={9}
        z={-3}
        rotX={90}
        rotY={3}
        scale={1.2}
        material="t_metal_03"
      />
      <SofaWithDisplays x={-3} />
      <VideoPanel
        src="https://cdn.hibervr.com/dia/video/resume.mp4"
        ratio={1000 / 621}
        scale={2}
        y={1.5}
        x={8}
        z={2}
        rotY={-250}
      />
      <PointSound
        y={1.5}
        x={8}
        z={2}
        src={{ url: `${CDN}/audio/resume_video_sound.mp3` }}
        radius={23}
      />
      <VideoPanel
        src="https://cdn.hibervr.com/dia/video/dia_mykonos.mp4"
        ratio={720 / 900}
        scale={2}
        y={3}
        x={-7.3}
        z={-5.3}
        rotY={-20}
        muted
      />
    </HNode>
  );
};
