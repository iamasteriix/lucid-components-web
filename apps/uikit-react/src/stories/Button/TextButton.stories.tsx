import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton as TextButtonBase } from "@/components";


type StoryProps = ComponentProps<typeof TextButtonBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: TextButtonBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    variant: {
      options: ['primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    label: { control: 'text', },
  },
}


export const TextButton: Story = {
  args: {
    as: 'button',
    variant: 'info',
    size: 'md',
    disabled: false,
    loading: false,
    label: 'Label'
  }
};


export default meta;