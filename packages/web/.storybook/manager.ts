import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import { designTokens } from "../src/theme";


addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Lucid Design',
    brandUrl: 'https://developers.ninespace.app/design/',
    brandTarget: '_self',
    colorPrimary: designTokens.colors.textPrimary,
    colorSecondary: designTokens.colors.textSecondary,
    appBg: designTokens.colors.bgBase,
    appContentBg: designTokens.colors.bgSurface,
    appBorderColor: designTokens.colors.borderDefault,
    textColor: designTokens.colors.textPrimary,
    fontBase: designTokens.typography.fontSans,
    fontCode: designTokens.typography.fontMono,
  }),
  sidebar: { showRoots: true },
});
