import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from "react";
import { IconButton, TextField as TextFieldBase } from "@/components";
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
    onChange: { action: 'onChange', },
    onBlur:  { action: 'onBlur', },
    onFocus:  { action: 'onFocus', },
    onKeyDown: { action: 'onKeydown', },
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
    defaultValue: '',
    placeholder: 'Say something',
    message: 'This message will not self-destruct',
    type: 'text',
    inputMode: 'text',
    variant: 'neutral',
    size: 'md',
    appearance: 'outlined',
    autoComplete: 'off',
    disabled: false,
    required: false,
    readOnly: false,
    autoFocus: false,
    leadingNode: false,
    trailingNode: false,
  },

  render: args => {
    const [value, setValue] = useState('');

    return (
      <TextFieldBase
        { ...args }
        value={ value }
        onChange={ event => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
        leadingNode={ args.leadingNode && <Search/> }
        trailingNode={
          args.trailingNode &&
          <IconButton
            icon={ <CloseCircle bold/> }
            label='clear'
            size='sm'
            variant='primary'
            appearance='ghost'
            onClick={ () => setValue('') }
          />
        }
      />
    );
  }
};


export default meta;