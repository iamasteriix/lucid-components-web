import type { FC } from "react";
import type { SvgProps } from "react-native-svg";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconBaseProps, IconDefinition, Override } from "@/types";
import { resolveIconColor } from "../normalizers/resolve-format";


type NativeIconProps = Override<SvgProps, IconBaseProps> & IconBaseProps;


export const createIcon = (definition: IconDefinition): FC<NativeIconProps> => {
  return ({
    viewBox = '0 0 24 24',
    size = '1rem',
    fill = '#f0fefe',
    variant = 'monochrome',
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
            fill={ resolveIconColor(fill, variant, index) }
          />
        ))
      }
    </Svg>
  );
}
