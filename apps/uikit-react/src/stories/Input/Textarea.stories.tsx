import type { ComponentProps } from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from "react";
import { IconButton, Textarea as TextareaBase } from "@/components";
import { CloseCircle, PlusCircle } from "@/assets";


type StoryProps = ComponentProps<typeof TextareaBase>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Input',
  component: TextareaBase,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'text', },
    name: { control: 'text', },
    defaultValue: { control: 'text', },
    placeholder: { control: 'text', },
    autoComplete: { control: 'text', },
    disabled: { control: 'boolean', },
    required: { control: 'boolean', },
    readOnly: { control: 'boolean', },
    autoFocus: { control: 'boolean', },
    inputMode: {
      options: ['decimal', 'email', 'none', 'numeric', 'search', 'text', 'tel', 'url'],
      control: 'select',
    },
    minRows: {
      control: { type: 'number', min: 1, },
    },
    maxRows: {
      control: { type: 'number', min: 1, },
    },
    anchor: {
      options: ['top', 'bottom'],
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
    appearance: {
      options: ['filled', 'outlined', 'ghost'],
      control: 'select',
    },
    leadingNode: { control: 'boolean', },
    trailingNode: { control: 'boolean', },
    message: { control: 'text', },
  },
}


export const Textarea: Story = {
  args: {
    as: 'div',
    name: 'name',
    defaultValue: '',
    placeholder: 'Say something',
    message: 'This message will not self-destruct',
    inputMode: 'text',
    minRows: 1,
    maxRows: undefined,
    anchor: 'top',
    variant: 'neutral',
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
      <TextareaBase
        { ...args }
        value={ value }
        onChange={ event => {
          setValue(event.target.value);
          args.onChange?.(event);
        }}
        leadingNode={ args.leadingNode && <PlusCircle/> }
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