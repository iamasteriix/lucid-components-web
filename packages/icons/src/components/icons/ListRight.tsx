import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Icon = createIcon({
  paths: [{
    d: 'M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2',
  }, {
    d: 'M21 19h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2',
  }],
});


export const ListRight: IconComponent = ({
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
