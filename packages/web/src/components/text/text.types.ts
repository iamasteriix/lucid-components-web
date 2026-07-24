import type { ElementType } from "react";
import type { PropsWithAs, TagBaseProps } from "@/types";



type TextColor = 'primary' | 'secondary' | 'disabled' | 'inverse' | 'inherit';

type TextAlign = 'start' | 'center' | 'end';

type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

type LineHeight = 'tight' | 'snug' | 'normal' | 'relaxed';

type FontFamily = 'sans' | 'serif' | 'mono';

type TextWrap = 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'truncate';

export type TextOwnProps = {
  color?: TextColor;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
  lineHeight?: LineHeight;
  font?: FontFamily;
  textWrap?: TextWrap;
};

export type TextProps <C extends ElementType = 'span'> = PropsWithAs<C, TagBaseProps & TextOwnProps>;
