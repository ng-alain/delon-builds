"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFile = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
/** Reads file given path and returns TypeScript source file. */
function getSourceFile(tree, path) {
    const buffer = tree.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    const content = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
exports.getSourceFile = getSourceFile;
//# sourceMappingURL=ast.js.map