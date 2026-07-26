import type { CSSProperties } from "react";
import type { Tokens, ThemeProviderProps, ThemeOverride, } from "./types";
import { useMemo } from "react";
import { designTokens } from "./tokens";
import { ThemeContext } from "./context";


/**
 * Merges a partial theme override with the default tokens.
 * Only one level of nesting — we merge per category, not recursively.
 */
function resolveTheme (override?: ThemeOverride): Tokens {
  if (!override) return designTokens;
  return {
    colors:       { ...designTokens.colors,       ...override.colors },
    typography:   { ...designTokens.typography,   ...override.typography },
    spacing:      { ...designTokens.spacing,      ...override.spacing },
    radii:        { ...designTokens.radii,        ...override.radii },
    shadows:      { ...designTokens.shadows,      ...override.shadows },
    transitions:  { ...designTokens.transitions,  ...override.transitions },
    glass:        { ...designTokens.glass,        ...override.glass, },
  }
}



/**
 * Flattens the resolved token set into CSS custom properties
 * and injects them onto a wrapping div.
 * e.g. colors.primary -> --colors-primary
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
      <div style={ cssVars as CSSProperties }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}
