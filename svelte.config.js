import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter(),
		alias: {
			$db: './src/db',
			$lucia: './src/lib/server/lucia.ts'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
