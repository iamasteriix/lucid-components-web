import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FlatVariant, ViewProps, } from './view.types';
import { SxStyles } from '@/api';
import { Text } from '@/components';
import { View, } from './view';


export default {
  title: 'Components/Views/View',
  component: View,
} as Meta<ViewProps>;


export const FlatView: StoryObj<FlatVariant> = {
  argTypes: {
    name: {
      options: ['flat'],
      control: false,
      table: { defaultValue: { summary: 'flat', }, },
    },
    fill: {
      options: ['base', 'surface', 'subtle', 'raised', 'overlay', 'floating'],
      control: 'select',
    },
    elevation: {
      options: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
      control: 'select',
    },
    shadow: {
      options: ['diffuse', 'directional', 'linear', 'edge', 'enclosed'],
      control: 'select',
    },
    focus: {
      options: ['accent', 'info', 'success', 'warning', 'error'],
      control: 'select',
    },
  },

  args: {
    name: 'flat',
    fill: 'surface',
  },

  render: (args: FlatVariant) => (
    <View
      variant={ args }
      sx={ styles.box }
    >
      <Text>My style is ridiculous</Text>
    </View>
  )  
};


const styles = SxStyles.create({
  box: {
    alignItems: 'center',
    width: 'half',
    marginHorizontal: 'auto',
    padding: 'space-3',
    borderRadius: '2xl',
  },
});
