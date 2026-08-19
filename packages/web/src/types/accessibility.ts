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
