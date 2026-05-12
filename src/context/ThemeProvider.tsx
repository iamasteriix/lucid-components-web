import { createContext, useMemo } from "react";
import { defaultTokens } from "../tokens";
import type { Tokens, ThemeOverride, ThemeProviderProps, } from "../types";


export const ThemeContext = createContext<Tokens | null>(null);


/**
 * Merges a partial theme override with the default tokens.
 * Only one level of nesting — we merge per category, not recursively.
 */
function resolveTheme (override?: ThemeOverride): Tokens {
  if (!override) return defaultTokens

  return {
    colors:      { ...defaultTokens.colors,       ...override.colors },
    typography:  { ...defaultTokens.typography,   ...override.typography },
    spacing:     { ...defaultTokens.spacing,      ...override.spacing },
    radii:       { ...defaultTokens.radii,        ...override.radii },
    shadows:     { ...defaultTokens.shadows,      ...override.shadows },
    transitions: { ...defaultTokens.transitions,  ...override.transitions },
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