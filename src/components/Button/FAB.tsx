import type { ElementType } from "react";
import type { FABProps } from "./types";
import "./floating-action-btn.css";


export function FAB<C extends ElementType = 'button'> ({
  as,
  variant = 'standard',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  label,
  className,
  'data-testid': testId,
  ...rest
}: FABProps<C>) {

  const Component = as ?? 'button';

  const classes = [
    'fab',
    `fab--${variant}`,
    `fab--${size}`,
    loading && 'fab--loading',
    disabled && 'fab--disabled',
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Component
      className={ classes }
      data-component='fab'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      aria-label={ variant !== 'extended' ? label : undefined }
      { ...rest }
    >
      <span
        className='fab__icon'
        aria-hidden='true'
      >
        { icon }
      </span>
      {
        variant === 'extended' &&
        <span className='fab__label'>
          { label || 'Label' }
        </span>
      }
    </Component>
  );
}