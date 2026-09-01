"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
exports.modifyJSON = modifyJSON;
const jsonc_parser_1 = require("jsonc-parser");
function readJSON(tree, jsonFile, type) {
    if (!tree.exists(jsonFile))
        return null;
    const sourceText = tree.read(jsonFile).toString('utf-8');
    try {
        const json = (0, jsonc_parser_1.parse)(sourceText);
        if (type && !json[type]) {
            json[type] = {};
        }
        return json;
    }
    catch (ex) {
        console.log(`Can't parse json file (${jsonFile}), pls check for comments or trailing commas, or validate json via https://jsonlint.com/`);
        throw ex;
    }
}
function writeJSON(tree, jsonFile, json) {
    tree.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
function modifyJSON(tree, jsonPath, modifies, options) {
    if (!tree.exists(jsonPath))
        return;
    const sourceText = tree.read(jsonPath).toString('utf-8');
    const edits = (Array.isArray(modifies) ? modifies : [modifies]).flatMap(item => (0, jsonc_parser_1.modify)(sourceText, item.path, item.value, options !== null && options !== void 0 ? options : {
        formattingOptions: {
            insertSpaces: true,
            tabSize: 2,
            eol: '\n',
            keepLines: false
        }
    }));
    // `applyEdits` sorts all edits by offset and applies them back-to-front,
    // so multiple non-overlapping edits are applied in a single pass.
    tree.overwrite(jsonPath, (0, jsonc_parser_1.applyEdits)(sourceText, edits));
}
//# sourceMappingURL=json.js.map