export type IconBaseProps = {
  viewBox: string;
  size: string;
  fill: string | string[];
};

export type IconParentProps = {
  viewBox?: string;
  size?: string;
  variant?: 'monochrome' | 'duotone';
  fill?: string | string[];
  bold?: boolean;
};
