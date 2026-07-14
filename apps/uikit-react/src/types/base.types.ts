import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";


/** Size union */
export type Size = 'sm' | 'md' | 'lg';


/** Variant union */
export type Variant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

/** Appearance */
export type Appearance =
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'ghost';

/** Tag Base props */
export type TagBaseProps = {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}


/**
 * Polymorphic `as` prop
 * Merges props for my components with what the HTML element or React component
 * renders as. Like literally with the `as` attribute. For example:
 * 
 * ```
 * <Button as="a" href="/">Go home to your families</Button>
 * ```
 */
export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PropsWithAs<C extends ElementType, P extends object = object> =
  P &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof P | 'as'>;
