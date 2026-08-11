import type { A11yProps } from "@/types";


export const A11yRegistry = {
  create: <T extends Record<string, A11yProps>> (accessibility: T): T => accessibility,
};
