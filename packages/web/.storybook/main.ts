import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../public'],
  core: {
    allowedHosts: ['localhost'],
    disableTelemetry: true,
  },
  docs: {
    defaultName: 'Skyline Design',
    docsMode: true,
  },
};


export default config;