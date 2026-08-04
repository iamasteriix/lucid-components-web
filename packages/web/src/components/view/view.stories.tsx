import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ViewProps } from "./view";
import { SxStyles } from "@/utils";
import { View, } from "./view";
import { Text } from "../text/text";


type Story = StoryObj<ViewProps>;


const meta: Meta<ViewProps> = {
  title: 'Components/Layout/View',
  component: View,
};


export default meta;


export const ViewsLayered: Story = {
  name: 'View - Glass layered over base',
  render: (_: ViewProps) => (
    <View
      material='flat'
      tone='base'
      intensity='filled'
      elevation='level-0'
      sx={ styles.base }
    >
      <View
        material='glass'
        tone='neutral'
        intensity='subtle'
        elevation='level-2'
        sx={ styles.elevated }
      >
        <Text>Timbo</Text>
      </View>
    </View>
  ),
};


const styles = SxStyles.create({
  base: {
    justifyContent: 'center',
    width: 'fill',
    height: 'space-20',
    paddingX: 'space-8',
    borderWidth: 'light',
    borderColor: 'subtle',
    borderRadius: 'xl',
  },
  elevated: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'space-28',
    height: 'space-12',
    borderWidth: 'light',
    borderColor: 'subtle',
    borderRadius: 'full',
  },
});
