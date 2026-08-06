import {
  Children, isValidElement, useLayoutEffect, useRef, useState,
  type ReactElement, type ReactNode,
} from "react";
import type { ElementBaseProps, SxAlign, SxFit, SxSpace, ViewMaterial } from "@/types";
import { createSlot, View } from "@/primitives";

type ResponsiveColType = {
  minWidth: number;
  repeat?: 'fill' | 'fit';
  maxNum?: number;
};

type GridProps = ElementBaseProps & {
  material?: ViewMaterial;
  align?: SxAlign;
  justify?: SxAlign;
  columns?: number | ResponsiveColType;
  width?: SxSpace | SxFit;
  maxWidth?: SxSpace | SxFit;
  height?: SxSpace | SxFit;
  minHeight?: SxSpace | SxFit;
  gap?: SxSpace;
  columnGap?: SxSpace;
  rowGap?: SxSpace;
};

type GridSpanProps = { x: number; y: number };

// --- Grid.Span -------------------------------------------------------------

const GridSpanSlot = createSlot<GridSpanProps>({ displayName: 'Grid.Span' });

const GridSpan = ({ x, y, ...rest }: GridSpanProps & Record<string, any>) => (
  <GridSpanSlot x={ x } y={ y } { ...rest } />
);

// --- responsive column resolution ------------------------------------------

const useResponsiveCols = (columns: number | ResponsiveColType, gap = 0) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof columns === 'number' || !ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, [columns]);

  if (typeof columns === 'number') return { cols: columns, repeat: 'fill' as const, ref };

  const { minWidth, maxNum = Infinity, repeat = 'fill' } = columns;
  const fit = Math.max(1, Math.floor((containerWidth + gap) / (minWidth + gap)));
  return { cols: Math.min(fit, maxNum), repeat, ref };
};

// --- band computation --------------------------------------------------------

type Band =
  | { kind: 'default'; items: ReactNode[] }
  | { kind: 'span'; span: ReactElement<GridSpanProps>; implicit: ReactNode[]; implicitCols: number };

const buildBands = (children: ReactNode, baseCols: number) => {
  const childArr = Children.toArray(children);

  const effCols = childArr.reduce((max, c) =>
    isValidElement(c) && c.type === GridSpan ? Math.max(max, (c.props as GridSpanProps).x) : max,
    baseCols);

  const bands: Band[] = [];
  let pool = childArr;
  let buffer: ReactNode[] = [];
  const flush = () => { if (buffer.length) bands.push({ kind: 'default', items: buffer }); buffer = []; };

  while (pool.length) {
    const [head, ...rest] = pool;
    if (isValidElement(head) && head.type === GridSpan) {
      flush();
      const { x: x1, y: y1 } = head.props as GridSpanProps;
      const implicitCols = effCols - x1;
      const capacity = implicitCols * y1;
      bands.push({ kind: 'span', span: head as ReactElement<GridSpanProps>, implicit: rest.slice(0, capacity), implicitCols });
      pool = rest.slice(capacity);
    } else {
      buffer.push(head);
      pool = rest;
    }
  }
  flush();

  return { bands, effCols };
};

// --- rendering ---------------------------------------------------------------

const chunk = <T,>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const renderRow = (items: ReactNode[], cols: number, gap: SxSpace | undefined, key: string) => (
  <View key={ key } sx={{ flexDirection: 'row', gap }}>
    { items.map((item, i) => (
      <View key={ i } sx={{ flexGrow: 1, flexBasis: `${100 / cols}%` }}>{ item }</View>
    )) }
  </View>
);

const renderBand = (band: Band, bi: number, cols: number, repeat: 'fill' | 'fit', gap: SxSpace | undefined) => {
  if (band.kind === 'default') {
    return chunk(band.items, cols).map((row, ri) =>
      renderRow(row, repeat === 'fit' ? row.length : cols, gap, `${bi}-${ri}`));
  }
  return (
    <View key={ bi } sx={{ flexDirection: 'row', gap }}>
      <View sx={{ flexGrow: band.span.props.x, flexBasis: 0 }}>{ band.span }</View>
      <View sx={{ flexGrow: band.implicitCols, flexBasis: 0, gap }}>
        { chunk(band.implicit, band.implicitCols).map((row, ri) =>
          renderRow(row, repeat === 'fit' ? row.length : band.implicitCols, gap, `${bi}-i${ri}`)) }
      </View>
    </View>
  );
};

// --- Grid ----------------------------------------------------------------

export const Grid = ({
  material = 'flat',
  align,
  justify,
  columns = 1,
  width,
  maxWidth,
  height,
  minHeight,
  gap,
  columnGap,
  rowGap,
  sx,
  style,
  a11y,
  children,
  testID,
  ...rest
}: GridProps) => {
  const { cols: baseCols, repeat, ref } = useResponsiveCols(columns, typeof columnGap === 'number' ? columnGap : (typeof gap === 'number' ? gap : 0));
  const { bands, effCols } = buildBands(children, baseCols);

  return (
    <View
      ref={ ref }
      material={ material }
      sx={{
        flexDirection: 'column',
        alignItems: align,
        justifyContent: justify,
        width,
        maxWidth,
        height,
        minHeight,
        gap,
        columnGap,
        rowGap,
        ...sx,
      }}
      style={ style }
      a11y={ a11y }
      testID={ testID }
      { ...rest }
    >
      { bands.map((band, bi) => renderBand(band, bi, effCols, repeat, gap ?? rowGap)) }
    </View>
  );
};

Grid.Span = GridSpan;
