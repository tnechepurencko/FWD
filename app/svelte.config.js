import { vitePreprocess } from '@sveltejs/kit/vite';
import {dev} from "$app/environment";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: dev ? '' : '/FWD',
		},
	}
};

export default config;
