import type { CSSProperties, ReactElement, } from "react";
import type { SxProps } from "@/theme";



// —— Accessibility ———————————————————————————————————————————————————————————
type A11yState = {
  disabled?: boolean;
  selected?: boolean;
  checked?: boolean;
  busy?: boolean;
  expanded?: boolean;
};


export type A11yProps = {
  label?: string;
  role?: string;
  hint?: string;
  state?: A11yState;
  hidden?: boolean;
};



// —— Components ——————————————————————————————————————————————————————————————
export type ElementBaseProps = {
  sx?: SxProps;
  a11y?: A11yProps;
  style?: CSSProperties;
  children?: ReactElement | ReactElement[];
  testID?: string;
};
