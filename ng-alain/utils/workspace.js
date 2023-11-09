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
exports.addFileReplacements = exports.addSchematicCollections = exports.addStylePreprocessorOptions = exports.getProjectTarget = exports.getProjectFromWorkspace = exports.addAllowSyntheticDefaultImports = exports.removeAllowedCommonJsDependencies = exports.addAllowedCommonJsDependencies = exports.addAssetsToTarget = exports.getProject = exports.isMulitProject = exports.writeNgAlainJson = exports.getNgAlainJson = exports.getProjectName = exports.DEFAULT_WORKSPACE_PATH = exports.NG_ALAIN_JSON = exports.BUILD_TARGET_LINT = exports.BUILD_TARGET_SERVE = exports.BUILD_TARGET_TEST = exports.BUILD_TARGET_BUILD = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const json_1 = require("./json");
exports.BUILD_TARGET_BUILD = 'build';
exports.BUILD_TARGET_TEST = 'test';
exports.BUILD_TARGET_SERVE = 'serve';
exports.BUILD_TARGET_LINT = 'lint';
exports.NG_ALAIN_JSON = `ng-alain.json`;
exports.DEFAULT_WORKSPACE_PATH = `/angular.json`;
function getProjectName(workspace, name) {
    var _a;
    if (name && workspace.projects.has(name)) {
        return name;
    }
    return (_a = Array.from(workspace.projects.keys()).pop()) !== null && _a !== void 0 ? _a : null;
}
exports.getProjectName = getProjectName;
function getNgAlainJson(tree) {
    if (!tree.exists(exports.NG_ALAIN_JSON))
        return undefined;
    return (0, json_1.readJSON)(tree, exports.NG_ALAIN_JSON);
}
exports.getNgAlainJson = getNgAlainJson;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function writeNgAlainJson(tree, json) {
    return (0, json_1.writeJSON)(tree, exports.NG_ALAIN_JSON, json);
}
exports.writeNgAlainJson = writeNgAlainJson;
function isMulitProject(tree) {
    return !tree.exists('src/main.ts');
}
exports.isMulitProject = isMulitProject;
function getProject(tree, projectName) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const workspace = yield (0, workspace_1.getWorkspace)(tree);
        projectName = getProjectName(workspace, projectName);
        if (!projectName || !workspace.projects.has(projectName)) {
            throw new schematics_1.SchematicsException(`No project named "${projectName}" exists.`);
        }
        const project = getProjectFromWorkspace(workspace, projectName);
        const alainProject = (_c = ((_b = (_a = getNgAlainJson(tree)) === null || _a === void 0 ? void 0 : _a.projects) !== null && _b !== void 0 ? _b : {})[projectName]) !== null && _c !== void 0 ? _c : {};
        return { project, name: projectName, alainProject };
    });
}
exports.getProject = getProject;
function addAssetsToTarget(resources, behavior, types = [exports.BUILD_TARGET_BUILD, exports.BUILD_TARGET_TEST], projectName, clean = false) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = getProjectFromWorkspace(workspace, projectName);
        types.forEach(buildTarget => {
            const targetOptions = getProjectTarget(project, buildTarget);
            const styles = targetOptions.styles;
            const scripts = targetOptions.scripts;
            for (const item of resources) {
                const list = item.type === 'script' ? scripts : styles;
                if (clean === true) {
                    list.length = 0;
                }
                if (behavior === 'add') {
                    if (!list.includes(item.value)) {
                        list.push(item.value);
                    }
                }
                else {
                    const idx = list.indexOf(item.value);
                    if (idx !== -1) {
                        list.splice(idx, 1);
                    }
                }
            }
        });
    }));
}
exports.addAssetsToTarget = addAssetsToTarget;
function addAllowedCommonJsDependencies(items, projectName) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = getProjectFromWorkspace(workspace, projectName);
        const targetOptions = getProjectTarget(project, exports.BUILD_TARGET_BUILD);
        let list = targetOptions.allowedCommonJsDependencies;
        if (!Array.isArray(list)) {
            list = [];
        }
        if (Array.isArray(items)) {
            list = [...list, ...items];
        }
        const result = new Set(list);
        ['ajv', 'ajv-formats', 'mockjs', 'file-saver', 'extend'].forEach(key => result.add(key));
        targetOptions.allowedCommonJsDependencies = Array.from(result).sort();
    }));
}
exports.addAllowedCommonJsDependencies = addAllowedCommonJsDependencies;
function removeAllowedCommonJsDependencies(key, projectName) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = getProjectFromWorkspace(workspace, projectName);
        const targetOptions = getProjectTarget(project, exports.BUILD_TARGET_BUILD);
        const list = targetOptions.allowedCommonJsDependencies;
        if (!Array.isArray(list)) {
            return;
        }
        const pos = list.indexOf(key);
        if (pos === -1)
            return;
        list.splice(pos, 1);
        targetOptions.allowedCommonJsDependencies = list.sort();
    }));
}
exports.removeAllowedCommonJsDependencies = removeAllowedCommonJsDependencies;
function addAllowSyntheticDefaultImports(value = true) {
    return (tree) => {
        const json = (0, json_1.readJSON)(tree, 'tsconfig.json', 'compilerOptions');
        if (json == null)
            return tree;
        if (!json.compilerOptions)
            json.compilerOptions = {};
        json.compilerOptions['allowSyntheticDefaultImports'] = value;
        (0, json_1.writeJSON)(tree, 'tsconfig.json', json);
        return tree;
    };
}
exports.addAllowSyntheticDefaultImports = addAllowSyntheticDefaultImports;
function getProjectFromWorkspace(workspace, projectName) {
    var _a;
    if (!projectName) {
        projectName = (_a = Array.from(workspace.projects.keys()).pop()) !== null && _a !== void 0 ? _a : null;
    }
    const project = workspace.projects.get(projectName);
    if (!project) {
        throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
    }
    return project;
}
exports.getProjectFromWorkspace = getProjectFromWorkspace;
function getProjectTarget(project, buildTarget, type = 'options') {
    var _a, _b;
    const options = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(buildTarget)) === null || _b === void 0 ? void 0 : _b[type];
    if (!options) {
        throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.${type}.`);
    }
    return options;
}
exports.getProjectTarget = getProjectTarget;
function addStylePreprocessorOptions(workspace, projectName) {
    var _a;
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const build = project.targets.get(exports.BUILD_TARGET_BUILD);
    if (build == null || build.options == null)
        return;
    if (build.options.stylePreprocessorOptions == null) {
        build.options.stylePreprocessorOptions = {};
    }
    let includePaths = (_a = build.options.stylePreprocessorOptions['includePaths']) !== null && _a !== void 0 ? _a : [];
    if (!Array.isArray(includePaths))
        includePaths = [];
    if (includePaths.includes(`node_modules/`))
        return;
    includePaths.push(`node_modules/`);
    build.options.stylePreprocessorOptions['includePaths'] = includePaths;
}
exports.addStylePreprocessorOptions = addStylePreprocessorOptions;
function addSchematicCollections(workspace) {
    const cli = workspace.extensions.cli;
    if (cli && cli.schematicCollections)
        return;
    if (cli == null)
        workspace.extensions.cli = {};
    let schematicCollections = workspace.extensions.cli['schematicCollections'];
    if (!Array.isArray(schematicCollections))
        schematicCollections = [];
    if (!schematicCollections.includes(`@schematics/angular`))
        schematicCollections.push(`@schematics/angular`);
    if (!schematicCollections.includes(`ng-alain`))
        schematicCollections.push(`ng-alain`);
    workspace.extensions.cli['schematicCollections'] = schematicCollections;
}
exports.addSchematicCollections = addSchematicCollections;
function addFileReplacements(workspace, projectName) {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const build = project.targets.get(exports.BUILD_TARGET_BUILD);
    if (build == null || build.options == null)
        return;
    if (build.configurations == null)
        build.configurations = {};
    if (build.configurations.production == null)
        build.configurations.production = {};
    if (!Array.isArray(build.configurations.production.fileReplacements))
        build.configurations.production.fileReplacements = [];
    build.configurations.production.fileReplacements.push({
        replace: 'src/environments/environment.ts',
        with: 'src/environments/environment.prod.ts'
    });
}
exports.addFileReplacements = addFileReplacements;
//# sourceMappingURL=workspace.js.map