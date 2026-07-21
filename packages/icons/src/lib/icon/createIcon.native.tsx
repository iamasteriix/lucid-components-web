import type { FC } from "react";
import type { IconDefinition, NativeIconProps, } from "./types";
import React from "react";
import { resolveIconColor } from "@/utils";
import { Path, Svg } from "react-native-svg";



export const createIcon = (definition: IconDefinition): FC<NativeIconProps> => {
  return ({
    viewBox = '0 0 24 24',
    size = '1rem',
    fill = '#f0fefe',
    ...rest
  }: NativeIconProps) => (
    <Svg
      viewBox={ viewBox }
      fontSize={ size }
      width={ size }
      height={ size }
      fill='none'
      { ...rest }
    >
      {
        definition.paths.map((path, index) => (
          <Path
            key={ index.toString() }
            d={ path.d }
            fillRule={ path.fillRule }
            clipRule={ path.clipRule }
            fill={ resolveIconColor(fill, index) }
          />
        ))
      }
    </Svg>
  );
}
