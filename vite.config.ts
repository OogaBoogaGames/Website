import { sveltekit } from '@sveltejs/kit/vite';
import replace from '@rollup/plugin-replace';
import { defineConfig } from 'vitest/config';
const mode = process.env.NODE_ENV;

export default defineConfig({
	plugins: [
		sveltekit(),
		replace({
			API_BASE_URL: mode == 'production' ? 'https://api.oogabooga.games' : 'http://localhost:8080'
		})
	],
	server: {
		cors: false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	define: {
		_global: {}
	},
	optimizeDeps: {
		exclude: ['@oogaboogagames/cavemanweb']
	}
});
