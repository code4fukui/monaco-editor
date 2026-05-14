# Monaco Editor

[
![Build Status](https://dev.azure.com/ms/monaco-editor/_apis/build/status/microsoft.monaco-editor?label=website)
](https://dev.azure.com/ms/monaco-editor/_build/latest?definitionId=3)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

The Monaco Editor is the code editor that powers [VS Code](https://github.com/microsoft/vscode). A good overview of the editor's features is available [here](https://code.visualstudio.com/docs/editor/editingevolved).

Please note that this repository contains no source code for the editor. It only contains the scripts to package everything together and ship the `monaco-editor` npm module.


![image](https://user-images.githubusercontent.com/5047891/94183711-290c0780-fea3-11ea-90e3-c88ff9d21bd6.png)


## Try it out

Try the editor out [on our website](https://microsoft.github.io/monaco-editor/index.html).

## Installation

```bash
npm install monaco-editor
```

## Usage

### With a Bundler (like Webpack or Vite)

If you are using a bundler, you will need to configure it to handle loading the editor's web workers and assets. We provide a `monaco-editor-webpack-plugin` for Webpack users. Please see its [README](./webpack-plugin/README.md) for usage details.

For other bundlers, you can check out the [integration samples](./samples/).

A simple integration in a webpack-based project might look like this:

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

### With a Simple `<script>` Tag (CDN)

For a quick setup without a build process, you can use a pre-built version from a CDN.

```javascript
import { monaco } from "https://code4fukui.github.io/monaco-editor/monaco.js";

const editor = monaco.editor.create(container, {
  language: "html",
  value: "<h1>Hello, World!</h1>"
});
```

## Documentation

-   Learn how to integrate the editor with these [complete samples](./samples/).
    -   [Integrate the AMD version](./docs/integrate-amd.md).
    -   [Integrate the ESM version](./docs/integrate-esm.md)
-   Learn how to use the editor API and try out your own customizations in the [playground](https://microsoft.github.io/monaco-editor/playground.html).
-   Explore the [API docs](https://microsoft.github.io/monaco-editor/api/index.html) or read them straight from [`monaco.d.ts`](https://github.com/microsoft/monaco-editor/blob/main/website/typedoc/monaco.d.ts).
-   Read [this guide](https://github.com/microsoft/monaco-editor/wiki/Accessibility-Guide-for-Integrators) to ensure the editor is accessible to all your users!
-   Create a Monarch tokenizer for a new programming language [in the Monarch playground](https://microsoft.github.io/monaco-editor/monarch.html).
-   Ask questions on [StackOverflow](https://stackoverflow.com/questions/tagged/monaco-editor)! Search open and closed issues, there are a lot of tips in there!

## FAQ

❓ **What is the relationship between VS Code and the Monaco Editor?**

The Monaco Editor is generated straight from VS Code's sources with some shims around services the code needs to make it run in a web browser outside of its home.

❓ **I've written an extension for VS Code, will it work on the Monaco Editor?**

No. However, if the extension is fully based on the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) and the language server is authored in JavaScript/TypeScript, then it would be possible.

❓ **Why do I see a "Could not create web worker" error?**

Web workers are not allowed to be created when running from `file://` URLs. You must host the editor files on a web server (using `http://` or `https://` schemes) to use the language features.

❓ **Is the editor supported in mobile browsers?**

No. The editor is not designed for mobile devices and is not supported on them.

❓ **What about IE 11 support?**

The Monaco Editor no longer supports IE 11. The last version that was tested on IE 11 is `0.18.1`.

## Issues

Create [issues](https://github.com/microsoft/monaco-editor/issues) in this repository for anything related to the Monaco Editor. Always mention **the version** of the editor when creating issues and **the browser** you're having trouble in. Please search for existing issues to avoid duplicates.

## Contributing

Please see [CONTRIBUTING](./CONTRIBUTING.md).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

Licensed under the [MIT](https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt) License.