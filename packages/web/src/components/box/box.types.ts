import type { ElementType } from "react";
import type { PropsWithAs, ResponsiveProp, Spacing, Spanning, TagBaseProps, } from "@/types";



type Display = 'block' | 'flex' | 'grid' | 'inline' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'none';

type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';

type JustifySelf = 'start' | 'end' | 'center' | 'stretch';

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

type Flex = 'auto' | 'none';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type BoxOwnProps = {
  // -- layout ---
  display?: ResponsiveProp<Display>;
  alignSelf?: ResponsiveProp<AlignSelf>;
  alignItems?: ResponsiveProp<AlignItems>;
  justifyContent?: ResponsiveProp<JustifyContent>;
  order?: ResponsiveProp<number>;

  // -- apply when parent is flex --
  flex?: ResponsiveProp<Flex>;
  flexDirection?: ResponsiveProp<FlexDirection>;
  flexWrap?: ResponsiveProp<FlexWrap>;
  flexGrow?: ResponsiveProp<0 | 1>;
  flexShrink?: ResponsiveProp<0 | 1>;
  flexBasis?: ResponsiveProp<Spanning>;

  // -- apply when parent is grid ---
  gridColumn?: ResponsiveProp<string | number | Spanning>;
  gridRow?: ResponsiveProp<string | number | Spanning>;
  gridArea?: ResponsiveProp<string>;
  justifySelf?: ResponsiveProp<JustifySelf>;
  
  // -- sizing ---
  width?: ResponsiveProp<Spacing | Spanning>;
  height?: ResponsiveProp<Spacing | Spanning>;
  minWidth?: ResponsiveProp<Spacing | Spanning>;
  maxWidth?: ResponsiveProp<Spacing | Spanning>;

  // -- spacing ---
  margin?: ResponsiveProp<Spacing>;
  marginX?: ResponsiveProp<Spacing>;
  marginY?: ResponsiveProp<Spacing>;
  padding?: ResponsiveProp<Spacing>;
  paddingX?: ResponsiveProp<Spacing>;
  paddingY?: ResponsiveProp<Spacing>;

  // // decorations
  // background?: BoxBackground;
  // surface?: BoxSurface;
  // borderColor?: Variant;
  // borderAppearance?: BorderAppearance;
  // borderRadius?: ResponsiveProp<Spacing>;
};

export type BoxProps <C extends ElementType = 'div'> = PropsWithAs<C, TagBaseProps & BoxOwnProps>;
