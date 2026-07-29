import { BreakpointType, Breakpoints } from "./types";



export const defaultBreakpoints: Breakpoints = {
  compact: 480,
  medium: 640,
  regular: 768,
  large: 1024,
  extended: 1280,
  ultra: 1536,
  cinema: 1920,
};

export const breakpointList: BreakpointType[] = ['cinema', 'compact', 'extended', 'large', 'medium', 'regular', 'ultra'];

export const breakpointsSorted = breakpointList.map(breakpoint => ({ key: breakpoint, value: defaultBreakpoints[breakpoint], }))
  .sort((a, b) => a.value - b.value);
