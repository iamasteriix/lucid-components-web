import type { SlotParams, SlotProps } from "@/types";
import { View } from "../view/view";



export const createSlot = <T extends Record<string, any> = {}> ({
  displayName = 'Slot',
  defaultSx,
  defaultStyle,
  useContext = () => ({}),
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
    const mergedSx = { order, ...defaultSx, ...sx, };
    const mergedStyle = { ...defaultStyle, ...style, };

    return (
      <View
        material='flat'
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
