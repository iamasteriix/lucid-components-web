import type { IconBaseProps, IconParentProps } from "../icons.types";
import { createIcon } from "@/lib";
import { resolveIconColor } from "@/utils";



const PlusOutline = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [
    {
      d: 'M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75',
      fill: resolveIconColor(fill),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75',
      fill: resolveIconColor(fill),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
});



const PlusOutlineDuo = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill,
}: IconBaseProps) => createIcon({
  viewBox,
  size,
  paths: [
    {
      d: 'M1.916 20c0-.966.784-1.75 1.75-1.75h32.668a1.75 1.75 0 1 1 0 3.5H3.666A1.75 1.75 0 0 1 1.916 20',
      fill: resolveIconColor(fill),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M20 1.916c.966 0 1.75.784 1.75 1.75v32.668a1.75 1.75 0 1 1-3.5 0V3.666c0-.966.784-1.75 1.75-1.75',
      fill: resolveIconColor(fill, 1),
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
});



export const Plus = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
  bold = false,
}: IconParentProps) => {

  const isDuotone = variant === 'duotone';
  const selectedIcon = isDuotone ? PlusOutlineDuo : PlusOutline;

  return selectedIcon({ viewBox, size, fill, });
}
