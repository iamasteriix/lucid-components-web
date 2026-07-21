import type { ElementType } from "react";
import type { TextProps } from "./types";



export const Text = ({
  className,
  style,
  children,
  'data-testid': testId,
  ...rest
}: TextProps) => {

  const Tag: ElementType = 'span';

  return (
    <Tag
      className={ className }
      style={ style }
      data-component='text'
      { ...rest }
    >
      { children }
    </Tag>
  );
}
