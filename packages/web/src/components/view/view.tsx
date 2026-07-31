import type { ElementType, ReactElement, } from "react";
import type { SxElevation, SxProps } from "@/theme";
import type { PropsWithAs, TagBaseProps } from "@/types";
import { useDeviceBreakpoints } from "@skyline-uikit/core";
import { resolveSx } from "@/utils";
import styles from "./view.module.css";



type BaseViewProps = TagBaseProps & {
  elevation?: SxElevation;
  sx?: SxProps;
  children?: ReactElement | ReactElement[]; // for parity with react native
};

type FlatViewProps = BaseViewProps & {
  material: 'flat';
  tone?: 'base' | 'surface' | 'elevated' | 'overlay';
  intensity?: 'filled' | 'tonal' | 'inherit';
  depth?: 'sm' | 'md' | 'lg'; // shadow spread
}

type GlassViewProps = BaseViewProps & {
  material: 'glass';
  tone?: 'neutral' | 'accent';
  intensity?: 'faint' | 'subtle' | 'default' | 'strong';
  depth?: 'sm' | 'md' | 'lg'; // depth of blur
}

export type ViewOwnProps = FlatViewProps | GlassViewProps;

export type ViewProps <C extends ElementType = 'div'> = PropsWithAs<C, ViewOwnProps>;



export const View = <C extends ElementType = 'div'> ({
  as,
  material = 'flat',
  tone = 'surface',
  intensity = 'inherit',
  depth,
  elevation = 'level-0',
  sx,
  className,
  style,
  children,
  'data-testid': testId,
  ...rest
}: ViewProps<C>) => {
  const Tag: ElementType = as ?? 'div';
  const { breakpoint, } = useDeviceBreakpoints();

  // build class name for semantic props
  const classes = [
    styles.view,
    material && styles[`view--material-${material}`],
    tone && styles[`view--tone-${tone}`],
    intensity && styles[`view--intensity-${intensity}`],
    elevation && styles[`view--elevation-${elevation}`],
    depth && styles[`view--depth-${depth}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const sxStyles = resolveSx(sx, breakpoint);       // resolve sx into inline styles
  const styleObj = Object.assign(sxStyles, style);  // merge style properties

  return (
    <Tag
      className={ classes }
      style={ styleObj }
      data-component='view'
      data-testid={ testId }
      { ...rest }
    >
      { children }
    </Tag>
  );
}
