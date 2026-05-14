import { IconButton as IconButtonBase } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';


type StoryProps = ComponentProps<typeof IconButtonBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: IconButtonBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    appearance: {
      options: ['elevated', 'filled', 'outlined', 'tonal'],
      control: 'select',
    },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    icon: { control: 'check', },
    label: { control: 'text', },
  },
}


export const IconButton: Story = {
  args: {
    as: 'button',
    size: 'md',
    appearance: 'filled',
    disabled: false,
    loading: false,
    icon: <span>←</span>,
    label: 'Label',
  }
};


export default meta;