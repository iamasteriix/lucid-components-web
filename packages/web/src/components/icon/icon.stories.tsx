import type { Meta, StoryObj } from "@storybook/react-vite";
import type { IconProps } from "./icon";
import { useState } from "react";
import * as Icons from "@lucid-ui/icons";
import { SxStyles } from "@/utils";
import { View } from "@/primitives";
import { Icon } from "./icon";
import { Text } from "../text/text";



type Story = StoryObj<IconProps>;


const IconsList = Object.entries(Icons);


export default {
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
    solid: { control: 'boolean', },
  },
} as Meta<IconProps>;


export const IconOverview: Story = {
  args: {
    as: Icons.Search,
    size: 'md',
    variant: 'duotone',
    solid: false,
  },
};


export const PlayGround = () => {
  const [variant, setVariant] = useState<'monochrome' | 'duotone'>('monochrome');
  const [isSolid, setIsSolid] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '3rem',
          padding: '.5rem',
          width: 'min-content',
          backgroundColor: 'var(--colors-bgElevated)',
          borderRadius: 'var(--shape-radiusXl)',
        }}
      >
        {
          [
            { key: 'monochrome', label: 'Monochrome' },
            { key: 'duotone', label: 'Duotone' },
          ].map(({ key, label }) => (
            <button
              key={ key }
              style={{
                padding: 'var(--spacing-space1) var(--spacing-space3)',
                backgroundColor: variant === key ? 'var(--colors-primarySubtle)' : 'inherit',
                border: 'none',
                borderRadius: 'var(--shape-radiusXl)',
                fontSize: 'var(--typography-textBase)',
                fontWeight: 'var(--typography-weightSemibold)',
                color: variant === key ? 'var(--colors-textInverse)' : 'var(--colors-textPrimary)',
              }}
              onClick={ () => setVariant(key as 'monochrome' | 'duotone') }
            >
              <p>{ label }</p>
            </button>
          ))
        }
        <button
          style={{
            marginLeft: 'var(--spacing-space4)',
            padding: 'var(--spacing-space1) var(--spacing-space3)',
            backgroundColor: isSolid ? 'var(--colors-primarySubtle)' : 'var(--colors-bgElevated)',
            border: 'none',
            borderRadius: 'var(--shape-radiusXl)',
            fontSize: 'var(--typography-textBase)',
            fontWeight: 'var(--typography-weightSemibold)',
            color: isSolid ? 'var(--colors-textInverse)' : 'var(--colors-textPrimary)',
          }}
          onClick={ () => setIsSolid(!isSolid) }
        >
          <p>Solid</p>
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(99px, 1fr))',
          gap: 16,
        }}
      >
        {
          IconsList.map(([name, Icon]) => (
            <View
              material='flat'
              tone='base'
              intensity='tonal'
              elevation='level-1'
              sx={ styles.display }
            >
              <Icon
                size='24px'
                fill={ ['var(--colors-primary)', 'var(--colors-accent)'] }
                variant={ variant }
                solid={ isSolid }
              />
              <Text
                align='center'
                size='xs'
                style={{ fontSize: 'var(--typography-textXs)' }}
              >{ name }</Text>
            </View>
          ))
        }
      </div>
    </div>
  );
}


const styles = SxStyles.create({
  display: {
    alignItems: 'center',
    borderRadius: 'lg',
  },
});
