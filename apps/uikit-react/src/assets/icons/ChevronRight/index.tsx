import { Icon } from "../Icon";
import { ChevronRightOutline } from "./ChevronRightOutline";
import { ChevronRightOutlineDuo } from "./ChevronRightOutlineDuo";
import type { IconProps } from "../types";


export function ChevronRight (props: IconProps) {

  const isDuotone = props.variant === 'duotone';

  const Asset =
      isDuotone ? ChevronRightOutlineDuo
    : ChevronRightOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-chevron-right'
    >
      <Asset/>
    </Icon>
  );
}