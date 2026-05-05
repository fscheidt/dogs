import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	},
  kit: {
    paths: {
      base: process.argv.includes("dev") ? "" : `/dogs`, // <= project name
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
  extensions: ['.svelte', '.svx', '.md'], // Add .svx/.md to recognized extensions
	preprocess: mdsvex({ extensions: ['.svx', '.md'] }),
};

export default config;
