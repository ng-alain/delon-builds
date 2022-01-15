"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const find_module_1 = require("@schematics/angular/utility/find-module");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const ts = require("typescript");
const utils_1 = require("../utils");
function addDeclarationToNgModule(options) {
    return (tree) => {
        if (!options.module) {
            return tree;
        }
        const modulePath = (0, core_1.normalize)(`/${options.module}`);
        const text = tree.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
        }
        const sourceText = text.toString('utf-8');
        const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
        const importModulePath = (0, core_1.normalize)(`/${options.path}/${options.flat ? '' : `${core_1.strings.dasherize(options.name)}/`}${core_1.strings.dasherize(options.name)}.module`);
        const relativeDir = (0, core_1.relative)((0, core_1.dirname)(modulePath), (0, core_1.dirname)(importModulePath));
        const relativePath = `${relativeDir.startsWith('.') ? relativeDir : `./${relativeDir}`}/${(0, core_1.basename)(importModulePath)}`;
        const changes = (0, ast_utils_1.addImportToModule)(source, modulePath, core_1.strings.classify(`${options.name}Module`), relativePath);
        const recorder = tree.beginUpdate(modulePath);
        for (const change of changes) {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addRoutingModuleToTop(options) {
    return (tree) => {
        const modulePath = (0, core_1.normalize)(`${options.path}/routes-routing.module.ts`);
        if (!tree.exists(modulePath)) {
            return tree;
        }
        const sourceText = tree.read(modulePath).toString('utf-8');
        const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
        const routesNode = (0, ast_utils_1.findNode)(source, ts.SyntaxKind.Identifier, 'routes');
        if (routesNode == null || routesNode.parent == null) {
            return tree;
        }
        const parentNode = routesNode.parent;
        if (parentNode.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression ||
            parentNode.initializer.getChildCount() === 0) {
            return tree;
        }
        const childrenNode = (0, ast_utils_1.findNode)(parentNode.initializer, ts.SyntaxKind.Identifier, 'children');
        if (childrenNode == null || childrenNode.parent == null) {
            return tree;
        }
        const recorder = tree.beginUpdate(modulePath);
        const moduleName = core_1.strings.classify(`${options.name}Module`);
        const code = `{ path: '${options.name}', loadChildren: () => import('./${options.name}/${options.name}.module').then((m) => m.${moduleName}) },`;
        let pos = childrenNode.parent.end;
        // Insert it just before the `]`.
        recorder.insertRight(--pos, code);
        tree.commitUpdate(recorder);
        return tree;
    };
}
function addServiceToNgModule(options) {
    return (tree) => {
        if (options.service !== 'none')
            return tree;
        const basePath = `/${options.path}/${options.flat ? '' : `${core_1.strings.dasherize(options.name)}/`}${core_1.strings.dasherize(options.name)}`;
        const servicePath = (0, core_1.normalize)(`${basePath}.service`);
        const importModulePath = (0, core_1.normalize)(`${basePath}.module`);
        const importServicePath = (0, find_module_1.buildRelativePath)(importModulePath, servicePath);
        (0, utils_1.addProviderToModule)(tree, `${importModulePath}.ts`, core_1.strings.classify(`${options.name}Service`), importServicePath);
        return tree;
    };
}
function default_1(schema) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const proj = yield (0, utils_1.getProject)(tree, schema.project);
        (0, utils_1.refreshPathRoot)(proj.project, schema, proj.alainProject);
        if (schema.module) {
            schema.module = (0, find_module_1.findModuleFromOptions)(tree, schema);
        }
        const parsedPath = (0, parse_name_1.parseName)(schema.path, schema.name);
        schema.name = parsedPath.name;
        schema.path = parsedPath.path;
        schema.routing = true;
        schema.flat = false;
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            schema.service === 'ignore' ? (0, schematics_1.filter)(filePath => !filePath.endsWith('.service.ts.template')) : (0, schematics_1.noop)(),
            schema.routing ? (0, schematics_1.noop)() : (0, schematics_1.filter)(path => !path.endsWith('-routing.module.ts')),
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': (s) => (schema.flat ? '' : s) }), schema)),
            (0, schematics_1.move)(parsedPath.path)
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.branchAndMerge)((0, schematics_1.chain)([
                addDeclarationToNgModule(schema),
                addRoutingModuleToTop(schema),
                (0, schematics_1.mergeWith)(templateSource),
                addServiceToNgModule(schema)
            ]))
        ]);
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map