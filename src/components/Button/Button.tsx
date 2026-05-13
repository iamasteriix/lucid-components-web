import type { ElementType } from "react";
import type { ButtonProps } from "./types";
import "./Button.css";


export function Button<C extends ElementType = 'button'> ({
  as,
  variant = 'primary',
  size = 'md',
  appearance = 'filled',
  textAlign = 'center',
  fullWidth = false,
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  className,
  children,
  'data-testid': testId,
  ...rest
}: ButtonProps<C>) {

  const Component = as ?? 'button';

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${appearance}`,
    `btn--text-align-${textAlign}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    disabled && 'btn--disabled',
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Component
      className={ classes }
      data-component='button'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      { ...rest }
    >
      <span
        className='btn__icon btn__icon--left'
        aria-hidden='true'
      >
        { leadingIcon }
      </span>
      <span className='btn__label'>{ children }</span>
      <span
        className='btn__icon btn__icon--right'
        aria-hidden='true'
      >
        { trailingIcon }
      </span>
    </Component>
  );
}