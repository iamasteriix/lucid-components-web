import type { ElementType, ReactNode } from "react";
import type { PropsWithAs, TagBaseProps } from "@/types";


type JoinAxis = 'horizontal' | 'vertical';
type JoinGap = 'none' | 'small' | 'wide';

type JoinBaseProps = TagBaseProps & {
  axis?: JoinAxis;
  gap?: JoinGap;
  children: ReactNode;
}


export type JoinProps<C extends ElementType = 'div'> = PropsWithAs<C, JoinBaseProps>;