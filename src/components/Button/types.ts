import type { ElementType, ReactNode } from "react";
import type { Size, PropsWithAs, ComponentBaseProps, } from "../../types";


export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'ghost' | 'destructive';
export type FABVariant = 'standard' | 'mini' | 'extended';
export type ButtonAppearance = 'elevated' | 'filled' | 'outlined' | 'tonal';
export type ButtonTextAlign = 'left' | 'center' | 'right';
export type ButtonSize = Size;


export interface ButtonBaseProps extends ComponentBaseProps {
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  appearance?: ButtonAppearance;
}


export interface ButtonOwnProps extends ButtonBaseProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  textAlign?: ButtonTextAlign;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}


export interface IconButtonOwnProps extends ButtonBaseProps {
  icon: ReactNode;
  label: string; // required for accessibility, renders as aria-label
}


export interface FABOwnProps extends ButtonBaseProps {
  variant?: FABVariant;
  icon: ReactNode;
  label?: string; // required when variant is 'extended'
}


export type ButtonProps<C extends ElementType = 'button'> = PropsWithAs<C, ButtonOwnProps>;


export type IconButtonProps<C extends ElementType = 'button'> = PropsWithAs<C, IconButtonOwnProps>;


export type FABProps<C extends ElementType = 'button'> = PropsWithAs<C, FABOwnProps>;