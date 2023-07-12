import { MaterialId } from '@hiber3d/hdk-core';
import { MannequinStandOptions, MediaDisplayOptions } from '@hiber3d/hdk-react-components';
import React from 'react';

type LinkOptions = {
  isOpenInNewTabEnabled?: boolean;
  isOpenInOverlayEnabled?: boolean;
  isOpenInOverlayOnTouch?: boolean;
};

export type HibertropolisContent = {
  useSIPAvatars: boolean;
  music: string;
  portal?: string;
  videoAds: string[];
  mediaStand: Partial<MediaDisplayOptions>[];
  shop?: {
    products: {
      avatar: MannequinStandOptions & LinkOptions;
      physical: {
        image: string;
        url: string;
        header: string;
      } & LinkOptions;
      material: MaterialId;
    }[];
  };
};

export const ContentContext = React.createContext<HibertropolisContent | undefined>(undefined);

export const useContent = () => {
  const content = React.useContext(ContentContext);

  if (!content) {
    throw new Error('useContent must be used within a ContentProvider');
  }

  return content;
};
