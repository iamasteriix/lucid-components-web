import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Icon = createIcon({
  paths: [{
    d: 'M6.408.276a3.2 3.2 0 0 0-.816 0c-.618.079-1.133.374-1.64.781-.488.392-1.036.944-1.706 1.62L.467 4.472a.75.75 0 0 0 1.066 1.056L3.28 3.765c.71-.716 1.197-1.206 1.61-1.538q.201-.161.36-.258V17a.75.75 0 0 0 1.5 0V1.97q.159.095.36.257c.413.332.9.823 1.61 1.538l1.747 1.763a.75.75 0 0 0 1.066-1.056l-1.78-1.795c-.67-.676-1.217-1.228-1.704-1.62C7.54.65 7.026.355 6.409.276',
  }],
});


export const ArrowUp: IconComponent = ({
  viewBox = '0 0 24 24',
  size = '1rem',
  fill = '#f0fefe',
  variant = 'monochrome',
}: IconProps) => (
  <Icon
    viewBox={ viewBox }
    size={ size }
    fill={ fill }
    variant={ variant }
  />
);
