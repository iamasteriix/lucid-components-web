import type { ElementType } from "react";
import type { FABProps } from "./types";
import "./floating-action-btn.css";


export function FAB<C extends ElementType = 'button'> ({
  as,
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  Icon,
  label,
  className,
  'data-testid': testId,
  ...rest
}: FABProps<C>) {

  const Tag = as ?? 'button';

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
    <Tag
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
        { Icon }
      </span>
      {
        variant === 'extended' &&
        <span className='fab__label'>
          { label || 'Label' }
        </span>
      }
    </Tag>
  );
}