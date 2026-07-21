import type { IconComponent, IconProps } from "../icons.types";
import React from "react";
import { createIcon } from "@/lib";



const PlusOutline = createIcon({
  paths: [
    {
      d: 'M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
});



const PlusOutlineDuo = createIcon({
  paths: [
    {
      d: 'M1.916 20c0-.966.784-1.75 1.75-1.75h32.668a1.75 1.75 0 1 1 0 3.5H3.666A1.75 1.75 0 0 1 1.916 20',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M20 1.916c.966 0 1.75.784 1.75 1.75v32.668a1.75 1.75 0 1 1-3.5 0V3.666c0-.966.784-1.75 1.75-1.75',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
});



export const Plus: IconComponent = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
}: IconProps) => {

  const isDuotone = variant === 'duotone';
  const SelectedIcon = isDuotone ? PlusOutlineDuo : PlusOutline;

  return (
    <SelectedIcon
      viewBox={ viewBox }
      size={ size }
      fill={ fill }
    />
  );
}
