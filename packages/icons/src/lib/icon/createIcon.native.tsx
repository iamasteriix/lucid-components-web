import type { SvgProps } from "react-native-svg";
import type { IconDefinition, IconProps } from "./types";
import React from "react";
import { Path, Svg } from "react-native-svg";



export const createIcon = (definition: IconDefinition & Path) => {
  return (props: IconProps & SvgProps) => (
    <Svg
      fontSize={ definition.size }
      viewBox={ definition.viewBox }
      fill='none'
      { ...props }
    >
      {
        definition.paths.map((path, index) => (
          <Path
            key={ index.toString() }
            d={ path.d }
            fillRule={ path.fillRule }
            clipRule={ path.clipRule }
            fill={ path.fill }
          />
        ))
      }
    </Svg>
  );
}
