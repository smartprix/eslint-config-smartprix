// Taken From https://github.com/Cellule/eslint-myrules/blob/master/monkeyPatch.js

const Module = require('module');
const path = require('path');

let eslintLoc;
let parent = module;
while (parent) {
	try {
		eslintLoc = Module._resolveFilename('eslint', parent);
		break;
	}
	catch (err) {
		parent = parent.parent;
	}
}
if (!eslintLoc) {
	throw new ReferenceError("couldn't resolve eslint");
}

const pluginPath = path.resolve(eslintLoc, '..', 'config', 'plugins.js');
// eslint-disable-next-line import/no-dynamic-require
const plugins = require(pluginPath);
const oldLoad = plugins.load;
let myPlugins = [];
plugins.load = function (pluginName) {
	if (myPlugins.indexOf(pluginName) === -1) {
		return oldLoad(pluginName);
	}
	// eslint-disable-next-line import/no-dynamic-require, global-require
	return this.define(pluginName, require('eslint-plugin-' + pluginName));
};

module.exports = {
	addPlugins(morePlugins) {
		myPlugins = myPlugins.concat(morePlugins);
	},
};
