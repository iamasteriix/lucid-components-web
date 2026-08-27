/**
 * Semantic color tokens for surfaces, text, borders, and status indicators
 */
const colorTokens = {
  // --- Brand ---
  primary: '#eeeeee',
  primarySubtle: '#787878',
  primaryStrong: '#ffffff',

  // --- Secondary ---
  secondary: '#19242b',
  secondarySubtle: '#11181d',
  secondaryStrong: '#2a3c48',

  // --- Accent ---
  accent: '#30db12',
  accentSubtle: '#156108',
  accentStrong: '#5cff3a',

  // --- Surface fills ---
  bgBase: '#000000',
  bgSurface: '#111111',
  bgSubtle: '#191919',
  bgRaised: 'rgba(238, 238, 238, .09)',
  bgOverlay: 'rgba(238, 238, 238, .12)',
  bgFloating: 'rgba(238, 238, 238, .06)',

  // --- Text ---
  textPrimary: '#eeeeee',
  textSecondary: '#9e9e9e',
  textMuted: '#424242',
  textInverse: '#212121',

  // --- Strokes ---
  strokeSubtle:  'rgba(238, 238, 238, .12)',
  strokeDefault: 'rgba(238, 238, 238, .18)',
  strokeStrong:  'rgba(238, 238, 238, .27)',

  // --- Semantic ---
  info: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
} as const;


/**
 * Font stacks, size scale, weights, and line heights
 */
const typographyTokens = {
  // --- Typefaces ---
  fontBody: 'OpenSans-Regular',
  fontMono: 'JetBrainsMono-Regular',
  fontHeadline: 'GoogleSans-Regular',

  // --- Sizes ---
  text2xs: 10,
  textXs: 12,
  textSm: 14,
  textBase: 16,
  textMd: 18,
  textLg: 20,
  textXl: 24,
  text2xl: 28,
  text3xl: 32,
  text4xl: 36,
  text5xl: 40,
  text6xl: 56,

  // --- Weights ---
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightSemibold: '600',
  weightBold: '700',

  // --- Line Heights ---
  leadingCompact: 16,
  leadingTight: 18,
  leadingSnug: 20,
  leadingNormal: 22,
  leadingRelaxed: 24,
  leadingWide: 40,

  // --- Letter Spacing ---
  trackingCompact: -.25,
  trackingTight: -.1,
  trackingSnug: -.05,
  trackingNormal: 0,
  trackingRelaxed: .1,
  trackingWide: .2,
} as const;


/**
 * Distance around and between component and layout elements
 */
const spacingTokens = {
  // --- gap --
  gap1: .25,
  gap2: .5,
  gap3: .75,
  gap4: 1,
  gap5: 1.25,
  gap6: 1.5,
  gap8: 2,
  gap10: 2.5,
  gap12: 3,
  gap16: 4,
  gap18: 4.5,
  gap20: 5,
  gap24: 6,
  gap28: 7,
  gap32: 8,
  gap36: 9,

  // --- space --
  space1: 4,
  space2: 8,
  space3: 12,
  space4: 16,
  space5: 20,
  space6: 24,
  space8: 32,
  space10: 40,
  space12: 48,
  space16: 64,
  space18: 72,
  space20: 80,
  space24: 96,
  space28: 112,
  space32: 128,
  space36: 144,
} as const;


/**
 * Radius scale and stroke weights
 */
const shapeTokens = {
  // -- border radius scale ---
  radiusSm: 4,
  radiusMd: 8,
  radiusLg: 12,
  radiusXl: 16,
  radius2xl: 24,
  radiusFull: 9999,

  // -- stroke weights ---
  strokeLight: .5,
  strokeMedium: 1,
  strokeSemiBold: 2,
  strokeBold: 3,
} as const;


/**
 * Enhance visual effects
 */
const opticalTokens = {
  // -- blur ---
  blurLow: 8,
  blurMedium: 16,
  blurDeep: 24,

  // -- brightness multipliers ---
  brightnessLow: .9,
  brightnessNormal: 1.0,
  brightnessHigh: 1.2,

  // -- saturation multipliers ---
  saturateSubtle: 1.2,
  saturateStrong: 1.6,

  // -- opacity ---
  opacityLow: .36,
  opacityMedium: .27,
  opacityHigh: .18,
} as const;


/**
 * Elevation levels and shadow properties
 */
const elevationTokens = {
  // -- elevation ---
  levelBase: 0,
  levelLow: 10,
  levelRaised: 20,
  levelMedium: 30,
  levelHigh: 60,
  levelMax: 90,

  // -- shadow ---
  boxShadowBase: 'none',
  boxShadowLow: '0px 1px 3px rgba(201, 201, 201, .18)',
  boxShadowRaised: '0px 2px 6px rgba(201, 201, 201, .21)',
  boxShadowMedium: '0px 3px 12px rgba(201, 201, 201, .27)',
  boxShadowHigh: '0px 6px 18px rgba(201, 201, 201, .36)',
  boxShadowMax: '0px 9px 21px rgba(201, 201, 201, .42)',
} as const;


/**
 * Motion primitives to describe time duration, easing direction on a bezier curve,
 * spring bounciness, and base translate, scale, and rotate transforms
 */
const motionTokens = {
  // --- Durations (ms) ---
  durationMoment: 0,
  durationBrief: 40,
  durationShort: 100,
  durationBase: 180,
  durationLong: 240,
  durationExtended: 320,

  // --- Easing: accelerate ---
  easingInX1: .4,
  easingInY1: 0,
  easingInX2: 1,
  easingInY2: 1,

  // --- Easing: decelerate ---
  easingOutX1: 0,
  easingOutY1: 0,
  easingOutX2: .2,
  easingOutY2: 1,

  // --- Easing: standard ---
  easingInOutX1: .4,
  easingInOutY1: 0,
  easingInOutX2: .2,
  easingInOutY2: 1,

  // --- Spring ---
  springMass: 1,
  springRestSpeed: .01,
  springRestDisplacement: .01,

  // --- Spring: stiffness magnitude scale ---
  springStiffnessLow: 90,
  springStiffnessMedium: 180,
  springStiffnessHigh: 300,

  // --- Spring: damping magnitude scale ---
  springDampingLow: 10,
  springDampingMedium: 18,
  springDampingHigh: 30,

  // --- Transform: translate (px) ---
  transformTranslateX: 9,
  transformTranslateY: 9,
  transformTranslateZ: 9,

  // --- Transform: scale (unitless multiplier) ---
  transformScaleX: .9,
  transformScaleY: .9,
  transformScaleZ: .9,

  // --- Transform: rotate (degrees) ---
  transformRotateX: 3,
  transformRotateY: 3,
  transformRotateZ: 3,
} as const;


/**
 * Complete default token set
 * Pass a partial override to ThemeProvider to customize
*/
export const tokens = {
  colors: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  shape: shapeTokens,
  optical: opticalTokens,
  elevation: elevationTokens,
  motion: motionTokens,
} as const;
