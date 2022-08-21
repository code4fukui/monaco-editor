// Monaco Editor ES module version
// https://github.com/code4fukui/monaco-editor

import { require } from './release/min/vs/loader.js';

require.config({ paths: { vs: 'https://code4fukui.github.io/monaco-editor/release/min/vs' } });

const asyncRequire = async (path) => {
	return new Promise((resolve) => {
		require(path, resolve);
	});
};

await asyncRequire(['vs/editor/editor.main']);
const _monaco = globalThis.monaco;

export { _monaco as monaco };
