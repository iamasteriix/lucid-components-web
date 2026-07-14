import { Icon } from "../Icon";
import { ChevronLeftOutline } from "./ChevronLeftOutline";
import { ChevronLeftOutlineDuo } from "./ChevronLeftOutlineDuo";
import type { IconProps } from "../types";


export function ChevronLeft (props: IconProps) {

  const isDuotone = props.variant === 'duotone';

  const Asset =
      isDuotone ? ChevronLeftOutlineDuo
    : ChevronLeftOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-chevron-left'
    >
      <Asset/>
    </Icon>
  );
}