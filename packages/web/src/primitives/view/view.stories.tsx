import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ViewPropsStrict } from "@/types";
import { SxStyles } from "@/utils";
import { Text } from "@/components";
import { View, } from "./view";


type Story = StoryObj<ViewPropsStrict>;


export default {
  title: 'Components/Layout/View',
  component: View,
} as Meta<ViewPropsStrict>;


export const ViewsLayered: Story = {
  name: 'View — Glass layered over base',
  render: (_: ViewPropsStrict) => (
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
