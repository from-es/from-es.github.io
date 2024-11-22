
function addSocialButton() {
	// 複数のニュースサイトで外部サイトにシェアするボタンの実装方法に問題がある件(https://subtech.g.hatena.ne.jp/mala/20110413/1302674294)
	// はてなブックーマーク用にURL先頭の http:// or https:// 抜き & URLに含まれる # → %23 への置換
	//var ur   = (location.href.replace(/https?:\/\//, '').replace(/#/g, '%23'));

	const elm     = document.getElementById('social-button') ? document.getElementById('social-button') : null;
	const urlinfo = {
		href     : location.href,
		protocol : location.protocol,
		hostname : location.hostname,
		pathname : location.pathname,
		url      : (location.protocol + '//' + location.hostname + location.pathname),
		title    : document.title
	};
	const social = {
		hatebu   : 'https://b.hatena.ne.jp/entry/'                    + (('http:' == urlinfo.protocol) ? '' : 's/') + ((urlinfo.url).replace(/https?:\/\//, '').replace(/#/g, '%23')),
		x        : 'https://x.com/intent/post?url='                   + encodeURIComponent(urlinfo.url) + '&text=' + encodeURIComponent(urlinfo.title),
		facebook : 'https://www.facebook.com/sharer.php?u='           + encodeURIComponent(urlinfo.url),
		line     : 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(urlinfo.url),
		pocket   : 'https://getpocket.com/edit?url='                  + encodeURIComponent(urlinfo.url) + '&text=' + encodeURIComponent(urlinfo.title)
	};

const str = `
<ul>
	<li>
		<a href="${ social.hatebu }" target="_blank" rel="noopener" class="sb-hatenabookmark" title="Add this article to Hatena Bookmark">B!</a>
	</li>
	<li>
		<a href="${ social.twitter }" target="_blank" rel="noopener" class="sb-twitter" title="Share this article on X">X</a>
	</li>
	<li>
		<a href="${ social.facebook }" target="_blank" rel="noopener" class="sb-facebook" title="Share this article on Facebook">Facebook</a>
	</li>
	<li>
		<a href="${ social.line }" target="_blank" rel="noopener" class="sb-line" title="Share this article on LINE">LINE</a>
	</li>
	<li>
		<a href="${ social.pocket }" target="_blank" rel="noopener" class="sb-pocket" title="Share this article on Pocket">Pocket</a>
	</li>
</ul>
`;

	return str.trim();
}

// http://www.nishishi.com/javascript/2013/replace-char-entity-ref.html
function escapeHTML(str) {
	var character = {
			 '&'  : '&amp;'
			,'<'  : '&lt;'
			,'>'  : '&gt;'
			,'"'  : '&quot;'
			,'\'' : '&#39;'
			,'`'  : '&#96;'
	};
	return str.replace(/[\&\<\>\"\'\`]/g, function(chr) { return character[chr]; });
}



export { addSocialButton };