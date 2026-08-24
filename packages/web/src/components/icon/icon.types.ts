import type { ComponentType, Ref } from "react";
import type { ElementBaseProps, } from "@/types";


// original icon's props
type IconComponentProps = {
  viewBox?: string;
  size?: string;
  variant?: 'monochrome' | 'duotone';
  fill?: string | string[];
  solid?: boolean;
};

export type IconVariant = {
  name?: 'monochrome' | 'duotone';
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  solid?: boolean;
};

export type IconProps = Omit<ElementBaseProps, 'children'> & {
  as: ComponentType<IconComponentProps>,
  variant?: IconVariant;
  children?: never;
  ref?: Ref<HTMLSpanElement>;
};
