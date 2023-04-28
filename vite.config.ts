import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './src/',
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: '../dist/',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '~/': `${__dirname}/src/`,
    },
  },
});
