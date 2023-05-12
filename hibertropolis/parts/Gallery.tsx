import { InCircle, MediaDisplay } from "@hiber3d/hdk-react-components";
import { displayData } from "../data";

export const Gallery = () => (
  <InCircle
    radius={5}
    faceCenter
    degrees={320}
    y={56}
    rotY={143}
    items={displayData.mediaStand.length}
    renderItem={({ index }) => {
      const media = displayData.mediaStand[index];

      if (!media.src) {
        return null;
      }

      return <MediaDisplay rotY={90} s={1.2} {...media} />;
    }}
  />
);
