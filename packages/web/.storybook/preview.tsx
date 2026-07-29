import type { Preview } from "@storybook/react-vite";
import { create } from "storybook/theming";
import { designTokens, } from "@/theme";
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
        brandTitle: 'Lucid Design',
        brandImage: '/logo.ico',
        colorPrimary: designTokens.colors.textPrimary,
        colorSecondary: designTokens.colors.textSecondary,
        appBg: designTokens.colors.bgBase,
        appContentBg: designTokens.colors.bgSurface,
        appBorderColor: designTokens.colors.borderDefault,
        textColor: designTokens.colors.textPrimary,
        fontBase: designTokens.typography.fontSans,
        fontCode: designTokens.typography.fontMono,
      }),
    },
    backgrounds: {
      options: {
        dark: { name: 'Moonsong', value: designTokens.colors.bgBase, },
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
        order: ['Getting Started', '*'],
      },
    },
  },
};

export default preview;
