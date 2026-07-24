import type { Spacing, Spanning } from "@/components";
import { useResponsive } from "@skyline-uikit/core";
import { spacingMap, spanningMap } from "@/constants";



type SpacingOptions = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type ResolvedStylingOptions = Record<string, string | number | undefined>;



const resolveSpacing = (value?: Spacing | Spanning): string | undefined => {
  if (value === undefined) return value;
  return spacingMap[value as Spacing] ?? spanningMap[value as Spanning];
}



const mergeSpacing = (
  primary?: Spacing,
  horizontal?: Spacing,
  vertical?: Spacing
): SpacingOptions => {
  
  const result: SpacingOptions = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };
  
   if (primary) {
    const value = spacingMap[primary];
    result.top = value;
    result.right = value;
    result.bottom = value;
    result.left = value;
  }
  if (horizontal) {
    const value = spacingMap[horizontal];
    result.right = value;
    result.left = value;
  }
  if (vertical) {
    const value = spacingMap[vertical];
    result.top = value;
    result.bottom = value;
  }

  return result;
}



export const useResolveLayoutStyling = <T extends Record<string, any>>(props: T): ResolvedStylingOptions => {
  
  // resolve all responsive props
  const keys: string[] = Object.keys(props);
  const resolved: Record<string, any> = {};
  for (const key of keys) resolved[key] = useResponsive(props[key]).value;

  // built style object
  const styles: ResolvedStylingOptions = {};
  const resolvedAsList = Object.entries(resolved);

  for (const [key, value] of resolvedAsList) {
    if (value === undefined) continue;

    let isMarginResolved = false;
    let isPaddingResolved = false;

    switch (key) {
      // flex properties
      case 'flex':
        styles.flex = value === 'auto' ? '1' : '0';
        break;
      case 'flexBasis':
        styles.flexBasis = resolveSpacing(value);
        break;

      // grid properties
      case 'gridColumn':
        if (typeof value === 'number') styles.gridColumn = `span ${value}`;
        else if (typeof value === 'string' && value in spanningMap) styles.gridColumn = `span ${spanningMap[value as Spanning]}`;
        else styles.gridColumn = value;
        break;
      case 'gridRow':
        if (typeof value === 'number') styles.gridRow = `span ${value}`;
        else if (typeof value === 'string' && value in spanningMap) styles.gridRow = `span ${spanningMap[value as Spanning]}`;
        else styles.gridRow = value;
        break;

      // direct sizing keys
      case 'width':
      case 'height':
      case 'minWidth':
      case 'maxWidth':
        styles[key] = resolveSpacing(value);
        break;

      // margin
      // block scope braces to isolate `mergeSpacing` return values
      case 'margin':
      case 'marginX':
      case 'marginY': {
        if (isMarginResolved) continue;
        const { top, right, bottom, left } = mergeSpacing(resolved.margin, resolved.marginX, resolved.marginY);
        if (top) styles.marginTop = top;
        if (right) styles.marginRight = right;
        if (bottom) styles.marginBottom = bottom;
        if (left) styles.marginLeft = left;
        isMarginResolved = true;
        break;
      }
      
      // padding
      case 'padding':
      case 'paddingX':
      case 'paddingY': {
        if (isPaddingResolved) continue;
        const { top, right, bottom, left } = mergeSpacing(resolved.padding, resolved.paddingX, resolved.paddingY);
        if (top) styles.paddingTop = top;
        if (right) styles.paddingRight = right;
        if (bottom) styles.paddingBottom = bottom;
        if (left) styles.paddingLeft = left;
        isPaddingResolved = true;
        break;
      }
    }
  }

  return styles;
}
