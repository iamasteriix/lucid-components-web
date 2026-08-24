import type { Meta, StoryObj } from "@storybook/react-vite";
import type { IconProps, IconVariant } from "./icon.types";
import { Search } from "@lucid-ui/icons";
import { Icon } from "./icon";


export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta<IconProps>;


export const IconOverview: StoryObj<IconVariant> = {
  name: 'Icon — Search',

  argTypes: {
    name: {
      options: ['monochrome', 'duotone'],
      control: 'select',
    },
    size: {
      options: ['xsm', 'sm', 'md', 'lg'],
      control: 'select',
    },
    solid: { control: 'boolean', },
  },

  args: {
    name: 'monochrome',
    size: 'md',
    solid: false,
  },

  render: (args: IconVariant) => (
    <Icon
      as={ Search }
      variant={ args }
    />
  ),
};
