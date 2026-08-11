import type { ReactNode, Ref } from "react";
import type { ResponsiveProp } from "@lucid-ui/core";
import type { ViewProps, ViewPropsStrict } from "@/types";


export type ColumnRepeat = 'fill' | 'fit';

export type ResponsiveColType = {
  minWidth: number;
  repeat?: ColumnRepeat;
  maxNum?: number;
};

export type GridProps = ViewPropsStrict & {
  columns?: ResponsiveProp<number | ResponsiveColType>;
};

export type ResponsiveHookOptions = {
  colNum: number;
  gapX: number;
  gapY: number;
  repeat: ColumnRepeat;
  ref: Ref<HTMLDivElement>;
};

export type GridSpanProps = ViewProps & {
  rows: number;
  columns: number;
};

export type CellPlacement = {
  child: ReactNode;
  row: number;
  rowSpan: number;
  col: number;
  colSpan: number;
};

export type GridBodyProps = {
  placements: CellPlacement[],
  rows: number;
  columns: number;
  repeat: ColumnRepeat;
  rowGap: number;
  columnGap: number;
}
