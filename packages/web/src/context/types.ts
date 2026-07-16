import type { ReactNode } from "react";
import { designTokens } from "@/tokens";



// full theme token set to provide some sort of template, or something
export type Tokens = typeof designTokens;


// deep partial of theme for tokens you wish to override
export type ThemeOverride = {
  [K in keyof Tokens]?: Partial<Tokens[K]>
};


export type ThemeProviderProps = {
  theme?: ThemeOverride,
  children: ReactNode,
};