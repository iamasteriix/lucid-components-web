/**
 * Design tokens — colors
 * @see src/theme/ThemeProvider.tsx for how these are injected as CSS variables
 */
export const colorTokens = {
  // --- Brand ---
  primary:       "#08cb00",
  primaryHover:  "#9ef01a",
  primaryActive: "#70e000",
  primarySubtle: "#004b23",

  // --- Surfaces ---
  bgBase:      "#000000",
  bgSurface:   "#111111",
  bgElevated:  "#232323",
  bgOverlay:   "#343434",

  // --- Text ---
  textPrimary:   "#eeeeee",
  textSecondary: "#9e9e9e",
  textDisabled:  "#424242",
  textInverse:   "#212121",

  // --- Borders ---
  borderSubtle:  "rgba(255, 255, 255, .07)",
  borderDefault: "rgba(255, 255, 255, .12)",
  borderStrong:  "rgba(255, 255, 255, .22)",

  // --- Semantic ---
  success:       "#27c98a",
  successSubtle: "#0d2e22",
  warning:       "#f0a030",
  warningSubtle: "#2e200a",
  danger:        "#f05252",
  dangerSubtle:  "#2e1010",
  info:          "#4da8e8",
  infoSubtle:    "#0d2030",
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
  textXs:   "0.75rem",   //  12px
  textSm:   "0.875rem",  //  14px
  textBase: "1rem",      //  16px
  textLg:   "1.125rem",  //  18px
  textXl:   "1.25rem",   //  20px
  text2xl:  "1.5rem",    //  24px
  text3xl:  "1.875rem",  //  30px
  text4xl:  "2.25rem",   //  36px

  // --- Weights ---
  weightRegular:  "400",
  weightMedium:   "500",
  weightSemibold: "600",
  weightBold:     "700",

  // --- Line heights ---
  leadingTight:   "1.25",
  leadingSnug:    "1.375",
  leadingNormal:  "1.5",
  leadingRelaxed: "1.625",
} as const;


/**
 * Design tokens — spacing
 * Base-4 scale, used for padding, margin, and gap
 */
export const spacingTokens = {
  space1:  "0.25rem",  //  4px
  space2:  "0.5rem",   //  8px
  space3:  "0.75rem",  // 12px
  space4:  "1rem",     // 16px
  space5:  "1.25rem",  // 20px
  space6:  "1.5rem",   // 24px
  space8:  "2rem",     // 32px
  space10: "2.5rem",   // 40px
  space12: "3rem",     // 48px
  space16: "4rem",     // 64px
} as const;


/**
 * Design tokens — radii
 * Border radius scale from sharp to fully rounded
 */
export const radiiTokens = {
  radiusNone: "0px",
  radiusSm:   "4px",
  radiusMd:   "8px",
  radiusLg:   "12px",
  radiusXl:   "16px",
  radius2xl:  "24px",
  radiusFull: "9999px",
} as const;


/**
 * Design tokens — shadows
 * Elevation scale for depth and layering
 */
export const shadowTokens = {
  shadowSm: "0 1px 3px rgba(0, 0, 0, .4)",
  shadowMd: "0 4px 12px rgba(0, 0, 0, .5)",
  shadowLg: "0 12px 32px rgba(0, 0, 0, .6)",
  shadowXl: "0 24px 64px rgba(0, 0, 0, .7)",
} as const;


/**
 * Design tokens — transitions
 * Duration and easing presets for consistent motion
 */
export const transitionTokens = {
  durationFast:  "100ms",
  durationBase:  "180ms",
  durationSlow:  "320ms",
  easingDefault: "cubic-bezier(.4, 0, .2, 1)",
  easingBounce:  "cubic-bezier(.34, 1.56, .64, 1)",
} as const;


/**
 * Complete default token set
 * Pass a partial override to ThemeProvider to customize
*/
export const defaultTokens = {
  colors:      colorTokens,
  typography:  typographyTokens,
  spacing:     spacingTokens,
  radii:       radiiTokens,
  shadows:     shadowTokens,
  transitions: transitionTokens,
};


export type Tokens = typeof defaultTokens;