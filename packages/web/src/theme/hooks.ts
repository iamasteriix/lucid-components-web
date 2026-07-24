import type { Tokens } from "./types";
import { useContext } from "react";
import { ThemeContext } from "./context";



/**
 * Returns the resolved token set for the nearest(huh?) ThemeProvider.
 * Throws if used outside of one.
 */
export function useTheme(): Tokens {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error ('invalid theme');
  return theme;
}
