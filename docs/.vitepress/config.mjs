/*
  Global config for VitePress
*/

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "from-es.github.io",

	head: [
		[
		  'link',
		  { rel: "stylesheet", href: "/src/css/common.css", type: "text/css" }
		]
	 ],
	/*
		base: "/from-es.github.io",
	*/
	lang: 'ja',

	title: "GitHub@駄文にゅうす",
	description: "GitHub@駄文にゅうす",

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/src/img/logo-512x512.png',

		nav: [
			{ text: 'Home',  link: '/' },
			{ text: 'About', link: 'about.md' },
			/*
			{ text: 'Examples', link: '/markdown-examples' }
			 */
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
