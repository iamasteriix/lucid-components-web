import type { ElementType } from "react";
import type { TextProps } from "./types";
import "./text.css";



export const Text = <C extends ElementType = 'span'> ({
  as,
  font = 'sans',
  size = 'base',
  weight = 'regular',
  lineHeight = 'normal',
  color = 'inherit',
  align = 'start',
  textWrap = 'wrap',
  className,
  style,
  children,
  'data-testid': testId,
  ...rest
}: TextProps<C>) => {

  const Tag: ElementType = (as ?? 'span');

  const classes = [
    'text',
    `text--${font}`,
    `text--${size}`,
    `text--${weight}`,
    `text--${lineHeight}`,
    `text--${color}`,
    `text--${align}`,
    className,
  ]
  .filter(Boolean)
  .join(' ');

  return (
    <Tag
      className={ classes }
      style={ style }
      data-component='text'
      data-testid={ testId }
      { ...rest }
    >
      { children }
    </Tag>
  );
}
