import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
export default defineConfig({
	site: 'https://wiki.oranges.lt',
	integrations: [
		starlight({
			title: 'OrangWiki',
			description: 'The one wiki for everything Orange: OrangLauncher, InstaDownload, the Orange MC server and the Orange SCP:SL servers.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/cpkfnRuRv7' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Orang-Studio' },
				{ icon: 'email', label: 'Email', href: 'mailto:software@oranges.lt' },
			],
			plugins: [starlightLinksValidator()],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				Header: './src/components/Header.astro',
				MobileMenuFooter: './src/components/MobileMenuFooter.astro',
			},
			sidebar: [
				{
					label: 'Software',
					items: [
						{
							label: 'OrangLauncher',
							collapsed: true,
							items: [{ autogenerate: { directory: 'oranglauncher' } }],
						},
						{
							label: 'InstaDownload',
							collapsed: true,
							items: [{ autogenerate: { directory: 'instadownload' } }],
						},
						{
							label: 'Applications',
							collapsed: false,
							items: [{ autogenerate: { directory: 'software' } }],
						},
					],
				},
				{
					label: 'Game Servers',
					items: [
						{
							label: 'Orange MC',
							collapsed: true,
							items: [{ autogenerate: { directory: 'minecraft' } }],
						},
						{
							label: 'Orange SCP:SL',
							collapsed: true,
							items: [{ autogenerate: { directory: 'scp' } }],
						},
					],
				},
			],
		}),
	],
});