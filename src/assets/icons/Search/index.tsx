import { Icon } from "../Icon";
import { SearchBoldDuo } from "./SearchBoldDuo";
import { SearchOutlineDuo } from "./SearchOutlineDuo";
import { SearchBold } from "./SearchBold";
import { SearchOutline } from "./SearchOutline";
import type { IconProps } from "../types";


export function Search (props: IconProps) {

  const isDuotone = props.variant === 'duotone';
  const isBold = props.bold;

  const Asset =
        isDuotone && isBold ? SearchBoldDuo
      : isDuotone ? SearchOutlineDuo
      : isBold ? SearchBold
      : SearchOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-chevron-left'
    >
      <Asset/>
    </Icon>
  );
}