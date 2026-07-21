import { FC } from "react";



export type IconProps = {
  viewBox?: string;
  size?: string;
  fill?: string | string[];
  variant?: 'monochrome' | 'duotone';
  bold?: boolean;
};

export type IconBaseProps = {
  viewBox?: string;
  size?: string;
  fill?: string | string[];
};

export type IconComponent = FC<IconProps>;
