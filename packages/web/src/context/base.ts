import type { Tokens } from "@/context/types";
import { createContext } from "react";



export const ThemeContext = createContext<Tokens | null>(null);