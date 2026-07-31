import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import { designTokens } from "../src/theme";


const { colors, typography, } = designTokens;

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Lucid Design',
    brandUrl: 'https://developers.ninespace.app/design/',
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
    barHoverColor: colors.secondaryHover,
    barSelectedColor: colors.secondaryActive,
    barBg: colors.bgElevated,
    buttonBg: colors.primary,
    buttonBorder: colors.primary,
    booleanBg: colors.bgOverlay,
    booleanSelectedBg: colors.bgElevated,
    inputBg: colors.bgSurface,
    inputBorder: colors.strokeSubtle,
    inputTextColor: colors.textSecondary,
    inputBorderRadius: 24,
  }),
  sidebar: { showRoots: true },
});
