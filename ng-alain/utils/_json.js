"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSON = exports.readJSON = void 0;
const jsonc_parser_1 = require("jsonc-parser");
function readJSON(tree, jsonFile, type) {
    if (!tree.exists(jsonFile))
        return null;
    const sourceText = tree.read(jsonFile).toString('utf-8');
    try {
        const json = jsonc_parser_1.parse(sourceText);
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
exports.readJSON = readJSON;
function writeJSON(tree, jsonFile, json) {
    tree.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
exports.writeJSON = writeJSON;
//# sourceMappingURL=_json.js.map