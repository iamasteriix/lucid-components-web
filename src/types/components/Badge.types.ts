// src/components/Badge/types.ts
import type { ElementType, ReactNode } from 'react';
import type { TagBaseProps, PropsWithAs, Size } from '@/types';

type BadgeVariant =
    'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
  
type BadgeAppearance = 'filled' | 'outlined' | 'tonal';
type BadgeSize = Size;

type BadgeBaseProps = TagBaseProps & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  appearance?: BadgeAppearance;
};

type BadgeDotProps = BadgeBaseProps & {
  dot: true;
  children?: never;
};

type BadgeLabelProps = BadgeBaseProps & {
  dot?: false;
  children: ReactNode;
};

type BadgeOwnProps = BadgeDotProps | BadgeLabelProps;

export type BadgeProps <C extends ElementType = 'span'> = PropsWithAs<C, BadgeOwnProps>;