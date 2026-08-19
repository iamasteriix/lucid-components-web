## Purpose and context:
Build a cross‑platform UI library (web + native) with a single, identical API contract for every component. The library's primary goal is platform parity — not through abstraction layers, but through deliberate constraint: every component's prop surface, behavior, and styling semantics are identical across platforms. It is designed to be a reusable, drop-in package for future projects. The project is fundamentally based on a token‑driven design system powered by CSS variables on web and `StyleSheet` constants on native.

## Current state:
- `View` is fully tightened to match React Native's `View` (no `as`, flex‑only, `children` restricted, `a11y` prop, etc.)
- `createSlot` factory is implemented and ready
- `Grid` is implemented with `Grid.Span` (flex‑powered, no child scanning)
- Storybook stories exist for `Grid`
- `resolveSx` and responsive breakpoint utilities are functional
- Known issue: `borderWidthKeys` edge case in `resolveSx` needs cleanup

---

## On the horizon: 
- **Extensible material system** — replace hardcoded `'flat'` and `'glass'` union with a registry‑driven, plug‑in material architecture
- Clean up `resolveSx` (remove the `borderWidthKeys` hack)
- Polish `Grid` span calculation (make `span` a first‑class prop on `Grid.Span`)
- Add more slot‑based components (`Stack`, `Section`, `Container`) using `createSlot`

### Extensible Material System (next major milestone)

**Core principle:**  
Materials become plug‑ins, not hardcoded unions. Each material provides:
- Token overrides (CSS custom properties)
- CSS class names (BEM, applied to root element)
- Prop definitions (which props are valid for that material)

**Registry (`materials/registry.ts`):**
```ts
export type MaterialDefinition = {
  tokens: Partial<Tokens>;
  cssModule: Record<string, string>;
  propTypes?: Record<string, any>;
};
export const materialRegistry = new Map<string, MaterialDefinition>();
export function registerMaterial(name: string, def: MaterialDefinition) {...}
export function getMaterial(name: string) {...}
```

**`View` changes:**
- `material` becomes `string` (not union)
- `tone`, `intensity`, `depth` removed from `ViewProps` — they become material‑specific and are passed via `sx` or `style`
- `elevation` remains generic (maps to `--elevation-levelX`)
- `View` looks up material in registry and applies its CSS module + token overrides

**`ThemeProvider`:**
- Unchanged — accepts `theme` override; material tokens are just another override

**Adding a new material (e.g., neumorphic):**
1. Define token overrides
2. Write CSS module (BEM classes)
3. Register with `registerMaterial`

**Migration path:**  
Start with `'flat'` and `'glass'` registered. Replace union types with string. Deprecate old union gradually.

**Files added:**
| File | Purpose |
|------|---------|
| `materials/registry.ts` | Registry + registration API |
| `materials/types.ts` | `MaterialDefinition`, `MaterialName` |
| `materials/flat.ts` | Flat material definition |
| `materials/glass.ts` | Glass material definition |

**Files changed:**
| File | Change |
|------|--------|
| `View.tsx` | Replace union with `string`, remove material‑specific props |
| `types.ts` | Remove `FlatViewProps` / `GlassViewProps`, update `ViewProps` |

---

## Key learnings and principles:
- Token‑first design: all styling flows through CSS variables and token maps; raw values are escapes, not defaults.  
- Zero layout logic in components → positioning is CSS‑only; no child scanning or DOM reordering.  
- Platform parity through constraint, not duplication → web `View` is now identical to native `View`.  
- Accessibility is a first‑class citizen: single `a11y` prop with platform‑specific resolver.  
- `SxStyles.create` provides type‑safe, reusable style objects without runtime overhead.  
- Process: atomic steps, concision → every change is one file/function at a time; every response is 1 paragraph / ≤10 lines when possible. No one‑shotting, no fluff.

## Approach and patterns:
- **Strictly procedural**: One step at a time — clarify types/API shape first, then component implementation, then CSS.  
- **Concision**: No over‑explaining; code snippets preferred over prose‑heavy walkthroughs.  
- **Corrections are immediate**: Deviations from established conventions are corrected in real time.  
- **Handoff prompts**: A guided memory log carries context across new chat sessions.

### Enforced conventions:
- CSS modules ensure library styling stays local and non‑overrideable.  
- BEM class composition over `data-*` attribute selectors in CSS.  
- `data-component` and `data-testid` on every root element.  
- Property ordering in CSS: position/layout → box model → typography → visual/decoration.  
- Token naming: `--spacing-space4`, `--colors-primary`, `--shape-radiusMd`, etc.

## Tools and resources:
- Vite (library build)  
- Storybook 10 (CSF 3.0)  
- TypeScript  
- CSS Modules  
- `@uikit/core` shared utilities (breakpoints, responsive helpers, tokens)
