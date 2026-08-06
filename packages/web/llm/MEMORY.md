**Purpose and context:**
Build a cross‑platform UI library (web + native) with a single, identical API contract for every component. The library's primary goal is platform parity — not through abstraction layers, but through deliberate constraint: every component's prop surface, behavior, and styling semantics are identical across platforms. It is designed to be a reusable, drop-in package for future projects. The project is fundamentally based on a token‑driven design system powered by CSS variables on web and `StyleSheet` constants on native.

**Current state:**  
`View` is now fully tightened to match React Native's `View`:  
- Renders `<div>` only (no `as` prop).  
- `display: flex` hardcoded (no block, grid, or inline).  
- `children` restricted to `ReactElement | ReactElement[]` (no raw text).  
- Grid‑related props removed from `sx`.  
- `ref` passed as a regular prop (React 19 behavior).  
- `a11y` prop added as the single accessibility surface, with `resolveA11y` mapping to platform‑specific attributes.  
- `SxStyles.create` added as a type‑safe identity factory.  
- `Tokens` type widened to allow assignable values (mapped type over `as const`).  
- Storybook stories updated to reflect the tightened API.

**On the horizon:**  
- Build the slot API (`createSlot` factory) to support context‑aware child components.  
- Implement `Grid` as a separate, flex‑powered, position‑driven layout engine using slots (`Grid.Span`).  
- Maintain platform parity across both layout engines (`View`‑based presets and slot‑based `Grid`).

**Key learnings and principles:**  
- Token‑first design: all styling flows through CSS variables and token maps; raw values are escapes, not defaults.  
- Zero layout logic in components → positioning is CSS‑only; no child scanning or DOM reordering.  
- Platform parity through constraint, not duplication → web `View` is now identical to native `View`.  
- Accessibility is a first‑class citizen: single `a11y` prop with platform‑specific resolver.  
- `SxStyles.create` provides type‑safe, reusable style objects without runtime overhead.  
- Process: atomic steps, concision → every change is one file/function at a time; every response is 1 paragraph / ≤10 lines when possible. No one‑shotting, no fluff.

**Approach and patterns:**  
- **Strictly procedural**: One step at a time — clarify types/API shape first, then component implementation, then CSS.  
- **Concision**: No over‑explaining; code snippets preferred over prose‑heavy walkthroughs.  
- **Corrections are immediate**: Deviations from established conventions are corrected in real time.  
- **Handoff prompts**: A guided memory log carries context across new chat sessions.

Enforced conventions:  
- CSS modules ensure library styling stays local and non‑overrideable.  
- BEM class composition over `data-*` attribute selectors in CSS.  
- `data-component` and `data-testid` on every root element.  
- Property ordering in CSS: position/layout → box model → typography → visual/decoration.  
- Token naming: `--spacing-space4`, `--colors-primary`, `--shape-radiusMd`, etc.

**Tools and resources:**  
- Vite (library build)  
- Storybook 10 (CSF 3.0)  
- TypeScript  
- CSS Modules  
- `@uikit/core` shared utilities (breakpoints, responsive helpers, tokens)
