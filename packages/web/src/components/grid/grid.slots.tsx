import type { GridSpanProps } from "./grid.types";
import { createSlot } from "@/primitives";


const GridSpanSlot = createSlot<GridSpanProps>({
  displayName: 'Grid.Span',
  defaultSx: {
    width: 'fill',
    height: 'fill',
  },
});


export const GridSpan = ({
  rows = 1,
  columns = 1,
  ...rest
}: GridSpanProps) => {
  return (
    <GridSpanSlot
      rows={ rows }
      columns={ columns }
      { ...rest }
    />
  );
}
