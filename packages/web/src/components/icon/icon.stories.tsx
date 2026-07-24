import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "@skyline-uikit/icons";
import { Icon as IconBase } from "./icon";



type StoryProps = ComponentProps<typeof IconBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Icon',
  component: IconBase,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xsm', 'sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['monochrome', 'duotone'],
    },
    bold: { control: 'boolean', },
  },
};


export const Icon: Story = {
  args: {
    as: Search,
    size: 'md',
    variant: 'monochrome',
    bold: false,
  },
};


export default meta;
