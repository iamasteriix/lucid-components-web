import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ViewProps } from './view.types';
import { SxStyles } from '@/core';
import { Text } from '@/components';
import { View, } from './view';


type Story = StoryObj<ViewProps>;


export default {
  title: 'Components/Layout/View',
  component: View,
} as Meta<ViewProps>;


export const ViewsLayered: Story = {
  name: 'View — Glass layered over base',
  render: (_: ViewProps) => (
    <View sx={ styles.base }>
      <View
        variant={ variants.view.veneer }
        sx={ styles.veneer }
      >
        <Text>Timbo is in the party</Text>
      </View>
    </View>
  ),
};


const variants = SxStyles.variants({
  view: {
    veneer: {
      name: 'glass',
      tone: 'neutral',
      intensity: 'subtle',
      elevation: 'level-1',
      blur: 'sm',
    },
  },
});

const styles = SxStyles.create({
  base: {
    justifyContent: 'center',
    width: 'fill',
    height: 'space-20',
    paddingHorizontal: 'space-8',
    backgroundColor: 'base',
    borderWidth: 'light',
    borderColor: 'subtle',
    borderRadius: 'xl',
  },
  veneer: {
    alignItems: 'center',
    width: 'half',
    marginHorizontal: 'auto',
    padding: 'space-3',
    borderRadius: '2xl',
  },
});
