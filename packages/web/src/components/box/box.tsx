import type { ElementType } from "react";
import type { BoxOwnProps, BoxProps } from "./box.types";
import { useResolveLayoutStyling } from "@/hooks";
import styles from "./box.module.css";



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
  surface,
  appearance = 'flat',
  border,
  borderWidth,
  borderRadius,
  shadow,
  style,
  className,
  children,
  'data-testid': testId,
  ...rest
}: BoxProps<C>) => {

  const Tag: ElementType = as ?? 'div';

  const classes = [
    styles.box,
    surface && styles[`box--surface-${surface}`],
    appearance && styles[`box--appearance-${appearance}`],
    border && styles[`box--border-${border}`],
    borderWidth && styles[`box--border-width-${borderWidth}`],
    borderRadius && styles[`box--radius-${borderRadius}`],
    shadow && styles[`box--shadow-${shadow}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const boxStyles = useResolveLayoutStyling<BoxOwnProps>({
    display, alignSelf, alignItems, justifyContent, order, flex, flexDirection,
    flexWrap, flexGrow, flexShrink, flexBasis, gridColumn, gridRow, gridArea,
    justifySelf, width, height, minWidth, maxWidth, margin, marginX, marginY,
    padding, paddingX, paddingY,
  });

  return (
    <Tag
      className={ classes }
      style={{ ...boxStyles, ...style, }}
      data-component='box'
      data-testid={ testId }
      { ...rest }
    >
      { children }
    </Tag>
  );
}
