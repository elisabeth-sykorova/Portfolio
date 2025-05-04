import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

// used to determine if we are using npm run dev
const dev = process.env.NODE_ENV === 'development';
const repoName = 'Portfolio'; // 👈 Replace with your repo name!

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
	}
};

export default config;