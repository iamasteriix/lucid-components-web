import type { ElementType } from "react";
import type { TextButtonProps } from "@/types";
import "./text-button.css";


export function TextButton<C extends ElementType = 'button'> ({
  as,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  label = 'Label',
  className,
  'data-testid': testId,
  ...rest
} : TextButtonProps<C>) {

  const Tag = as ?? 'button';

  const classes = [
    'text-btn',
    `text-btn--${variant}`,
    `text-btn--${size}`,
    loading && 'text-btn--loading',
    disabled && 'text-btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={ classes }
      data-component='text-button'
      data-testid={ testId }
      disabled={ disabled || loading }
      aria-busy={ loading }
      aria-disabled={ disabled || loading }
      { ...rest }
    >
      <span
        className='text-btn__label'
        aria-hidden='true'
      >
        { label }
      </span>
    </Tag>
  );
}