import type { CSSProperties } from 'react';
import type { BreakpointType } from '@lucid-ui/core';
import type {
  SxColor, SxElevation, SxFit, SxTypeface, SxFontSize, SxFontWeight, SxIntent, SxProps,
  SxRadius, SxShadow, SxSpace, SxStrokeColor, SxStrokeWeight, SxSurface, SxTracking,
} from '@/types';
import { resolveBreakpointSx } from '@lucid-ui/core';
import {
  sxFitMap, sxIntentMap, sxRadiusMap, sxSpaceMap, sxStrokeColor, sxStrokeWeightMap,
} from '@/theme';
import {
  sxColor, sxTypeface, sxFontSize, sxFontWeight, sxLetterSpacing, sxLevelMap,
  sxLineHeight, sxShadow, sxSurface,
} from '@/theme/constants';


type SxCssValue = string | number | undefined;


const spaceOrFitKeys = new Set([
  'flexBasis',
  'width', 'minWidth', 'maxWidth',
  'height', 'minHeight', 'maxHeight',
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginVertical', 'marginHorizontal',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingVertical', 'paddingHorizontal',
  'top', 'right', 'bottom', 'left',
  'gap', 'columnGap', 'rowGap',
]);

const borderWidthKeys = new Set([
  'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
]);

const textKeys = new Set([
  'fontSize', 'lineHeight', 'letterSpacing', 'fontWeight', 'fontFamily', 'color',
]);

const passthroughKeys = new Set([
  'display', 'alignSelf', 'alignItems', 'justifySelf', 'justifyContent',
  'flex', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink',
  'order', 'overflow', 'position',
]);


/**
 * @note Watch out for the key lookups and the conditions within them. They are a little
 * fragile, and might collide when the style lookup maps get extensive enough. For
 * example, notice how the text line-heights and letter spacing overlap. This works ok
 * now, but might start to become a problem soon.
 */
const resolveSxValue = (
  key: keyof SxProps,
  value: any,
): SxCssValue => {
  if (value === undefined || value === null) return undefined;

  // elevation
  if (key === 'elevation') {
    if (value in sxLevelMap) return sxLevelMap[value as SxElevation];
  }

  // map to spacing or fit
  if (spaceOrFitKeys.has(key)) {
    if (value in sxSpaceMap) return sxSpaceMap[value as SxSpace];
    if (value in sxFitMap) return sxFitMap[value as SxFit];
    if (value === 'auto') return 'auto';
    if (/^-?\d*\.?\d+px$/.test(value)) return value;
  }

  // background color
  if (key === 'backgroundColor') {
    if (value in sxSurface) return sxSurface[value as SxSurface];
    if (value in sxIntentMap) return sxIntentMap[value as SxIntent];
  }

  // border
  if (key === 'borderColor') {
    if (value in sxIntentMap) return sxIntentMap[value as SxIntent];
    if (value in sxStrokeColor) return sxStrokeColor[value as SxStrokeColor];
  }
  if (key === 'borderRadius') return sxRadiusMap[value as SxRadius];

  // the implications of adding this single edge case are making me sick
  if (borderWidthKeys.has(key)) return sxStrokeWeightMap[value as SxStrokeWeight];

  // box shadow
  if (key === 'boxShadow') {
    if (value in sxShadow) return sxShadow[value as SxShadow];
  }

  // text
  if (textKeys.has(key)) {
    if (value in sxFontSize) return sxFontSize[value as SxFontSize];
    if (key === 'lineHeight' && value in sxLineHeight) return sxLineHeight[value as SxTracking];
    if (key === 'letterSpacing' && value in sxLetterSpacing) return sxLetterSpacing[value as SxTracking];
    if (value in sxFontWeight) return sxFontWeight[value as SxFontWeight];
    if (value in sxTypeface) return sxTypeface[value as SxTypeface];
    if (value in sxColor) return sxColor[value as SxColor];
  }

  // css-native or raw strings
  if (passthroughKeys.has(key)) return value;

  return undefined; // fallback: eliminate undeclared values
}


/**
 * @note Do not assume that anything just passes through here. Confirm that every key in
 * `SxProps` is resolved in the `resolveSxValue` helper.
 */
export const resolveSx = (
  sx?: SxProps,
  breakpoint?: BreakpointType,
): CSSProperties => {
  if (sx === undefined || sx === null) return {} as CSSProperties;
  if (breakpoint === undefined || breakpoint === null) return {} as CSSProperties;

  const styles: Record<string, SxCssValue> = {};

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
    else if (key === 'marginHorizontal') {
      styles.marginLeft = cssValue;
      styles.marginRight = cssValue;
    } else if (key === 'marginVertical') {
      styles.marginTop = cssValue;
      styles.marginBottom = cssValue;
    }
    
    // padding
    else if (key === 'padding') styles.padding = cssValue;
    else if (key === 'paddingHorizontal') {
      styles.paddingLeft = cssValue;
      styles.paddingRight = cssValue;
    } else if (key === 'paddingVertical') {
      styles.paddingTop = cssValue;
      styles.paddingBottom = cssValue;
    }
    
    // default: map key to css property directly
    else styles[key] = cssValue;
  }

  return styles as CSSProperties;
}
