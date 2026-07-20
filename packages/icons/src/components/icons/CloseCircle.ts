import type { IconBaseProps, IconParentProps } from "../icons.types";
import { createIcon } from "@/lib";
import { resolveIconColor } from "@/utils";



const CloseCircleBold = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [{
    d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06',
    fill: resolveIconColor(fill),
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});



const CloseCircleBoldDuo = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [
    {
      d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10',
      fill: resolveIconColor(fill),
    },
    {
      d: 'M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06',
      fill: resolveIconColor(fill, 1),
    },
  ],
});



const CloseCircleOutline = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [
    {
      d: 'M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z',
      fill: resolveIconColor(fill),
    },
    {
      d: 'M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0',
      fill: resolveIconColor(fill),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
});



const CloseCircleOutlineDuo = (props: IconBaseProps) => createIcon({
  viewBox: props.viewBox,
  size: props.size,
  paths: [
    {
      d: 'M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12',
      fill: resolveIconColor(props.fill),
    },
    {
      d: 'M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06',
      fill: resolveIconColor(props.fill, 1),
    },
  ],
});



export const CloseCircle = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
  bold = false,
}: IconParentProps) => {

  const isDuotone = variant === 'duotone';
  const selectedIcon = isDuotone && bold ? CloseCircleBoldDuo
    : isDuotone ? CloseCircleOutlineDuo
    : bold ? CloseCircleBold
    : CloseCircleOutline;

  return selectedIcon({ viewBox, size, fill, });
}
