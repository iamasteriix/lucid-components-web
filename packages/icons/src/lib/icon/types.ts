import type { ComponentType } from "react";



export type PathData = {
  d: string;
  fill?: string;
  fillRule?: 'nonzero' | 'evenodd';
  clipRule?: 'nonzero' | 'evenodd';
}

export type IconDefinition = {
  viewBox: string;
  paths: PathData[];
  size: string;
}

export type IconProps = {
  [key: string]: any;
}

// shared function signature
export type CreateIcon = (definition: IconDefinition) => ComponentType<IconProps>;