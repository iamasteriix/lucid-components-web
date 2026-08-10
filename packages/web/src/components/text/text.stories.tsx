import type { Meta, StoryObj } from "@storybook/react";
import type { TextProps } from "./text"
import { Text } from "./text";


type Story = StoryObj<TextProps>;


export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    font: {
      control: 'select',
      options: ['sans', 'serif', 'mono'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
    lineHeight: {
      control: 'select',
      options: ['tight', 'snug', 'normal', 'relaxed'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'inverse', 'inherit'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    textWrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'balance', 'pretty', 'truncate'],
    },
  },
} as Meta<TextProps>;


export const TextOverview: Story = {
  name: 'Text — Overview',
  args: {
    font: 'sans',
    size: 'base',
    weight: 'regular',
    lineHeight: 'normal',
    color: 'primary',
    align: 'start',
    textWrap: 'wrap',
    children: 'My style is ridiculous',
  },
};
