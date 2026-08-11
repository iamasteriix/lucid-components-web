import type { SxProps } from "@/types";


export const SxStyles = {
  create: <T extends Record<string, SxProps>> (styles: T): T => styles,
};
