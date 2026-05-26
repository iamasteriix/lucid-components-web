# Nine UI for Web


nine-ui-web/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── Dockerfile
├── docker-compose.yml
├── vite.config.ts          ← library mode, ESM + CJS + .d.ts output
├── .storybook/
│   ├── main.ts             ← sets up storybook's stories, addons,and framework configs
│   ├── preview.tsx         ← wraps all stories in ThemeProvider with defaultTokens
│   └── tsconfig.json       ← extends tsconfig.app.json
└── src/
    ├── index.css           ← shared @keyframes btn-shimmer
    ├── index.ts            ← exports everything from the project
    ├── tokens/             ← colorTokens, typographyTokens, spacingTokens, radiiTokens, shadowTokens, transitionTokens, defaultTokens
    ├── types/
    │   ├── common.ts       ← ComponentBaseProps, Size, Variant, PropsWithAs
    │   └── index.ts        ← barrel
    ├── components/
    |   └── Button/         ← Button, IconButton, FAB, types.ts, index.ts
    └── stories
        └── Button/         ← Button, IconButton, FAB, types.ts, index.ts stories