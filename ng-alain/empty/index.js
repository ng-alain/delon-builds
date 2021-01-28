"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../utils");
function default_1(options) {
    return schematics_1.chain([utils_1.buildAlain(Object.assign({ schematicName: 'empty' }, options))]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map