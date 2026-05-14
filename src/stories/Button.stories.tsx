import { Button } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';


type StoryProps = ComponentProps<typeof Button>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    variant: {
      options: ['primary', 'secondary', 'ghost', 'destructive'],
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
    textAlign: {
      options: ['left', 'center', 'right'],
      control: 'select',
    },
    fullWidth: { control: 'boolean', },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    leadingIcon: { control: 'boolean', },
    trailingIcon: { control: 'boolean', },
    children: { control: 'text', }
  },
}


export const Default: Story = {
  args: {
    as: 'button',
    variant: 'primary',
    size: 'md',
    appearance: 'filled',
    textAlign: 'center',
    fullWidth: false,
    disabled: false,
    loading: false,
    leadingIcon: <span>←</span>,
    trailingIcon: <span>→</span>,
    children: 'Label',
  }
};


export default meta;