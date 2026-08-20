import type { ThemeTokensType, } from '@lucid-ui/core';


export const ThemeManager = {
  create: <T extends Record<string, ThemeTokensType>> (theme: T): T => theme,
};
