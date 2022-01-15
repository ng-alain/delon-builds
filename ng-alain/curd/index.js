"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function default_1(options) {
    const rules = [];
    const name = options.name || 'list';
    delete options.name;
    [
        { name: 'list', options: { name, modal: false, service: options.service } },
        { name: 'edit', options: { name: 'edit', modal: true, target: name } },
        { name: 'view', options: { name: 'view', modal: true, target: name } }
    ].forEach(item => rules.push((0, schematics_1.schematic)(item.name, Object.assign(Object.assign({}, options), item.options))));
    return (0, schematics_1.chain)(rules);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map