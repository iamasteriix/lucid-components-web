import { ThemeProvider } from "@/context";
import { defaultTokens } from "@/tokens";
import type { Preview } from "@storybook/react-vite";
import "../src/index.css";


const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={ defaultTokens }>
        <Story/>
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: defaultTokens.colors.bgSurface, },
      },
    },
  },
};

export default preview;