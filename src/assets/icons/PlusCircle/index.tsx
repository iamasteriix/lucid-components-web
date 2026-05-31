import { Icon } from "../Icon";
import { PlusCircleBold } from "./PlusCircleBold";
import { PlusCircleBoldDuo } from "./PlusCircleBoldDuo";
import { PlusCircleOutline } from "./PlusCircleOutline";
import { PlusCircleOutlineDuo } from "./PlusCircleOutlineDuo";
import type { IconProps } from "../types";


export function PlusCircle (props: IconProps) {

  const isDuotone = props.variant === 'duotone';
  const isBold = props.bold;

  const Asset =
      isDuotone && isBold ? PlusCircleBoldDuo
    : isDuotone ? PlusCircleOutlineDuo
    : isBold ? PlusCircleBold
    : PlusCircleOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-plus-circle'
    >
      <Asset/>
    </Icon>
  );
}