import type { Preview } from "@storybook/react-vite";
import { create } from "storybook/theming";
import { designTokens, } from "@/theme";
import { DocsContainer } from "./docs-container";
import "../src/index.css";



const { colors, typography, } = designTokens;

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
        brandUrl: '/',
        brandImage: '/logo.ico',
        brandTarget: '_self',
        colorPrimary: colors.primary,
        colorSecondary: colors.primaryHover,
        appBg: colors.bgBase,
        appContentBg: colors.bgSurface,
        appHoverBg: colors.secondaryHover,
        appPreviewBg: colors.primarySubtle,
        appBorderColor: colors.strokeDefault,
        appBorderRadius: 24,
        fontBase: typography.fontSans,
        fontCode: typography.fontMono,
        textColor: colors.textPrimary,
        textInverseColor: colors.textInverse,
        textMutedColor: colors.textSecondary,
        barTextColor: colors.textPrimary,
        barHoverColor: colors.primaryHover,
        barSelectedColor: colors.primaryActive,
        barBg: colors.bgElevated,
        buttonBg: colors.primarySubtle,
        buttonBorder: colors.primarySubtle,
        booleanBg: colors.bgOverlay,
        booleanSelectedBg: colors.bgElevated,
        inputBg: colors.bgSurface,
        inputBorder: colors.strokeSubtle,
        inputTextColor: colors.textPrimary,
        inputBorderRadius: 24,
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
      exclude: ['ref', 'as', 'style', 'className', 'children', 'data-testid', 'sx'],
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
