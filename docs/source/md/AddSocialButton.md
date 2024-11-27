<script setup>
	function addSocialButton() {
		// 複数のニュースサイトで外部サイトにシェアするボタンの実装方法に問題がある件(https://subtech.g.hatena.ne.jp/mala/20110413/1302674294)
		// はてなブックーマーク用にURL先頭の http:// or https:// 抜き & URLに含まれる # → %23 への置換
		//var ur   = (location.href.replace(/https?:\/\//, '').replace(/#/g, '%23'));
		const url = new URL(document.URL);
		const urlinfo = {
			href     : url.href,
			protocol : url.protocol,
			hostname : url.hostname,
			pathname : url.pathname,
			url      : (url.protocol + '//' + url.hostname + url.pathname),
			title    : document.title
		};
		const encoded = {
			url   : encodeURIComponent(urlinfo.url),
			title : encodeURIComponent(urlinfo.title)
		}
		const social = [
			{
				service   : "hatebu",
				className : "sb-hatenabookmark",
				href      : "https://b.hatena.ne.jp/entry/" + (('http:' == urlinfo.protocol) ? '' : 's/') + ((urlinfo.url).replace(/https?:\/\//, '').replace(/#/g, '%23')),
				title     : "Add this article to Hatena Bookmark",
				text      : "B!"
			},
			{
				service   : "x",
				href      : "https://x.com/intent/post?url=" + `${ encoded.url }&text=${ encoded.title }`,
				className : "sb-x",
				title     : "Share this article on X",
				text      : "X"
			},
			{
				service   : "facebook",
				href      : "https://www.facebook.com/sharer.php?u=" + encoded.url,
				className : "sb-facebook",
				title     : "Share this article on Facebook",
				text      : "Facebook"
			},
			{
				service   : "line",
				href      : "https://social-plugins.line.me/lineit/share?url=" + encoded.url,
				className : "sb-line",
				title     : "Share this article on LINE",
				text      : "LINE"
			},
			{
				service   : "pocket",
				href      : "https://getpocket.com/edit?url=" + `${ encoded.url }&text=${ encoded.title }`,
				className : "sb-pocket",
				title     : "Share this article on Pocket",
				text      : "Pocket"
			}
		];

		const ul = document.createElement("ul");

		(social).forEach(
			(elm) => {
				const li     = document.createElement("li");
				const anchor = document.createElement("a");

				anchor.setAttribute("href", elm.href);
				anchor.setAttribute("target", "_blank");
				anchor.setAttribute("rel", "noopener");
				anchor.setAttribute("class", elm.className);
				anchor.setAttribute("title", elm.title);
				anchor.setAttribute("data-sns", elm.service);
				anchor.setAttribute("data-add-external-link-icon", "false"); /* /src/css/global.cssで指定している外部リンクへのアイコン付加を無効 */
				anchor.innerText = elm.text;

				(li).appendChild(anchor);
				(ul).appendChild(li);
			}
		);



		const html = ul.outerHTML;

		return html.trim();
	}

	// http://www.nishishi.com/javascript/2013/replace-char-entity-ref.html
	function escapeHTML(str) {
		const character = {
				'&'  : '&amp;'
				,'<'  : '&lt;'
				,'>'  : '&gt;'
				,'"'  : '&quot;'
				,'\'' : '&#39;'
				,'`'  : '&#96;'
		};

		return str.replace(/[\&\<\>\"\'\`]/g, function(chr) { return character[chr]; });
	}

	const SocialButton = addSocialButton();
</script>



<div :class="$style.socialButton" v-html="SocialButton"></div>



<style module>
	.socialButton {
		margin: 2rem 0;
		padding: 0;
	}

	.socialButton > ul {
		margin: 0;
		padding: 0;
	}

	.socialButton > ul > li {
		list-style: none;
		display: inline-block;

		margin: 0 0.25rem 0 0;
		padding: 0;

		min-width: 6rem;
		text-align: center;
	}
	.socialButton > ul > li:last-child {
		margin: 0;
	}

	.socialButton > ul > li > a[data-sns="hatebu"]   { background-color: #00a4de; } /* http://hatenacorp.jp/press/resource                          */
	.socialButton > ul > li > a[data-sns="x"]        { background-color: #1da1f2; } /* https://about.x.com/en/who-we-are/brand-toolkit              */
	.socialButton > ul > li > a[data-sns="facebook"] { background-color: #3b5998; } /* https://en.facebookbrand.com/#brand-guidelines-assets        */
	.socialButton > ul > li > a[data-sns="line"]     { background-color: #00C300; } /* https://developers.line.biz/ja/docs/line-login/login-button/ */
	.socialButton > ul > li > a[data-sns="pocket"]   { background-color: #ef4056; }

	.socialButton > ul > li > a         { font-style: normal; font-weight: bold; text-decoration: none; font-family: "Times New Roman", "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo,Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif; }
	.socialButton > ul > li > a         { padding: 0.25rem 0.75rem; display: block; border-radius: 0.25rem; }
	.socialButton > ul > li > a:link    { color: #ffffff; }
	.socialButton > ul > li > a:visited { color: #ffffff; }
	.socialButton > ul > li > a:hover   { color: #ffffff; background-color: #0068ff; }
	.socialButton > ul > li > a:active  { color: #ffffff; }

	.socialButton > ul > li > a {
		position: relative;
	}
	.socialButton > ul > li > a::after {
		all: initial;
	}
	.socialButton > ul > li > a::after {
		position: absolute;
		top: -3rem  !important;
		left: 0  !important;

		margin: 0 auto;
		padding: 0.25rem 0.75rem !important;

		width : initial !important;
		height: initial !important;

		content: attr(title) !important;

		background: rgb(0 0 0 / 0.85) !important;
		border-radius: 0.25rem !important;

		font-weight: normal !important;
		color: #fff !important;
		white-space: nowrap !important;

		transition: all 0.75s !important;
		opacity: 0;

		--icon: initial !important;
	}
	.socialButton > ul > li > a:hover::after {
		opacity: 1;

	}
</style>