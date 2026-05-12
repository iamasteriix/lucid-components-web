import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";


/**
 * Vite config for library mode.
 * @see https://vitejs.dev/guide/build#library-mode
 */
export default defineConfig ({
  plugins: [react()],
  build: {
    /** Library entry — all public exports flow through here */
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LucidWeb',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`, // outputs dist/index.es.js, dist/index.cjs.js
    },

    /** Peer deps — expected to exist in the consuming project */
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      }
    },
  },
});