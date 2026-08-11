import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Solid = createIcon({
  paths: [{
    d: 'M12.25 13.83c-3.912 0-7.344 2.303-7.344 4.926 0 3.375 5.529 3.375 7.345 3.375s7.344 0 7.344-3.397c0-2.612-3.432-4.903-7.344-4.903M12.212 11.642h.031a4.89 4.89 0 0 0 4.887-4.887 4.89 4.89 0 0 0-4.887-4.886 4.89 4.89 0 0 0-4.887 4.884 4.88 4.88 0 0 0 4.856 4.89',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


const SolidDuo = createIcon({
  paths: [{
    d: 'M11.962 11.642h.03a4.89 4.89 0 0 0 4.887-4.887c0-2.694-2.192-4.886-4.887-4.886S7.106 4.061 7.106 6.753a4.88 4.88 0 0 0 4.857 4.89',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M12 13.83c-3.913 0-7.345 2.303-7.345 4.926 0 3.375 5.53 3.375 7.345 3.375s7.344 0 7.344-3.397c0-2.612-3.432-4.903-7.344-4.903',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


const Outline = createIcon({
  paths: [{
    d: 'M11.962 11.892h.03c2.833 0 5.137-2.304 5.137-5.136s-2.304-5.137-5.136-5.137a5.14 5.14 0 0 0-5.137 5.134 5.1 5.1 0 0 0 1.488 3.628 5.09 5.09 0 0 0 3.618 1.511M8.356 6.756a3.64 3.64 0 0 1 3.637-3.637c2.005 0 3.636 1.632 3.636 3.637s-1.631 3.636-3.636 3.636h-.028a3.59 3.59 0 0 1-2.557-1.069 3.6 3.6 0 0 1-1.052-2.567M4.406 18.756c0 3.625 5.716 3.625 7.594 3.625s7.595 0 7.595-3.647c0-2.793-3.478-5.153-7.595-5.153s-7.594 2.37-7.594 5.175m1.5 0c0-1.735 2.606-3.675 6.094-3.675s6.095 1.929 6.095 3.653c0 1.424-2.051 2.147-6.095 2.147s-6.094-.715-6.094-2.125',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


const OutlineDuo = createIcon({
  paths: [{
    d: 'M11.962 11.892h.03c2.833 0 5.137-2.304 5.137-5.136s-2.304-5.137-5.136-5.137a5.14 5.14 0 0 0-5.137 5.134 5.1 5.1 0 0 0 1.488 3.628 5.09 5.09 0 0 0 3.618 1.511M8.356 6.756a3.64 3.64 0 0 1 3.637-3.637c2.005 0 3.636 1.632 3.636 3.637s-1.631 3.636-3.636 3.636h-.028a3.59 3.59 0 0 1-2.557-1.069 3.6 3.6 0 0 1-1.052-2.567',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M4.406 18.756c0 3.625 5.716 3.625 7.594 3.625s7.595 0 7.595-3.647c0-2.793-3.478-5.153-7.595-5.153s-7.594 2.37-7.594 5.175m1.5 0c0-1.735 2.606-3.675 6.094-3.675s6.095 1.929 6.095 3.653c0 1.424-2.051 2.147-6.095 2.147s-6.094-.715-6.094-2.125',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


export const User: IconComponent = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
  solid = false,
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
  );
}
