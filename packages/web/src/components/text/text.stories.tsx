import type { Meta, StoryObj } from '@storybook/react';
import type { TextProps } from './text.types'
import { Text } from './text';
import { View } from '@/primitives';
import { SxStyles } from '@/core';


type Story = StoryObj<TextProps>;


export default {
  title: 'Components/Text',
  component: Text,
} as Meta<TextProps>;


export const TextOverview: Story = {
  name: 'Text — Roles',
  render: (_: TextProps) => (
    <View variant={ variants.view.base }>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>hero-lg</Text>
        <Text variant={ variants.text.heroLg }>Vacuum</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>hero</Text>
        <Text variant={ variants.text.hero }>Woodju</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>section-xl</Text>
        <Text variant={ variants.text.sectionXl }>Up in the sky, they often talk about the ocean</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>section-lg</Text>
        <Text variant={ variants.text.sectionLg }>And the sunset</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>section</Text>
        <Text variant={ variants.text.section }>They talk about how beautiful it is to watch that huge ball of fire</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>title-lg</Text>
        <Text variant={ variants.text.titleLg }>How it melts as it descends into the waves</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>title</Text>
        <Text variant={ variants.text.title }>And the barely visible light, like from a candle, flickers deep</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>heading-lg</Text>
        <Text variant={ variants.text.headingLg }>inside somewhere</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>heading</Text>
        <Text variant={ variants.text.heading }>It is beautiful to watch that huge ball of fire</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>heading-sm</Text>
        <Text variant={ variants.text.headingSm }>How it melts as it descends into the waves</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>body-strong</Text>
        <Text variant={ variants.text.bodyStrong }>And the barely visible light, like from a candle, flickers deep</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>body</Text>
        <Text variant={ variants.text.body }>inside somewhere</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>caption-strong</Text>
        <Text variant={ variants.text.captionStrong }>5 437 691</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>caption</Text>
        <Text variant={ variants.text.caption }>Undiscovered</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>mouseprint</Text>
        <Text variant={ variants.text.mouseprint }>2:53</Text>
      </View>
      <View variant={ variants.view.segment }>
        <Text variant={ variants.text.supporting }>micro</Text>
        <Text variant={ variants.text.micro }>Sep 20, 2018</Text>
      </View>
    </View>
  ),
};


const variants = SxStyles.variants({
  view: {
    base: {
      name: 'flat',
    },
    segment: {
      name: 'flat',
    },
  },
  text: {
    supporting: {
      name: 'caption',
      typeface: 'mono',
      color: 'muted',
    },
    heroLg: { name: 'hero-lg', },
    hero: { name: 'hero', },
    sectionXl: { name: 'section-xl', },
    sectionLg: { name: 'section-lg', },
    section: { name: 'section', },
    title: { name: 'title', },
    titleLg: { name: 'title-lg', },
    headingLg: { name: 'heading-lg', },
    heading: { name: 'heading', },
    headingSm: { name: 'heading-sm', },
    body: { name: 'body', },
    bodyStrong: { name: 'body-strong', },
    caption: { name: 'caption', },
    captionStrong: { name: 'caption-strong', },
    mouseprint: { name: 'mouseprint', },
    micro: { name: 'micro', },
  },
});


// Nesting Text
export const TextNested: Story = {
  name: 'Text — Containers',
  render: (_: TextProps) => (
    <Text>
      <Text>What is yout favorite flower? </Text>
      <Text>(I wanna know)</Text>
    </Text>
  ),
}
