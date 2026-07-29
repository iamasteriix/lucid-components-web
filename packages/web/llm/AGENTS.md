This document defines the tokens, rules, conventions, and boundaries of the project to provide a source of truth and a reliable reference contract as progress continues to scale. Treat them as binding unless specified otherwise. Updating this document is at the author's discretion.



## Design tokens

```ts
// src/theme/tokens.ts
// @see ./provider.tsx for how these are injected as CSS variables
const colorTokens = {
  primary: '#eeeeee',
  primaryHover: '#c9c9c9',
  primaryActive: '#a1a1a1',
  primarySubtle: '#787878',
  secondary: '#19242b',
  secondaryHover: '#22303a',
  secondaryActive: '#2a3c48',
  secondarySubtle: '#11181d',
  accent: '#30db12',
  accentHover: '#27b30e',
  accentActive: '#1e8a0b',
  accentSubtle: '#156108',
  neutral: '#6b7280',
  neutralHover: '#7d8590',
  neutralActive: '#4b5563',
  neutralSubtle: '#374151',
  bgBase: '#000000',
  bgSurface: '#111111',
  bgElevated: '#232323',
  bgOverlay: '#343434',
  textPrimary: '#eeeeee',
  textSecondary: '#9e9e9e',
  textDisabled: '#424242',
  textInverse: '#212121',
  borderSubtle: 'rgba(238, 238, 238, .12)',
  borderDefault: 'rgba(238, 238, 238, .17)',
  borderStrong: 'rgba(238, 238, 238, .27)',
  info: '#3b82f6',
  infoSubtle: '#1f447f',
  success: '#10b981',
  successSubtle: '#064530',
  warning: '#f59e0b',
  warningSubtle: '#7f5305',
  error: '#ef4444',
  errorSubtle: '#7a2222',
} as const;

// Font stacks, size scale, weights, and line heights
const typographyTokens = {
  fontSans: "'DM Sans', 'Inter', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",
  fontSerif: "'Lora', 'Georgia', serif",
  textXs: '.75rem',
  textSm: '.875rem',
  textBase: '1rem',
  textLg: '1.125rem',
  textXl: '1.25rem',
  text2xl: '1.5rem',
  text3xl: '1.875rem',
  text4xl: '2.25rem',
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightSemibold: '600',
  weightBold: '700',
  leadingTight: '1.25',
  leadingSnug: '1.375',
  leadingNormal: '1.5',
  leadingRelaxed: '1.625',
} as const;

// Distance around and between component and layout elements
const spacingTokens = {
  space0: '0px',
  space1: '.25rem',
  space2: '.5rem',
  space3: '.75rem',
  space4: '1rem',
  space5: '1.25rem',
  space6: '1.5rem',
  space8: '2rem',
  space10: '2.5rem',
  space12: '3rem',
  space16: '4rem',
  space18: '4.5rem',
  space20: '5rem',
  space24: '6rem',
  space28: '7rem',
  space32: '8rem',
  space36: '9rem',
} as const;

const shapeTokens = {
  radiusNone: '0px',
  radiusSm: '4px',
  radiusMd: '8px',
  radiusLg: '12px',
  radiusXl: '16px',
  radius2xl: '24px',
  radiusFull: '9999px',
  strokeLight: '.5px',
  strokeMedium: '1px',
  strokeSemiBold: '2px',
  strokeBold: '3px',
} as const;

// Elevation scale for depth and layering
const elevationTokens = {
  shadowSm: '0 1px 4px rgba(52, 52, 52, .27)',
  shadowMd: '0 4px 12px rgba(52, 52, 52, .36)',
  shadowLg: '0 12px 32px rgba(52, 52, 52, .45)',
  level0: 0,
  level1: 10,
  level2: 20,
  level3: 30,
  level4: 60,
  level5: 90,
} as const;

// Duration and easing presets for consistent motion
const motionTokens = {
  durationFast: '100ms',
  durationBase: '180ms',
  durationSlow: '320ms',
  easingDefault: 'cubic-bezier(.4, 0, .2, 1)',
  easingBounce: 'cubic-bezier(.34, 1.56, .64, 1)',
} as const;

// Transluscent surfaces meant to sit over bgBase/bgSurface, combined with backdrop-filter, blur, and saturate
const glassTokens = {
  neutralFaint: 'rgba(238, 238, 238, .03)',
  neutralSubtle: 'rgba(238, 238, 238, .06)',
  neutralDefault: 'rgba(238, 238, 238, .09)',
  neutralStrong: 'rgba(238, 238, 238, .12)',
  accentFaint: 'rgba(48, 219, 18, .03)',
  accentSubtle: 'rgba(48, 219, 18, .06)',
  accentDefault: 'rgba(48, 219, 18, .09)',
  accentStrong: 'rgba(48, 219, 18, .12)',
  border: 'rgba(238, 238, 238, .18)',
  borderTop: 'rgba(238, 238, 238, .36)',
  borderInner: 'rgba(18, 18, 18, .3)',
  blurSm: '9px',
  blurMd: '18px',
  blurLg: '27px',
  saturate: '162%',
  shadowSm: '0 3px 18px rgba(0, 0, 0, .36), inset 0 1px 0 rgba(238, 238, 238, .09)',
  shadowMd: '0 9px 36px rgba(0, 0, 0, .45), inset 0 1px 0 rgba(238, 238, 238, .12)',
  shadowLg: '0 18px 45px rgba(0, 0, 0, .54), inset 0 1px 0 rgba(238, 238, 238, .18)',
};

// Pass a partial override to ThemeProvider to customize
export const designTokens = {
  colors: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  shape: shapeTokens,
  elevation: elevationTokens,
  motion: motionTokens,
  glass: glassTokens,
} as const;
```
---



## Base component types

```ts
// src/types/index.ts
type SpaceType = 'space-0' | 'space-1' | 'space-2' | 'space-3' | 'space-4' | 'space-5' | 'space-6' | 'space-8' | 'space-10' | 'space-12' | 'space-16' | 'space-18' | 'space-20' | 'space-24' | 'space-28' | 'space-32' | 'space-36';
type FitType = 'auto' | 'fill' | 'half' | 'third' | 'quarter';
type IntentType = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
type AppearanceType = 'filled' | 'outlined' | 'tonal' | 'elevated' | 'ghost';
export type TagBaseProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
};
export type AsProp<C extends ElementType> = { as?: C; };
export type PropsWithAs<C extends ElementType, P extends object = object> =
  P &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof P | 'as'>;
export type ResponsiveProp<T = string | number> = T[] | { [breakpoint: string]: T };
```
---



## Core Responsive types

```ts
// packages/core/src/responsive/types.ts
export type BreakpointType = 'compact' | 'medium' | 'regular' | 'large' | 'extended' | 'ultra' | 'cinema';
export type Breakpoints = Record<BreakpointType, number>;
export type BreakpointOptions <T> = Partial<Record<BreakpointType, T>>;
export type ResponsiveProp <T = string | number> = T | T[] | BreakpointOptions<T>;
```



## CSS conventions

### Property ordering (outside-in):
1. Position & layout — `position`, `top/right/bottom/left`, `z-index`, `display`, `flex`, `align-items`, `justify-content`, `gap`
2. Box model — `width`, `height`, `min/max-width/height`, `margin`, `padding`, `border`, `border-radius`, `overflow`
3. Typography — `font-family`, `font-size`, `font-weight`, `line-height`, `white-space`, `text-align`, `color`
4. Visual / decoration — `background-color`, `box-shadow`, `opacity`, `cursor`, `user-select`, `transition`, `animation`
**Other rules:**
- BEM class composition preferred
- CSS custom properties only — no hardcoded values
- Token naming: `--spacing-space4`, `--colors-primary`, `--radii-radiusMd`, `--typography-textSm`, `--transitions-durationFast`, `--transitions-easingDefault`

### Hover/active patterns — two systems:
- `primary`, `secondary`, `accent`, `neutral` → explicit `*Hover` / `*Active` tokens
- `info`, `success`, `warning`, `error` → `filter: brightness(115%)` hover, `filter: brightness(90%)` active

### `outlined` and `ghost` hover/active:
```css
:hover  { background-color: color-mix(in srgb, currentColor 8%, transparent); }
:active { background-color: color-mix(in srgb, currentColor 16%, transparent); }
```

### `tonal` hover/active (for `primary`, `secondary`, `accent`, `neutral`):
```css
:hover  { background-color: color-mix(in srgb, var(--colors-{variant}Subtle) 80%, var(--colors-{variant})); }
:active { background-color: color-mix(in srgb, var(--colors-{variant}Subtle) 60%, var(--colors-{variant})); }
```

### `elevated` hover/active:
```css
:hover  { background-color: color-mix(in srgb, currentColor 8%, transparent); box-shadow: var(--shadows-shadowLg); }
:active { background-color: color-mix(in srgb, currentColor 16%, transparent); box-shadow: var(--shadows-shadowSm); }
```
---



## Layout system

- **One engine, many thin presets.** All layout behavior is CSS-driven through a single prop-to-CSS mapping layer owned by `Box`. Every other layout primitive (`Grid`, `Stack`, `Container`, `Section`) is a preset over `Box` — different defaults and a narrowed prop surface, not a separate implementation.
- **Zero layout logic in components.** No child-scanning, no DOM reordering, no runtime measurement, no "if child is X do Y" branching. All positioning is expressed as CSS properties (`order`, `grid-column`, `align-self`, `flex-grow`, etc.) that the browser resolves.
- **Context-free vs. context-aware is the only real dividing line.** A prop is safe to fold into `Box` if it's a direct, no-op-if-irrelevant CSS mapping. A prop requires a real, separate component only if it must read something from a parent's internal state (eg. total column count, named grid areas, auto-placement).
- **Composition (Slot) and positioning (Box family) are orthogonal.** Slots answer "where does this child go, and what does it inherit." Box/Grid/Stack answer "how does this child behave once placed." Never blend the two responsibilities into one component.


### 1. Box
This component has no opinionated defaults; it is the raw material every preset below is built from. Any child-positioning prop is valid here as long as it's a pure CSS mapping that no-ops harmlessly when the parent isn't the relevant container type. Do not add props to `Box` that require reading parent context — that would be the signal to build a dedicated context-aware component not retrofitted into `Box`.
**Owns:**
- All spacing props (margin/padding scale, gap)
- All sizing props (width/height, min/max)
- `display` (with no default — raw)
- Flex-child props: `alignSelf`, `order`
- Grid-child props: `span` (→ `grid-column: span n`), `order`
- Responsive value support (array/object syntax resolved to breakpoints)

### 2. Grid
`Grid` is a two-dimensional layout preset over `Box` that owns a narrow prop surface (`columns`, `rows`, `areas`, `gap`).

### 3. Stack
A one-dimensional layout preset over `Box` that owns `direction`, `gap`, `align`, `justify`, `wrap`.

### 4. Section
`Box` with opinionated spacing (`padding-block`) that provides consistent rhythm between large page regions. It sits at the page-shell level and composes into `Layout`; it is not a general-purpose primitive.

### 5. Container
`Container` is a thin preset over `Box` with max-width clamping, responsive padding, and horizontal auto-centering as the default behavior. It sits at the page-shell level and composes into `Layout`, alongside `Section`.

### 6. Layout
Top-level page-assembly composition of `Container`, `Section`, `Grid`, and `Stack` arranged into a coherent page shell. It does not introduce its own CSS-prop logic or mapping layer.

### 7. Slot interface
Injection point that provides structure about what child belongs to, and what can it inhereit from, what parent. It consists of:
- **internal `createSlot(options)` factory** that defines slot logic for all specialized and generic slots across the system. It **takes** default styles for the slot (eg. fixed icon dimensions, color token), and an optional context hook for inheriting values from the parent component (size, color, spacing tokens) and **returns** a slot component to be exposed as a static property on the parent (e.g. `Button.Icon`). Every specialized or generic slot in the system must be produced by `createSlot`, not authored as a bespoke one-off component, so that the consumer-facing mental model stays identical across the entire system.
- **consumer-facing slot instances** (eg. `Button.Icon`, `Button.Slot`, `TextField.Leading`, `Card.Footer`). Specialized slots (eg. `Button.Icon`) carry content-specific defaults (icon sizing/color) and may accept a narrow prop like `position` (`leading`/`trailing`) that maps purely to CSS `order` (`-1`/`1`), never to DOM reordering or child-scanning. Generic slots (e.g. `Button.Slot`) share the same positioning mechanics (same parent container, same `order`-based placement) but carry no content-type assumptions — used for arbitrary children (badges, spinners, custom nodes) that don't fit a specialized slot. Parent components do no scanning, inspection, or carry knowledge of slot contents, and instead provide modifiers like `gaps`. The only permitted 'logic' in a slot instance is context read for token inheritance that is treated as equivalent to CSS custom-property inheritance, not as layout logic.
