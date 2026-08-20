/**
 * Semantic color tokens for surfaces, text, borders, and status indicators
 */
const colorTokens = {
  // --- Brand ---// --- Brand ---
  primary:       '#eeeeee',
  primarySubtle: '#787878',
  primaryStrong: '#ffffff',


  // --- Secondary ---
  secondary:       '#19242b',
  secondarySubtle: '#11181d',
  secondaryStrong: '#2a3c48',

  // --- Accent ---
  accent:       '#30db12',
  accentSubtle: '#156108',
  accentStrong: '#5cff3a',

  // --- Surface fills ---
  bgBase:     '#000000',
  bgSurface:  '#111111',
  bgSubtle:   '#191919',
  bgRaised:   'rgba(238, 238, 238, .09)',
  bgOverlay:  'rgba(238, 238, 238, .12)',
  bgFloating: 'rgba(238, 238, 238, .06)',

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
  info:       '#3b82f6',
  infoSubtle: '#1f447f',
  infoStrong: '#1d4ed8',

  success:       '#10b981',
  successSubtle: '#064530',
  successStrong: '#047857',

  warning:       '#f59e0b',
  warningSubtle: '#7f5305',
  warningStrong: '#b45309',

  error:       '#ef4444',
  errorSubtle: '#7a2222',
  errorStrong: '#b91c1c',
} as const;


/**
 * Font stacks, size scale, weights, and line heights
 */
const typographyTokens = {
  // --- Font families ---
  fontSans:  '"DM Sans", "Inter", system-ui, sans-serif',
  fontMono:  '"JetBrains Mono", "Fira Code", monospace',
  fontSerif: '"Lora", "Georgia", serif',

  // --- Size scale (rem) ---
  text2xs:  '.625rem',
  textXs:   '.75rem',
  textSm:   '.875rem',
  textBase: '1rem',
  textMd:   '1.125rem',
  textLg:   '1.25rem',
  textXl:   '1.5rem',
  text2xl:  '1.75rem',
  text3xl:  '2rem',
  text4xl:  '2.25rem',
  text5xl:  '2.5rem',
  text6xl:  '3.5rem',

  // --- Weights ---
  weightLight:    '300',
  weightRegular:  '400',
  weightMedium:   '500',
  weightSemibold: '600',
  weightBold:     '700',

  // --- Line heights ---
  leadingCompact: '1',
  leadingTight:   '1.1',
  leadingSnug:    '1.25',
  leadingNormal:  '1.375',
  leadingRelaxed: '1.5',
  leadingWide:    '2.5',

  // --- Letter spacing ---
  trackingCompact: '-0.25px',
  trackingTight:   '-0.1px',
  trackingSnug:    '-0.05px',
  trackingNormal:  '0px',
  trackingRelaxed: '0.1px',
  trackingWide:    '0.2px',
} as const;


/**
 * Distance around and between component and layout elements
 */
const spacingTokens = {
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
  radiusSm:   '4px',
  radiusMd:   '8px',
  radiusLg:   '12px',
  radiusXl:   '16px',
  radius2xl:  '24px',
  radiusFull: '9999px',

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
  // -- elevation ---
  level1: '10',
  level2: '20',
  level3: '30',
  level4: '60',
  level5: '90',

  // --- backdrop filter ---
  blurSubtle: '9px',
  blur:       '18px',
  blurStrong: '27px',
  saturate:   '162%',

  // -- shadows ---
  shadowDiffuse:      '0 9px 27px rgba(52, 52, 52, .36)',
  shadowDirectional:  '0 4px 12px rgba(52, 52, 52, .36)',
  shadowLinear:       '0 1px 4px rgba(52, 52, 52, .27)',
  shadowEdge:         'inset 0 1px 0 rgba(238, 238, 238, .12)',
  shadowEnclosed:     '0 9px 36px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(238, 238, 238, .12)',
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
 * Complete default token set
 * Pass a partial override to ThemeProvider to customize
*/
export const tokens = {
  colors:     colorTokens,
  typography: typographyTokens,
  spacing:    spacingTokens,
  shape:      shapeTokens,
  elevation:  elevationTokens,
  motion:     motionTokens,
} as const;