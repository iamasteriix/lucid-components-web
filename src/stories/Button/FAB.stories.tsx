import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FAB as FABBase } from "@/components";
import { Plus } from "@/assets";


type StoryProps = ComponentProps<typeof FABBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: FABBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    variant: {
      options: ['default', 'mini', 'extended'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    icon: { control: 'check', },
  },
}


export const FAB: Story = {
  args: {
    as: 'button',
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    icon: <Plus/>,
    label: 'Label',
  }
};


export default meta;