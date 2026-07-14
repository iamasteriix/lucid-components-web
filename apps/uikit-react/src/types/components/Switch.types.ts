import type { ElementType } from "react";
import type { TagBaseProps, PropsWithAs, Size } from "@/types";


type SwitchBaseProps = TagBaseProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
  size?: Size;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
};


export type SwitchProps <C extends ElementType = 'button'> = PropsWithAs<C, SwitchBaseProps>;