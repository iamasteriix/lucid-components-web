import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FlatVariant, GlassVariant, ViewProps, ViewVariant } from './view.types';
import { SxStyles } from '@/core';
import { Text } from '@/components';
import { View, } from './view';


export default {
  title: 'Components/Layout/View',
  component: View,
} as Meta<ViewProps>;


export const FlatView: StoryObj<FlatVariant> = {
  name: 'View — Flat aesthetic',

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
