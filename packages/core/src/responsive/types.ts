export type BreakpointType = 'compact' | 'medium' | 'regular' | 'large' | 'extended' | 'ultra' | 'cinema';

export type Breakpoints = Record<BreakpointType, number>;

export type BreakpointOptions <T> = Partial<Record<BreakpointType, T>>;

export type ResponsiveProp <T = string | number> = T | T[] | BreakpointOptions<T>;
