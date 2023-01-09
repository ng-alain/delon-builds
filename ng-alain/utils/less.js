"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImportNotation = void 0;
const json_1 = require("./json");
function addImportNotation(value = true) {
    return (tree) => {
        const filePath = '.stylelintrc';
        const json = (0, json_1.readJSON)(tree, filePath);
        if (json == null)
            return tree;
        if (!json.rules)
            json.rules = {};
        json.rules['import-notation'] = 'string';
        (0, json_1.writeJSON)(tree, filePath, json);
        return tree;
    };
}
exports.addImportNotation = addImportNotation;
//# sourceMappingURL=less.js.map