import type { Tokens } from "./types";
import { createContext } from "react";



export const ThemeContext = createContext<Tokens | null>(null);
