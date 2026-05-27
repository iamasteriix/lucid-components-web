import type { ElementType } from "react";
import type { BadgeProps } from "./types";
import "./badge.css";


export function Badge <C extends ElementType = 'span'> ({
  as,
  variant = 'primary',
  size = 'md',
  appearance = 'filled',
  dot = false,
  className,
  children,
  'data-testid': testId,
  ...rest
}: BadgeProps<C>) {

  const Component = (as ?? 'span') as ElementType;

  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    `badge--${appearance}`,
    dot && 'badge--dot',
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Component
      className={ classes }
      data-component='badge'
      data-testid={ testId }
      { ...rest }
    >
      { !dot && children }
    </Component>
  );
}