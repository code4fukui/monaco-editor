import { require } from "./min/vs/loader.js";

require.config({ paths: { vs: "./release/min/vs" } });

const asyncRequire = async (path) => {
	return new Promise((resolve) => {
		require(path, resolve);
	});
};

await asyncRequire(["vs/editor/editor.main"]);
const _monaco = globalThis.monaco;

export { _monaco as monaco };
