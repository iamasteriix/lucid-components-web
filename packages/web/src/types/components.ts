import type { CSSProperties, ReactElement, Ref, } from 'react';
import type { A11yProps } from './accessibility';
import type { SxProps } from './sx-styles';
import type { ViewVariant } from '@/primitives';
import type { TextVariant } from '@/components';


type ElementChildren = ReactElement | ElementChildren[];  // self-referential

export type ElementBaseProps = {
  sx?: SxProps;
  a11y?: A11yProps;
  style?: CSSProperties;
  children?: ElementChildren;
  testID?: string;
};

export type LayoutProps = ElementBaseProps & {
  ref?: Ref<HTMLDivElement>;
};

export type VariantMap = {
  view?: ViewVariant;
  text?: TextVariant;
};
