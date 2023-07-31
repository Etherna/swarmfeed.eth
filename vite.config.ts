import { resolve } from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import { dynamicBase } from "vite-plugin-dynamic-base"
import eslintPlugin from "vite-plugin-eslint"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  base: mode === "production" && command === "build" ? "/__dynamic_base__/" : "",
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    svgr(),
    eslintPlugin({ cache: false }),
    checker({
      typescript: true,
      overlay: false,
    }),
    dynamicBase({
      publicPath: " window.__dynamic_base__",
      transformIndexHtml: true,
    }),
  ],
}))
