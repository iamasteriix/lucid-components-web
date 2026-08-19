import type { CSSProperties } from "react";
import type { LayoutProps, SxProps, } from "@/types";
import { View } from "../view/view";


type SlotParams <T = {}> = {
  displayName?: string;
  defaultSx?: SxProps;
  defaultStyle?: CSSProperties;
  useContext?: () => Record<string, any>; // optional hook to inherit values from parent context
  extraProps?: T;                         // props the slot accepts beyond the base
};

type SlotProps = LayoutProps & {
  position?: 'leading' | 'trailing';  // maps to order: -1 or 1
};


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
