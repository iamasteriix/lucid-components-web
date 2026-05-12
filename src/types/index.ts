import type { defaultTokens } from "../tokens";


/**
 * The full Design Tokens set, inferred directly from defaultTokens
 * You must confirm to this shape when overriding the theme
 */
export type Tokens = typeof defaultTokens;


/**
 * A deep partial of Tokens.
 * You only need to provide tokens you want to override, everything else falls back to defaults.
 */
export type ThemeOverride = {
  [K in keyof Tokens]?: Partial<Tokens[K]>
};


/**
 * Props for ThemeProvider
 */
export interface ThemeProviderProps {
  theme?: ThemeOverride,
  children: React.ReactNode,
};