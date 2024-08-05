"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginCodeStyle = pluginCodeStyle;
const utils_1 = require("../utils");
const code_style_1 = require("../utils/code-style");
function pluginCodeStyle(options) {
    return (tree) => {
        const json = (0, utils_1.readPackage)(tree);
        if (json == null)
            return;
        if (options.type === 'add') {
            json[code_style_1.LINT_STAGED] = code_style_1.LINT_STAGED_CONFIG;
        }
        else {
            delete json[code_style_1.LINT_STAGED];
        }
        (0, utils_1.writePackage)(tree, json);
    };
}
//# sourceMappingURL=plugin.code-style.js.map