import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button as ButtonBase } from "@/components";
import { ChevronRight, Plus } from "@/assets";


type StoryProps = ComponentProps<typeof ButtonBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: ButtonBase,
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
    appearance: {
      options: ['elevated', 'filled', 'outlined', 'tonal', 'ghost'],
      control: 'select',
    },
    textAlign: {
      options: ['left', 'center', 'right'],
      control: 'select',
    },
    label: { control: 'text', },
    fullWidth: { control: 'boolean', },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    leadingNode: { control: 'boolean', },
    trailingNode: { control: 'boolean', },
  },
}


export const Button: Story = {
  args: {
    as: 'button',
    variant: 'primary',
    size: 'md',
    appearance: 'filled',
    textAlign: 'center',
    label: 'Label',
    fullWidth: false,
    disabled: false,
    loading: false,
    leadingNode: false,
    trailingNode: false,
  },

  render: args => {
    return (
      <ButtonBase
        { ...args }
        leadingNode={ args.leadingNode && <Plus/> }
        trailingNode={ args.trailingNode && <ChevronRight/> }
      />
    );
  }
};


export default meta;