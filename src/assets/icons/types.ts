import type { Size, ComponentBaseProps, } from "@/types";


/** Duotone Colors */
export type DuoToneColor = {
  primary: string;
  secondary: string;
}


/** Monochrome variant */
type MonochromeIconProps = {
  variant?: 'monochrome';
  color?: string;
}


/** DuoTone variant */
type DuoToneIconProps = {
  variant: 'duotone';
  color?: DuoToneColor;
}


/** Variant branches */
type IconVariantProps = MonochromeIconProps | DuoToneIconProps;


/** Base */
type IconBaseProps = ComponentBaseProps & {
  size?: Size;
  bold?: boolean;
}


/** Public */
export type IconProps = IconBaseProps & IconVariantProps;


/** Type guard */
export function isDuoTone (props: IconProps): props is IconBaseProps & DuoToneIconProps {
  return props.variant === 'duotone';
}