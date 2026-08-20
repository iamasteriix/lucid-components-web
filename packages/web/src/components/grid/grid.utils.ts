import type { ReactNode } from "react";
import type { CellPlacement, GridSpanProps } from "./grid.types";
import { Children, isValidElement } from "react";
import { GridSpan } from "./grid.slots";


/**
 * Walks children in order and places them into the first free cell of a sparse occupancy grid that
 * is `effectiveCols` wide, matching CSS grid's default `auto-flow: row` packing. A `Grid.Span` occupies
 * a `columns x rows` footprint, while every other child occupies a single cell.
 * 
 * Note that the element's effective number of columns is the greater of its own base columns and the
 * widest `Grid.Spans`'s assigned column count.
 */
export const computeGridLayout = (
  children: ReactNode,
  baseColNum: number = 1,
) => {
  const childList = Children.toArray(children);

  // determine number of effective columns by walking the child nodes and accummulating the current
  // number, starting with the baseline number set by the parent grid
  const effectiveCols = childList.reduce(
    (
      numCols: number,
      child
    ) => {
      if (isValidElement(child) && child.type === GridSpan) {
        const { columns, } = child.props as GridSpanProps;
        return Math.max(numCols, columns);
      }
      return numCols;
    },
    baseColNum,
  );

  const occupied = new Set<string>();
  const placements: CellPlacement[] = [];
  let maxRow = -1;

  // walk rows to check if provided coordinates fit within effective column-space,
  // or whether the cells are occupied
  const canChildFit = (
    row: number,
    col: number,
    rowSpan: number,
    colSpan: number,
  ): boolean => {
    if ((col +colSpan) > effectiveCols) return false;
    for (let y = row; y < (row +rowSpan); y++) {
      for (let x = col; x < (col +colSpan); x++) {
        if (occupied.has(`${y},${x}`)) return false;
      }
    }
    return true;
  }

  // allocate top-left cell coordinate for assigned child
  const placeChild = (
    child: ReactNode,
    rowSpan: number,
    colSpan: number,
  ) => {
    let row = 0;
    while (true) {
      for (let col = 0; col <= effectiveCols; col++) {
        if (!canChildFit(row, col, rowSpan, colSpan)) continue;
        for (let y = row; y < (row +rowSpan); y++) {
          for (let x = col; x < (col +colSpan); x++) occupied.add(`${y},${x}`);
        }
        placements.push({ child, row, col, colSpan, rowSpan, });
        maxRow = Math.max(maxRow, (row +rowSpan -1)); // row numbers are zero-based
        return;
      }
      row++;
    }
  }

  // walk children in order and place each into the first free cell of a sparse
  // occupancy grid
  childList.forEach(child => {
    if (isValidElement(child) && child.type === GridSpan) {
      const { columns, rows, } = child.props as GridSpanProps;
      placeChild(
        child,
        Math.max(1, rows),
        Math.min(Math.max(1, columns), effectiveCols)
      );
    } else placeChild(child, 1, 1);
  });

  return {
    placements,
    rows: maxRow +1,
    columns: effectiveCols,
  };
}
