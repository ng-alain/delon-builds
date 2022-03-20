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
exports.buildAlain = exports.addValueToVariable = exports.addProviderToModule = exports.addImportToModule = exports.refreshPathRoot = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const find_module_1 = require("@schematics/angular/utility/find-module");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const validation_1 = require("@schematics/angular/utility/validation");
const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const ast_1 = require("./ast");
const workspace_1 = require("./workspace");
const TEMPLATE_FILENAME_RE = /\.template$/;
function buildSelector(schema, projectPrefix) {
    const ret = [];
    if (!schema.withoutPrefix) {
        if (schema.prefix) {
            ret.push(schema.prefix);
        }
        else if (schema.prefix === undefined && projectPrefix) {
            ret.push(projectPrefix);
        }
    }
    // module name
    if (schema.module) {
        ret.push(schema.module);
    }
    // target name
    if (schema.target) {
        ret.push(...schema.target.split('/'));
    }
    // name
    ret.push(core_1.strings.dasherize(schema.name));
    return ret.join('-');
}
function buildName(schema, prefix) {
    const ret = schema.withoutModulePrefixInComponentName === true ? [] : [schema.module];
    if (schema.target && schema.target.length > 0) {
        ret.push(...schema.target.split('/'));
    }
    ret.push(schema.name);
    // 服务类自动过滤 list, empty 两个页面的后缀
    if (prefix === 'Service' && ['list', 'empty'].includes(schema.name)) {
        ret.pop();
    }
    ret.push(prefix);
    return core_1.strings.classify(ret.join('-'));
}
function refreshPathRoot(project, schema, alainProject) {
    var _a;
    if (schema.path === undefined) {
        schema.path = `/${path.join(project.sourceRoot, (_a = alainProject === null || alainProject === void 0 ? void 0 : alainProject.routesRoot) !== null && _a !== void 0 ? _a : 'app/routes')}`;
    }
}
exports.refreshPathRoot = refreshPathRoot;
function resolveSchema(tree, project, schema, alainProject) {
    // module name
    if (!schema.module) {
        throw new schematics_1.SchematicsException(`Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`);
    }
    // path
    refreshPathRoot(project, schema, alainProject);
    schema.path += `/${schema.module}`;
    const parsedPath = (0, parse_name_1.parseName)(schema.path, schema.name);
    schema.name = parsedPath.name;
    schema.path = parsedPath.path;
    const rootPath = path.resolve(__dirname, '../../..');
    const fullPath = path.join(rootPath, schema.path, schema.name);
    if (fs.existsSync(fullPath) && fs.readdirSync(fullPath).length > 0) {
        throw new schematics_1.SchematicsException(`The directory (${fullPath}) already exists`);
    }
    schema.importModulePath = (0, find_module_1.findModuleFromOptions)(tree, schema);
    if (!schema._filesPath) {
        // 若基础页尝试从 `_cli-tpl/_${schema.schematicName!}` 下查找该目录，若存在则优先使用
        if (['list', 'edit', 'view', 'empty'].includes(schema.schematicName)) {
            const overrideDir = `/${[project.root, `_cli-tpl/_${schema.schematicName}`].filter(i => !!i).join('/')}`;
            const overridePath = `${overrideDir}/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts`;
            if (tree.exists(overridePath) || tree.exists(`${overridePath}.template`)) {
                // 所在目录与命令目录同属一个目录结构，因此无须特殊处理
                schema._filesPath = path.relative(__dirname, rootPath) + overrideDir;
            }
        }
        schema._filesPath = schema._filesPath || './files';
    }
    // fill target
    if (schema.target) {
        schema.path += `/${schema.target}`;
    }
    schema.routerModulePath = schema.importModulePath.replace('.module.ts', '-routing.module.ts');
    // html selector
    schema.selector = schema.selector || buildSelector(schema, project.prefix);
    (0, validation_1.validateHtmlSelector)(schema.selector);
}
function addImportToModule(tree, filePath, symbolName, fileName) {
    const source = (0, ast_1.getSourceFile)(tree, filePath);
    const change = (0, ast_utils_1.insertImport)(source, filePath, symbolName, fileName);
    if (change.path == null)
        return;
    const declarationRecorder = tree.beginUpdate(filePath);
    declarationRecorder.insertLeft(change.pos, change.toAdd);
    tree.commitUpdate(declarationRecorder);
}
exports.addImportToModule = addImportToModule;
function addProviderToModule(tree, filePath, serviceName, importPath) {
    const source = (0, ast_1.getSourceFile)(tree, filePath);
    const changes = (0, ast_utils_1.addProviderToModule)(source, filePath, serviceName, importPath);
    const declarationRecorder = tree.beginUpdate(filePath);
    changes.forEach(change => {
        if (change.path == null)
            return;
        if (change instanceof change_1.InsertChange) {
            declarationRecorder.insertLeft(change.pos, change.toAdd);
        }
    });
    tree.commitUpdate(declarationRecorder);
}
exports.addProviderToModule = addProviderToModule;
function addValueToVariable(tree, filePath, variableName, text, needWrap = true) {
    const source = (0, ast_1.getSourceFile)(tree, filePath);
    const node = (0, ast_utils_1.findNode)(source, ts.SyntaxKind.Identifier, variableName);
    if (!node) {
        throw new schematics_1.SchematicsException(`Could not find any [${variableName}] variable in path '${filePath}'.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr = node.parent.initializer;
    const change = new change_1.InsertChange(filePath, arr.end - 1, `${arr.elements && arr.elements.length > 0 ? ',' : ''}${needWrap ? '\n  ' : ''}${text}`);
    const declarationRecorder = tree.beginUpdate(filePath);
    declarationRecorder.insertLeft(change.pos, change.toAdd);
    tree.commitUpdate(declarationRecorder);
}
exports.addValueToVariable = addValueToVariable;
function getRelativePath(filePath, schema, prefix) {
    const importPath = `/${schema.path}/${schema.flat ? '' : `${core_1.strings.dasherize(schema.name)}/`}${core_1.strings.dasherize(schema.name)}.${prefix}`;
    return (0, find_module_1.buildRelativePath)(filePath, importPath);
}
function addDeclaration(schema) {
    return (tree) => {
        if (schema.skipImport || !schema.module) {
            return tree;
        }
        // imports
        addImportToModule(tree, schema.importModulePath, schema.componentName, getRelativePath(schema.importModulePath, schema, 'component'));
        addValueToVariable(tree, schema.importModulePath, 'COMPONENTS', schema.componentName);
        // component
        if (schema.modal !== true) {
            // routing
            addImportToModule(tree, schema.routerModulePath, schema.componentName, getRelativePath(schema.routerModulePath, schema, 'component'));
            addValueToVariable(tree, schema.routerModulePath, 'routes', `{ path: '${schema.name}', component: ${schema.componentName} }`);
        }
        // service
        if (schema.service === 'none') {
            addProviderToModule(tree, schema.importModulePath, schema.serviceName, getRelativePath(schema.importModulePath, schema, 'service'));
        }
        return tree;
    };
}
function buildAlain(schema) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const res = yield (0, workspace_1.getProject)(tree, schema.project);
        if (schema.project && res.name !== schema.project) {
            throw new schematics_1.SchematicsException(`The specified project does not match '${schema.project}', current: ${res.name}`);
        }
        const project = res.project;
        resolveSchema(tree, project, schema, res.alainProject);
        schema.componentName = buildName(schema, 'Component');
        schema.serviceName = buildName(schema, 'Service');
        // Don't support inline
        schema.inlineTemplate = false;
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)(schema._filesPath), [
            (0, schematics_1.filter)(filePath => !filePath.endsWith('.DS_Store')),
            schema.service === 'ignore' ? (0, schematics_1.filter)(filePath => !filePath.endsWith('.service.ts.template')) : (0, schematics_1.noop)(),
            schema.skipTests ? (0, schematics_1.filter)(filePath => !filePath.endsWith('.spec.ts.template')) : (0, schematics_1.noop)(),
            schema.inlineStyle ? (0, schematics_1.filter)(filePath => !filePath.endsWith('.__style__.template')) : (0, schematics_1.noop)(),
            schema.inlineTemplate ? (0, schematics_1.filter)(filePath => !filePath.endsWith('.html.template')) : (0, schematics_1.noop)(),
            // schema.spec ? noop() : filter(filePath => !filePath.endsWith('.spec.ts')),
            // schema.inlineStyle ? filter(filePath => !filePath.endsWith('.__styleext__')) : noop(),
            // schema.inlineTemplate ? filter(filePath => !filePath.endsWith('.html')) : noop(),
            (0, schematics_1.applyTemplates)(Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': (s) => (schema.flat ? '' : s) }), schema)),
            (0, schematics_1.move)(null, `${schema.path}/`)
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.branchAndMerge)((0, schematics_1.chain)([addDeclaration(schema), (0, schematics_1.mergeWith)(templateSource)]))]);
    });
}
exports.buildAlain = buildAlain;
//# sourceMappingURL=alain.js.map