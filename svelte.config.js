import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'], // Add .svx/.md to recognized extensions
	preprocess: mdsvex({ extensions: ['.svx', '.md'] }),
	kit: {
		paths: {
			base: process.argv.includes('dev') ? '' : `/dogs`  // <= project name
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};
export default config;
