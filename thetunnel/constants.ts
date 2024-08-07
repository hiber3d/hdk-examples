import { EnvironmentMetaData, MaterialMetaData } from '@hiber3d/hdk-core/dist/types/src/hiber2_ts_types/metadata';

export const CDN = 'https://cdn.hibervr.com/external/hdk/filip/tunnel';

export const environment: EnvironmentMetaData = {
  id: 'test_environment',
  displayName: 'TestEnvironment',
  environment: {
    version: 'v1.0.10',
    skyboxID: 'sky_dark_night_01',
    reflectionboxID: '0',
    lightboxID: 'sky_dark_night_01',
    sunDirWS: [0.0914265, 0.4734883, 0.8760422],
    sunColor: [12.4373318, 0.5850224, 0.8578432],
    sunStrength: 0,
    exposureLuminanceAvg: 0.8,
    fogEnable: true,
    fogColor: [0, 0, 0],
    fogDensity: 0.003,
    fogHeight: 200,
    fogInvert: false,
    fogSkyboxGradient: 0.0001,
    fogSkyboxAlpha: 1,
    bloomEnable: false,
    bloomBrightTreshold: 0.944,
    bloomBlendAlpha: 0.709,
    colorGradingEnable: true,
    colorGradingHue: 0,
    colorGradingSaturation: 0.933,
    colorGradingBrightness: 0.502,
    colorGradingContrast: 1,
    colorGradingTintRed: [1.1, 0, 0],
    colorGradingTintGreen: [0, 1, 0],
    colorGradingTintBlue: [0, 0, 1],
    enableWeather: true,
    weather: {
      emitter: {
        particleCountMax: 100,
        shape: 'SPHERE',
        traceGround: false,
        continuous: true,
        spawnRate: 0,
        velocity: [0, 0, 0],
        randomVelocity: [0, 0, 0],
        size: [10, 10, 10],
        offset: [0, 0, 0],
        inheritVelocity: 0,
        emitterLifeTime: -1,
        emitterMesh: '',
      },
      particle: {
        lifetime: 4.566,
        lifeRandom: 1,
        sizeStart: 0.015,
        sizeEnd: 0.115,
        sizeRandom: 0.341,
        randomRotation: 0.5,
        rotationSpeed: 0.1,
        randomRotationSpeed: 0,
        rotationWobbleAmount: 0,
        rotationWobbleFrequency: 10,
        billboardAlign: 'VIEW',
      },
      material: {
        particleTexture: 'en_p_gummy_fish_01_thumbnail',
        colorStart: [200, 0, 0, 1.3725491],
        colorEnd: [255, 0.99999, 0.99999, 0],
        linearColorRandom: 0,
        gradientTexture: 'particle_gradient_in_out_01_albedo',
        gradientColorRandom: 0,
        blendMode: 'DITHER',
        depthSort: false,
      },
      velocityModifier: {
        forceGravity: -8.9,
        forceAirRes: 1.818,
        wobbleVelocity: [0, 0, 0],
        wobbleFrequency: [0, 0, 0],
        collisionMode: 'NONE',
        collisionBounceFactor: 0.5,
      },
      wrapBox: {
        size: [10, 10, 10],
        offset: [0, 0, 0],
      },
    },
  },
};

export const bossMaterial: MaterialMetaData = {
  id: 'boss_material',
  name: 'm_emissive_green',
  displayName: 'Emissive Green',
  version: 'v1.0.4',
  material: {
    nameID: 'boss_material',
    shader: 'DEFAULT_FORWARD',
    shaderFeatures: {
      alphaMask: false,
      blendMode: 'ALPHA_BLENDED',
    },
    albedoFactor: [0.1, 0, 0, 0.6],
    metallicFactor: 0,
    roughnessFactor: 0.3,
    emissiveFactor: [12, 0, 0],
    albedoTexID: '0',
    normalTexID: '0',
    metallicRoughnessTexID: '0',
    emissiveTexID: '0',
    emissiveStrength: 10,
    receiveShadows: true,
    ditheredAlpha: true,
    accessibleInMaterialPicker: true,
  },
};
