import type { ViewProps } from "@/types";
import { useDeviceBreakpoints } from "@lucid-ui/core";
import { resolveA11y, resolveSx } from "@/utils";
import styles from "./view.module.css";



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
