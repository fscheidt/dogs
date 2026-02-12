import devtoolsJson from "vite-plugin-devtools-json";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  plugins: [sveltekit(), devtoolsJson()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
});
