import type { ReactElement } from "react";
import type { FlatViewProps, GlassViewProps, ViewProps, ViewPropsStrict } from "@/types";
import { useDeviceBreakpoints } from "@lucid-ui/core";
import { resolveA11y, resolveSx } from "@/utils";
import styles from "./view.module.css";


/**
 * @note
 * `View` is discriminated on `material` (`'flat'` | `'glass'`), so TypeScript
 * cannot determine what branch is being satisfied when you import it. Perhaps consequently,
 * it also allows us to use **overloads** to declare multiple function signatures for the
 * same implementation. This way, callers get to pick whatever signature matches and ignore
 * the rest, while only the last implementation actually runs.
 */
export function View (props: FlatViewProps): ReactElement | ReactElement[];
export function View (props: GlassViewProps): ReactElement | ReactElement[];
export function View (props: ViewProps): ReactElement | ReactElement[];
export function View ({
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
}: ViewPropsStrict | ViewProps) {
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
