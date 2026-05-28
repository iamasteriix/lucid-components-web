import type { ElementType, ReactNode } from "react";
import type { PropsWithAs, TagBaseProps } from "@/types";


type FieldsetColumns = 1 | 2 | 3;
type FieldsetSurface = 'default' | 'elevated' | 'overlay';


type FieldsetBaseProps = TagBaseProps & {
  legend?: string;
  caption?: string;
  surface?: FieldsetSurface;
  columns?: FieldsetColumns;
  bordered?: boolean;
  disabled?: boolean;
  children: ReactNode;
};


export type FieldsetProps <C extends ElementType = 'div'> = PropsWithAs<C, FieldsetBaseProps>;