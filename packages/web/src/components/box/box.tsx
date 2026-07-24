import type { ElementType } from "react";
import type { BoxOwnProps, BoxProps } from "./box.types";
import { useResolveLayoutStyling } from "@/hooks";



export const Box = <C extends ElementType = 'div'> ({
  as,
  display = 'flex',
  alignSelf = 'flex-start',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  order,
  flex = 'auto',
  flexDirection = 'column',
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
  gridColumn,
  gridRow,
  gridArea,
  justifySelf,
  width = 'auto',
  height = 'auto',
  minWidth,
  maxWidth,
  margin,
  marginX,
  marginY,
  padding,
  paddingX,
  paddingY,
  style,
  className,
  children,
  'data-testid': testId,
  ...rest
}: BoxProps<C>) => {

  const Tag: ElementType = as ?? 'div';

  const boxStyles = useResolveLayoutStyling<BoxOwnProps>({
    display, alignSelf, alignItems, justifyContent, order, flex, flexDirection,
    flexWrap, flexGrow, flexShrink, 
  });

  return (
    <Tag
      className={ className }
      style={{ ...boxStyles, ...style, }}
      data-component='box'
      data-testid={ testId }
      { ...rest }
    >
      { children }
    </Tag>
  );
}
