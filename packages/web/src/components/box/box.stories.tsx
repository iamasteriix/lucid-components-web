import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box as BoxBase } from "./box";



type StoryProps = ComponentProps<typeof BoxBase>;
type Story = StoryObj<StoryProps>;


const spacingOptions = ['space-1', 'space-2', 'space-3', 'space-4', 'space-5', 'space-6', 'space-8', 'space-10', 'space-12', 'space-16',];
const spanningOptions = ['auto', 'fill', 'half', 'third', 'quarter'];
const dimensionOptions = [...spacingOptions, ...spanningOptions];


const meta: Meta<StoryProps> = {
  title: 'Components/Layout/Box',
  component: BoxBase,
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['block', 'flex', 'grid', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'none'],
    },
    alignSelf: {
      control: 'select',
      options: ['auto', 'flex-start', 'flex-end', 'center', 'stretch'],
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch'],
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    },
    order: {
      control: { type: 'number', min: 1, },
    },
    flex: {
      control: 'radio',
      options: ['auto', 'none'],
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    flexWrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    flexGrow: { control: 'select', options: [0, 1], },
    flexShrink: { control: 'select', options: [0, 1], },
    flexBasis: { control: 'select', options: spanningOptions, },
    gridColumn: { control: 'text', },
    gridRow: { control: 'text', },
    gridArea: { control: 'text', },
    justifySelf: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
    },
    width: { control: 'select', options: dimensionOptions, },
    height: { control: 'select', options: dimensionOptions, },
    minWidth: { control: 'select', options: dimensionOptions, },
    maxWidth: { control: 'select', options: dimensionOptions, },
    margin: { control: 'select', options: spacingOptions },
    marginX: { control: 'select', options: spacingOptions },
    marginY: { control: 'select', options: spacingOptions },
    padding: { control: 'select', options: spacingOptions },
    paddingX: { control: 'select', options: spacingOptions },
    paddingY: { control: 'select', options: spacingOptions },
    surface: { control: 'select',
      options: ['base', 'surface', 'elevated', 'overlay'],
    },
    appearance: {
      control: 'radio',
      options: ['flat', 'glass'],
    },
    border: { control: 'select',
      options: ['subtle', 'default', 'strong'],
    },
    borderWidth: {
      control: 'select',
      options: ['none', 'thin', 'medium', 'bold'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    shadow: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};


export const Box: Story = {
  args: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    order: 1,
    flex: 'none',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    gridColumn: '',
    gridRow: '',
    gridArea: '',
    justifySelf: 'start',
    width: 'auto',
    height: 'space-16',
    minWidth: 'auto',
    maxWidth: 'auto',
    margin: 'space-1',
    marginX: 'space-1',
    marginY: 'space-1',
    padding: 'space-1',
    paddingX: 'space-1',
    paddingY: 'space-1',
    surface: 'base',
    appearance: 'flat',
    border: 'subtle',
    borderWidth: 'thin',
    borderRadius: 'lg',
    shadow: 'sm',
  },
};


export default meta;
