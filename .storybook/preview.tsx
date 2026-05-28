import { ThemeProvider } from "../src/context";
import { defaultTokens } from "../src/tokens";
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
    layout: 'centered'
  },
};

export default preview;