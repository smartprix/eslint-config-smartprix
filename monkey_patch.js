// Taken From https://github.com/Cellule/eslint-myrules/blob/master/monkeyPatch.js

var Module = require("module");
var path = require("path");

var eslintLoc;
var parent = module;
while(parent) {
  try {
    eslintLoc = Module._resolveFilename("eslint", parent);
    break;
  } catch (err) {
    parent = parent.parent;
  }
}
if (!eslintLoc) {
  throw new ReferenceError("couldn't resolve eslint");
}

var pluginPath = path.resolve(eslintLoc, "..", "config", "plugins.js");
var plugins = require(pluginPath);
var oldLoad = plugins.load;
var myPlugins = [];
plugins.load = function(pluginName) {
  if (myPlugins.indexOf(pluginName) === -1) {
    return oldLoad(pluginName);
  }
  this.define(pluginName, require("eslint-plugin-" + pluginName));
}

module.exports = {
  addPlugins: function(plugins) {
    myPlugins = myPlugins.concat(plugins);
  }
}