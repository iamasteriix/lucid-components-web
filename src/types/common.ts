
/** Size union */
export type Size = 'sm' | 'md' | 'lg';


/** Variant union */
export type Variant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'outline'
  | 'subtle';


/** Component Base props */
export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
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
export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PropsWithAs<C extends React.ElementType, P = {}> =
  P &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof P | 'as'>;
