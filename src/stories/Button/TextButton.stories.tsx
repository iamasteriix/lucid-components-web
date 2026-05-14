import { TextButton as TextButtonBase } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';


type StoryProps = ComponentProps<typeof TextButtonBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: TextButtonBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
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
    size: 'md',
    disabled: false,
    loading: false,
    label: 'Label'
  }
};


export default meta;