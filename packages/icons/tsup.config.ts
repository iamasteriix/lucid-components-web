import { defineConfig } from "tsup";



export default defineConfig ([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    outDir: "dist/web",
    external: ['react'],
    esbuildOptions(options) {
      options.alias = {
        "@icon-factory": "./src/lib/icon/createIcon.web.tsx",
      };
    },
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,  // cleans up for all preceeding configs
    splitting: false,
    treeshake: true,
    outDir: "dist/native",
    external: ['react'],
    esbuildOptions(options) {
      options.alias = {
        "@icon-factory": "./src/lib/icon/createIcon.native.tsx",
      };
    },
  },
]);
