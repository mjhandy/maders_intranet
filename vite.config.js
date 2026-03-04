// vite.config.js
import { defineConfig } from "vite";

const path = require("path");

export default defineConfig({
  root: path.resolve(__dirname, "src"), // folder for your JS/CSS source files
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bs" : path.resolve('src/scss')
    },
  },
  build: {
    outDir: "../dist/assets", // where built files go
    emptyOutDir: true,
    manifest: true, // generate manifest.json for PHP to read
    rollupOptions: {
      input: "./src/main.js", // entry point
    },
  },
  server: {
    strictPort: true,
    port: 5173,
  },
});
