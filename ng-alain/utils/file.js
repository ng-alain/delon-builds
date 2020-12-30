"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overwriteIfExists = exports.addFiles = exports.overwriteFiles = exports.overwriteFile = exports.readContent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const fs = require("fs");
const path_1 = require("path");
function readContent(host, filePath) {
    if (!host.exists(filePath))
        return '';
    return host.read(filePath).toString('utf-8');
}
exports.readContent = readContent;
/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
function overwriteFile(host, filePath, sourcePath, overwrite = false, sourcePathIsString = false) {
    const isExists = host.exists(filePath);
    if (overwrite || isExists) {
        try {
            let content = '';
            if (sourcePathIsString) {
                content = sourcePath;
            }
            else {
                const buffer = fs.readFileSync(sourcePath);
                content = buffer ? buffer.toString('utf-8') : '';
            }
            if (overwrite) {
                if (isExists) {
                    host.delete(filePath);
                }
                host.create(filePath, content);
            }
            else {
                host.overwrite(filePath, content);
            }
        }
        catch (_a) { }
    }
    return host;
}
exports.overwriteFile = overwriteFile;
/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
function overwriteFiles(host, files, _filePath, overwrite = false) {
    files.forEach(p => overwriteFile(host, p, path_1.join(_filePath, p), overwrite));
    return host;
}
exports.overwriteFiles = overwriteFiles;
/**
 * Add files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
function addFiles(host, files, _filePath, overwrite = false) {
    files.filter(p => overwrite || !host.exists(p)).forEach(p => overwriteFile(host, p, path_1.join(_filePath, p), true));
    return host;
}
exports.addFiles = addFiles;
function overwriteIfExists(host) {
    return schematics_1.forEach(fileEntry => {
        if (host.exists(fileEntry.path)) {
            host.overwrite(fileEntry.path, fileEntry.content);
            return null;
        }
        return fileEntry;
    });
}
exports.overwriteIfExists = overwriteIfExists;
//# sourceMappingURL=file.js.map