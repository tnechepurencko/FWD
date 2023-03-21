import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {dev} from "$app/environment";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: dev ? '' : '/FWD',
		},
		adapter: adapter()
	}
};

export default config;
