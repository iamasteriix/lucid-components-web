import type { Breakpoint, ResponsiveProp } from "../types";
import { useEffect, useMemo, useState } from "react";
import { breakpointList, breakpointsSorted, } from "../constants";



const getCurrentBreakpoint = (width: number): Breakpoint => {
  let current: Breakpoint = 'bp6';

  // be fun to see if I could rewrite this to use binary search
  let capacity = breakpointsSorted.length -1;
  for (let i = capacity; i >= 0; i--) {
    if (width >= breakpointsSorted[i].value) {
      current = breakpointsSorted[i].key;
      break;
    }
  }

  return current;
}



const resolveProp = <T>(
  prop: ResponsiveProp<T>,
  breakpoint: Breakpoint,
): T | undefined => {
  if (prop === undefined || prop === null) return undefined;

  // primitive or array
  if (typeof prop !== 'object' || Array.isArray(prop)) {
    if (Array.isArray(prop)) {
      const index = breakpointList.indexOf(breakpoint);
      return prop[Math.min(index, prop.length -1)] ?? prop[0];
    }
    return prop;
  }

  // search object map fallback
  const record: Partial<Record<Breakpoint, T>> = prop;
  const len = breakpointList.length -1;
  for (let i = len; i >= 0; i--) {
    const key: Breakpoint = breakpointList[i];
    const value = record[key];
    if (value !== undefined) return value;
  }

  return undefined;
}



export const useResponsive = <T>(prop: ResponsiveProp<T>) => {
  const [width, setWidth] = useState(1024);

  const breakpoint = useMemo(() => {
    return getCurrentBreakpoint(width);
  }, [width]);

  const value = useMemo(() => {
    return resolveProp(prop, breakpoint);
  }, [prop, breakpoint]);

  // no dependency because we only want the listener attach once when the component mounts
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const device = ['bp1', 'bp2', 'bp3'].includes(breakpoint) ? 'mobile' : 'default';

  return { value, breakpoint, device, };
}
