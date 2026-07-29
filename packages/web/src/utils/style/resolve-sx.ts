import type { CSSProperties } from "react";
import type { BreakpointType } from "@skyline-uikit/core";
import type { SxFit, SxIntent, SxProps, SxRadius, SxSpace, SxStrokeColor, SxStrokeWeight } from "@/theme";
import { resolveBreakpointSx } from "@skyline-uikit/core";
import { sxFitMap, sxIntentMap, sxRadiusMap, sxSpaceMap, sxStrokeColor, sxStrokeWeightMap, } from "@/theme";



type PropValue = string | number | undefined;



const spaceOrFitKeys = new Set([
  'flexBasis',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
  'margin', 'marginX', 'marginY',
  'padding', 'paddingX', 'paddingY',
  'top', 'right', 'bottom', 'left',
  'gap',
]);

const passthroughKeys = new Set([
  'display', 'alignSelf', 'alignItems', 'justifySelf', 'justifyContent',
  'order', 'overflow', 'position', 'flex', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink',
  'gridTemplateColumns', 'gridTemplateRows', 'gridArea', 'gridTemplateAreas',
]);



const resolveSxValue = (
  key: keyof SxProps,
  value: unknown,
): PropValue => {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string' || typeof value !== 'number') return undefined;

  // map to spacing or fit
  if (spaceOrFitKeys.has(key)) {
    if (value in sxSpaceMap) return sxSpaceMap[value as SxSpace];
    if (value in sxFitMap) return sxFitMap[value as SxFit];
    if (value === 'auto') return 'auto';
  }

  // background color
  if (key === 'backgroundColor') return sxIntentMap[value as SxIntent];

  // border
  if (key === 'borderColor') {
    if (value in sxIntentMap) return sxIntentMap[value as SxIntent];
    if (value in sxStrokeColor) return sxStrokeColor[value as SxStrokeColor];
  }
  if (key === 'borderRadius') return sxRadiusMap[value as SxRadius];
  if (key === 'borderWidth') return sxStrokeWeightMap[value as SxStrokeWeight];

  // handle grid
  if (key === 'gridColumn' || key === 'gridRow') {
    if (typeof value === 'number') return `span ${value}`;
    if (typeof value === 'string' && value in sxFitMap) return `span ${sxFitMap[value as SxFit]}`;
    return value; // one fallback I'll let through bc idk wtf is happening here
  }

  // css-native or raw strings
  if (passthroughKeys.has(key)) return value;

  return undefined; // fallback: eliminate undeclared values
}



export const resolveSx = (
  sx: SxProps,
  breakpoint: BreakpointType,
): CSSProperties => {

  const styles: Record<string, PropValue> = {};

  // resolve each responsive prop to a single value at the current breakpoint
  const sxKeys = Object.keys(sx) as Array<keyof SxProps>;
  const sxResolved: Record<string, any> = {};
  for (const key of sxKeys) {
    const value = sx[key];
    if (value === undefined || value === null) continue;
    sxResolved[key] = resolveBreakpointSx(value, breakpoint);
  }

  // map each resolved value to a css property
  const sxResolvedEntries = Object.entries(sxResolved) as [keyof SxProps, unknown][];
  for (const [key, value] of sxResolvedEntries) {
    if (value === undefined || value === null) continue;
    const cssValue = resolveSxValue(key, value);

    // handle margin expansion
    if (key === 'margin') styles.margin = cssValue;
    else if (key === 'marginX') {
      styles.marginLeft = cssValue;
      styles.marginRight = cssValue;
    } else if (key === 'marginY') {
      styles.marginTop = cssValue;
      styles.marginBottom = cssValue;
    }
    
    // padding
    else if (key === 'padding') styles.padding = cssValue;
    else if (key === 'paddingX') {
      styles.paddingLeft = cssValue;
      styles.paddingRight = cssValue;
    } else if (key === 'paddingY') {
      styles.paddingTop = cssValue;
      styles.paddingBottom = cssValue;
    }
    
    // default: map key to css property directly
    else styles[key] = cssValue;
  }

  return styles as CSSProperties;
}
