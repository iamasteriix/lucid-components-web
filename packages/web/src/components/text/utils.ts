import type { CSSProperties } from 'react';
import type { TextVariant } from './types';
import { createContext } from 'react';
import styles from './style.module.css';


export const TextContext = createContext(false);


export const resolveVariantClasses = (variant: TextVariant): string => {
  return [
    styles.text,
    variant.name && styles[`text--role-${variant.name}`],
    variant.typeface && styles[`text--typeface-${variant.typeface}`],
    variant.color && styles[`text--color-${variant.color}`],
  ]
    .filter(Boolean)
    .join(' ');
}


/**
 * Defaults to a tail clamp
 */
export const resolveClampStyle = (lines?: number): CSSProperties => {
  if (!lines) return {};
  return {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
};
