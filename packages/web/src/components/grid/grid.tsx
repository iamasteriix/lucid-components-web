import type { CSSProperties } from "react";
import type { GridBodyProps, GridProps } from "./grid.types";
import { useLayoutEffect, useRef, useState } from "react";
import { View } from "@/primitives";
import { useResponsiveGrid } from "./grid.hooks";
import { computeGridLayout, } from "./grid-core";
import { GridSpan } from "./grid.slots";


const GridBody = ({
  placements,
  rows,
  columns,
  rowGap,
  columnGap,
  repeat,
}: GridBodyProps) => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [rowHeights, setRowHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    setRowHeights(rowRefs.current.map(element => {
      return element?.getBoundingClientRect().height ?? 0
    }));
  }, [placements, rows]);

  const spans = placements.filter(cell => (cell.colSpan > 1 || cell.rowSpan > 1));

  const assignSpanTop = (row: number) => (
    rowHeights.slice(0, row).reduce((sum, h) => sum +h, 0) + row *rowGap
  );

  const assignSpanHeight = (
    row: number,
    rowSpan: number
  ) => {
    const spanned = rowHeights.slice(row, row +rowSpan);
    return spanned.reduce((sum, h) => sum +h, 0) + Math.max(0, spanned.length -1) *rowGap;
  };

  return (
    <div style={{ ...styles.plane, rowGap, }}>
      {
        Array.from(
          { length: rows, },
          (_, row) => {
            const childrenRegular = placements.filter(cell => !(cell.colSpan > 1 || cell.rowSpan > 1) && cell.row === row);

            // 'fit' shrinks a row's basis denominator to just the cells it uses, instead of the full
            // effective number of columns. Trailing empty cells collapse.
            const rowCols = repeat === 'fit' ?
                Math.max(...(childrenRegular.map(child => child.col +1)), 1)
              : columns;

            const assignRef = (element: HTMLDivElement | null) => {
              rowRefs.current[row] = element;
            }

            return (
              <div
                key={ row.toString() }
                ref={ element => assignRef(element) }
                style={{ ...styles.row, columnGap, }}
              >
                {
                  Array.from(
                    { length: rowCols, },
                    (_, col) => {
                      const occupant = childrenRegular.find(child => child.col === col);
                      return (
                        <div
                          key={ row.toString() }
                          style={{
                            ...styles.cell,
                            flexBasis: `calc(${100 /rowCols}% - ${(columnGap *(rowCols -1)) /rowCols}px)`,
                            visibility: occupant ? 'visible' : 'hidden',
                          }}
                        >
                          { occupant?.child }
                        </div>
                      );
                  })
                }
              </div>
            );
        })
      }
      {
        spans.map((span, index) => (
          <div
            key={ index.toString() }
            style={{
              position: 'absolute',
              top: assignSpanTop(span.row),
              left: `calc(${span.col} * (100% - ${(columns -1) * columnGap}px) / ${columns} + ${span.col *columnGap}px)`,
              width: `calc(${span.colSpan} *(100% - ${(columns -1) *columnGap}px) / ${columns} + ${(span.colSpan -1) *columnGap}px)`,
              height: assignSpanHeight(span.row, span.rowSpan),
            }}
          >
            { span.child }
          </div>
        ))
      }
    </div>
  );
}


export const Grid = ({
  material = 'flat',
  columns = 1,
  sx = {
    gap: 0,
    columnGap: 0,
    rowGap: 0,
  },
  children,
}: GridProps) => {

  const { gap, columnGap, rowGap, ...sxRest } = sx;
  const shelf = useResponsiveGrid(
    columns,
    columnGap ?? gap,
    rowGap ?? gap
  );
  const plane = computeGridLayout(children, shelf.colNum);

  return (
    <View
      ref={ shelf.ref }
      material={ material }
      sx={ sxRest }
      data-component='grid'
    >
      <GridBody
        placements={ plane.placements }
        rows={ plane.rows }
        columns={ plane.columns }
        rowGap={ shelf.gapY }
        columnGap={ shelf.gapX }
        repeat={ shelf.repeat }
      />
    </View>
  );
}


/**
 * Assigns slot to namespace
 */
Grid.Span = GridSpan;


const styles: Record<string, CSSProperties> = {
  plane: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
  },
};
