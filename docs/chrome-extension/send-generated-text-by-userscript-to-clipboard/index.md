---
# lastUpdated
lastUpdated: true

# Page Layout
sidebar : false
outline : [1, 3]
prev    : false
next    : false
footer  : true

# header > meta
head:
  - - meta
    - name: description
      content: "Chrome拡張機能「S.G.T.C. ～Send \"Generated Text By UserScript\" to Clipboard.～」の公式ドキュメント。"
  - - meta
    - name: keywords
      content: "S.G.T.C., Chrome Extension, Chrome 拡張機能, UserScript, ユーザースクリプト"

  - - link
    - rel: "stylesheet"
      href: "/src/css/markdown.css"  # put file in public directory
---



# Chrome拡張機能「S.G.T.C. ～Send "Generated Text By UserScript" to Clipboard.～」 {#top}


<!-- Add, Social Button -->
<!--
	@include: @/source/md/AddSocialButton.md
-->


![S.G.T.C.](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/screenshot.png "S.G.T.C.")


## About {#about}

「[S.G.T.C.](https://chromewebstore.google.com/detail/sgtc/gljkfiofalgeofkhcpeiiadljmnbjphd "S.G.T.C.")」はChrome用の拡張機能です。「ユーザースクリプト」で生成されたテキストをクリップボードに送信します。

初期状態でページ上の情報に基づき、

- 任意フォーマットのリンクを作成
- 画像URL一覧を取得
- リンク一覧を取得
- 選択テキストから引用テキストを作成
- Webスクレイピングでページ上の任意情報を取得

等のユーザースクリプトが含まれています。ユーザー側で「ユーザースクリプト」を記述することにより、より便利な機能を追加できます。


## Install {#install}

1. [Chrome Web Store](https://chromewebstore.google.com "Chrome Web Store")の[S.G.T.C.](https://chromewebstore.google.com/detail/sgtc/gljkfiofalgeofkhcpeiiadljmnbjphd "S.G.T.C.")のページにアクセス。
2. **Add to Chrome**をクリック。
3. クリックすると、インストールの確認ダイアログが表示されますので、**Add extension**ボタンをクリック。
4. インストール完了。



## How to use {#how-to-use}

### To use the extension {#how-to-use-general}

[![How to use S.G.T.C. from Popup Menu](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-popup-menu-thumbnail.png "How to use S.G.T.C. from Popup Menu")](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-popup-menu.png "How to use S.G.T.C. from Popup Menu")
[![How to use S.G.T.C. from Context Menu](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-context-menu-thumbnail.png "How to use S.G.T.C. from Context Menu")](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-context-menu.png "How to use S.G.T.C. from Context Menu")


アドレスバーの右側にあるアイコンをクリック、もしくはコンテキストメニューからメニューを呼び出し、実行したいユーザースクリプトをクリックしてください。

### To use on local file {#how-to-use-local-file}


[![Manage Extension](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/manage-extension-thumbnail.png "Manage Extension")](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/manage-extension.png "Manage Extension")
[![enable the "Allow access to file URLs" option](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-local-thumbnail.png 'enable the "Allow access to file URLs" option')](/chrome-extension/send-generated-text-by-userscript-to-clipboard/img/how-to-use-local.png 'enable the "Allow access to file URLs" option')

ローカルファイル上でも「S.G.T.C.」を実行する場合は、

1. Google Chromeの右上にあるアイコンから、「**Extension → Manage Extension**」を選択し、インストールされている拡張機能一覧が表示される画面に移動。
2. 「S.G.T.C.」の**Detail**ボタンをクリックし、管理画面へ。
3. 「**Allow access to file URLs**」を有効にします。


## Setting {#settings}

「S.G.T.C.」のオプションを開くには、

1. アドレスバー右側のアイコンをクリックしてポップアップメニューを表示します。
2. ポップアップメニューの上部にある歯車のアイコンをクリックすると、オプション画面が表示されます。

::: danger 注意！
設定の変更、ユーザースクリプトの追加・修正、リセットによる初期設定への変更は、保存ボタンを押すまで反映されません。ユーザースクリプトのコードを追加・修正後の保存し忘れにご注意ください。
:::

### Debug {#settings-debug}

**Developer Tools**の**Console**への出力有効/無効切り替えについて。このオプションを有効にすると、処理が若干（100～300ms）遅くなる為、

- 処理の過程を見たい
- “UserScript”のデバックを行いたい

等を除き、基本的にこのオプションを有効にする必要はありません。

ユーザースクリプトのデバックの詳細については、[UserScript の Debug](#user-script-debug)の項を参照してください。


## UserScript {#user-script}

### Specification {#user-script-specification}

- 動作環境について
	- 言語は**JavaScript**
	- 使用可能なAPIはインストールされたブラウザのバージョンに準ずる
- 実行環境について
	- background(service workers)上で[chrome.offscreen](https://developer.chrome.com/docs/extensions/reference/api/offscreen "API chrome.offscreen - Chrome for Developers")を使用して生成されたドキュメントの[iframe sandbox](https://speakerdeck.com/syumai/iframe-sandboxdeyuzaru-li-sukuriputowoshi-xing-suru "iframe sandboxでユーザー入力スクリプトを実行する - Speaker Deck")内で実行
- Code Type
	- **script**と**library**の二種類。ユーザースクリプトのエディタ画面で指定
		- script
			- いわゆるメイン関数に相当、返り値は必ず文字列で。返した文字列がクリップボードに送られます
		- library
			- 他のユーザースクリプトと**共用したい変数・関数**を記述する際に指定
			- scriptの上の[Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope "Scope - MDN Web Docs Glossary: Definitions of Web-related terms - MDN")に挿入される為、他のlibraryとの変数・関数名の重複に注意
			- 有効にしたlibraryは、その使用に関わらず全て読み込まれる為、ファイルサイズが大きい場合、処理速度に影響が

### Restriction {#user-script-restriction}

- 以下のURLでは取得可能なプロパティが**title**と**url**のみに制限されます。
	- **chrome://** or **vivaldi://** から始まるブラウザ内部URL
	- **chrome-extension://** から始まる拡張機能の内部URL
	- [Chrome Web Store](https://chromewebstore.google.com/ "Chrome Web Store")
- セキュリティ対策としてUserScript実行環境での通信APIを原則不可に。
	- XMLHttpRequest
	- fetch
- UserScriptでの同期非同期について
	- 現時点では未対応。Ver 1.0までには実装予定
- Document要素の扱いについて
	- 該当ページ上では無く[chrome.offscreen](https://developer.chrome.com/docs/extensions/reference/api/offscreen "API chrome.offscreen - Chrome for Developers")内のiframe上でユーザースクリプトを実行している為、該当ページのHTMLDocumentは触れません。[DOMParser: parseFromString() method](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString "Web APIs DOMParser: parseFromString() method - MDN")を使い、該当ページ相当のHTMLDocumentを生成してください。
	- 処理全体の流れは[Sample Code](#user-script-sample-code)を参照
- Anchor or IMG要素について
	- 上記でも説明したように、OffscreenDocument内のSandbox環境でユーザースクリプトを実行している為、通常の```elm.src``` or ```elm.href```等で絶対URLを取得できません。一旦、[getAttribute() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute "Web APIs Element: getAttribute() method - MDN")で属性値を文字列として取得し、[URL() constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL "Web APIs URL: URL() constructor - MDN")経由で絶対URLに変換してください
	- 具体的な処理は[Sample Code](#user-script-sample-code)を参照

### Debug {#user-script-debug}

実行環境であるOffscreenDocumentはユーザースクリプト実行終了後に短時間で閉じる為、**ビューを検証**からのデバックは推奨しません。Debug有効時、ユーザースクリプトのコンソール出力は**background(service workers)**へと**非同期で送信**しているので、そちらを参照してください。


### Argument {#user-script-argument}

#### argument, detail of reserved (#user-script-argument-detail-of-reserved)

| property  |  type   | description |
| --------- | ------- | ----------- |
| title     | string  | The page Title.<br>taken from the **document.title** of the page.                                   |
| url       | string  | The page url.<br>taken from the **document.URL** of the page.                                       |
| content   | string  | HTML content of current page.<br>taken from the **document.documentElement.outerHTML** of the page. |
| referrer  | string  | The website visited before current page.<br>taken from the **document.referrer** of the page.       |
| selection | object  | See separate [detail of selection](#user-script-argument-detail-of-selection). |
| key       | object  | See separate [key of selection](#user-script-argument-detail-of-key). |


#### argument, detail of selection {#user-script-argument-detail-of-selection}

マウス等でテキスト選択状態にある場合に取得。現在のページ、もしくは**同じドメイン**から読み込まれた**frame**や**iframe**のページから取得。

| property      |  type   | description |
| ------------- | ------- | ----------- |
| title         | string  | The page title that have been selected with the mouse.<br>taken from the **document.title** of the current page.                                   |
| url           | string  | The page url that have been selected with the mouse.<br>taken from the **document.URL** of the current page.                                       |
| content       | string  | HTML content of current page that have been selected with the mouse.<br>taken from the **document.documentElement.outerHTML** of the current page. |
| referrer      | string  | The website visited before current page.<br>taken from the **document.referrer** of the current page.                                              |
| sameorigin    | bool    | The frame or iframe selected with the mouse is from the same domain as the current page.                                                           |
| selected      | bool    | Is it selected in a frame or iframe on the same domain?                                                                                            |
| selectionText | string  | The Text of the Selected Content on the page.<br>taken from the **window.getSelection().toString()** of the active page.                           |
| selectionHTML | string  | The HTML of the Selected Content on the page.<br>taken from the **document.documentElement.outerHTML** of the active page.                         |

#### argument, detail of key {#user-script-argument-detail-of-key}

キーボードの入力状態を取得。いずれかのキーを離したタイミングでリセットされる為、キーボードを押した状態で実行を。

| property     |  type   | description |
| ------------ | ------- | ----------- |
| type         | string  | Returns the string "keydown" on key down.                        |
| altKey       | bool    | A boolean value indicating whether the **Alt key** is pressed.   |
| ctrlKey      | bool    | A boolean value indicating whether the **Ctl key** is pressed.   |
| shiftKey     | bool    | A boolean value indicating whether the **Shift key** is pressed. |
| metaKey      | bool    | A boolean value indicating whether the **Meta key** is pressed.  |
| repeat       | bool    | Is the key being held down?                                      |
| code         | string  | The value of a physical key on the keyboard.<br>event.code of [KeyboardEvent: key property - MDN](https://developer.mozilla.org/en-us/docs/Web/API/KeyboardEvent/key "KeyboardEvent: key property - MDN")        |
| key          | string  | A value that reflects the keyboard locale and layout.<br>event.key of [KeyboardEvent: key property - MDN](https://developer.mozilla.org/en-us/docs/Web/API/KeyboardEvent/key "KeyboardEvent: key property - MDN") |
| simultaneous | array | If multiple keys are pressed at the same time, they are stored in an array here.<br> An array of objects that pair "event.code or event.key" with a boolean. |

### Sample Code {#user-script-sample-code}

#### Get Image URL in Page {#user-script-sample-code-get-image-url--in-page}

ユーザースクリプト「**Get Image URL in Page**」を例に処理全体の流れを解説。

- コード必須要件
- HTMLDocument Objectの生成
- アンカー・画像要素の属性値から絶対URLへの変換
- コンソール出力時の注意事項

```
/**
* @description Get Image URL in Page
* @param       {object} reserved
* @return      {string} result
*/
(reserved) => {
	// 必須
	const { title, url, referrer, content, selection, key } = reserved;

	const baseURL = url;

	// content を引数に HTMLDocument 生成
	const doc = (new DOMParser()).parseFromString(content, "text/html");

	// dom へのアクセス
	const images = doc.querySelectorAll("img");

	const imageUrlList = [];

	// 要素から取得した属性値と該当ページのURLを元に絶対URLを生成
	const getFullPath = (elm, attr, baseURL) => {
		const path = elm.getAttribute(attr);
		const url  = new URL(path, baseURL);

		return url.href;
	};
	const isImageFile = (path) => {
		const regexp = /\.(apng|png|avif|bmp|gif|ico|cur|jpe?g|jfif|pjpeg|pjp|svg|tiff?|webp)(\?|\?[-_!~*\'()a-zA-Z0-9;\:\@&=+\$,%#]+)?$/i;

		return regexp.test(path);
	}

	Array.from(images).forEach(
		(elm) => {
			const image = ((obj, base) => {
				const path = getFullPath(obj, "src", base);

				return path;
			})(elm, baseURL);
			const anchor = ((obj, base) => {
				const anc = obj.closest("a");

				if (anc && anc.getAttribute("href")) {
					const path = getFullPath(anc, "href", base);

					return path;
				}

				return null;
			})(elm, baseURL);

			imageUrlList.push(image);
			imageUrlList.push(anchor)
		}
	);

	const list   = (imageUrlList).filter(elm => (elm && isImageFile(elm)));
	const result = list.join("\n");

	// Debug, コンソール出力する値は「必ず文字列に変換」する事
	// "toString() or JSON.stringify()" いずれかのメソッドで文字列に変換　
	console.log('Debug : "Get Image URL in Page" >>', result.toString());

	// 必須、必ず1文字以上の文字列で返す事。ここで返した文字列がクリップボードに送られる
	return (result ? result : "Not Found Image URL.");
}
```



## Q&A {#question-and-answer}

### General {#question-and-answer-general .qaa_reset}

::: details ブラウザの内部URLの詳細は？ {data-style-for-details-of-custom-containers=qaa}
```chrome://about```または```chrome://chrome-urls```のURLをブラウザで開くと内部URL一覧が表示されます。
:::

### Setting {#question-and-answer-setting .qaa_reset}

::: details セーブデータの上限は？ {data-style-for-details-of-custom-containers=qaa}
設定の保存に[chrome.storage.local](https://developer.chrome.com/docs/extensions/reference/api/storage#storage_areas "chrome.storage | API | Chrome for Developers")を使用している為、上限は10MByte（JSONへの文字列化換算）です。
:::

### UserScript {#question-and-answer-userscript .qaa_reset}

::: details JavaScript初心者用に参考になるサイトを教えてください {data-style-for-details-of-custom-containers=qaa}
以下のサイトはどうでしょうか？

- [The Modern JavaScript Tutorial](https://javascript.info/ "The Modern JavaScript Tutorial")
- [JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript - MDN")
- [とほほのJavaScript入門 - とほほのWWW入門](https://www.tohoho-web.com/js/ "とほほのJavaScript入門 - とほほのWWW入門")
- [JavaScript Primer 迷わないための入門書 - JavaScript Primer](https://jsprimer.net/ "JavaScript Primer 迷わないための入門書 - JavaScript Primer")
:::


## Known Issues {#known-issues}

- none


## Support {#contact-support}

拡張機能「S.G.T.C.」の不具合報告は、

1. 何が問題なのか
2. 問題が発生した
	- ユーザースクリプトの名前とそのコードのテキスト
	- ページのURL
3. 再現手順とそれが起こる頻度
4. ブラウザの種類とバージョン

を添えて報告してください。

第三者が製作したユーザースクリプトについては、その作者に問い合わせてください。


## Contact {#contact}

<!--
	@include: @/source/md/Contact.md
-->


## Donation

<!--
	@include: @/source/md/Donation.md
-->
