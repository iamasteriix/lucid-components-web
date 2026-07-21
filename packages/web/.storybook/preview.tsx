import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "@/context";
import { designTokens } from "@/tokens";
import "../src/index.css";



const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider>
        <Story/>
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      options: {
        moonsong: { name: 'Moonsong', value: designTokens.colors.bgBase, },
      },
    },
    controls: {
      exclude: ['ref', 'as', 'style', 'className', 'children', 'data-testid',]
    },
  },
};

export default preview;
