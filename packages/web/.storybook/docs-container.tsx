import type { DocsContainerProps } from "@storybook/addon-docs/blocks";
import { DocsContainer as DocsContainerBase } from "@storybook/addon-docs/blocks";
import { ThemeProvider } from "@/theme";


export const DocsContainer = (props: DocsContainerProps) => (
  <ThemeProvider>
    <DocsContainerBase { ...props }/>
  </ThemeProvider>
);
