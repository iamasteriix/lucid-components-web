import type { ThemeTokensType } from "@lucid-ui/core";
import { createContext } from "react";



export const ThemeContext = createContext<ThemeTokensType | null>(null);
