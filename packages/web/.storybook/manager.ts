import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import { tokens } from "@lucid-ui/core";
import "./styles.css";


const { colors, typography, } = tokens;

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Lucid Design',
    brandUrl: '/design/',
    brandImage: '/logo-48x48.webp',
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
    barTextColor: colors.textSecondary,
    barHoverColor: colors.textPrimary,
    barSelectedColor: colors.primaryActive,
    barBg: colors.bgElevated,
    buttonBg: colors.bgElevated,
    buttonBorder: colors.bgElevated,
    booleanBg: colors.bgOverlay,
    booleanSelectedBg: colors.bgElevated,
    inputBg: colors.bgSurface,
    inputBorder: colors.strokeSubtle,
    inputTextColor: colors.textSecondary,
    inputBorderRadius: 24,
  }),
  sidebar: { showRoots: true },
});
