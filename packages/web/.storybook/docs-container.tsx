import type { DocsContainerProps } from "@storybook/addon-docs/blocks";
import { DocsContainer as DocsContainerBase } from "@storybook/addon-docs/blocks";
import { AppLayoutView } from "@/components";


export const DocsContainer = (props: DocsContainerProps) => (
  <AppLayoutView>
    <DocsContainerBase { ...props }/>
  </AppLayoutView>
);
