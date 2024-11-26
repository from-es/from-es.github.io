/*
  Global config for VitePress
*/

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// title add string customize >> "|" → "-"
	// https://vitepress.dev/reference/site-config#titletemplate
	titleTemplate: ':title - GitHub@駄文にゅうす',

	head: [
		[
		  'link',
		  { rel: "stylesheet", href: "/src/css/global.css", type: "text/css" } // put file in public directory, if base is set, use /base/*****.css
		]
	],

	/*
		base: "/blog",
	*/

	lang: 'ja',
	title: "GitHub@駄文にゅうす",
	description: "GitHub@駄文にゅうす",

	// https://vitepress.dev/guide/markdown#image-lazy-loading
	markdown: {
		image: {
		  // image lazy loading is disabled by default
		  lazyLoading: true
		}
	 },

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/src/img/logo-512x512.png',  // put css file in public directory

		nav: [
			{ text: 'Home',  link: '/' },
			{ text: 'About', link: 'about.md' },
		],
		/*
		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples',    link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],
		*/
		socialLinks: [
			{ icon: 'x',      link: 'https://twitter.com/from_es' },
			{ icon: 'github', link: 'https://github.com/from-es' }
		],
		footer: {
			/*
			message: 'Released under the MIT License.',
			*/
			copyright: 'Copyright &copy; 2024 From E'
		}
	}
})
