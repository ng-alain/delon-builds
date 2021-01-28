"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComponentMetadata = exports.commitChanges = exports.getSourceFile = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
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
function commitChanges(tree, src, changes) {
    if (!changes || changes.length <= 0)
        return;
    const recorder = tree.beginUpdate(src);
    changes.forEach(change => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
        if (change instanceof change_1.RemoveChange) {
            // TODO: the change properties is private
            const c = change;
            const pos = c.pos;
            const toRemove = c.toRemove;
            recorder.remove(pos, toRemove.length);
        }
        if (change instanceof change_1.ReplaceChange) {
            // TODO: the change properties is private
            const c = change;
            const pos = c.pos;
            const oldText = c.oldText;
            const newText = c.newText;
            recorder.remove(pos, oldText.length);
            recorder.insertLeft(pos, newText);
        }
    });
    tree.commitUpdate(recorder);
}
exports.commitChanges = commitChanges;
function updateComponentMetadata(tree, src, callback, propertyName) {
    const source = getSourceFile(tree, src);
    const nodes = ast_utils_1.getDecoratorMetadata(source, 'Component', '@angular/core');
    if (nodes.length === 0)
        return;
    const directiveMetadata = nodes[0];
    let changes = [];
    if (propertyName) {
        const property = directiveMetadata.properties.find(p => p.name.getText() === propertyName);
        if (property)
            changes = callback(property);
    }
    else {
        changes = callback(directiveMetadata);
    }
    if (changes && changes.length > 0) {
        commitChanges(tree, src, changes);
    }
}
exports.updateComponentMetadata = updateComponentMetadata;
//# sourceMappingURL=ast.js.map