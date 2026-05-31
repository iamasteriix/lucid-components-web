import { Icon } from "../Icon";
import { CloseCircleBoldDuo } from "./CloseCircleBoldDuo";
import { CloseCircleOutlineDuo } from "./CloseCircleOutlineDuo";
import { CloseCircleBold } from "./CloseCircleBold";
import { CloseCircleOutline } from "./CloseCircleOutline";
import type { IconProps } from "../types";


export function CloseCircle (props: IconProps) {

  const isDuotone = props.variant === 'duotone';
  const isBold = props.bold;

  const Asset =
        isDuotone && isBold ? CloseCircleBoldDuo
      : isDuotone ? CloseCircleOutlineDuo
      : isBold ? CloseCircleBold
      : CloseCircleOutline;

  return (
    <Icon
      { ...props }
      data-component='icon-close-circle'
    >
      <Asset/>
    </Icon>
  );
}