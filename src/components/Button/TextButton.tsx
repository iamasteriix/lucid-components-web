import type { ElementType } from "react";
import type { TextButtonProps } from "./types";
import "./text-button.css";


export function TextButton<C extends ElementType = 'button'> ({
  as,
  disabled = false,
  loading = false,
  label,
  className,
  'data-testid': testId,
  ...rest
} : TextButtonProps<C>) {

  const Component = as ?? 'button';

  const classes = [
    'text-btn',
    loading && 'text-btn--loading',
    disabled && 'text-btn--disabled',
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Component
      className={ classes }
      data-component='text-button'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      aria-label={ label }
      { ...rest }
    >
      <span
        className='text-btn__label'
        aria-hidden='true'
      >
        { label }
      </span>
    </Component>
  );
}