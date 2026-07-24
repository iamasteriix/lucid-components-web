import type { Preview } from "@storybook/react-vite";
import { designTokens, ThemeProvider } from "@/theme";
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
        pluto: { name: 'Pluto', value: designTokens.colors.bgBase, },
      },
    },
    controls: {
      exclude: ['ref', 'as', 'style', 'className', 'children', 'data-testid',]
    },
  },
};

export default preview;
