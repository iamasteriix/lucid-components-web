import type { ViewVariant } from "@/primitives";
import type { TextVariant } from "@/components";
import type { IconVariant } from "@/components";


export interface TextVariantExt {};
export interface ViewVariantExt {};
export interface IconVariantExt {};


export interface VariantRegistry {
  view: ViewVariant | ViewVariantExt;
  text: TextVariant | TextVariantExt;
  icon: IconVariant | IconVariantExt;
};
