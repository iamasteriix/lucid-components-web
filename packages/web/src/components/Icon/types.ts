import type { ComponentType } from "react";
import type { Size, TagBaseProps } from "../base.types";


// original icon's props
type IconComponentProps = {
  viewBox?: string;
  size?: string;
  variant?: 'monochrome' | 'duotone';
  fill?: string | string[];
  bold?: boolean;
};

// static configuration attached directly to the component (no idea what this means)
type IconComponentStatic = {
  viewBox: string;
  size: string;
  variant: 'monochrome' | 'duotone';
  fill: string | string[];
  bold: boolean;
};

// combine them so TypeScript knows Tag accepts props and has static properties
type IconComponent = ComponentType<IconComponentProps> & IconComponentStatic;

type IconBaseProps = TagBaseProps & {
  as: IconComponent,
  size?: Size;
  variant: 'monochrome' | 'duotone';
  bold: boolean;
};

export type IconProps = IconBaseProps;
