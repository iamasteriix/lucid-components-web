**Purpose and context:**
Build a cross‑platform UI library (web + native) with a single, identical API contract for every component. The library's primary goal is platform parity — not through abstraction layers, but through deliberate constraint: every component's prop surface, behavior, and styling semantics are identical across platforms. It is designed to be a reusable, drop-in package for future projects. The project is fundamentally based on a token‑driven design system powered by CSS variables on web and `StyleSheet` constants on native.

**Current state:**
Active work on the `View` component, particularly setting a foundation for responsive layout styling. Key decisions made in the most recent session:
- Responsive values handled via `resolveLayoutStyles` + `useDeviceBreakpoints`.  
- Isolated resolvers: `resolveSx` and `resolveSxValue` handle all prop‑to‑style mapping. 
- Token maps exist for spacing, fit, elevation, radius, stroke weight, intent, and stroke color.  
- Token maps are kept separate by concern (space, fit, radius, etc.) and composed in the resolver.
- `View` types, CSS module, and `sx` resolver (`resolveSx`, `resolveSxValue`) are complete.   
- CSS Modules for web (class‑based semantic props) + inline `style` for `sx` and overrides. 
- Semantic props: `material` (`flat`/`glass`), `tone`, `intensity`, `elevation`, `depth`, `sx`, and `style`.  
- Storybook stories cover all combinations and `sx` usage.   

**On the horizon:**
Tighten web `View` to match React Native `View`:
- Remove `as` prop → render only `div` (or `View`‑equivalent).  
- Restrict `display` to `'flex'` only (no `block`, `grid`, etc.).  
- Restrict children to `ReactElement | ReactElement[]` (no raw text).  
- Ensure all spacing/sizing tokens map to `StyleSheet`‑compatible values on native.  
- Validate that `sx` keys and values align with `View`’s supported props (no `grid`, no `position` beyond `relative`/`absolute`).

**Key learnings and principles:**
- Token‑first design: all styling flows through CSS variables and token maps; raw values are escapes, not defaults.  
- Zero layout logic in components → positioning is CSS‑only; no child scanning or DOM reordering.  
- Narrow semantic props + `sx` escape → `View` owns intent; `sx` owns token‑aware styling; `style` owns raw overrides.  
- Platform parity through constraint, not duplication → web `View` will be tightened to match native `View`.  
- Process: atomic steps, concision → every change is one file/function at a time; every response is 1 paragraph / ≤10 lines when possible. No one‑shotting, no fluff.

**Approach and patterns:**
- **Strictly procedural**: One step at a time — clarify types/API shape first, then component implementation, then CSS. No one-shotting full implementations
- **Concision**: No over-explaining; code snippets preferred over prose-heavy walkthroughs
- **Corrections are immediate**: Deviations from established conventions in real time and Chat is expected to carry those corrections forward
- **Handoff prompts**: A guided memory log is used to carry context across new chat sessions when switching workstreams

Enforced conventions:
- CSS modules ensure library styling stays local and non-overrideable
- BEM class composition over data-* attribute selectors in CSS
- `data-component` and `data-testid` on every root element
- Property ordering in CSS: position/layout → box model → typography → visual/decoration
- Token naming: `--spacing-space4`, `--colors-primary`, `--shape-radiusMd`, etc.

**Tools and resources:**
- Vite (library build)  
- Storybook 10 (CSF 3.0)  
- TypeScript  
- CSS Modules  
- `@lucid-ui/core` shared utilities (breakpoints, responsive helpers)