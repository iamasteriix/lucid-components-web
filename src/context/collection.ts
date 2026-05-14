import { createContext } from "react";
import type { Tokens } from "@/types";


export const ThemeContext = createContext<Tokens | null>(null);