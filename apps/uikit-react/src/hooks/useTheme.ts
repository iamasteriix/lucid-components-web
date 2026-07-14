import type { Tokens } from "@/types";
import { useContext } from "react";
import { ThemeContext } from "@/context";


/**
 * Returns the resolved token set for the nearest ThemeProvider.
 * Throws if used outside of one.
 */
export function useTheme(): Tokens {
  return useContext(ThemeContext);
}