import {
  colorTokens,
  typographyTokens,
  spacingTokens,
  radiiTokens,
  shadowTokens,
  transitionTokens,
} from "./theme";


/**
 * Complete default token set
 * Pass a partial override to ThemeProvider to customize
*/
export const designTokens = {
  colors:      colorTokens,
  typography:  typographyTokens,
  spacing:     spacingTokens,
  radii:       radiiTokens,
  shadows:     shadowTokens,
  transitions: transitionTokens,
};