import { HNode, Audio } from "@hiber3d/hdk-core";
import { addAudio } from "./addAudio";

/**
 * Add a omnipresent sound source.
 * This adds a point of sound with the same volume in the entire world.
 * @example
 * ```
 * addOmnipresentSound(root, 'a_am_rainforest_01');
 * ```
 */

export const addOmnipresentSound = (
  node: HNode,
  id: Audio,
  volume?: number
) => {
  volume = volume || 1;
  return addAudio(node, { id, volume, attenuationModel: "NO_ATTENUATION" });
};
