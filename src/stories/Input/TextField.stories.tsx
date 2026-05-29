import { TextField as TextFieldBase } from "@/components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseCircle, Search } from "@/assets";


type StoryProps = ComponentProps<typeof TextFieldBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Input',
  component: TextFieldBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    name: { control: 'text', },
    value: { control: 'text', },
    defaultValue: { control: 'text', },
    placeholder: { control: 'text', },
    type: {
      options: ['email', 'number', 'search', 'text', 'tel', 'url'],
      control: 'select',
    },
    autoComplete: { control: 'text', },
    disabled: { control: 'boolean', },
    required: { control: 'boolean', },
    readOnly: { control: 'boolean', },
    autoFocus: { control: 'boolean', },
    inputMode: {
      options: ['decimal', 'email', 'none', 'numeric', 'search', 'text', 'tel', 'url'],
      control: 'select',
    },
    onChange: { action: 'changed', },
    onBlur:  { action: 'changed', },
    onFocus:  { action: 'changed', },
    onKeyDown: { action: 'changed', },
    variant: {
      options: ['neutral', 'success', 'warning', 'error', 'info'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    appearance: {
      options: ['filled', 'outlined', 'ghost'],
      control: 'select',
    },
    leadingNode: { control: 'boolean', },
    trailingNode: { control: 'boolean', },
    message: { control: 'text', },
  },
}


export const TextField: Story = {
  args: {
    as: 'div',
    name: 'name',
    value: '',
    defaultValue: '',
    placeholder: 'Say something',
    type: 'text',
    autoComplete: 'on',
    disabled: false,
    required: false,
    readOnly: false,
    autoFocus: false,
    inputMode: 'text',
    variant: 'neutral',
    size: 'md',
    appearance: 'outlined',
    leadingNode: false,
    trailingNode: false,
    message: 'This message will not self-destruct',
  },

  render: args => {
    return (
      <TextFieldBase
        { ...args }
        leadingIcon={ args.leadingIcon && <Search/> }
        trailingIcon={ args.trailingIcon && <CloseCircle/> }
      />
    );
  }
};


export default meta;