**Memory Log — UI Kit Project**

**1. Purpose and context**  
This project builds a React UI library with identical APIs for web and native, plus an accompanying icon library. The primary objective is to provide a single, predictable surface for consumers — importing `Button` from `@uikit/web` or `@uikit/native` should feel exactly the same. The implementation details are internal; the API contract is the only thing that matters. We start web-first and will port to native later.

**2. Current state**  
We have a functional web foundation. The `useDeviceBreakpoints` hook from `packages/core` is implemented and returns the current breakpoint and the type of device (`'mobile'`/`'desktop'`) The workspace also exports `resolveLayoutStyles` that returns a resolved value for the breakpoints in order. `Box` is fully built — it accepts responsive props for layout, sizing, spacing, and decoration via `Variant`/`Appearance` unions. Its types, implementation, Storybook stories, argTypes with descriptions, and an MDX narrative are all in place.

**3. On the horizon**  
We still need to build the native counterpart of `useDeviceBreakpoints` and `Box` using React Native's `Dimensions` and `useWindowDimensions`. After that, we'll write unit and integration tests with Jest and Testing Library for both platforms. A high-level README for the web package is pending, and we'll eventually deploy the static Storybook build as a public documentation site.

**4. Key learnings and principles**  
Decoration should be driven by `Variant`/`Appearance` unions and CSS modules, not inline styles. Responsive props must be pure — the hook should only resolve values, not make device assumptions. Spacing and sizing must be token-constrained to prevent the library from becoming a raw CSS abstraction. `marginX`/`marginY` and `paddingX`/`paddingY` should override their base counterparts, not add to them. `flexBasis` should accept `Span` values; `flex` should be limited to `'auto' | 'none'`; and `gridColumn`/`gridRow` should accept numbers, `Span` keywords, or custom strings.

**5. Approach and patterns**  
We always work in atomic, commitable steps — no one-shotting. Every decision is token-first: if it can be expressed as a theme token, it must be. Builds are platform-separated via `tsup` entry points. Documentation is authored in Storybook (autodocs from argTypes, plus MDX for narrative) and will be deployed as a static site. The API is designed to be identical across platforms, with platform-specific implementations hidden behind internal `.web` and `.native` files.

**6. Tools and resources**  
Vite for library bundling, Storybook v10 for development and documentation, tsup for building, TypeScript for type safety, and Jest + Testing Library for future tests. The theme system is powered by CSS variables injected via a `ThemeProvider`. The token set includes colors, typography, spacing, radii, shadows, and transitions — all consumed as CSS custom properties.
