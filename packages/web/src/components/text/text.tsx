import type { ElementType } from "react";
import type { TextProps } from "./text.types";
import styles from "./text.module.css";



export const Text = <C extends ElementType = 'span'> ({
  as,
  font = 'sans',
  size = 'base',
  weight = 'regular',
  lineHeight = 'normal',
  color = 'primary',
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
    styles.text,
    styles[`text--${font}`],
    styles[`text--${size}`],
    styles[`text--${weight}`],
    styles[`text--${lineHeight}`],
    styles[`text--${color}`],
    styles[`text--${align}`],
    styles[`text--${textWrap}`],
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
