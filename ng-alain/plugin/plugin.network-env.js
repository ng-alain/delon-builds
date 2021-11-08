"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginNetworkEnv = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const CONFIG = {
    npm: {
        path: `./.npmrc`,
        content: `sass_binary_site=https://npmmirror.com/mirrors/node-sass/
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs/
electron_mirror=https://npmmirror.com/mirrors/electron/
registry=https://registry.npmmirror.com`
    },
    yarn: {
        path: `./.yarnrc`,
        content: `sass_binary_site "https://npmmirror.com/mirrors/node-sass/"
phantomjs_cdnurl "https://npmmirror.com/mirrors/phantomjs/"
electron_mirror "https://npmmirror.com/mirrors/electron/"
registry "https://registry.npmmirror.com"`
    }
};
function pluginNetworkEnv(options) {
    return (tree) => {
        const item = CONFIG[options.packageManager || ''];
        if (item == null) {
            throw new schematics_1.SchematicsException(`Must be specified the "packageManager" parameter`);
        }
        if (tree.exists(item.path)) {
            tree.delete(item.path);
        }
        if (options.type === 'remove') {
            return;
        }
        tree.create(item.path, item.content);
    };
}
exports.pluginNetworkEnv = pluginNetworkEnv;
//# sourceMappingURL=plugin.network-env.js.map