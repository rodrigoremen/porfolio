import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
	vite: {
		ssr: {
			noExternal: ['@fontsource-variable/onest'],
		},
	},
	integrations: [preact(), tailwind()],
});
