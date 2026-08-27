import type { Meta, StoryObj } from '@storybook/react-vite';
import type { GlassVariant, ViewProps, ViewVariant } from './view.types';
import { SxStyles } from '@/api';
import { Text } from '@/components';
import { View, } from './view';


export default {
  title: 'Components/Views/GlassView',
  component: View,
} as Meta<ViewProps>;


export const GlassView: StoryObj<ViewVariant> = {
  name: 'View — Glass aesthetic',

  argTypes: {
    name: {
      options: ['glass'],
      control: false,
      table: { defaultValue: { summary: 'glass', }, },
    },
    tone: {
      options: ['neutral', 'accent'],
      control: 'select',
    },
    intensity: {
      options: ['faint', 'subtle', 'base', 'strong'],
      control: 'select',
    },
    elevation: {
      options: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
      control: 'select',
    },
    blur: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },

  args: {
    name: 'glass',
    tone: 'neutral',
    intensity: 'base',
    elevation: 'level-1',
    blur: 'md',
  },

  render: (args: GlassVariant) => (
    <View
      variant={ args }
      sx={ styles.box }
    >
      <Text>Skibidi dom yes</Text>
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
