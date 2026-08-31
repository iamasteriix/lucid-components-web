import type { StorybookConfig } from '@storybook/react-vite';


export default {
  framework: '@storybook/react-vite',
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  staticDirs: [
    '../public',
    '../assets',
  ],
  core: {
    allowedHosts: ['localhost'],
    disableTelemetry: true,
  },
  docs: {
    defaultName: 'Lucid Design',
    docsMode: true,
  },
} as StorybookConfig;
