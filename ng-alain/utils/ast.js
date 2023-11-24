"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleTree = exports.addServiceToModuleOrStandalone = exports.importInStandalone = exports.findRoutesPath = exports.applyChanges = exports.getSourceFile = exports.ROUTINS_FILENAME = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ts = require("typescript");
const alain_1 = require("./alain");
exports.ROUTINS_FILENAME = 'routes.ts';
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
function applyChanges(tree, path, changes) {
    const exportRecorder = tree.beginUpdate(path);
    for (const change of changes) {
        if (change instanceof change_1.InsertChange) {
            exportRecorder.insertLeft(change.pos, change.toAdd);
        }
    }
    tree.commitUpdate(exportRecorder);
}
exports.applyChanges = applyChanges;
function getComponentMetadata(source) {
    const allNodes = (0, ast_utils_1.getSourceNodes)(source);
    const identifier = 'Component';
    return allNodes
        .filter(node => {
        return (node.kind == ts.SyntaxKind.Decorator && node.expression.kind == ts.SyntaxKind.CallExpression);
    })
        .map(node => node.expression)
        .filter(expr => {
        if (expr.expression.kind == ts.SyntaxKind.Identifier) {
            const id = expr.expression;
            return id.text == identifier;
        }
        return false;
    })
        .filter(expr => expr.arguments[0] && expr.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression)
        .map(expr => expr.arguments[0]);
}
function addSymbolToComponentMetadata(source, filePath, symbolName, metadataField = 'imports') {
    const nodes = getComponentMetadata(source);
    if (nodes.length <= 0)
        return [];
    const node = nodes[0];
    if (!node || !ts.isObjectLiteralExpression(node)) {
        return [];
    }
    // Get all the children property assignment of object literals.
    const matchingProperties = (0, ast_utils_1.getMetadataField)(node, metadataField);
    if (matchingProperties.length == 0) {
        // We haven't found the field in the metadata declaration. Insert a new field.
        let position;
        let toInsert;
        if (node.properties.length == 0) {
            position = node.getEnd() - 1;
            toInsert = `\n  ${metadataField}: [\n${core_1.tags.indentBy(4) `${symbolName}`}\n  ]\n`;
        }
        else {
            const childNode = node.properties[node.properties.length - 1];
            position = childNode.getEnd();
            // Get the indentation of the last element, if any.
            const text = childNode.getFullText(source);
            const matches = text.match(/^(\r?\n)(\s*)/);
            if (matches) {
                toInsert =
                    `,${matches[0]}${metadataField}: [${matches[1]}` +
                        `${core_1.tags.indentBy(matches[2].length + 2) `${symbolName}`}${matches[0]}]`;
            }
            else {
                toInsert = `, ${metadataField}: [${symbolName}]`;
            }
        }
        return [new change_1.InsertChange(filePath, position, toInsert)];
    }
    const assignment = matchingProperties[0];
    // If it's not an array, nothing we can do really.
    if (!ts.isPropertyAssignment(assignment) || !ts.isArrayLiteralExpression(assignment.initializer)) {
        return [];
    }
    let expresssion;
    const assignmentInit = assignment.initializer;
    const elements = assignmentInit.elements;
    if (elements.length) {
        const symbolsArray = elements.map(node => core_1.tags.oneLine `${node.getText()}`);
        if (symbolsArray.includes(core_1.tags.oneLine `${symbolName}`)) {
            return [];
        }
        expresssion = elements[elements.length - 1];
    }
    else {
        expresssion = assignmentInit;
    }
    let toInsert;
    let position = expresssion.getEnd();
    if (ts.isArrayLiteralExpression(expresssion)) {
        // We found the field but it's empty. Insert it just before the `]`.
        position--;
        toInsert = `\n${core_1.tags.indentBy(4) `${symbolName}`}\n  `;
    }
    else {
        // Get the indentation of the last element, if any.
        const text = expresssion.getFullText(source);
        const matches = text.match(/^(\r?\n)(\s*)/);
        if (matches) {
            toInsert = `,${matches[1]}${core_1.tags.indentBy(matches[2].length) `${symbolName}`}`;
        }
        else {
            toInsert = `, ${symbolName}`;
        }
    }
    return [new change_1.InsertChange(filePath, position, toInsert)];
}
function findRoutesPath(tree, path) {
    let dir = tree.getDir(path);
    while (dir) {
        const found = dir.subfiles.filter(p => p.endsWith(exports.ROUTINS_FILENAME));
        if (found.length > 0) {
            return (0, core_1.normalize)(`${dir.path}/${exports.ROUTINS_FILENAME}`);
        }
        dir = dir.parent;
    }
    return '';
}
exports.findRoutesPath = findRoutesPath;
function importInStandalone(tree, filePath, componentName, componentPath, metadataField = 'imports') {
    // imports
    (0, alain_1.addImportToModule)(tree, filePath, componentName, componentPath);
    // import in component
    const source = getSourceFile(tree, filePath);
    const changes = addSymbolToComponentMetadata(source, filePath, componentName, metadataField);
    applyChanges(tree, filePath, changes);
}
exports.importInStandalone = importInStandalone;
function addServiceToModuleOrStandalone(tree, standalone, filePath, serviceName, importPath) {
    const source = getSourceFile(tree, filePath);
    if (standalone) {
        importInStandalone(tree, filePath, serviceName, importPath, 'provides');
    }
    else {
        const changes = (0, ast_utils_1.addProviderToModule)(source, filePath, serviceName, importPath);
        applyChanges(tree, filePath, changes);
    }
}
exports.addServiceToModuleOrStandalone = addServiceToModuleOrStandalone;
function consoleTree(tree) {
    tree.visit(filePath => {
        console.log(filePath);
    });
}
exports.consoleTree = consoleTree;
//# sourceMappingURL=ast.js.map