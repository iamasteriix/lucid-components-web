import type { IconComponent, IconProps } from "@/types";
import React from "react";
import { createIcon } from "@/utils";



const Icon = createIcon({
  paths: [{
    d: 'M10.528 6.467a.75.75 0 0 0-1.056 1.066l1.763 1.747c.716.71 1.206 1.197 1.538 1.61.323.402.434.66.463.892q.028.218 0 .437c-.03.23-.14.489-.463.89-.332.414-.822.902-1.538 1.611l-1.763 1.747a.75.75 0 0 0 1.056 1.066l1.795-1.78c.676-.669 1.228-1.217 1.62-1.704.407-.508.702-1.023.781-1.64a3.2 3.2 0 0 0 0-.817c-.079-.618-.374-1.133-.781-1.64-.392-.488-.944-1.036-1.62-1.706z',
  }],
});



export const ChevronRight: IconComponent = ({
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
