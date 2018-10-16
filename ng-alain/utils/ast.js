"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const ast_utils_1 = require("./devkit-utils/ast-utils");
const change_1 = require("./devkit-utils/change");
/** Reads file given path and returns TypeScript source file. */
function getSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    const content = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
exports.getSourceFile = getSourceFile;
function updateComponentMetadata(host, src, callback) {
    const source = getSourceFile(host, src);
    if (!src) {
        throw new schematics_1.SchematicsException(`Component not found: ${src}`);
    }
    const nodes = ast_utils_1.getDecoratorMetadata(source, 'Component', '@angular/core');
    const changes = callback(nodes);
    const recorder = host.beginUpdate(src);
    changes.forEach(change => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    });
    host.commitUpdate(recorder);
}
exports.updateComponentMetadata = updateComponentMetadata;
//# sourceMappingURL=ast.js.map