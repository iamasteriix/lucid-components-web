import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Solid = createIcon({
  paths: [{
    d: 'M12 23.4c6.296 0 11.4-5.104 11.4-11.4S18.296.6 12 .6.6 5.704.6 12 5.704 23.4 12 23.4m.855-14.82a.855.855 0 0 0-1.71 0v2.565H8.58a.855.855 0 0 0 0 1.71h2.565v2.565a.855.855 0 0 0 1.71 0v-2.565h2.565a.855.855 0 0 0 0-1.71h-2.565z',
    fillRule: 'evenodd',
  }],
});


const SolidDuo = createIcon({
  paths: [{
    d: 'M23.4 12c0 6.296-5.104 11.4-11.4 11.4S.6 18.296.6 12 5.704.6 12 .6 23.4 5.704 23.4 12',
  }, {
    d: 'M12.855 8.58a.855.855 0 0 0-1.71 0v2.565H8.58a.855.855 0 0 0 0 1.71h2.565v2.565a.855.855 0 0 0 1.71 0v-2.565h2.565a.855.855 0 0 0 0-1.71h-2.565z',
  }],
});


const Outline = createIcon({
  paths: [{
    d: 'M12.788 8.85a.788.788 0 0 0-1.575 0v2.363H8.85a.788.788 0 0 0 0 1.575h2.363v2.362a.788.788 0 0 0 1.575 0v-2.363h2.362a.788.788 0 0 0 0-1.574h-2.363z',
  }, {
    d: 'M12 .713C5.766.713.713 5.766.713 12S5.766 23.287 12 23.287 23.287 18.234 23.287 12 18.234.713 12 .713M2.288 12a9.713 9.713 0 1 1 19.425 0 9.713 9.713 0 0 1-19.426 0',
    fillRule: 'evenodd',
  }],
});


const OutlineDuo = createIcon({
  paths: [{
    d: 'M12 2.195a9.805 9.805 0 1 0 0 19.61 9.805 9.805 0 0 0 0-19.61M.605 12C.605 5.707 5.707.605 12 .605S23.395 5.707 23.395 12 18.293 23.395 12 23.395.605 18.293.605 12',
  }, {
    d: 'M12 8.025a.795.795 0 0 1 .795.795v2.385h2.385a.795.795 0 0 1 0 1.59h-2.385v2.385a.795.795 0 0 1-1.59 0v-2.385H8.82a.795.795 0 0 1 0-1.59h2.385V8.82A.795.795 0 0 1 12 8.025',
  }],
});


export const PlusCircle: IconComponent = ({
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
