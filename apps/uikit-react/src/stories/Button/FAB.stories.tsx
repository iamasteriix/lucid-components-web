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
      options: ['primary', 'surface'],
      control: 'select',
    },
    appearance: {
      options: ['default', 'mini', 'extended'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    label: { control: 'text', },
    disabled: { control: 'boolean', },
    loading: { control: 'boolean', },
    icon: { control: 'check', },
  },
}


export const FAB: Story = {
  args: {
    as: 'button',
    variant: 'surface',
    appearance: 'default',
    size: 'md',
    label: 'Label',
    disabled: false,
    loading: false,
    icon: <Plus/>,
  }
};


export default meta;