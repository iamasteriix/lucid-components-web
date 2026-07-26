export type Breakpoint = 'bp1' | 'bp2' | 'bp3' | 'bp4' | 'bp5' | 'bp6';

export type Breakpoints = Record<Breakpoint, number>;

export type ResponsiveProp <T> = 
  | T
  | T[]
  | Partial<Record<Breakpoint, T>>;
