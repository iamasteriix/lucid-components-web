import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SxProps } from "@/theme";
import type { ViewProps } from "./view";
import { View, } from "./view";
import { Text } from "../text/text";


type Story = StoryObj<ViewProps>;


const meta: Meta<ViewProps> = {
  title: 'Components/Layout/View',
  component: View,
};


export default meta;


export const ViewFlat: Story = {
  name: 'View — Flat',
  render: (_: ViewProps) => (
    <View
      material='flat'
      tone='base'
      intensity='filled'
      elevation='level-0'
      sx={ stylesBase }
    >
      <View
        material='glass'
        tone='neutral'
        intensity='default'
        elevation='level-2'
        sx={ stylesElevated }
      >
        <Text>Timbo</Text>
      </View>
    </View>
  ),
};


const stylesBase: SxProps = {
  justifyContent: 'center',
  width: 'fill',
  height: 'space-20',
  paddingX: 'space-8',
  borderWidth: 'light',
  borderColor: 'subtle',
  borderRadius: 'xl',
};

const stylesElevated: SxProps = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 'space-28',
  height: 'space-12',
  borderWidth: 'light',
  borderColor: 'subtle',
  borderRadius: 'full',
};
