import type { ViewVariant } from './view.types';
import flatStyles from './view.module.css';
import glassStyles from './glass-view.module.css';


export const resolveViewClasses = (variant: ViewVariant): string => {
  const classes: string[] = [flatStyles.view, flatStyles[`view--${variant.name || 'flat'}`]];

  if (variant.name === 'flat' || !variant.name) {
    if (variant.fill) classes.push(flatStyles[`view--flat-fill-${variant.fill}`]);
    if (variant.elevation) classes.push(flatStyles[`view--flat-${variant.elevation}`]);
    if (variant.shadow) classes.push(flatStyles[`view--flat-shadow-${variant.shadow}`]);
    if (variant.focus) classes.push(flatStyles[`view--flat-focus-${variant.focus}`]);
  }

  return classes.filter(Boolean).join(' ');
}


export const resolveGlassViewClasses = (variant: ViewVariant): string => {
  const classes: string[] = [glassStyles.view, glassStyles[`view--${variant.name || 'flat'}`]];

  if (variant.name === 'flat' || !variant.name) {
    if (variant.fill) classes.push(glassStyles[`view--flat-fill-${variant.fill}`]);
    if (variant.elevation) classes.push(glassStyles[`view--flat-${variant.elevation}`]);
    if (variant.shadow) classes.push(glassStyles[`view--flat-shadow-${variant.shadow}`]);
    if (variant.focus) classes.push(glassStyles[`view--flat-focus-${variant.focus}`]);
  }

  return classes.filter(Boolean).join(' ');
}
