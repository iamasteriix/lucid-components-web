import { ThemeProvider } from "@/context";
import { designTokens } from "@/tokens";
import type { Preview } from "@storybook/react-vite";
import "../src/index.css";


const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={ designTokens }>
        <Story/>
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: designTokens.colors.bgSurface, },
      },
    },
  },
};

export default preview;