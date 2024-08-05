"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../utils");
function default_1(options) {
    return (0, schematics_1.chain)([(0, utils_1.buildAlain)(Object.assign({ schematicName: 'view' }, options))]);
}
//# sourceMappingURL=index.js.map