import { Icon } from "../Icon";
import { HeartBold } from "./HeartBold";
import { HeartBoldDuo } from "./HeartBoldDuo";
import { HeartOutline } from "./HeartOutline";
import { HeartOutlineDuo } from "./HeartOutlineDuo";
import type { IconProps } from "../types";


export function Heart (props: IconProps) {

  const isDuotone = props.variant === 'duotone';
  const isBold = props.bold;

  const Asset =
      isDuotone && isBold ? HeartBoldDuo
    : isDuotone ? HeartOutlineDuo
    : isBold ? HeartBold
    : HeartOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-chevron-left'
    >
      <Asset/>
    </Icon>
  );
}