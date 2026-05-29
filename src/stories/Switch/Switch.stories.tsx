import { useState } from "react";
import { Switch as SwitchBase } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";


type StoryProps = ComponentProps<typeof SwitchBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Switch',
  component: SwitchBase,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed',  },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
};

export default meta;

export const Switch: Story = {
  args: {
    label: 'Toggle',
    size: 'md',
    disabled: false,
    defaultChecked: false,
  },

  render: args => {
    const [checked, setChecked] = useState(args.defaultChecked);

    return (
      <SwitchBase
        { ...args }
        checked={ checked }
        onChange={ next => {
          setChecked(next);
          args.onChange?.(next);
        }}
      />
    );
  },
};