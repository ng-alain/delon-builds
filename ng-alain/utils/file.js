"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overwriteIfExists = exports.overwriteFile = exports.readContent = exports.tryAddFile = exports.tryDelFile = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const fs = require("fs");
function tryDelFile(tree, filePath) {
    if (tree.exists(filePath)) {
        tree.delete(filePath);
    }
}
exports.tryDelFile = tryDelFile;
function tryAddFile(tree, filePath, content) {
    tryDelFile(tree, filePath);
    tree.create(filePath, content);
}
exports.tryAddFile = tryAddFile;
function readContent(tree, filePath) {
    if (!tree.exists(filePath))
        return '';
    return tree.read(filePath).toString('utf-8');
}
exports.readContent = readContent;
/**
 * Overwrite files to the project
 */
function overwriteFile(options) {
    options = Object.assign({ overwrite: false, contentIsString: false }, options);
    const isExists = options.tree.exists(options.filePath);
    if (options.overwrite || isExists) {
        try {
            let content = '';
            if (options.contentIsString) {
                content = options.content;
            }
            else {
                const buffer = fs.readFileSync(options.content);
                content = buffer ? buffer.toString('utf-8') : '';
            }
            if (options.overwrite) {
                if (isExists) {
                    options.tree.delete(options.filePath);
                }
                options.tree.create(options.filePath, content);
            }
            else {
                options.tree.overwrite(options.filePath, content);
            }
        }
        catch (_a) { }
    }
    return options.tree;
}
exports.overwriteFile = overwriteFile;
function overwriteIfExists(tree) {
    return schematics_1.forEach(fileEntry => {
        if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
        }
        return fileEntry;
    });
}
exports.overwriteIfExists = overwriteIfExists;
//# sourceMappingURL=file.js.map