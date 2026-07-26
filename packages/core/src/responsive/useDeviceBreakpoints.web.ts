import type { Breakpoint } from "./types";
import { useLayoutEffect, useMemo, useState } from "react";
import { breakpointsSorted, } from "./constants";



const getCurrentBreakpoint = (width?: number): Breakpoint | undefined => {
  if (width === undefined) return undefined;

  let current: Breakpoint = 'bp6';
  let capacity = breakpointsSorted.length -1;
  for (let i = capacity; i >= 0; i--) {
    if (width >= breakpointsSorted[i].value) {
      current = breakpointsSorted[i].key;
      break;
    }
  }
  return current;
}



export const useDeviceBreakpoints = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  // no dependency because we only want the listener attach once when the component mounts
  // we apply immediate pre-paint `setWidth(window.innerWidth)` to set the width before the browser paints
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    setWidth(window.innerWidth);

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const breakpoint = useMemo(() => {
    return getCurrentBreakpoint(width);
  }, [width]);

  const device = breakpoint && ['bp1', 'bp2', 'bp3'].includes(breakpoint) ? 'mobile' : 'desktop';

  return { breakpoint, device, };
}
