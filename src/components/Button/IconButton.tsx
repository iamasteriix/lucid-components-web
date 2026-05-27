import type { ElementType } from "react";
import type { IconButtonProps } from "./types";
import "./icon-button.css";


export function IconButton<C extends ElementType = 'button'> ({
  as,
  variant = 'primary',
  size = 'md',
  appearance = 'filled',
  disabled = false,
  loading = false,
  Icon,
  label,
  className,
  'data-testid': testId,
  ...rest
} : IconButtonProps<C>) {

  const Tag = as ?? 'button';

  const classes = [
    'icon-btn',
    `icon-btn--${variant}`,
    `icon-btn--${size}`,
    `icon-btn--${appearance}`,
    loading && 'icon-btn--loading',
    disabled && 'icon-btn--disabled',
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Tag
      className={ classes }
      data-component='icon-button'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      aria-label={ label }
      { ...rest }
    >
      <span
        className='icon-btn__icon'
        aria-hidden='true'
      >
        { Icon }
      </span>
    </Tag>
  );
}