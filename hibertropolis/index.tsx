import { EnvironmentId } from '@hiber3d/hdk-core';
import { render } from '@hiber3d/hdk-react';
import { Hibertropolis } from './Hibertropolis';
import { HibertropolisContent } from './useContent';

const content: HibertropolisContent = {
  useSIPAvatars: false,
  music: 'a_mu_border_of_neo_tokyo_01',
  videoAds: [
    'https://cdn.hibervr.com/video/Hiber3D.mp4',
    'https://cdn.hibervr.com/video/Cubes_Loop.mp4',
    'https://cdn.hibervr.com/video/Cubes_Waves.mp4',
  ],
  mediaStand: [
    {
      preBody: "Don't Go",
      header: 'Listen on Spotify',
      link: 'https://open.spotify.com/track/1snIrUbEtlTiqBkA8exVXR?si=62805f1b3e124804',
      src: 'https://cdn.hibervr.com/external/music_mv/iconic/dontgo-cover.jpg',
      ratio: 1,
    },
    {
      src: 'https://cdn.hibervr.com/video/CoilOcean.mp4',
      ratio: 1,
      emissiveStrength: 0.7,
    },
    {
      src: 'https://cdn.hibervr.com/video/LiquidLoop.mp4',
      ratio: 1,
      emissiveStrength: 0.7,
    },
    {
      preBody: 'Introducing Hiber3D',
      header: 'See video on YouTube',
      link: 'https://www.youtube.com/watch?v=jnLJ37VvuZk',
      src: 'https://cdn.hibervr.com/video/Hiber3D.mp4',
      ratio: 1,
      emissiveStrength: 0,
    },
    {},
    {
      src: 'https://cdn.hibervr.com/video/Cubes_Waves.mp4',
      ratio: 1,
      emissiveStrength: 0.7,
    },
    {
      header: 'Merch',
      preBody: 'Get your outfit',
      link: 'https://shop.hiberworld.com/',
      src: 'https://cdn.hibervr.com/static/images/hoodiespsd.jpg',
      ratio: 1,
      isOpenInNewTabEnabled: false,
    },
    {
      header: 'Follow on Instagram',
      preBody: '@hiber3d',
      link: 'https://www.instagram.com/hiber3d',
      src: 'https://cdn.hibervr.com/images/art3.jpg',
      ratio: 1,
      isOpenInNewTabEnabled: true,
    },
    {
      header: 'Follow on Twitter',
      preBody: '@hiber3d',
      link: 'https://twitter.com/hiber3d/',
      src: 'https://cdn.hibervr.com/images/art4.jpg',
      ratio: 1,
      isOpenInNewTabEnabled: true,
    },
  ],
};

render(<Hibertropolis content={content} />, { environment: 'dark_city_night_01' as EnvironmentId });
