import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	define: {
		_global: {}
	},
	optimizeDeps: {
		exclude: ['@oogaboogagames/cavemanweb']
	}
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8080',
	// 			changeOrigin: false,
	// 			rewrite: (path) => path.replace(/^\/api/, '')
	// 		}
	// 	}
	// }
});
