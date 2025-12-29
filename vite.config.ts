import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
 
	ssr: {
		external: ['bun']
	},
	build: {
		rollupOptions: {
			external: ['bun']
		}
	}

});
