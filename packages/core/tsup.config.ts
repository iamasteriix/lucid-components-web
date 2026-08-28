import { defineConfig } from 'tsup';
import fs from 'fs';


export default defineConfig ([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    splitting: false,
    treeshake: true,
    minify: true,
    outDir: 'dist/web',
    external: ['react'],
    onSuccess: async () => {
      fs.cpSync('src/assets/fonts', 'dist/web/assets/fonts', { recursive: true, });
    },
  },
]);
