import type { TextVariant } from "@/components";
import type { ViewVariant } from "@/primitives";


export interface ViewVariantExt {};

export interface TextVariantExt {};

export interface VariantRegistry {
  view: ViewVariant | ViewVariantExt;
  text: TextVariant | TextVariantExt;
};
