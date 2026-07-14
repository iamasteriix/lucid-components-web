import type { ReactNode } from "react";
import type { Tokens } from "../tokens/theme.types";


/**
 * A deep partial of Tokens.
 * You only need to provide tokens you want to override, everything else falls back to defaults.
 */
export type ThemeCustom = {
  [K in keyof Tokens]?: Partial<Tokens[K]>
};


/** Props for ThemeProvider */
export type ThemeProviderProps = {
  theme?: ThemeCustom,
  children: ReactNode,
};