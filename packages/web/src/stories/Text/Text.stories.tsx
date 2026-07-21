import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text as TextBase } from '@/components';



type StoryProps = ComponentProps<typeof TextBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Text',
  component: TextBase,
  tags: ['autodocs'],
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
      options: ['primary', 'secondary', 'disabled', 'inverse', 'inherit'],
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
};


export const Text: Story = {
  args: {
    font: 'sans',
    size: 'base',
    weight: 'regular',
    lineHeight: 'normal',
    color: 'inherit',
    align: 'start',
    textWrap: 'wrap',
    children: 'My style is ridiculous',
  },
};


export default meta;
