/**
 * @see src/context/ThemeProvider.tsx for how these are injected as CSS variables
 */
const colorTokens = {
  // --- Brand ---
  primary:        '#eeeeee',
  primaryHover:   '#c9c9c9',
  primaryActive:  '#a1a1a1',
  primarySubtle:  '#787878',


  // --- Secondary ---
  secondary:        '#19242b',
  secondaryHover:   '#22303a',
  secondaryActive:  '#2a3c48',
  secondarySubtle:  '#11181d',

  // --- Accent ---
  accent:        '#30db12',
  accentHover:   '#27b30e',
  accentActive:  '#1e8a0b',
  accentSubtle:  '#156108',

  // --- Neutral ---
  neutral:        '#6b7280',
  neutralHover:   '#7d8590',
  neutralActive:  '#4b5563',
  neutralSubtle:  '#374151',

  // --- Surfaces ---
  bgBase:      '#000000',
  bgSurface:   '#111111',
  bgElevated:  '#232323',
  bgOverlay:   '#343434',

  // --- Text ---
  textPrimary:   '#eeeeee',
  textSecondary: '#9e9e9e',
  textMuted:     '#424242',
  textInverse:   '#212121',

  // --- Strokes ---
  strokeSubtle:  'rgba(238, 238, 238, .12)',
  strokeDefault: 'rgba(238, 238, 238, .17)',
  strokeStrong:  'rgba(238, 238, 238, .27)',

  // --- Semantic ---
  info:          '#3b82f6',
  infoSubtle:    '#1f447f',
  success:       '#10b981',
  successSubtle: '#064530',
  warning:       '#f59e0b',
  warningSubtle: '#7f5305',
  error:         '#ef4444',
  errorSubtle:   '#7a2222',
} as const;


/**
 * Font stacks, size scale, weights, and line heights
 */
const typographyTokens = {
  // --- Font families ---
  fontSans:  "'DM Sans', 'Inter', system-ui, sans-serif",
  fontMono:  "'JetBrains Mono', 'Fira Code', monospace",
  fontSerif: "'Lora', 'Georgia', serif",

  // --- Size scale (rem) ---
  textXs:   '.75rem',
  textSm:   '.875rem',
  textBase: '1rem',
  textLg:   '1.125rem',
  textXl:   '1.25rem',
  text2xl:  '1.5rem',
  text3xl:  '1.875rem',
  text4xl:  '2.25rem',

  // --- Weights ---
  weightLight:    '300',
  weightRegular:  '400',
  weightMedium:   '500',
  weightSemibold: '600',
  weightBold:     '700',

  // --- Line heights ---
  leadingTight:   '1.25',
  leadingSnug:    '1.375',
  leadingNormal:  '1.5',
  leadingRelaxed: '1.625',
} as const;


/**
 * Distance around and between component and layout elements
 */
const spacingTokens = {
  space0:  '0px',
  space1:  '.25rem',
  space2:  '.5rem',
  space3:  '.75rem',
  space4:  '1rem',
  space5:  '1.25rem',
  space6:  '1.5rem',
  space8:  '2rem',
  space10: '2.5rem',
  space12: '3rem',
  space16: '4rem',
  space18: '4.5rem',
  space20: '5rem',
  space24: '6rem',
  space28: '7rem',
  space32: '8rem',
  space36: '9rem',
} as const;


/**
 * Radius scale and stroke weights
 */
const shapeTokens = {
  // -- border radius scale ---
  radiusDefault:  '24px',
  radiusSm:       '4px',
  radiusMd:       '8px',
  radiusLg:       '12px',
  radiusXl:       '16px',
  radius2xl:      '24px',
  radiusFull:     '9999px',

  // -- stroke weight ---
  strokeLight:    '.5px',
  strokeMedium:   '1px',
  strokeSemiBold: '2px',
  strokeBold:     '3px',
} as const;


/**
 * Elevation scale for depth and layering
 */
const elevationTokens = {
  // -- shadows ---
  shadowSm: '0 1px 4px rgba(52, 52, 52, .27)',
  shadowMd: '0 4px 12px rgba(52, 52, 52, .36)',
  shadowLg: '0 12px 32px rgba(52, 52, 52, .45)',

  // -- elevation ---
  level0: 0,
  level1: 10,
  level2: 20,
  level3: 30,
  level4: 60,
  level5: 90,
} as const;


/**
 * Duration and easing presets for consistent motion
 */
const motionTokens = {
  durationFast:  '100ms',
  durationBase:  '180ms',
  durationSlow:  '320ms',
  easingDefault: 'cubic-bezier(.4, 0, .2, 1)',
  easingBounce:  'cubic-bezier(.34, 1.56, .64, 1)',
} as const;


/**
 * Glassmorphism
 * Transluscent surfaces meant to sit over bgBase/bgSurface, combined with backdrop-filter, blur, and saturate.
 * Border uses brighter top edge to simulate light catching the glass rim
 */
const glassTokens = {
  // --- surface fills ---
  neutralFaint:   'rgba(238, 238, 238, .03)',
  neutralSubtle:  'rgba(238, 238, 238, .06)',
  neutralDefault: 'rgba(238, 238, 238, .09)',
  neutralStrong:  'rgba(238, 238, 238, .12)',

  // --- accent-tinted glass ---
  accentFaint:    'rgba(48, 219, 18, .03)',
  accentSubtle:   'rgba(48, 219, 18, .06)',
  accentDefault:  'rgba(48, 219, 18, .09)',
  accentStrong:   'rgba(48, 219, 18, .12)',

  // --- borders: brighter than border tokens since glass edges catch light ---
  border:       '1px solid rgba(238, 238, 238, .18)',
  borderTop:    '1px solid rgba(238, 238, 238, .36)',
  borderInner:  '1px solid rgba(18, 18, 18, .3)', // opposite of top highlight

  // --- backdrop filter ---
  blurSm:   '9px',
  blurMd:   '18px',
  blurLg:   '27px',
  saturate: '162%',

  // --- shadows: layered like the elevation shadow tokens ---
  shadowSm: '0 3px 18px rgba(0, 0, 0, .36), inset 0 1px 0 rgba(238, 238, 238, .09)',
  shadowMd: '0 9px 36px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(238, 238, 238, .12)',
  shadowLg: '0 18px 45px rgba(0, 0, 0, .54), inset 0 1px 0 rgba(238, 238, 238, .18)',
};


/**
 * Complete default token set
 * Pass a partial override to ThemeProvider to customize
*/
export const designTokens = {
  colors:     colorTokens,
  typography: typographyTokens,
  spacing:    spacingTokens,
  shape:      shapeTokens,
  elevation:  elevationTokens,
  motion:     motionTokens,
  glass:      glassTokens,
} as const;
