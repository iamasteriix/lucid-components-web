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
type TextFieldVariant = 'neutral' | 'success' | 'warning' | 'error' | 'info';
type TextFieldAppearance = 'filled' | 'outlined' | 'ghost';


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
type TextFieldBaseProps = TagBaseProps & {
  // input passthrough
  id?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  type?: TextFieldInputType;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;

  // visuals
  variant?: TextFieldVariant;
  size?: Size;
  appearance?: TextFieldAppearance;

  // adornments
  leadingNode?: ReactNode;
  trailingNode?: ReactNode;

  // status message
  message?: string;

  // escape hatch
  inputClassname?: string;
};


export type TextFieldProps <C extends ElementType = 'div'> = PropsWithAs<C, TextFieldBaseProps>;