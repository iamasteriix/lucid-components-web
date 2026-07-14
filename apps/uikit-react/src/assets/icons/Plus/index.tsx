import { Icon } from "../Icon";
import { PlusOutline } from "./PlusOutline";
import { PlusOutlineDuo } from "./PlusOutlineDuo";
import type { IconProps } from "../types";


export function Plus (props: IconProps) {

  const isDuotone = props.variant === 'duotone';

  const Asset =
      isDuotone ? PlusOutlineDuo
    : PlusOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-plus'
    >
      <Asset/>
    </Icon>
  );
}