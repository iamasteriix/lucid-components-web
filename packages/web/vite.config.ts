import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';


/**
 * Vite config for library mode.
 * @see https://vitejs.dev/guide/build#library-mode
 */
export default defineConfig ({
  plugins: [
    react(),
  ],

  server: {
    port: 3001,
  },

  build: {
    /** Library entry — all public exports flow through here */
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LucidUIKitReact',
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

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // convenience alias to the /path/to/src directory
    }
  }
});