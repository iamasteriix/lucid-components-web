import type { LayoutProps, SxElevation, SxShadow, } from '@/types';


type FlatVariant = {
  name: 'flat';
  fill?: 'base' | 'surface' | 'subtle' | 'raised' | 'overlay' | 'floating';
  elevation?: SxElevation;
  shadow?: SxShadow;
  focus?: 'accent' | 'info' | 'success' | 'warning' | 'error';
};

type GlassVariant = {
  name: 'glass',
  tone?: 'neutral' | 'accent';
  intensity?: 'faint' | 'subtle' | 'base' | 'strong';
  elevation?: SxElevation;
  blur?: 'sm' | 'md' | 'lg';
};

export type ViewVariant = FlatVariant | GlassVariant;

export type ViewProps = LayoutProps & {
  variant?: ViewVariant;
};

