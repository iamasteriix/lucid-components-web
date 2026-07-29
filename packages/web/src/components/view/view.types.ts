import type { ElementType } from "react";
import type { PropsWithAs, TagBaseProps } from "@/types";
import type { SxProps } from "@/theme";



type BoxMaterial = 'flat' | 'glass';

export type BoxOwnProps = {
  material?: BoxMaterial;
  sx?: SxProps;
};

export type BoxProps <C extends ElementType = 'div'> = PropsWithAs<C, TagBaseProps & BoxOwnProps>;
