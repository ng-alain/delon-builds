"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginCodeStyle = void 0;
const json_1 = require("../utils/json");
function pluginCodeStyle(options) {
    return (host) => {
        const json = json_1.getJSON(host, 'package.json');
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
        json_1.overwritePackage(host, json);
    };
}
exports.pluginCodeStyle = pluginCodeStyle;
//# sourceMappingURL=plugin.code-style.js.map