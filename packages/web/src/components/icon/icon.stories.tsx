import type { Meta, StoryObj } from "@storybook/react-vite";
import type { IconProps } from "./icon";
import { Search } from "@lucid-ui/icons";
import { Icon } from "./icon";



type Story = StoryObj<IconProps>;


const meta: Meta<IconProps> = {
  title: 'Components/Icon',
  component: Icon,
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


export const IconOverview: Story = {
  args: {
    as: Search,
    size: 'md',
    variant: 'monochrome',
    bold: false,
  },
};


export default meta;
