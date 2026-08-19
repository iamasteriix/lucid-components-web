import type {
  SxElevation, SxFit, SxIntent, SxRadius, SxShadow, SxSpace, SxStrokeColor,
  SxStrokeWeight, SxSurface,
} from "@/types";


export const sxSpaceMap: Record<SxSpace, string> = {
  'space-1':  'var(--spacing-space1)',
  'space-2':  'var(--spacing-space2)',
  'space-3':  'var(--spacing-space3)',
  'space-4':  'var(--spacing-space4)',
  'space-5':  'var(--spacing-space5)',
  'space-6':  'var(--spacing-space6)',
  'space-8':  'var(--spacing-space8)',
  'space-10': 'var(--spacing-space10)',
  'space-12': 'var(--spacing-space12)',
  'space-16': 'var(--spacing-space16)',
  'space-18': 'var(--spacing-space18)',
  'space-20': 'var(--spacing-space20)',
  'space-24': 'var(--spacing-space24)',
  'space-28': 'var(--spacing-space28)',
  'space-32': 'var(--spacing-space32)',
  'space-36': 'var(--spacing-space36)',
};

export const sxFitMap: Record<SxFit, string> = {
  auto:     'auto',
  fill:     '100%',
  half:     '50%',
  third:    '33.333%',
  quarter:  '25%',
};

export const sxLevelMap: Record<SxElevation, string> = {
  'level-1': 'var(--elevation-level1)',
  'level-2': 'var(--elevation-level2)',
  'level-3': 'var(--elevation-level3)',
  'level-4': 'var(--elevation-level4)',
  'level-5': 'var(--elevation-level5)',
};

export const sxRadiusMap: Record<SxRadius, string> = {
  sm:     'var(--shape-radiusSm)',
  md:     'var(--shape-radiusMd)',
  lg:     'var(--shape-radiusLg)',
  xl:     'var(--shape-radiusXl)',
  '2xl':  'var(--shape-radius2xl)',
  full:   'var(--shape-radiusFull)',
};

export const sxStrokeWeightMap: Record<SxStrokeWeight, string> = {
  light:        'var(--shape-strokeLight)',
  medium:       'var(--shape-strokeMedium)',
  'semi-bold':  'var(--shape-strokeSemiBold)',
  bold:         'var(--shape-strokeBold)',
};

export const sxIntentMap: Record<SxIntent, string> = {
  primary:    'var(--colors-primary)',
  secondary:  'var(--colors-secondary)',
  accent:     'var(--colors-accent)',
  info:       'var(--colors-info)',
  success:    'var(--colors-success)',
  warning:    'var(--colors-warning)',
  error:      'var(--colors-error)',
};

export const sxStrokeColor: Record<SxStrokeColor, string> = {
  subtle:   'var(--colors-strokeSubtle)',
  default:  'var(--colors-strokeDefault)',
  strong:   'var(--colors-strokeStrong)',
};

export const sxSurface: Record<SxSurface, string> = {
  base:     'var(--colors-bgBase)',
  surface:  'var(--colors-bgSurface)',
  subtle:   'var(--colors-bgSubtle)',
  raised:   'var(--colors-bgRaised)',
  overlay:  'var(--colors-bgOverlay)',
  floating: 'var(--colors-bgFloating)',
};

export const sxShadow: Record<SxShadow, string> = {
  diffuse:      'var(--elevation-shadowDiffuse)',
  directional:  'var(--elevation-shadowDirectional)',
  linear:       'var(--elevation-shadowLinear)',
  edge:         'var(--elevation-shadowEdge)',
  enclosed:     'var(--elevation-shadowEnclosed)',
};
