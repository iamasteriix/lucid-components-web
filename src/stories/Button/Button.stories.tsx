import { Button as ButtonBase } from "@/components";
import { ChevronRight, Plus } from "@/assets";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';


type StoryProps = ComponentProps<typeof ButtonBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: ButtonBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    variant: {
      options: ['primary', 'accent', 'ghost', 'error'],
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
    children: { control: 'text', },
  },
}


export const Button: Story = {
  args: {
    as: 'button',
    variant: 'primary',
    size: 'md',
    appearance: 'filled',
    textAlign: 'center',
    fullWidth: false,
    disabled: false,
    loading: false,
    leadingIcon: false,
    trailingIcon: false,
    children: 'Label',
  },

  render: args => {
    return (
      <ButtonBase
        { ...args }
        leadingIcon={ args.leadingIcon && <Plus/> }
        trailingIcon={ args.trailingIcon && <ChevronRight/> }
      />
    );
  }
};


export default meta;