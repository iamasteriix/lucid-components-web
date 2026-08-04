import type { SxProps } from "@/theme";



export const SxStyles = {
  create: <T extends Record<string, SxProps>> (styles: T): T => styles,
};
