/**
 * Design tokens — colors
 * @see src/context/ThemeProvider.tsx for how these are injected as CSS variables
 */
export const colorTokens = {
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
  textDisabled:  '#424242',
  textInverse:   '#212121',

  // --- Borders ---
  borderSubtle:  'rgba(238, 238, 238, .12)',
  borderDefault: 'rgba(238, 238, 238, .17)',
  borderStrong:  'rgba(238, 238, 238, .27)',

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
 * Design tokens — typography
 * Font stacks, size scale, weights, and line heights
 */
export const typographyTokens = {
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
 * Design tokens — spacing
 * Base-4 scale, used for padding, margin, and gap
 */
export const spacingTokens = {
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
} as const;


/**
 * Design tokens — radii
 * Border radius scale from sharp to fully rounded
 */
export const radiiTokens = {
  radiusNone: '0px',
  radiusSm:   '4px',
  radiusMd:   '8px',
  radiusLg:   '12px',
  radiusXl:   '16px',
  radius2xl:  '24px',
  radiusFull: '9999px',
} as const;


/**
 * Design tokens — shadows
 * Elevation scale for depth and layering
 */
export const shadowTokens = {
  shadowSm: '0 1px 3px rgba(52, 52, 52, .4)',
  shadowMd: '0 4px 12px rgba(52, 52, 52, .5)',
  shadowLg: '0 12px 32px rgba(52, 52, 52, .6)',
  shadowXl: '0 24px 64px rgba(52, 52, 52, .7)',
} as const;


/**
 * Design tokens — transitions
 * Duration and easing presets for consistent motion
 */
export const transitionTokens = {
  durationFast:  '100ms',
  durationBase:  '180ms',
  durationSlow:  '320ms',
  easingDefault: 'cubic-bezier(.4, 0, .2, 1)',
  easingBounce:  'cubic-bezier(.34, 1.56, .64, 1)',
} as const;