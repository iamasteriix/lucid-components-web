import { useContext } from "react";
import { ThemeContext } from "../context";
import type { Tokens } from "../types";


/**
 * Returns the resolved token set for the nearest ThemeProvider.
 * Throws if used outside of one.
 */
export function useTheme(): Tokens {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}