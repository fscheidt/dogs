# Svelte SSG

DogApp is a toy project designed to demonstrate how to deploy a SvelteKit app as a static site. This requires modifying the default build process to support Static Site Generation (SSG).

Current Versions Used:
- Svelte 5
- SvelteKit 2

Additional Resources:
For detailed guidance on configuring the project as a static website, refer to the official SvelteKit documentation:
- [SvelteKit Adapter Static](https://svelte.dev/docs/kit/adapter-static)

## (1) Install dependencies

Create a svelte project *(if necessary)*
```bash
npx sv create dogs
```

Install the static adapter

```bash
npm i -D @sveltejs/adapter-static
```

### `/src/routes/layout.js`

Create a file `+layout.js` with the content:

```js
// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
```

### svelte.config.js

Configure the static adapter, edit `svelte.config.js` and replace the content to:

```js
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
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
```

**DONE.**

## Instructions for Deploying This Project to GitHub Pages

Follow these steps **only if you plan to deploy** this project on GitHub Pages:

1. **Enable GitHub Pages:**
Go to your repository's settings and navigate to `Settings > Pages`. Enable GitHub Pages for your project.
2. **Update** svelte.config.js
Edit the `svelte.config.js` file to configure the paths property with your project's name. For example:

```js
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
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
```

## Workflow Instructions
This step is only required if you plan to automate the build process using GitHub Actions.

1. **Review the** `deploy.yml` **File**:
    - Open the `deploy.yml` file and customize it as needed to align with your project’s requirements.

2. **Verify the Default Branch:**
    - The default branch in the configuration is set to `master`. If your repository uses a different default branch (e.g., main), make sure to update the branch reference in the `deploy.yml` file.
