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
type FABVariant = 'primary' | 'surface';


type ButtonBaseProps = TagBaseProps & {
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  children?: never;
}


type ButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  label?: string;
  fullWidth?: boolean;
  textAlign?: ButtonTextAlign;
  leadingNode?: ReactNode;
  trailingNode?: ReactNode;
}


type IconButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  icon: ReactNode;
  label: string; // required for accessibility, renders as aria-label
}


type FABOwnProps =
  | ButtonBaseProps & {
      variant?: FABVariant;
      appearance?: 'default' | 'mini';
      label?: string;
    }
  | ButtonBaseProps & {
      variant?: FABVariant;
      appearance?: 'extended';
      label: string; // required when appearance is 'extended'
    };
  


type TextButtonOwnProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  label: string;
}


export type ButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, ButtonOwnProps>;
export type IconButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, IconButtonOwnProps>;
export type FABProps <C extends ElementType = 'button'> = PropsWithAs<C, FABOwnProps>;
export type TextButtonProps <C extends ElementType = 'button'> = PropsWithAs<C, TextButtonOwnProps>;