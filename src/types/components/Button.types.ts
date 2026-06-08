import type { ElementType, ReactNode } from "react";
import type { Size, PropsWithAs, TagBaseProps, } from "@/types";


type ButtonVariant =
    'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
type ButtonAppearance = 'elevated' | 'filled' | 'outlined' | 'tonal' | 'ghost';
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
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}


type IconButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  icon: ReactNode;
  label: string; // required for accessibility, renders as aria-label
}


type FABOwnProps =
  | ButtonBaseProps & {
      variant?: 'default' | 'mini';
      icon: ReactNode;
      label?: string;
    }
  | ButtonBaseProps & {
      variant?: 'extended';
      icon: ReactNode;
      label: string; // required when variant is 'extended'
    }
  


type TextButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  label: string;
}


export type ButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, ButtonOwnProps>;
export type IconButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, IconButtonOwnProps>;
export type FABProps <C extends ElementType = 'button'> = PropsWithAs<C, FABOwnProps>;
export type TextButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, TextButtonOwnProps>;