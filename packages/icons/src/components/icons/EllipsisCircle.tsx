import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Solid = createIcon({
  paths: [{
    d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1',
  }],
});


const SolidDuo = createIcon({
  paths: [{
    d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10',
  }, {
    d: 'M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
  }],
});


const Outline = createIcon({
  paths: [{
    d: 'M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
  }],
});


const OutlineDuo = createIcon({
  paths: [{
    d: 'M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
  }],
});


export const EllipsisCircle: IconComponent = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  solid = false,
  variant = 'monochrome',
}: IconProps) => {
  
  const isDuotone = variant === 'duotone';
  const SelectedIcon = isDuotone && solid ? SolidDuo
    : isDuotone ? OutlineDuo
    : solid ? Solid
    : Outline;

  return (
    <SelectedIcon
      viewBox={ viewBox }
      size={ size }
      fill={ fill }
      variant={ variant }
    />
  )
};
