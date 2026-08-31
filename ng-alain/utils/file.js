"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const fs = __importStar(require("fs"));
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
    let res;
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
    var _a;
    options = Object.assign({ overwrite: false, contentIsString: false }, options);
    const isExists = options.tree.exists(options.filePath);
    if (options.overwrite || isExists) {
        try {
            let content = '';
            if (options.contentIsString) {
                content = (_a = options.content) !== null && _a !== void 0 ? _a : '';
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