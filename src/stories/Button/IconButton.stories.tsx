import { IconButton as IconButtonBase } from "@/components";
import { Heart } from "@/assets";
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
    variant: {
      options: ['primary', 'accent', 'ghost', 'destructive'],
      control: 'select',
    },
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
    variant: 'primary',
    size: 'md',
    appearance: 'filled',
    disabled: false,
    loading: false,
    icon: <Heart/>,
    label: 'Label',
  }
};


export default meta;