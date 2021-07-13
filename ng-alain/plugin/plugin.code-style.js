"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginCodeStyle = void 0;
const utils_1 = require("../utils");
function pluginCodeStyle(options) {
    return (tree) => {
        const json = utils_1.readPackage(tree);
        if (json == null)
            return;
        if (options.type === 'add') {
            json['lint-staged'] = {
                '(src)/**/*.{html,ts}': ['eslint --fix']
            };
        }
        else {
            delete json['lint-staged'];
        }
        utils_1.writePackage(tree, json);
    };
}
exports.pluginCodeStyle = pluginCodeStyle;
//# sourceMappingURL=plugin.code-style.js.map