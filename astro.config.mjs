// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Modmium',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/crosmium/modmium',
				},
			],

			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Building', slug: 'docs/building' },
						{ label: 'Contributing', slug: 'docs/contributing' },
						{ label: 'Dependencies', slug: 'docs/dependencies' },
						{ label: 'Device Policy Editor', slug: 'docs/device-policy-editor' },
						{ label: 'Installation', slug: 'docs/installation' },
						{ label: 'Unbricking', slug: 'docs/unbricking' },
						{ label: 'Usage', slug: 'docs/usage' },
						{ label: 'User Policy Editor', slug: 'docs/user-policy-editor' },
						{ label: 'vboot-utils', slug: 'docs/vboot-utils' },
					],
				},
			],
		}),
	],
});