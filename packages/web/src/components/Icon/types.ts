import type { ComponentType } from "react";
import type { TagBaseProps } from "../components.types";


// wrapped-around icon's props
type IconComponentProps = {
  viewBox?: string;
  size?: string;
  variant?: 'monochrome' | 'duotone';
  fill?: string | string[];
  bold?: boolean;
};

export type IconProps = TagBaseProps & {
  as: ComponentType<IconComponentProps>,
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  variant?: 'monochrome' | 'duotone';
  bold?: boolean;
};
