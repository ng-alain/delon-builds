"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryAddFile = exports.tryDelFile = exports.buildAlain = exports.addValueToVariable = void 0;
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
const project_1 = require("./project");
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
function buildComponentName(schema, _projectPrefix) {
    const ret = [schema.module];
    if (schema.target && schema.target.length > 0) {
        ret.push(...schema.target.split('/'));
    }
    ret.push(schema.name);
    ret.push(`Component`);
    return core_1.strings.classify(ret.join('-'));
}
function resolveSchema(host, project, schema) {
    // module name
    if (!schema.module) {
        throw new schematics_1.SchematicsException(`Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`);
    }
    // path
    if (schema.path === undefined) {
        const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
        schema.path = `/${project.sourceRoot}/${projectDirName}/routes`;
    }
    schema.path += `/${schema.module}`;
    const parsedPath = parse_name_1.parseName(schema.path, schema.name);
    schema.name = parsedPath.name;
    schema.path = parsedPath.path;
    const fullPath = path.join(process.cwd(), schema.path, schema.name);
    if (fs.existsSync(fullPath)) {
        throw new schematics_1.SchematicsException(`The directory (${fullPath}) already exists`);
    }
    schema.importModulePath = find_module_1.findModuleFromOptions(host, schema);
    if (!schema._filesPath) {
        // 若基础页尝试从 `_cli-tpl/_${schema.schematicName!}` 下查找该目录，若存在则优先使用
        if (['list', 'edit', 'view', 'empty'].includes(schema.schematicName)) {
            const overrideDir = '/' + [project.root, `_cli-tpl/_${schema.schematicName}`].filter(i => !!i).join('/');
            const overridePath = `${overrideDir}/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts`;
            if (host.exists(overridePath)) {
                // 所在目录与命令目录同属一个目录结构，因此无须特殊处理
                schema._filesPath = path.relative(__dirname, process.cwd()) + overrideDir;
            }
        }
        schema._filesPath = schema._filesPath || './files';
    }
    // fill target
    if (schema.target) {
        schema.path += '/' + schema.target;
    }
    schema.routerModulePath = schema.importModulePath.replace('.module.ts', '-routing.module.ts');
    // html selector
    schema.selector = schema.selector || buildSelector(schema, project.prefix);
    validation_1.validateName(schema.name);
    validation_1.validateHtmlSelector(schema.selector);
}
function addImportToModule(host, filePath, symbolName, fileName) {
    const source = ast_1.getSourceFile(host, filePath);
    const change = ast_utils_1.insertImport(source, filePath, symbolName, fileName);
    const declarationRecorder = host.beginUpdate(filePath);
    declarationRecorder.insertLeft(change.pos, change.toAdd);
    host.commitUpdate(declarationRecorder);
}
function addValueToVariable(host, filePath, variableName, text, needWrap = true) {
    const source = ast_1.getSourceFile(host, filePath);
    const node = ast_utils_1.findNode(source, ts.SyntaxKind.Identifier, variableName);
    if (!node) {
        throw new schematics_1.SchematicsException(`Could not find any [${variableName}] variable in path '${filePath}'.`);
    }
    const arr = node.parent.initializer;
    const change = new change_1.InsertChange(filePath, arr.end - 1, `${arr.elements && arr.elements.length > 0 ? ',' : ''}${needWrap ? '\n  ' : ''}${text}`);
    const declarationRecorder = host.beginUpdate(filePath);
    declarationRecorder.insertLeft(change.pos, change.toAdd);
    host.commitUpdate(declarationRecorder);
}
exports.addValueToVariable = addValueToVariable;
function getRelativePath(filePath, schema) {
    const importPath = `/${schema.path}/${schema.flat ? '' : core_1.strings.dasherize(schema.name) + '/'}${core_1.strings.dasherize(schema.name)}.component`;
    return find_module_1.buildRelativePath(filePath, importPath);
}
function addDeclaration(schema) {
    return (host) => {
        if (schema.skipImport || !schema.module) {
            return host;
        }
        // imports
        addImportToModule(host, schema.importModulePath, schema.componentName, getRelativePath(schema.importModulePath, schema));
        // component
        if (schema.modal === true) {
            addValueToVariable(host, schema.importModulePath, 'COMPONENTS_NOROUNT', schema.componentName);
        }
        else {
            addValueToVariable(host, schema.importModulePath, 'COMPONENTS', schema.componentName);
            // routing
            addImportToModule(host, schema.routerModulePath, schema.componentName, getRelativePath(schema.routerModulePath, schema));
            addValueToVariable(host, schema.routerModulePath, 'routes', `{ path: '${schema.name}', component: ${schema.componentName} }`);
        }
        return host;
    };
}
function buildAlain(schema) {
    return (host, context) => {
        const project = project_1.getProject(host, schema.project);
        resolveSchema(host, project, schema);
        schema.componentName = buildComponentName(schema, project.prefix);
        // Don't support inline
        schema.inlineTemplate = false;
        const templateSource = schematics_1.apply(schematics_1.url(schema._filesPath), [
            schematics_1.filter(filePath => !filePath.endsWith('.DS_Store')),
            schema.spec ? schematics_1.noop() : schematics_1.filter(filePath => !filePath.endsWith('.spec.ts')),
            schema.inlineStyle ? schematics_1.filter(filePath => !filePath.endsWith('.__styleext__')) : schematics_1.noop(),
            schema.inlineTemplate ? schematics_1.filter(filePath => !filePath.endsWith('.html')) : schematics_1.noop(),
            schematics_1.template(Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': (s) => (schema.flat ? '' : s) }), schema)),
            schematics_1.move(null, schema.path + '/'),
        ]);
        return schematics_1.chain([schematics_1.branchAndMerge(schematics_1.chain([addDeclaration(schema), schematics_1.mergeWith(templateSource)]))])(host, context);
    };
}
exports.buildAlain = buildAlain;
function tryDelFile(host, filePath) {
    if (host.exists(filePath)) {
        host.delete(filePath);
    }
}
exports.tryDelFile = tryDelFile;
function tryAddFile(host, filePath, content) {
    tryDelFile(host, filePath);
    host.create(filePath, content);
}
exports.tryAddFile = tryAddFile;
//# sourceMappingURL=alain.js.map