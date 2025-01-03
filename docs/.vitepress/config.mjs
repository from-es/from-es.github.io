/*
  Global config for VitePress
*/

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// title add string customize >> "|" → "-"
	// https://vitepress.dev/reference/site-config#titletemplate
	titleTemplate: ':title - 駄文にゅうす@GitHub',

	// put file in public directory, if base is set, use /base/*****.css
	head: [
		// css
		[ 'link', { rel: "stylesheet", href: "/src/css/global.css", type: "text/css" } ],

		// favicon
		[ 'link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/src/img/favicon/favicon-16x16.png"} ],
		[ 'link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/src/img/favicon/favicon-32x32.png"} ],
		[ 'link', { rel: "icon", type: "image/png", sizes: "48x48", href: "/src/img/favicon/favicon-48x48.png"} ],
		[ 'link', { rel: "icon",                    sizes: "48x48", href: "/favicon.ico"} ],

		// Google Analytics(https://vitepress.dev/reference/site-config#example-using-google-analytics)
		[ 'script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4DYYDSWEZD' } ],
		[ 'script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-4DYYDSWEZD');` ]
	],

	lang: 'ja',
	title: "駄文にゅうす@GitHub",
	description: "駄文にゅうす@GitHub",

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
