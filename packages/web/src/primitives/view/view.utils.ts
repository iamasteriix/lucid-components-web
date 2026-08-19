import type { ViewVariant } from "./view.types";
import styles from "./view.module.css";


export const resolveVariantClasses = (variant: ViewVariant): string => {
  const classes: string[] = [styles.view, styles[`view--${variant.name || 'flat'}`]];

  if (variant.name === 'flat' || !variant.name) {
    if (variant.fill) classes.push(styles[`view--flat-fill-${variant.fill}`]);
    if (variant.elevation) classes.push(styles[`view--flat-${variant.elevation}`]);
    if (variant.shadow) classes.push(styles[`view--flat-shadow-${variant.shadow}`]);
    if (variant.focus) classes.push(styles[`view--flat-focus-${variant.focus}`]);
  }

  if (variant.name === 'glass') {
    if (variant.tone) classes.push(styles[`view--glass-tone-${variant.tone}`]);
    if (variant.intensity) classes.push(styles[`view--glass-intensity-${variant.intensity}`]);
    if (variant.elevation) classes.push(styles[`view--glass-${variant.elevation}`]);
    if (variant.blur) classes.push(styles[`view--glass-blur-${variant.blur}`]);
  }

  return classes.filter(Boolean).join(' ');
}
