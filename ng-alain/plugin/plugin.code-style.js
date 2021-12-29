"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginCodeStyle = void 0;
const utils_1 = require("../utils");
const code_style_1 = require("../utils/code-style");
function pluginCodeStyle(options) {
    return (tree) => {
        const json = utils_1.readPackage(tree);
        if (json == null)
            return;
        if (options.type === 'add') {
            json[code_style_1.LINT_STAGED] = code_style_1.LINT_STAGED_CONFIG;
        }
        else {
            delete json[code_style_1.LINT_STAGED];
        }
        utils_1.writePackage(tree, json);
    };
}
exports.pluginCodeStyle = pluginCodeStyle;
//# sourceMappingURL=plugin.code-style.js.map