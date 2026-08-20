import type { CSSProperties, ReactNode } from 'react';
import type { ThemeTokensType } from '@lucid-ui/core';
import { useMemo } from 'react';
import { tokens } from '@lucid-ui/core';
import { ThemeContext } from './context';


type ThemeProviderProps = {
  theme?: ThemeTokensType;
  children: ReactNode;
};


/**
 * Merges a partial theme override with the default tokens.
 * Only one level of nesting — we merge per category, not recursively.
 */
const resolveTheme = (override?: ThemeTokensType): ThemeTokensType => {
  if (!override) return tokens;
  return {
    colors:     { ...tokens.colors,     ...override.colors, },
    typography: { ...tokens.typography, ...override.typography, },
    spacing:    { ...tokens.spacing,    ...override.spacing, },
    shape:      { ...tokens.shape,      ...override.shape, },
    elevation:  { ...tokens.elevation,  ...override.elevation, },
    motion:     { ...tokens.motion,     ...override.motion, },
  }
}


/**
 * Flattens the resolved token set into CSS custom properties
 * and injects them onto a wrapping div.
 * e.g. colors.primary -> --colors-primary
 */
const toCSSVariables = (tokens: ThemeTokensType): Record<string, string> => {
  return Object
    .entries(tokens)
    .reduce((acc, [category, values]) => {
      Object.entries(values).forEach(([key, value]) => {
        acc[`--${category}-${key}`] = value as string
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
  const cssVars: CSSProperties = useMemo(() => toCSSVariables(resolved), [resolved])

  return (
    <ThemeContext.Provider value={ resolved }>
      <div style={ cssVars }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}
