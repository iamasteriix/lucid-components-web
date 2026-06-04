import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Fieldset, Join, TextButton, TextField } from "@/components";


type StoryProps = ComponentProps<typeof Fieldset>;
type Story = StoryObj<StoryProps>;


const meta: Meta<StoryProps> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text', },
    caption: { control: 'text', },
    surface: {
      options: ['default', 'elevated', 'overlay'],
      control: 'select',
    },
    columns: {
      options: [1, 2, 3],
      control: 'select',
    },
    bordered: { control: 'boolean', },
    disabled: { control: 'boolean', },
  },
};

export default meta;

export const SigninForm: Story = {
  args: {
    legend: 'Sign in',
    caption: '',
    surface: 'default',
    columns: 1,
    bordered: false,
    disabled: false,
  },

  render: args => {    
    return (
      <Fieldset { ...args }>
        <TextField
          type='email'
          placeholder='me@email.com'
        />
        <TextField
          type='password'
          placeholder='Password'
        />
        <TextButton
          label='Forgot password?'
          size='sm'
        />
        <Join
          axis='vertical'
          gap='wide'
        >
          <Button
            fullWidth
            children='Next'
          />
          <TextButton
            label="Don't have an account?"
            size='sm'
          />
        </Join>
      </Fieldset>
    );
  },
};