import type { SxProps } from '@/types';
import type { VariantMap } from '@/types/components';


export const SxStyles = {
  create: <T extends Record<string, SxProps>> (styles: T): T => styles,

  variants: <
    T extends Record<
      keyof VariantMap,
      Record<string, VariantMap[keyof VariantMap]>
    >> (recipe: T): T => recipe,
};
