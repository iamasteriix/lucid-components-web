import type { ElementType } from "react";
import type { JoinProps } from "./types";
import "./join.css";


export function Join <C extends ElementType = 'div'> ({
  as,
  axis = 'horizontal',
  gap = 'small',
  className,
  children,
  'data-testid': testId,
  ...rest
}: JoinProps<C>) {

  const Tag = (as ?? 'div') as ElementType;

  const classes = [
    'join',
    `join--${axis}`,
    `join--gap-${gap}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');


  return (
    <Tag
      className={ classes }
      data-component='join'
      data-testid={ testId }
      { ...rest }
    >
      { children }
    </Tag>
  );
}