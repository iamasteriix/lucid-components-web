import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "@/context";
import { designTokens } from "@/tokens";
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
        dark: { name: 'Moonsong', value: designTokens.colors.bgBase, },
      },
    },
  },
};

export default preview;