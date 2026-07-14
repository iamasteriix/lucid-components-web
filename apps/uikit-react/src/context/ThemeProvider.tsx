import type { Tokens, ThemeProviderProps, ThemeCustom, } from "@/types";
import { useMemo } from "react";
import { designTokens } from "@/tokens";
import { ThemeContext } from "./base";


/**
 * Merges a partial theme override with the default tokens.
 * Only one level of nesting — we merge per category, not recursively.
 */
function resolveTheme (custom?: ThemeCustom): Tokens {
  if (!custom) return designTokens

  return {
    colors:      { ...designTokens.colors,       ...custom.colors },
    typography:  { ...designTokens.typography,   ...custom.typography },
    spacing:     { ...designTokens.spacing,      ...custom.spacing },
    radii:       { ...designTokens.radii,        ...custom.radii },
    shadows:     { ...designTokens.shadows,      ...custom.shadows },
    transitions: { ...designTokens.transitions,  ...custom.transitions },
  }
}


/**
 * Flattens the resolved token set into CSS custom properties
 * and injects them onto a wrapping div.
 * e.g. colors.primary -> --color-primary
 */
function toCSSVariables(tokens: Tokens): Record<string, string> {
  return Object
    .entries(tokens)
    .reduce((acc, [category, values]) => {
      const prefix = category.replace(/Tokens$/, '');
      Object.entries(values).forEach(([key, value]) => {
        acc[`--${prefix}-${key}`] = value as string
      });
      return acc;
    },
    {} as Record<string, string>
  );
}


/**
 * Provides the resolved theme to all children via context and CSS variables
 */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const resolved = useMemo(() => resolveTheme(theme), [theme])
  const cssVars  = useMemo(() => toCSSVariables(resolved), [resolved])

  return (
    <ThemeContext.Provider value={ resolved }>
      <div style={ cssVars as React.CSSProperties }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}