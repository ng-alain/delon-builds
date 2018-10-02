"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("../utils/json");
function pluginCodeStyle(options) {
    return (host, context) => {
        // package
        (options.type === 'add'
            ? json_1.addPackageToPackageJson
            : json_1.removePackageFromPackageJson)(host, ['precommit@npm run lint-staged'], 'scripts');
    };
}
exports.pluginCodeStyle = pluginCodeStyle;
//# sourceMappingURL=plugin.code-style.js.map