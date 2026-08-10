import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Solid = createIcon({
  paths: [{
    d: 'M16.253 13.535c-.552 0-1.004-.447-1.004-1s.443-1 .995-1h.009a1 1 0 1 1 0 2m-3.999 0c-.552 0-1.004-.447-1.004-1s.443-1 .995-1h.009a1 1 0 1 1 0 2m-4 0c-.552 0-1.004-.447-1.004-1s.443-1 .995-1h.009a1 1 0 1 1 0 2m3.996-10.75c-7.199 0-9.75 2.552-9.75 9.75s2.551 9.75 9.75 9.75S22 19.733 22 12.535s-2.551-9.75-9.75-9.75',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


const SolidDuo = createIcon({
  paths: [{
    d: 'M12 2.25c-7.199 0-9.75 2.552-9.75 9.75s2.551 9.75 9.75 9.75 9.75-2.552 9.75-9.75S19.199 2.25 12 2.25',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M14.999 12c0 .553.452 1 1.004 1a1 1 0 1 0 0-2h-.009a.995.995 0 0 0-.995 1M11 12c0 .553.452 1 1.004 1a1 1 0 1 0 0-2h-.009A.995.995 0 0 0 11 12M7 12c0 .553.452 1 1.004 1a1 1 0 1 0 0-2h-.009A.995.995 0 0 0 7 12',
  }],
});


const Outline = createIcon({
  paths: [{
    d: 'M5.304 5.304C4.081 6.527 3.5 8.574 3.5 12s.581 5.473 1.804 6.696S8.574 20.5 12 20.5s5.473-.58 6.696-1.804C19.919 17.473 20.5 15.427 20.5 12s-.581-5.473-1.804-6.696S15.426 3.5 12 3.5s-5.473.581-6.696 1.804m-1.06-1.06C5.91 2.575 8.49 2 12 2s6.089.576 7.757 2.243C21.425 5.911 22 8.49 22 12s-.575 6.089-2.243 7.757S15.51 22 12 22s-6.089-.575-7.757-2.243S2 15.51 2 12s.576-6.089 2.243-7.757',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M14.994 12a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M10.995 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M6.996 12a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


const OutlineDuo = createIcon({
  paths: [{
    d: 'M5.304 5.304C4.081 6.527 3.5 8.574 3.5 12s.581 5.473 1.804 6.696S8.574 20.5 12 20.5s5.473-.58 6.696-1.804C19.919 17.473 20.5 15.427 20.5 12s-.581-5.473-1.804-6.696S15.426 3.5 12 3.5s-5.473.581-6.696 1.804m-1.06-1.06C5.91 2.575 8.49 2 12 2s6.089.576 7.757 2.243C21.425 5.911 22 8.49 22 12s-.575 6.089-2.243 7.757S15.51 22 12 22s-6.089-.575-7.757-2.243S2 15.51 2 12s.576-6.089 2.243-7.757',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M14.994 12a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M10.995 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M6.996 12a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


export const EllipsisSquare: IconComponent = ({
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
