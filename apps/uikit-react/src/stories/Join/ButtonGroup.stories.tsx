import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Join } from "@/components";


type StoryProps = ComponentProps<typeof Join>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Join',
  component: Join,
  tags: ['autodocs'],
  argTypes: {
    axis: {
      options: ['horizontal', 'vertical'],
      control: 'select',
    },
    gap: {
      options: ['none', 'small', 'wide'],
      control: 'select',
    },
  },
};

export default meta;

export const ButtonGroup: Story = {
  args: {
    as: 'div',
    axis: 'horizontal',
    gap: 'small',
  },

  render: args => {
    return (
      <Join { ...args }>
        <Button children='Action 1'/>
        <Button children='Action 2'/>
        <Button children='Action 3'/>
      </Join>
    );
  },
};