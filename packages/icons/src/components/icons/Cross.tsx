import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";


const Icon = createIcon({
  paths: [{
    d: 'M16.95 7.05a1 1 0 0 1 0 1.414L8.465 16.95a1 1 0 1 1-1.415-1.414l8.486-8.486a1 1 0 0 1 1.414 0',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }, {
    d: 'M7.05 7.05a1 1 0 0 1 1.414 0l8.486 8.486a1 1 0 0 1-1.414 1.414L7.05 8.464a1 1 0 0 1 0-1.414',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  }],
});


export const Cross: IconComponent = ({
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
