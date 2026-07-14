import type { ElementType } from "react";
import type { FABProps } from "@/types";
import "./fab.css";


export function FAB<C extends ElementType = 'button'> ({
  as,
  variant = 'surface',
  size = 'md',
  appearance = 'default',
  disabled = false,
  loading = false,
  icon,
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
    `fab--${appearance}`,
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
      aria-label={ appearance !== 'extended' ? label : undefined }
      { ...rest }
    >
      <span
        className='fab__icon'
        aria-hidden='true'
      >
        { icon }
      </span>
      {
        appearance === 'extended' &&
        <span className='fab__label'>
          { label || 'Label' }
        </span>
      }
    </Tag>
  );
}