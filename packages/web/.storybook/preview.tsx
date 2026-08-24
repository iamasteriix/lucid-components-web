import type { Preview } from "@storybook/react-vite";
import { create } from "storybook/theming";
import { tokens } from "@lucid-ui/core";
import { DocsContainer } from "./docs-container";
import "./styles.css";



const { colors, typography, } = tokens;

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
        brandUrl: '/design/',
        brandImage: '/logo-48x48.webp',
        brandTarget: '_self',
        colorPrimary: colors.primary,
        colorSecondary: colors.primarySubtle,
        appBg: colors.bgBase,
        appContentBg: colors.bgSurface,
        appHoverBg: colors.bgRaised,
        appPreviewBg: colors.primarySubtle,
        appBorderColor: colors.strokeDefault,
        appBorderRadius: 24,
        fontBase: typography.fontSans,
        fontCode: typography.fontMono,
        textColor: colors.textPrimary,
        textInverseColor: colors.textInverse,
        textMutedColor: colors.textSecondary,
        barTextColor: colors.textSecondary,
        barHoverColor: colors.textPrimary,
        barSelectedColor: colors.primaryStrong,
        barBg: colors.bgSubtle,
        buttonBg: colors.bgSubtle,
        buttonBorder: colors.bgSubtle,
        booleanBg: colors.bgOverlay,
        booleanSelectedBg: colors.bgSubtle,
        inputBg: colors.bgSurface,
        inputBorder: colors.strokeSubtle,
        inputTextColor: colors.textSecondary,
        inputBorderRadius: 24,
      }),
    },
    backgrounds: {
      options: {
        dark: { name: 'Moonsong', value: colors.bgBase, },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ['ref', 'as', 'style', 'className', 'children', 'data-testid', 'sx', 'variant', 'a11y',],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Getting Started', 'Foundations', '*'],
      },
    },
  },
};

export default preview;
