"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginCodeStyle = void 0;
const utils_1 = require("../utils");
function pluginCodeStyle(options) {
    return (host) => {
        const json = utils_1.readPackage(host);
        if (json == null)
            return;
        if (options.type === 'add') {
            json.husky = {
                hooks: {
                    'pre-commit': 'pretty-quick --staged',
                },
            };
        }
        else {
            delete json.husky;
        }
        utils_1.writePackage(host, json);
    };
}
exports.pluginCodeStyle = pluginCodeStyle;
//# sourceMappingURL=plugin.code-style.js.map