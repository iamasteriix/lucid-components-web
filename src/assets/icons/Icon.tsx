import { isDuoTone } from "./types";
import type { CSSProperties } from "react";
import type { IconProps } from "./types";
import "./icon.css";


const SIZE_MAP: Record<NonNullable<IconProps['size']>, string> = {
  sm: 'var(--typography-textXl)',
  md: 'var(--typography-text2xl)',
  lg: 'var(--typography-text4xl)',
};


export function Icon ({ 
  size = 'md',
  variant = 'monochrome',
  bold = false,
  color,
  className,
  children,
  'data-testid': testId,
  ...rest
}: IconProps) {

  const sz = SIZE_MAP[size];

  const style = isDuoTone({ variant, bold, color } as IconProps)
    ? {
        '--icon-primary': (color as { primary?: string })?.primary ?? 'var(--colors-primary)',
        '--icon-secondary': (color as { secondary?: string })?.secondary ?? 'var(--colors-accent)',
      }
    : {
        '--icon-color': (color as string) ?? 'currentColor',
      };

  return (
    <svg
      className={ className }
      style={ style as CSSProperties }
      width={ sz }
      height={ sz }
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-component='icon'
      data-testid={ testId }
      aria-hidden='true'
      { ...rest }
    >
      { children }
    </svg>
  );
}