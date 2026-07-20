import type { SVGProps } from "react";
import React from "react";
import { IconDefinition, IconProps } from "./types";



export const createIcon = (definition: IconDefinition) => {
  return (props: IconProps & SVGProps<SVGSVGElement>) => (
    <svg
      fontSize={ definition.size }
      viewBox={ definition.viewBox }
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      { ...props }
    >
      {
        definition.paths.map((path, index) => (
          <path
            key={ index.toString() }
            d={ path.d }
            fillRule={ path.fillRule }
            clipRule={ path.clipRule }
            fill={ path.fill }
          />
        ))
      }
    </svg>
  );
}
