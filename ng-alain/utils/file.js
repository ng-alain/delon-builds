"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryDelFile = tryDelFile;
exports.tryAddFile = tryAddFile;
exports.readContent = readContent;
exports.findFile = findFile;
exports.getFileContentInApplicationFiles = getFileContentInApplicationFiles;
exports.overwriteFile = overwriteFile;
exports.overwriteIfExists = overwriteIfExists;
exports.writeFile = writeFile;
const schematics_1 = require("@angular-devkit/schematics");
const fs = require("fs");
const path_1 = require("path");
function tryDelFile(tree, filePath) {
    if (tree.exists(filePath)) {
        tree.delete(filePath);
    }
}
function tryAddFile(tree, filePath, content) {
    tryDelFile(tree, filePath);
    tree.create(filePath, content);
}
function readContent(tree, filePath) {
    if (!tree.exists(filePath))
        return '';
    return tree.read(filePath).toString('utf-8');
}
function findFile(tree, fileName) {
    let res = undefined;
    tree.visit(path => {
        if (res == null && path.endsWith(fileName)) {
            res = path;
        }
    });
    return res;
}
function getFileContentInApplicationFiles(fileName) {
    const filePath = (0, path_1.join)(__dirname, `../application/files/${fileName}`);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath).toString('utf-8');
    }
    else {
        console.warn(`Not found file: ${filePath}`);
        return '';
    }
}
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
        catch (ex) {
            console.warn(`Overwrite file error: ${ex}`);
        }
    }
    return options.tree;
}
function overwriteIfExists(tree) {
    return (0, schematics_1.forEach)(fileEntry => {
        if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
        }
        return fileEntry;
    });
}
function writeFile(tree, filePath, content) {
    if (tree.exists(filePath)) {
        tree.overwrite(filePath, content);
    }
    else {
        tree.create(filePath, content);
    }
}
//# sourceMappingURL=file.js.map