import { MaterialId, PrefabId } from "@hiber3d/hdk-core";
import {
  Apply,
  HDKComponent,
  HNode,
  InfoPanel,
  Prefab,
} from "@hiber3d/hdk-react";
import {
  Avatar,
  DualDisplay,
  Hovering,
  Invisible,
  Spinning,
} from "@hiber3d/hdk-react-components";
import { CDN } from "../config";
import { InfluencerWithInfoPanel } from "./InfluencerWithInfoPanel";

const HoveringParticles: HDKComponent<{
  prefab: PrefabId;
  material?: MaterialId;
}> = ({ prefab, material, ...props }) => (
  <HNode {...props}>
    <Hovering scale={0.2} y={3}>
      <Spinning duration={20}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
    <Hovering scale={0.4} y={2} x={0.5}>
      <Spinning duration={30} direction={-1}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
    <Hovering scale={0.1} y={4} x={0.5} z={0.5}>
      <Spinning duration={30}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
    <Hovering scale={0.3} y={4} x={-0.5} z={-0.5}>
      <Spinning duration={30} direction={-1}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
    <Hovering scale={0.5} y={3} x={-1} z={0.5}>
      <Spinning duration={30}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
    <Hovering scale={0.7} y={1} x={-0.5} z={0.5}>
      <Spinning duration={30}>
        <Prefab id={prefab} material={material} />
      </Spinning>
    </Hovering>
  </HNode>
);

export const Influencers: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      {/* Jamilla */}
      <HNode x={-20} z={10} rotY={120}>
        <InfoPanel
          header="Jamilla Strand"
          preBody="London based Swedish influencer and model"
          body=""
          maxShowDistance={5}
        >
          <Invisible>
            <Apply props={{ engineProps: { collider: { collisionMask: 0 } } }}>
              <Prefab id="cube_01" />
            </Apply>
          </Invisible>
        </InfoPanel>
        <Avatar
          src={{
            url: "https://models.readyplayer.me/64883864d289fe75f63fa83b.glb",
          }}
          animation="an_default_emote_sitting_idle_02"
          scale={2}
        />
        <DualDisplay
          rotY={-70}
          z={4}
          x={2}
          side1={{
            header: "Instagram",
            ratio: 0.5,
            link: "https://www.instagram.com/jamilla.strand",
            src: `${CDN}/images/jamilla_ig.jpg`,
            isOpenInNewTabEnabled: true,
            isOpenInOverlayEnabled: false,
            isOpenInOverlayOnTouch: false,
          }}
          side2={{
            header: "TikTok",
            link: "https://www.tiktok.com/@jamillastrand",
            src: `${CDN}/images/jamilla_tiktok.jpg`,
            isOpenInNewTabEnabled: true,
            isOpenInOverlayOnTouch: false,
            isOpenInOverlayEnabled: false,
          }}
        />
        <Prefab id="display_shelf_04" y={0} x={-4} z={1} rotY={-20}>
          <Prefab id="shoes_03" y={1.2} z={0.05} />
        </Prefab>
        <Prefab
          id="lounge_sofa_01"
          scale={1.5}
          y={-0.1}
          z={-0.2}
          material="palette_01_white"
        />
        <HNode
          x={4.5}
          z={-0.3}
          scale={8}
          rotY={120}
          engineProps={{
            rendering: {
              meshID: "en_p_flower_03",
              materialID: "en_p_flower_01",
            },
          }}
        />
      </HNode>

      {/* Tadeleyee */}
      <HNode x={19.8} z={-9.9} rotY={-55}>
        <InfoPanel
          header="Tadeleyee"
          preBody="Designer, model and influencer from East London"
          maxShowDistance={5}
        >
          <Invisible>
            <Apply props={{ engineProps: { collider: { collisionMask: 0 } } }}>
              <Prefab id="cube_01" />
            </Apply>
          </Invisible>
        </InfoPanel>
        <Avatar
          src={{
            url: "https://models.readyplayer.me/648835524e7fe89b29a59f3f.glb",
          }}
          animation="an_default_emote_sitting_idle_02"
          scale={2}
        />
        <DualDisplay
          rotY={40}
          z={3.5}
          x={-3}
          side1={{
            header: "Instagram",
            ratio: 0.5,
            link: "https://www.instagram.com/tadeleyee",
            src: `${CDN}/images/tade_ig.jpg`,
            isOpenInNewTabEnabled: true,
            isOpenInOverlayEnabled: false,
            isOpenInOverlayOnTouch: false,
          }}
          side2={{
            header: "Instagram",
            link: "https://www.instagram.com/tadeleyee",
            src: `${CDN}/images/tade_ig_2.jpg`,
            isOpenInNewTabEnabled: true,
            isOpenInOverlayEnabled: false,
            isOpenInOverlayOnTouch: false,
          }}
        />

        <Prefab id="display_shelf_04" y={0} x={4} z={2} rotY={20}>
          <Prefab
            id={"storeprop_purse_03" as PrefabId}
            y={1.2}
            x={-0.2}
            z={0.05}
          />
          <Prefab id="shoes_03" y={1.2} x={0.2} z={0.05} />
        </Prefab>
        <Prefab
          id="lounge_sofa_01"
          scale={1.5}
          y={-0.1}
          z={-0.2}
          material="palette_01_white"
        />
        <HoveringParticles prefab="water_lily_flower_01" x={-4} scale={2} />
      </HNode>

      {/* Caroline */}
      <HNode x={-11.2} z={-21.2} rotY={29}>
        <InfoPanel
          header="Caroline Ebo"
          preBody="London based Norwegian influencer"
          body=""
          maxShowDistance={5}
        >
          <Invisible>
            <Apply props={{ engineProps: { collider: { collisionMask: 0 } } }}>
              <Prefab id="cube_01" />
            </Apply>
          </Invisible>
        </InfoPanel>
        <Avatar
          src={{
            url: "https://models.readyplayer.me/648836bd3133f8119d3ef414.glb",
          }}
          animation="an_default_pose_01"
          rotX={90}
          y={2.1}
          z={-0.2}
          x={-0.4}
          scale={2}
        />
        <DualDisplay
          rotY={90}
          z={4}
          x={-2}
          side1={{
            header: "Instagram",
            ratio: 0.5,
            link: "https://www.instagram.com/carolineebo",
            src: `${CDN}/images/caroline_ig.jpg`,
            soundMinDistance: 0,
            isOpenInNewTabEnabled: true,
            isOpenInOverlayEnabled: false,
            isOpenInOverlayOnTouch: false,
          }}
          side2={{
            header: "TikTok",
            link: "https://www.tiktok.com/@carolineebo",
            src: `${CDN}/images/caroline_tiktok.jpg`,
            isOpenInOverlayOnTouch: false,
            isOpenInOverlayEnabled: false,
            isOpenInNewTabEnabled: true,
          }}
        />

        <Prefab id="display_shelf_04" y={0} x={3} z={2} rotY={20}>
          <Prefab id={"storeprop_purse_01" as PrefabId} y={1.2} z={0.05} />
        </Prefab>
        <HoveringParticles
          prefab="sphere_01"
          material="t_metal_03"
          x={-4}
          z={1}
          scale={1.5}
        />
      </HNode>

      {/* Sitting in sofa */}
      <InfluencerWithInfoPanel
        x={20.9}
        y={0.5}
        z={25.9}
        rotY={-90}
        animation="an_default_emote_sitting_idle_02"
        name="Barbara Rodiles"
        url="https://www.instagram.com/barbararodiles_"
        src={{
          url: "https://models.readyplayer.me/6491b7d7cbaee4f11cfb0480.glb",
        }}
      />
      <InfluencerWithInfoPanel
        x={23.3}
        y={0.5}
        z={25.1}
        rotY={10}
        animation="an_default_emote_sitting_talking_01"
        name="Desiré Inglander"
        url="https://www.instagram.com/desireinglander"
        src={{
          url: "https://models.readyplayer.me/6491bb90b640f0815e63cd3d.glb",
        }}
      />
      {/* Chilling in lounge */}
      <InfluencerWithInfoPanel
        x={-5.8}
        y={0.2}
        z={24.0}
        rotY={90}
        animation="an_default_emote_leaning_idle_01"
        name="Amirah Strand"
        url="https://www.instagram.com/amirahstrand"
        src={{
          url: "https://models.readyplayer.me/6492b3c33cb297021823e391.glb",
        }}
      />
      <InfluencerWithInfoPanel
        x={-8.7}
        y={0.0}
        z={21.1}
        rotY={90}
        name="Emilia Silberg"
        url="https://www.instagram.com/emiliasilberg"
        src={{
          url: "https://models.readyplayer.me/6492b5707c8b09c4f6cd7470.glb",
        }}
      />
      <InfluencerWithInfoPanel
        x={-5.3}
        y={0.0}
        z={21.0}
        rotY={-90}
        animation="an_default_idle_02"
        name="Rebecca Wicklin"
        url="https://www.instagram.com/rebeccawicklin"
        src={{
          url: "https://models.readyplayer.me/6492c15caa4d19417a03586b.glb",
        }}
      />
      <InfluencerWithInfoPanel
        x={-8.1}
        y={0.0}
        z={18.7}
        rotY={40}
        animation="an_default_idle"
        name="Sofia Coelho"
        url="https://www.instagram.com/sofiamcoelho"
        src={{
          url: "https://models.readyplayer.me/6492c290683398e4159995bf.glb",
        }}
      />
    </HNode>
  );
};
