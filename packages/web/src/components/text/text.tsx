import type { Ref } from "react";
import type { ElementBaseProps, } from "@/types";
import { useDeviceBreakpoints, } from "@lucid-ui/core";
import { resolveA11y, resolveSx } from "@/utils";
import styles from "./text.module.css";



type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse' | 'inherit';

type TextAlign = 'start' | 'center' | 'end';

type TextSize =
  | 'xs' | 'sm' | 'base' | 'lg'
  | 'xl' | '2xl' | '3xl' | '4xl';

type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

type LineHeight = 'tight' | 'snug' | 'normal' | 'relaxed';

type FontFamily = 'sans' | 'serif' | 'mono';

type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'truncate';

export type TextProps = Omit<ElementBaseProps, 'children'> & {
  color?: TextColor;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  lineHeight?: LineHeight;
  font?: FontFamily;
  textWrap?: TextWrap;
  children?: string | number;
  ref?: Ref<HTMLParagraphElement>;
};



export const Text = ({
  font = 'sans',
  size = 'base',
  weight = 'regular',
  lineHeight = 'normal',
  color = 'primary',
  align = 'start',
  textWrap = 'wrap',
  sx,
  style,
  children,
  testID,
  a11y,
  ref,
}: TextProps) => {
  const { breakpoint, } = useDeviceBreakpoints();

  const classes = [
    styles.text,
    styles[`text--font-${font}`],
    styles[`text--size-${size}`],
    styles[`text--weight-${weight}`],
    styles[`text--line-height-${lineHeight}`],
    styles[`text--color-${color}`],
    styles[`text--align-${align}`],
    styles[`text--wrap-${textWrap}`],
  ]
    .filter(Boolean)
    .join(' ');

  const sxStyles = resolveSx(sx, breakpoint);       // resolve sx into inline styles
  const styleObj = Object.assign(sxStyles, style);  // merge style properties
  const accessibility = resolveA11y(a11y);          // resolve accessibility props

  return (
    <p
      ref={ ref }
      className={ classes }
      style={ styleObj }
      data-component='text'
      data-testid={ testID }
      { ...accessibility }
    >
      { children }
    </p>
  );
}
