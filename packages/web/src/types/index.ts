import type { CSSProperties, ReactElement, Ref, } from "react";
import type { ResponsiveProp } from "@lucid-ui/core";


// —— Accessibility ———————————————————————————————————————————————————————————
type A11yState = {
  disabled?: boolean;
  selected?: boolean;
  checked?: boolean;
  busy?: boolean;
  expanded?: boolean;
};


export type A11yProps = {
  label?: string;
  role?: string;
  hint?: string;
  state?: A11yState;
  hidden?: boolean;
};


// —— CSS —————————————————————————————————————————————————————————————————————

export type SxDisplay = 'flex' | 'none';

export type SxFlex = 'auto' | 'none';

export type SxAlign = 'start' | 'end' | 'center' | 'stretch';

export type SxJustify = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch';

export type SxDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type SxWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type SxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

export type SxPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type SxElevation = 'level-0' | 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5';

// cosmetic choice
export type SxSpace =
  | 'space-0' | 'space-1' | 'space-2' | 'space-3'
  | 'space-4' | 'space-5' | 'space-6' | 'space-8'
  | 'space-10' | 'space-12' | 'space-16' | 'space-18'
  | 'space-20' | 'space-24' | 'space-28' | 'space-32'
  | 'space-36';

export type SxFit = 'auto' | 'fill' | 'half' | 'third' | 'quarter';

export type SxGap = 0 | .25 | .5 | .75 | 1 | 1.25 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 18 | 20 | 24;

export type SxIntent = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';

export type SxFill = 'filled' | 'tonal' | 'outlined' | 'ghost';

export type SxStrokeWeight = 'none' | 'light' | 'medium' | 'semi-bold' | 'bold';

export type SxStrokeColor = 'subtle' | 'default' | 'strong';

export type SxRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

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
  margin?: ResponsiveProp<SxGap | SxSpace>;
  marginX?: ResponsiveProp<SxGap | SxSpace>;
  marginY?: ResponsiveProp<SxGap | SxSpace>;
  padding?: ResponsiveProp<SxGap | SxSpace>;
  paddingX?: ResponsiveProp<SxGap | SxSpace>;
  paddingY?: ResponsiveProp<SxGap | SxSpace>;
  top?: ResponsiveProp<SxSpace | 'auto'>;
  right?: ResponsiveProp<SxSpace | 'auto'>;
  bottom?: ResponsiveProp<SxSpace | 'auto'>;
  left?: ResponsiveProp<SxSpace | 'auto'>;
  gap?: ResponsiveProp<SxGap | SxSpace>;
  columnGap?: ResponsiveProp<SxGap | SxSpace>;
  rowGap?: ResponsiveProp<SxGap | SxSpace>;

  // -- decorations: background ---
  backgroundColor?: SxIntent;
  
  // -- decorations: border ---
  borderWidth?: ResponsiveProp<SxStrokeWeight>;
  borderTopWidth?: ResponsiveProp<SxStrokeWeight>;
  borderRightWidth?: ResponsiveProp<SxStrokeWeight>;
  borderBottomWidth?: ResponsiveProp<SxStrokeWeight>;
  borderLeftWidth?: ResponsiveProp<SxStrokeWeight>;
  borderRadius?: ResponsiveProp<SxRadius>;
  borderColor?: SxIntent | SxStrokeColor;
};


// —— Components ——————————————————————————————————————————————————————————————

type ElementChildren = ReactElement | ElementChildren[];  // self-referential

export type ElementBaseProps = {
  sx?: SxProps;
  a11y?: A11yProps;
  style?: CSSProperties;
  children?: ElementChildren;
  testID?: string;
};

type BaseViewProps = ElementBaseProps & {
  elevation?: SxElevation;
  ref?: Ref<HTMLDivElement>;
};

export type FlatViewProps = BaseViewProps & {
  material: 'flat';
  tone?: 'base' | 'surface' | 'elevated' | 'overlay';
  intensity?: 'filled' | 'tonal' | 'inherit';
  depth?: 'sm' | 'md' | 'lg'; // shadow spread
};

export type GlassViewProps = BaseViewProps & {
  material: 'glass';
  tone?: 'neutral' | 'accent';
  intensity?: 'faint' | 'subtle' | 'default' | 'strong';
  depth?: 'sm' | 'md' | 'lg'; // depth of blur
};

export type ViewPropsStrict = FlatViewProps | GlassViewProps;

export type ViewProps = BaseViewProps & {
  material?: 'flat' | 'glass';
  tone?: FlatViewProps['tone'] | GlassViewProps['tone'];
  intensity?: FlatViewProps['intensity'] | GlassViewProps['intensity'];
  depth?: FlatViewProps['depth'] | GlassViewProps['depth'];
};

export type SlotParams <T = {}> = {
  displayName?: string;
  defaultSx?: SxProps;
  defaultStyle?: CSSProperties;
  useContext?: () => Record<string, any>; // optional hook to inherit values from parent context
  extraProps?: T;                         // props the slot accepts beyond the base
};

export type SlotProps = ViewProps & {
  position?: 'leading' | 'trailing';  // maps to order: -1 or 1
};
