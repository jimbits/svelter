import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
        alias: {
			 
			$css: 'src/css',
			$components: 'src/lib/components',
			$ui: 'src/lib/ui',
			$server: 'src/lib/server',
			 
		},
		adapter: adapter()
	}
};

export default config;
