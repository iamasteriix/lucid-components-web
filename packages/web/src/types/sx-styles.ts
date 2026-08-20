import type { ResponsiveProp } from '@lucid-ui/core';


export type SxDisplay = 'flex' | 'none';

export type SxFlex = 'auto' | 'none';

export type SxAlign = 'start' | 'end' | 'center' | 'stretch';

export type SxJustify = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch';

export type SxDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type SxWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type SxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export type SxPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type SxElevation = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5';

// cosmetic choice
export type SxSpace =
  | 'space-1' | 'space-2' | 'space-3' | 'space-4'
  | 'space-5' | 'space-6' | 'space-8' | 'space-10'
  | 'space-12' | 'space-16' | 'space-18' | 'space-20'
  | 'space-24' | 'space-28' | 'space-32' | 'space-36';

export type SxFit = 'auto' | 'fill' | 'half' | 'third' | 'quarter';

export type SxGap =
  | '0px' | '.25px' | '.5px' | '.75px' | '1px'
  | '1.25px' | '1.5px' | '2px' | '2.5px' | '3px'
  | '4px' | '5px' | '6px' | '8px' | '10px'
  | '12px' | '16px' | '18px' | '20px' | '24px';

export type SxIntent = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export type SxFill = 'filled' | 'tonal' | 'outlined' | 'ghost';

export type SxSurface = 'base' | 'surface' | 'subtle' | 'raised' | 'overlay' | 'floating';

export type SxStrokeWeight = 'light' | 'medium' | 'semi-bold' | 'bold';

export type SxStrokeColor = 'subtle' | 'default' | 'strong';

export type SxRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type SxShadow = 'diffuse' | 'directional' | 'linear' | 'edge' | 'enclosed';

export type SxTypeface = 'sans' | 'mono' | 'serif';

export type SxFontSize = '2xs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export type SxColor = 'primary' | 'secondary' | 'muted' | 'inverse' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export type SxFontWeight = 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';

export type SxTracking = 'compact' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'wide';

export type SxProps = {
  // -- layout: base ---
  display?: ResponsiveProp<SxDisplay>;
  alignSelf?: ResponsiveProp<SxAlign>;
  alignItems?: ResponsiveProp<SxAlign>;
  justifySelf?: ResponsiveProp<SxJustify>;
  justifyContent?: ResponsiveProp<SxJustify>;
  order?: ResponsiveProp<number>;
  overflow?: ResponsiveProp<SxOverflow>;
  position?: ResponsiveProp<SxPosition>;
  elevation?: SxElevation;

  // -- layout: flex ---
  flex?: ResponsiveProp<SxFlex>;
  flexDirection?: ResponsiveProp<SxDirection>;
  flexWrap?: ResponsiveProp<SxWrap>;
  flexGrow?: ResponsiveProp<0 | 1>;
  flexShrink?: ResponsiveProp<0 | 1>;
  flexBasis?: ResponsiveProp<SxSpace | SxFit>;

  // -- sizes ---
  width?: ResponsiveProp<SxSpace | SxFit>;
  minWidth?: ResponsiveProp<SxSpace | SxFit>;
  maxWidth?: ResponsiveProp<SxSpace | SxFit>;
  height?: ResponsiveProp<SxSpace | SxFit>;
  minHeight?: ResponsiveProp<SxSpace | SxFit>;
  maxHeight?: ResponsiveProp<SxSpace | SxFit>;

  // -- spacing ---
  margin?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginVertical?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginHorizontal?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginTop?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginRight?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginBottom?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  marginLeft?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  padding?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingVertical?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingHorizontal?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingTop?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingRight?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingBottom?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  paddingLeft?: ResponsiveProp<SxGap | SxSpace | SxFit>;
  top?: ResponsiveProp<SxSpace | 'auto'>;
  right?: ResponsiveProp<SxSpace | 'auto'>;
  bottom?: ResponsiveProp<SxSpace | 'auto'>;
  left?: ResponsiveProp<SxSpace | 'auto'>;
  gap?: ResponsiveProp<SxGap | SxSpace>;
  columnGap?: ResponsiveProp<SxGap | SxSpace>;
  rowGap?: ResponsiveProp<SxGap | SxSpace>;

  // -- decorations: background, shadow ---
  backgroundColor?: SxSurface | SxIntent;
  boxShadow?: SxShadow;
  
  // -- decorations: border ---
  borderWidth?: ResponsiveProp<SxStrokeWeight>;
  borderTopWidth?: ResponsiveProp<SxStrokeWeight>;
  borderRightWidth?: ResponsiveProp<SxStrokeWeight>;
  borderBottomWidth?: ResponsiveProp<SxStrokeWeight>;
  borderLeftWidth?: ResponsiveProp<SxStrokeWeight>;
  borderRadius?: ResponsiveProp<SxRadius>;
  borderColor?: SxIntent | SxStrokeColor;

  // -- text ---
  fontFamily?: SxTypeface;
  fontSize?: ResponsiveProp<SxFontSize>;
  color?: SxColor;
  fontWeight?: ResponsiveProp<SxFontWeight>;
  lineHeight?: ResponsiveProp<SxTracking>;
  letterSpacing?: ResponsiveProp<SxTracking>;
};
