// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // folder for your JS/CSS source files
  build: {
    outDir: '../dist/assets', // where built files go
    emptyOutDir: true,
    manifest: true, // generate manifest.json for PHP to read
    rollupOptions: {
      input: './src/main.js', // entry point
    },
  },
  server: {
    strictPort: true,
    port: 5173,
  },
});
