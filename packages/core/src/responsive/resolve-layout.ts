import type { Breakpoint, ResponsiveProp } from "./types";
import { breakpointList } from "./constants";



export const resolveLayoutStyles = <T>(
  prop: ResponsiveProp<T>,
  breakpoint?: Breakpoint,
): T | undefined => {
  if (prop === undefined || prop === null) return undefined;

  // primitive or array
  if (typeof prop !== 'object' || Array.isArray(prop)) {
    if (Array.isArray(prop)) {
      if (breakpoint === undefined) return undefined;
      const index = breakpointList.indexOf(breakpoint);
      return prop[Math.min(index, prop.length -1)] ?? prop[0];
    }
    return prop;
  }

  // search object map fallback
  if (breakpoint === undefined) return undefined;
  const record: Partial<Record<Breakpoint, T>> = prop;
  const len = breakpointList.length -1;
  for (let i = len; i >= 0; i--) {
    const key: Breakpoint = breakpointList[i];
    const value = record[key];
    if (value !== undefined) return value;
  }

  return undefined;
}
