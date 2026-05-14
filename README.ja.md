# Monaco Editor

[
![Build Status](https://dev.azure.com/ms/monaco-editor/_apis/build/status/microsoft.monaco-editor?label=website)
](https://dev.azure.com/ms/monaco-editor/_build/latest?definitionId=3)

Monaco Editor は、[VS Code](https://github.com/microsoft/vscode) を支えるコードエディターです。エディターの機能の優れた概要については、[こちら](https://code.visualstudio.com/docs/editor/editingevolved)をご覧ください。

このリポジトリにはエディターのソースコードは含まれていないことにご注意ください。ここには、すべてをパッケージ化して `monaco-editor` npm モジュールとして配布するためのスクリプトのみが含まれています。

![image](https://user-images.githubusercontent.com/5047891/94183711-290c0780-fea3-11ea-90e3-c88ff9d21bd6.png)

## 試してみる

[当社のウェブサイト](https://microsoft.github.io/monaco-editor/index.html)でエディターをお試しいただけます。

## インストール

```bash
npm install monaco-editor
```

## 使い方

### バンドラーを使用する場合（Webpack や Vite など）

バンドラーを使用している場合、エディターの Web Worker とアセットの読み込みを処理するように設定する必要があります。Webpack ユーザー向けには `monaco-editor-webpack-plugin` を提供しています。使用方法の詳細については、その [README](./webpack-plugin/README.md) をご覧ください。

その他のバンドラーについては、[統合サンプル](./samples/)をご確認ください。

Webpack ベースのプロジェクトにおけるシンプルな統合例は以下のようになります。

```javascript
// webpack.config.js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
      languages: ['javascript', 'css', 'html', 'typescript']
    })
  ]
};
```

```javascript
// my-editor.js
import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('container'), {
  value: 'console.log("Hello, world!");',
  language: 'javascript'
});
```

### シンプルな `<script>` タグを使用する場合（CDN）

ビルドプロセスなしで素早くセットアップしたい場合は、CDN からビルド済みのバージョンを使用できます。

```javascript
import { monaco } from "https://code4fukui.github.io/monaco-editor/monaco.js";

const editor = monaco.editor.create(container, {
  language: "html",
  value: "<h1>Hello, World!</h1>"
});
```

## ドキュメント

-   これらの[完全なサンプル](./samples/)で、エディターの統合方法を学ぶことができます。
    -   [AMD バージョンの統合](./docs/integrate-amd.md)。
    -   [ESM バージョンの統合](./docs/integrate-esm.md)
-   [プレイグラウンド](https://microsoft.github.io/monaco-editor/playground.html)で、エディター API の使用方法を学び、独自のカスタマイズを試すことができます。
-   [API ドキュメント](https://microsoft.github.io/monaco-editor/api/index.html)を探索するか、[`monaco.d.ts`](https://github.com/microsoft/monaco-editor/blob/main/website/typedoc/monaco.d.ts) から直接読んでください。
-   すべてのユーザーがエディターにアクセスできるようにするために、[こちらのガイド](https://github.com/microsoft/monaco-editor/wiki/Accessibility-Guide-for-Integrators)をお読みください！
-   [Monarch プレイグラウンド](https://microsoft.github.io/monaco-editor/monarch.html)で、新しいプログラミング言語用の Monarch トークナイザーを作成できます。
-   [StackOverflow](https://stackoverflow.com/questions/tagged/monaco-editor) で質問してみましょう！オープンおよびクローズされた Issue を検索してみてください。そこには多くのヒントがあります！

## FAQ

❓ **VS Code と Monaco Editor の関係は何ですか？**

Monaco Editor は VS Code のソースから直接生成されており、本来の環境外である Web ブラウザ上で動作させるために必要なサービスに対するいくつかのシム（shim）が含まれています。

❓ **VS Code 用の拡張機能を作成しましたが、Monaco Editor でも動作しますか？**

いいえ。ただし、拡張機能が完全に [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) に基づいており、言語サーバーが JavaScript/TypeScript で作成されている場合は可能です。

❓ **「Could not create web worker」エラーが表示されるのはなぜですか？**

`file://` URL から実行している場合、Web Worker の作成は許可されません。言語機能を使用するには、エディターのファイルを Web サーバー（`http://` または `https://` スキームを使用）でホストする必要があります。

❓ **エディターはモバイルブラウザをサポートしていますか？**

いいえ。エディターはモバイルデバイス向けに設計されておらず、サポートもされていません。

❓ **IE 11 のサポートはどうなっていますか？**

Monaco Editor は現在 IE 11 をサポートしていません。IE 11 でテストされた最後のバージョンは `0.18.1` です。

## Issue

Monaco Editor に関するあらゆる事柄について、このリポジトリで [Issue](https://github.com/microsoft/monaco-editor/issues) を作成してください。Issue を作成する際は、常にエディターの**バージョン**と、問題が発生している**ブラウザ**を明記してください。重複を避けるため、既存の Issue を検索してから作成するようお願いします。

## コントリビューション

[CONTRIBUTING](./CONTRIBUTING.md) をご覧ください。

## 行動規範

このプロジェクトは [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) を採用しています。詳細については [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) を参照するか、追加の質問やコメントがある場合は [opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。

## ライセンス

[MIT](https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt) License のもとでライセンスされています。
