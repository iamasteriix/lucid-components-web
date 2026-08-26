import type { BreakpointType } from "./types";
import { useLayoutEffect, useMemo, useState } from "react";
import { breakpointsSorted, } from "./constants";



const getCurrentBreakpoint = (width?: number): BreakpointType | undefined => {
  if (width === undefined) return undefined;

  let current: BreakpointType = 'cinema';
  let capacity = breakpointsSorted.length -1;
  for (let i = capacity; i >= 0; i--) {
    if (width >= breakpointsSorted[i].value) {
      current = breakpointsSorted[i].key;
      break;
    }
  }
  return current;
}


export const useMediaQuery = () => {
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

  return { breakpoint, };
}
