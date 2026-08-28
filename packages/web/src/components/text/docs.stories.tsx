import type { Meta, StoryObj } from '@storybook/react';
import type { TextProps } from './types'
import { Text } from '.';
import { View } from '@/primitives';
import { SxStyles } from '@/api';


export default {
  title: 'Components/Text',
  component: Text,
} as Meta<TextProps>;


export const TextOverview: StoryObj<TextProps> = {
  name: 'Text — Roles',
  render: (_: TextProps) => {
    const items: {
      key: keyof typeof variants.text;
      variant: string;
      text: string;
    }[] = [
      {
        key: 'heroLg',
        variant: 'hero-lg',
        text: 'Vacuum',
      },
      {
        key: 'hero',
        variant: 'hero',
        text: 'Woodju',
      },
      {
        key: 'sectionXl',
        variant: 'section-xl',
        text: 'In the heavens, they often talk about the ocean',
      },
      {
        key: 'sectionLg',
        variant: 'section-lg',
        text: 'And the sunset',
      },
      {
        key: 'section',
        variant: 'section',
        text: 'They talk about how glorious it is to watch that massive ball of fire',
      },
      {
        key: 'titleLg',
        variant: 'title-lg',
        text: 'How it melts as it descends into the waves',
      },
      {
        key: 'title',
        variant: 'title',
        text: 'And the barely visible light, like from a candle,',
      },
      {
        key: 'headingLg',
        variant: 'heading-lg',
        text: 'continues to glow somewhere in the depths',
      },
      {
        key: 'heading',
        variant: 'heading',
        text: 'It is glorious to watch that massive ball of fire',
      },
      {
        key: 'headingSm',
        variant: 'heading-sm',
        text: 'How it melts as it descends into the waves',
      },
      {
        key: 'bodyStrong',
        variant: 'body-strong',
        text: 'And the barely visible light, like from a candle,',
      },
      {
        key: 'body',
        variant: 'body',
        text: 'continues to glow somewhere in the depths',
      },
      {
        key: 'captionStrong',
        variant: 'caption-strong',
        text: '5 437 691',
      },
      {
        key: 'caption',
        variant: 'caption',
        text: 'Undiscovered',
      },
      {
        key: 'mouseprint',
        variant: 'mouseprint',
        text: '2:53',
      },
      {
        key: 'micro',
        variant: 'micro',
        text: 'Sep 20, 2018',
      },
    ];

    return (
      <View variant={ variants.view.base }>
        {
          items.map(item => (
            <View
              key={ item.variant }
              variant={ variants.view.segment }
            >
              <Text variant={ variants.text.supporting }>{ item.variant }</Text>
              <Text variant={ variants.text[item.key] }>{ item.text }</Text>
            </View>
          ))
        }
      </View>
  )},
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
export const TextNested: StoryObj<TextProps> = {
  name: 'Text — Nesting',
  render: (_: TextProps) => (
    <Text>
      <Text>What is yout favorite flower? </Text>
      <Text>(I wanna know)</Text>
    </Text>
  ),
}
