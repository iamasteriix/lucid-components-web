The `themes` fn should return a keyed record so any name works, with each override merged against `base` per-category — same shape as `resolveTheme`, but producing the whole named set at once, not just one theme.

```ts
type PartialThemeTokens = {
  [K in keyof ThemeTokensType]?: Partial<ThemeTokensType[K]>
};

const mergeTheme = (base: ThemeTokensType, override?: PartialThemeTokens): ThemeTokensType => ({
  colors:     { ...base.colors,     ...override?.colors },
  typography: { ...base.typography, ...override?.typography },
  spacing:    { ...base.spacing,    ...override?.spacing },
  shape:      { ...base.shape,      ...override?.shape },
  elevation:  { ...base.elevation,  ...override?.elevation },
  optical:    { ...base.optical,    ...override?.optical },
  motion:     { ...base.motion,     ...override?.motion },
});

themes: 
  const N extends readonly (PartialThemeTokens & { name: string })[]
>(base: ThemeTokensType, list: N = [] as unknown as N) => {
  const named = Object.fromEntries(
    list.map(({ name, ...partial }) => [name, mergeTheme(base, partial)])
  ) as { [K in N[number]['name']]: ThemeTokensType };
  return { base, ...named };
},
```

Call site — any names, arbitrary count:

```ts
const themes = SxStyles.themes(tokens, [
  { name: 'dark', colors: darkColors },
  { name: 'forest', colors: forestColors, typography: forestType },
]);
```

`themes.dark`, `themes.forest`, `themes.base` all exist and are type-checked — no fixed name set like `dark`/`night`/`forest`, since `N[number]['name']` infers whatever literal strings you pass. Provider's `setTheme` just needs a `keyof typeof themes` now.

---
Yes — here's `provider.tsx` wired to a named theme map plus a pluggable storage adapter:`themes` now comes in as a prop (output of `SxStyles.themes(...)`), merge logic moved there so the provider just indexes by name. `hydrated` flag guards flash-of-wrong-theme if you want to delay render until storage resolves.

```tsx
import type { CSSProperties, ReactNode } from 'react';
import type { ThemeTokensType } from '@lucid-ui/core';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { ThemeContext } from './context';


export type ThemeStorageAdapter = {
  get: () => string | null | Promise<string | null>;
  set: (name: string) => void | Promise<void>;
};

const defaultWebAdapter: ThemeStorageAdapter = {
  get: () => (typeof window !== 'undefined' ? window.localStorage.getItem('lucid-theme') : null),
  set: (name) => { if (typeof window !== 'undefined') window.localStorage.setItem('lucid-theme', name); },
};

type ThemeProviderProps<T extends Record<string, ThemeTokensType>> = {
  themes: T;
  defaultTheme?: keyof T;
  storageAdapter?: ThemeStorageAdapter;
  children: ReactNode;
};

const toCSSVariables = (tokens: ThemeTokensType): Record<string, string> => {
  return Object
    .entries(tokens)
    .reduce((acc, [category, values]) => {
      Object.entries(values as Record<string, unknown>).forEach(([key, value]) => {
        acc[`--${category}-${key}`] = value as string;
      });
      return acc;
    }, {} as Record<string, string>);
};


export function ThemeProvider<T extends Record<string, ThemeTokensType>>({
  themes,
  defaultTheme,
  storageAdapter = defaultWebAdapter,
  children,
}: ThemeProviderProps<T>) {
  const fallback = (defaultTheme ?? Object.keys(themes)[0]) as keyof T;
  const [themeName, setThemeName] = useState<keyof T>(fallback);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from storage once on mount (handles async adapters, e.g. AsyncStorage)
  useEffect(() => {
    let cancelled = false;
    Promise.resolve(storageAdapter.get()).then((stored) => {
      if (!cancelled && stored && stored in themes) setThemeName(stored as keyof T);
      if (!cancelled) setHydrated(true);
    });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = useCallback((name: keyof T) => {
    if (!(name in themes)) return;
    setThemeName(name);
    void storageAdapter.set(name as string);
  }, [themes, storageAdapter]);

  const resolved = themes[themeName];
  const cssVars: CSSProperties = useMemo(() => toCSSVariables(resolved), [resolved]);

  return (
    <ThemeContext.Provider value={{ theme: resolved, themeName, themes, setTheme, hydrated }}>
      <div style={cssVars}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
```

---
Most themeable component libraries (Radix, Tamagui, Restyle) leave persistence to you rather than shipping an adapter. The adapter *pattern* itself is more common in state-management libraries:

- **Zustand's `persist` middleware** — `getItem`/`setItem`/`removeItem` interface, swappable for `AsyncStorage` on RN. Closest match to what you built.
- **redux-persist** — pluggable "storage engines," same idea.
- **TanStack Query's `persistQueryClient`** — a `persister` interface for cache persistence.

So your adapter is closer to prior art from state libs than from design systems — reasonable, since design systems rarely need cross-platform persistence built in.
