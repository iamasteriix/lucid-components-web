import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import { tokens } from "@lucid-ui/core";
import "./styles.css";


const { colors, shape, typography, } = tokens;

addons.setConfig({
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
    appBorderRadius: shape.radius2xl,
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
    inputBorderRadius: shape.radius2xl,
  }),
  sidebar: { showRoots: true },
});
