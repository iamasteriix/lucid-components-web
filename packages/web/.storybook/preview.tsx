import type { Preview } from "@storybook/react-vite";
import { designTokens, } from "@/theme";
import { create } from "storybook/theming";
import { DocsContainer } from "./docs-container";
import "../src/index.css";



const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: 'dark', },
  },
  parameters: {
    docs: {
      container: DocsContainer,
      theme: create({
        base: 'dark',
        brandTitle: 'Skyline Design',
        colorPrimary: designTokens.colors.primary,
        appBg: designTokens.colors.bgBase,
      }),
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: designTokens.colors.bgBase, },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ['ref', 'as', 'style', 'className', 'children', 'data-testid',],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Getting Started', 'Design Tokens', '*'],
      },
    },
  },
};

export default preview;
