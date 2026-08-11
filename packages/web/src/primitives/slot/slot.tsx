import type { SlotParams, SlotProps, } from "@/types";
import { View } from "../view/view";


export const createSlot = <T extends Record<string, any> = {}> ({
  displayName = 'Slot',
  defaultSx = {},
  defaultStyle = {},
  extraProps,
}: SlotParams) => {

  const SlotComponent = ({
    position,
    sx,
    style,
    children,
    ...rest
  }: SlotProps & T) => {

    const order = position === 'leading' ? -1 : position === 'trailing' ? 1 : undefined;
    const mergedSx = Object.assign({ order, }, defaultSx, sx);
    const mergedStyle = Object.assign(defaultStyle, style);

    return (
      <View
        sx={ mergedSx }
        style={ mergedStyle }
        { ...extraProps }
        { ...rest }
      >
        { children }
      </View>
    );
  }

  SlotComponent.displayName = displayName;

  return SlotComponent;
}
