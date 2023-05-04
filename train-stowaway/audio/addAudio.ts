import { HNode } from "@hiber3d/hdk-core";
import { Audio } from "@hiberworld/engine/distribute/types/property";

/**
 * Add an audio source to a HNode.
 * @example
 * ```
 * const cube = getPrefab({ p: [0, 0, 5] });
 * addAudio(cube, { id: 'a_m_iconic_bullet_01' });
 * addTo(root, cube);
 * ```
 */
export const addAudio = (target: HNode, audio?: Audio) => {
  audio = {
    id: "a_am_birds_and_insects_01",
    volume: 2,
    attenuationModel: "LINEAR_DISTANCE",
    looping: true,
    rollOffFactor: 1,
    minAttenuationDist: 5,
    maxAttenuationDist: 20,
    startPlayingDist: 20.1,
    ...target.audio,
    ...audio,
  };

  target.audio = audio;

  return target;
};
