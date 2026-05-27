import type { ElementType, ReactNode } from "react";
import type { Size, PropsWithAs, TagBaseProps, } from "@/types";


type ButtonVariant = 'primary' | 'accent' | 'ghost' | 'destructive';
type ButtonAppearance = 'elevated' | 'filled' | 'outlined' | 'tonal';
type ButtonTextAlign = 'left' | 'center' | 'right';


type ButtonBaseProps = TagBaseProps & {
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  appearance?: ButtonAppearance;
}


type ButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  textAlign?: ButtonTextAlign;
  LeadingIcon?: ReactNode;
  TrailingIcon?: ReactNode;
}


type IconButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  Icon: ReactNode;
  label: string; // required for accessibility, renders as aria-label
}


type FABOwnProps =
  | ButtonBaseProps & {
      variant?: 'default' | 'mini';
      Icon: ReactNode;
      label?: string;
    }
  | ButtonBaseProps & {
      variant?: 'extended';
      Icon: ReactNode;
      label: string; // required when variant is 'extended'
    }
  


type TextButtonOwnProps = ButtonBaseProps & {
  label: string,
}


export type ButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, ButtonOwnProps>;
export type IconButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, IconButtonOwnProps>;
export type FABProps <C extends ElementType = 'button'> = PropsWithAs<C, FABOwnProps>;
export type TextButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, TextButtonOwnProps>;