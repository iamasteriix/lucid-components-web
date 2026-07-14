import type { ElementType } from "react";
import type { ButtonProps } from "@/types";
import "./button.css";


export function Button<C extends ElementType = 'button'> ({
  as,
  variant = 'primary',
  size = 'md',
  appearance = 'filled',
  textAlign = 'center',
  fullWidth = false,
  disabled = false,
  loading = false,
  label,
  leadingNode,
  trailingNode,
  className,
  'data-testid': testId,
  ...rest
}: ButtonProps<C>) {

  const Tag = as ?? 'button';

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
    <Tag
      className={ classes }
      data-component='button'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      { ...rest }
    >
      {
        !!leadingNode && 
        <span
          className='btn__icon btn__icon--left'
          aria-hidden='true'
        >
          { leadingNode }
        </span>
      }
      <span className='btn__label'>{ label }</span>
      {
        !!trailingNode &&
        <span
          className='btn__icon btn__icon--right'
          aria-hidden='true'
        >
          { trailingNode }
        </span>
      }
    </Tag>
  );
}