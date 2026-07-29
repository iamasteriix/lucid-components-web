import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";



// —— Components ——————————————————————————————————————————————————————————————
/**
 * Polymorphic `as` prop
 * Merges props for my components with what the HTML element or React component
 * renders as. Like literally with the `as` attribute. For example:
 * 
 * ```
 * <Button as="a" href="/">Go home to your families</Button>
 * ```
 */
type AsProp <C extends ElementType> = { as?: C; };

export type TagBaseProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
};

export type PropsWithAs <C extends ElementType, P extends object = object> =
  P &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef <C>, keyof P | 'as'>;
