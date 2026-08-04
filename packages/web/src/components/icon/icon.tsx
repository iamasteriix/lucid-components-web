import type { ComponentType, Ref } from "react";
import type { ElementBaseProps } from "@/types";
import type { SxProps } from "@/theme";
import { useDeviceBreakpoints } from "@lucid-ui/core";
import { resolveA11y, resolveSx, } from "@/utils";



// wrapped-around icon's props
type IconComponentProps = {
  viewBox?: string;
  size?: string;
  variant?: 'monochrome' | 'duotone';
  fill?: string | string[];
  bold?: boolean;
};

export type IconProps = Omit<ElementBaseProps, 'children'> & {
  as: ComponentType<IconComponentProps>,
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  variant?: 'monochrome' | 'duotone';
  bold?: boolean;
  sx?: SxProps;
  children?: never;
  ref?: Ref<HTMLSpanElement>;
};



const sizeMap: Record<NonNullable<IconProps['size']>, string> = {
  xsm: 'var(--typography-textXs)',
  sm: 'var(--typography-textSm)',
  md: 'var(--typography-textLg)',
  lg: 'var(--typography-textXl)',
};



export const Icon = ({
  as: IconComponent,
  size = 'md',
  variant = 'monochrome',
  bold = false,
  sx,
  style,
  testID,
  a11y = {
    role: 'presentation',
    hidden: true,
  },
}: IconProps) => {
  const { breakpoint, } = useDeviceBreakpoints();
  
  const fontSize = sizeMap[size];
  const fill = variant === 'duotone' ? ['var(--colors-primary)', 'var(--colors-accent)'] : 'var(--colors-primary)';
  
  const sxStyles = resolveSx(sx, breakpoint);       // resolve sx into inline styles
  const styleObj = Object.assign(sxStyles, style);  // merge style properties
  const accessibility = resolveA11y(a11y);          // resolve accessibility props

  return (
    <span
      style={ styleObj }
      data-component='icon'
      data-testid={ testID }
      { ...accessibility }
    >
      <IconComponent
        viewBox='0 0 24 24'
        size={ fontSize }
        fill={ fill }
        variant={ variant }
        bold={ bold }
      />
    </span>
  );
}
