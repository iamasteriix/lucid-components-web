import type { Ref } from "react";
import type { SxElevation, } from "@/theme";
import type { ElementBaseProps, } from "@/types";
import { useDeviceBreakpoints } from "@lucid-ui/core";
import { resolveA11y, resolveSx } from "@/utils";
import styles from "./view.module.css";



type BaseViewProps = ElementBaseProps & {
  elevation?: SxElevation;
  ref?: Ref<HTMLDivElement>;
};

type FlatViewProps = BaseViewProps & {
  material: 'flat';
  tone?: 'base' | 'surface' | 'elevated' | 'overlay';
  intensity?: 'filled' | 'tonal' | 'inherit';
  depth?: 'sm' | 'md' | 'lg'; // shadow spread
};

type GlassViewProps = BaseViewProps & {
  material: 'glass';
  tone?: 'neutral' | 'accent';
  intensity?: 'faint' | 'subtle' | 'default' | 'strong';
  depth?: 'sm' | 'md' | 'lg'; // depth of blur
};

export type ViewProps = FlatViewProps | GlassViewProps;



export const View = ({
  material = 'flat',
  tone = 'surface',
  intensity = 'inherit',
  depth,
  elevation = 'level-0',
  sx,
  a11y,
  style,
  children,
  testID,
  ref,
}: ViewProps) => {
  const { breakpoint, } = useDeviceBreakpoints();

  // build class name for semantic props
  const classes = [
    styles.view,
    material && styles[`view--material-${material}`],
    tone && styles[`view--tone-${tone}`],
    intensity && styles[`view--intensity-${intensity}`],
    elevation && styles[`view--elevation-${elevation}`],
    depth && styles[`view--depth-${depth}`],
  ]
    .filter(Boolean)
    .join(' ');

  const sxStyles = resolveSx(sx, breakpoint);       // resolve sx into inline styles
  const styleObj = Object.assign(sxStyles, style);  // merge style properties
  const accessibility = resolveA11y(a11y);          // resolve accessibility props

  return (
    <div
      ref={ ref }
      className={ classes }
      style={ styleObj }
      data-component='view'
      data-testid={ testID }
      { ...accessibility }
    >
      { children }
    </div>
  );
}
