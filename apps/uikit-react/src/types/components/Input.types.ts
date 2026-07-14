import type {
  ChangeEventHandler,
  ElementType,
  FocusEventHandler,
  HTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
} from "react";
import type { PropsWithAs, Size, TagBaseProps } from "@/types";


// appearance
type TextInputVariant = 'neutral' | 'info' | 'success' | 'warning' | 'error';
type TextInputAppearance = 'filled' | 'outlined' | 'ghost';


// allowed input types
type TextFieldInputType = 
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'url'
  | 'tel'
  | 'number';


// everything that is not forwarded to the polymorphic root element (tf does this mean?)
type TextInputBaseProps = TagBaseProps & {
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  variant?: TextInputVariant;
  appearance?: TextInputAppearance;
  leadingNode?: ReactNode;
  trailingNode?: ReactNode;
  message?: string;
  inputClassname?: string;
};

type TextFieldOwnProps = TextInputBaseProps & {
  value?: string | number;
  defaultValue?: string | number;
  type?: TextFieldInputType;
  size?: Size;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

type TextareaOwnProps = TextInputBaseProps & {
  value?: string;
  defaultValue?: string;
  minRows?: number;
  maxRows?: number;
  anchor?: 'top' | 'bottom';
  inputMode?: HTMLAttributes<HTMLTextAreaElement>['inputMode'];
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
};


export type TextFieldProps <C extends ElementType = 'div'> = PropsWithAs <C, TextFieldOwnProps>;
export type TextareaProps <C extends ElementType = 'div'> = PropsWithAs <C, TextareaOwnProps>;