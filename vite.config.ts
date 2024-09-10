import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: resolve(__dirname, "popup/popup.ts"),
          filename: "popup.html",
          template: "popup/popup.html",
        },
      ],
    }),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background/index.ts"),
        content: resolve(__dirname, "src/content/index.ts"),
      },
      output: {
        entryFileNames: ({ name }) => `js/${name}/index.js`,
        chunkFileNames: "js/[name].js",
        // 指定输出文件的命名规则
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name!)) {
            return "css/[name].[ext]";
          }
          if (/\.json$/.test(assetInfo.name!)) {
            return "data/[name].[ext]";
          }
          if (/\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$/.test(assetInfo.name!)) {
            return "assets/[name].[ext]";
          }
          if (/\.woff$|\.woff2$|\.eot$|\.ttf$|\.otf$/.test(assetInfo.name!)) {
            return "fonts/[name].[ext]";
          }
          return "assets/[name].[ext]";
        },
      },
    },
    outDir: "dist",
    emptyOutDir: false,
    manifest: false,
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@popup": resolve(__dirname, "popup"),
    },
  },
});
