import type { ThemeTokensType } from '@lucid-ui/core';
import type { SxProps, VariantRegistry, } from '@/types';


export const SxStyles = {
  create: <T extends Record<string, SxProps>> (styles: T): T => styles,

  /**
   * Uses a mapped type indexed over optional `keyof VariantRegistry` to isolate
   * component types and narrows down the mapped type by stripping features with
   * `undefined` values using `NonNullable`. Making the keys optional allows defining
   * variants for a single component.
   */
  variants: <
    T extends {
      [K in keyof VariantRegistry]?: Record<string, NonNullable<VariantRegistry[K]>>
    }
  > (recipe: T): T => recipe,

  createTheme: <T extends Record<string, ThemeTokensType>> (tokens: T): T => tokens,
};
