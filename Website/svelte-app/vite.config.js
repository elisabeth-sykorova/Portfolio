import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Match base path with svelte.config.js
const dev = process.env.NODE_ENV === 'development';
const repoName = 'Portfolio';
const base = dev ? '' : `/${repoName}`;

export default defineConfig({
	plugins: [sveltekit()],
	base
});
