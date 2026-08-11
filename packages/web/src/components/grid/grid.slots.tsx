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
  columns = 1,
  rows = 1,
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
