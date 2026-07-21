import type { FC } from "react";
import React from "react";
import { resolveIconColor } from "@/utils";
import { IconDefinition, WebIconProps, } from "./types";



export const createIcon = (definition: IconDefinition): FC<WebIconProps> => {
  return ({
    viewBox = '0 0 24 24',
    size = '1rem',
    fill = '#f0fefe',
    ...rest
  }: WebIconProps) => (
    <svg
      viewBox={ viewBox }
      fontSize={ size }
      width={ size }
      height={ size }
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      { ...rest }
    >
      {
        definition.paths.map((path, index) => (
          <path
            key={ index.toString() }
            d={ path.d }
            fillRule={ path.fillRule }
            clipRule={ path.clipRule }
            fill={ resolveIconColor(fill, index) }
          />
        ))
      }
    </svg>
  );
}
