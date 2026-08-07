import type { ReactElement, ReactNode } from "react";
import type { ResponsiveProp } from "@lucid-ui/core";
import type { ElementBaseProps, SxAlign, SxFit, SxGap, SxSpace, ViewProps, } from "@/types";
import { Children, isValidElement, useLayoutEffect, useRef, useState } from "react";
import { resolveBreakpointSx, useDeviceBreakpoints } from "@lucid-ui/core";
import { createSlot, View } from "@/primitives";



// —— Types ———————————————————————————————————————————————————————————————————

type ColRepeat = 'fill' | 'fit';

type ResponsiveColType = {
  minWidth: number;
  repeat?: ColRepeat;
  maxNum?: number;
};

type GridProps = {
  align?: ResponsiveProp<SxAlign>;
  justify?: ResponsiveProp<SxAlign>;
  columns?: ResponsiveProp<number | ResponsiveColType>;
  width?: ResponsiveProp<SxSpace | SxFit>;
  maxWidth?: ResponsiveProp<SxSpace | SxFit>;
  height?: ResponsiveProp<SxSpace | SxFit>;
  minHeight?: ResponsiveProp<SxSpace | SxFit>;
  gap?: ResponsiveProp<SxGap>;
  columnGap?: ResponsiveProp<SxGap>;
  rowGap?: ResponsiveProp<SxGap>;
} & ElementBaseProps
  & ViewProps;

type GridSpanProps = {
  columns: number;
  rows: number;
};

type Band =
  | {
      kind: 'default';
      items: ReactNode[];
    }
  | {
      kind: 'span';
      span: ReactElement<GridSpanProps>;
      implicit: ReactNode[];
      implicitCols: number;
    };



// —— Slot ————————————————————————————————————————————————————————————————————

const GridSpanSlot = createSlot<GridSpanProps> ({ displayName: 'Grid.Span', });

const GridSpan = ({ columns, rows, }: GridSpanProps) => (
  <GridSpanSlot
    columns={ columns }
    rows={ rows }
  />
);



// —— Helpers —————————————————————————————————————————————————————————————————



const buildBands = (
  children: ReactNode,
  baseColumns: number,
) => {
  const childList = Children.toArray(children);

  // iterate over children to determine number of effective columns
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
    baseColumns,
  );

  const bands: Band[] = [];
  let pool = childList;
  let buffer: ReactNode[] = [];
  
  const flush = () => {
    if (buffer.length) {
      bands.push({ kind: 'default', items: buffer, });
      buffer = [];
    }
  }

  // partition children into standard and child bands
  while (pool.length) {
    const head = pool.shift();
    if (isValidElement(head) && head.type === GridSpan) {
      flush();
      const { columns, rows, } = head.props as GridSpanProps;
      const implicitCols = Math.max(1, effectiveCols -columns);
      const capacity = implicitCols *rows;
      bands.push({
        kind: 'span',
        span: head as ReactElement<GridSpanProps>,
        implicit: pool.slice(0, capacity),
        implicitCols,
      });
      pool = pool.slice(capacity);
    } else buffer.push(head);
  }

  flush();

  return { bands, effectiveCols, };
}



/**
 * Chunks a flat array into sub-arrays of a target size
 */
const chunk = <T,> (
  list: T[],
  size: number,
): T[][] => (
  Array.from({ length: Math.ceil(list.length /size) }, (_, i) => (
    list.slice(i *size, i *size +size)
  ))
);



/**
 * Renders a single flex row with flexBasis-calculated column widths
 */
const renderRow = (
  items: ReactNode[],
  columns: number,
  gap: SxGap | undefined,
  key: string,
) => {
  return (
    <div
      key={ key }
      style={{ flexDirection: 'row', gap, }}
    >
      {
        items.map((item, itemIndex) => (
          <div
            key={ itemIndex.toString() }
            style={{ flexGrow: 1, flexBasis: `${100 /columns}%` }}
          >
            { item }
          </div>
        ))
      }
    </div>
  );
}



const renderBand = (
  band: Band,
  index: number,
  columns: number,
  repeat: ColRepeat,
  gap: SxGap | undefined,
) => {
  if (band.kind === 'default') {
    return chunk(band.items, columns).map((row, rowIndex) => (
      renderRow(
        row,
        repeat === 'fit' ? row.length : columns,
        gap,
        `${index}-${rowIndex}`,
      )
    ));
  }

  // span band rendering
  // span item on left, implicit side rows on right
  return (
    <div
      key={ index.toString() }
      style={{ flexDirection: 'row', gap, }}
    >
      <div style={{ flexGrow: band.implicitCols, flexBasis: 0, gap, }}>
        {
          chunk(band.implicit, band.implicitCols).map((row, rowIndex) => (
            renderRow(
              row,
              repeat === 'fit' ? row.length : band.implicitCols,
              gap,
              `${index}-${rowIndex}`,
            )
          ))
        }
      </div>
    </div>
  );
}



// —— Responsiveness hook —————————————————————————————————————————————————————

const useResponsiveCols = (
  columns: ResponsiveProp<number | ResponsiveColType>,
  gap: ResponsiveProp<SxGap> | undefined,
  columnGap: ResponsiveProp<SxGap> | undefined,
  rowGap: ResponsiveProp<SxGap> | undefined,
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { breakpoint, } = useDeviceBreakpoints();
  const [containerWidth, setContainerWidth] = useState(0);

  // resolve viewport breakpoints for columns and gaps
  const resolvedColumns = resolveBreakpointSx(columns, breakpoint) ?? 1;
  const gapX = resolveBreakpointSx(columnGap ?? gap, breakpoint) ?? 0;
  const gapY = resolveBreakpointSx(rowGap ?? gap, breakpoint) ?? 0;

  // observe container size when using auto-fit dynamic columns
  useLayoutEffect(() => {
    if (typeof resolvedColumns === 'number' || !ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
    }
  }, [resolvedColumns]);

  // return simple fixed column count
  if (typeof resolvedColumns === 'number') {
    return {
      cols: Math.max(1, resolvedColumns),
      gapX,
      gapY,
      repeat: 'fill' as const,
      ref,
    };
  }

  // calculate dynamic container width
  const {
    minWidth,
    maxNum = Infinity,
    repeat = 'fill',
  } = resolvedColumns;
  const cell = (containerWidth +gapX) /(minWidth +gapX);
  const fit = Math.max(1, cell);
  const cols = Math.min(fit, maxNum);

  return { cols, gapX, gapY, repeat, ref, };
};



// —— Component ———————————————————————————————————————————————————————————————

export const Grid = ({
  align, justify, width, maxWidth, height, minHeight, columnGap, rowGap, sx,
  material = 'flat',
  columns = 1,
  gap = 0,
  children,
  ...rest
}: GridProps) => {

  // calculate base columns and observe element resize
  const shelf = useResponsiveCols(columns, gap, columnGap, rowGap);

  // partition children into layout bands
  const { bands, effectiveCols, } = buildBands(children, shelf.cols);

  return (
    <View
      ref={ shelf.ref }
      material={ material }
      sx={{
        width, maxWidth, height, minHeight, gap, columnGap, rowGap,
        flexDirection: 'column',
        alignItems: align,
        justifyContent: justify,
        ...sx,
      }}
      data-component='grid'
      { ...rest }
    >
      {
        bands.map((band, index) => (
          renderBand(band, index, effectiveCols, shelf.repeat, shelf.gapX))
        )
      }
    </View>
  );
}

Grid.Span = GridSpan;
