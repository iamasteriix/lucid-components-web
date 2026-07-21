import type { SVGProps } from "react";
import type { SvgProps } from "react-native-svg";
import type { IconBaseProps } from "@/components/icons.types";



type Override<T, U> = Omit<T, keyof U> & U;

type PathData = {
  d: string;
  fillRule?: 'nonzero' | 'evenodd';
  clipRule?: 'nonzero' | 'evenodd';
};

export type IconDefinition = {
  viewBox?: string;
  size?: string;
  paths: PathData[];
};

export type WebIconProps = Override<SVGProps<SVGSVGElement>, IconBaseProps> & IconBaseProps;

export type NativeIconProps = Override<SvgProps, IconBaseProps> & IconBaseProps;
