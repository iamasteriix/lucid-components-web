import { Badge as BadgeBase } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';


type StoryProps = ComponentProps<typeof BadgeBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Badge',
  component: BadgeBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    variant: {
      options: ['primary', 'accent', 'ghost', 'success', 'warning', 'destructive', 'info'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    appearance: {
      options: ['filled', 'outlined', 'tonal'],
      control: 'select',
    },
    dot: { control: 'boolean', },
    children: { control: 'text', },
  },
}


export const Badge: Story = {
  args: {
    as: 'span',
    variant: 'primary',
    size: 'md',
    appearance: 'filled',
    dot: false,
    children: 'Label',
  }
};


export default meta;