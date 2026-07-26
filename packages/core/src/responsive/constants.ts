import { Breakpoint, Breakpoints } from "./types";



export const defaultBreakpoints: Breakpoints = {
  bp1: 480,
  bp2: 640,
  bp3: 768,
  bp4: 1024,
  bp5: 1280,
  bp6: 1536,
};

export const breakpointList: Breakpoint[] = ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6'];

export const breakpointsSorted = breakpointList.map(breakpoint => ({ key: breakpoint, value: defaultBreakpoints[breakpoint], }))
  .sort((a, b) => a.value - b.value);
