import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";



export type Size = 'sm' | 'md' | 'lg';

/**
 * Spacing values match the token scale but use hyphenated naming merely for cosmetics
 */
export type Spacing = 'space-1' | 'space-2' | 'space-3' | 'space-4' | 'space-5' | 'space-6' | 'space-8' | 'space-10' | 'space-12' | 'space-16';

export type Spanning = 'auto' | 'fill' | 'half' | 'third' | 'quarter';

export type Variant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';

export type Appearance = 'filled' | 'tonal' | 'outlined' | 'ghost';

export type TagBaseProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
};

/**
 * Polymorphic `as` prop
 * Merges props for my components with what the HTML element or React component
 * renders as. Like literally with the `as` attribute. For example:
 * 
 * ```
 * <Button as="a" href="/">Go home to your families</Button>
 * ```
 */
export type AsProp<C extends ElementType> = { as?: C; };

export type PropsWithAs<C extends ElementType, P extends object = object> =
  P &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof P | 'as'>;

/**
 * ResponsiveProp allows arrays or breakpoint maps
 */
export type ResponsiveProp<T = string | number> = T | T[] | { [breakpoint: string]: T };
