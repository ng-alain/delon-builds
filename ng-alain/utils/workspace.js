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
exports.DEFAULT_WORKSPACE_PATH = exports.NG_ALAIN_JSON = exports.BUILD_TARGET_LINT = exports.BUILD_TARGET_SERVE = exports.BUILD_TARGET_TEST = exports.BUILD_TARGET_BUILD = void 0;
exports.getProjectName = getProjectName;
exports.getNgAlainJson = getNgAlainJson;
exports.writeNgAlainJson = writeNgAlainJson;
exports.isMulitProject = isMulitProject;
exports.getProject = getProject;
exports.addAssetsToTarget = addAssetsToTarget;
exports.addAllowedCommonJsDependencies = addAllowedCommonJsDependencies;
exports.removeAllowedCommonJsDependencies = removeAllowedCommonJsDependencies;
exports.addAllowSyntheticDefaultImports = addAllowSyntheticDefaultImports;
exports.getProjectFromWorkspace = getProjectFromWorkspace;
exports.getProjectTarget = getProjectTarget;
exports.addStylePreprocessorOptions = addStylePreprocessorOptions;
exports.addStyleResources = addStyleResources;
exports.addSchematicCollections = addSchematicCollections;
exports.addFileReplacements = addFileReplacements;
exports.addViTestConfig = addViTestConfig;
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
function getNgAlainJson(tree) {
    if (!tree.exists(exports.NG_ALAIN_JSON))
        return undefined;
    return (0, json_1.readJSON)(tree, exports.NG_ALAIN_JSON);
}
function writeNgAlainJson(tree, json) {
    return (0, json_1.writeJSON)(tree, exports.NG_ALAIN_JSON, json);
}
function isMulitProject(tree) {
    return !tree.exists('src/main.ts');
}
function getProject(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const workspace = yield (0, workspace_1.getWorkspace)(tree);
        projectName = (_a = getProjectName(workspace, projectName)) !== null && _a !== void 0 ? _a : undefined;
        if (!projectName || !workspace.projects.has(projectName)) {
            throw new schematics_1.SchematicsException(`No project named "${projectName}" exists.`);
        }
        const project = getProjectFromWorkspace(workspace, projectName);
        const alainProject = (_d = ((_c = (_b = getNgAlainJson(tree)) === null || _b === void 0 ? void 0 : _b.projects) !== null && _c !== void 0 ? _c : {})[projectName]) !== null && _d !== void 0 ? _d : {};
        return { project, name: projectName, alainProject };
    });
}
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
function addAllowSyntheticDefaultImports(value = true) {
    return (tree) => {
        (0, json_1.modifyJSON)(tree, 'tsconfig.json', { path: ['compilerOptions', 'allowSyntheticDefaultImports'], value });
        return tree;
    };
}
function getProjectFromWorkspace(workspace, projectName) {
    var _a;
    if (!projectName) {
        projectName = (_a = Array.from(workspace.projects.keys()).pop()) !== null && _a !== void 0 ? _a : '';
    }
    const project = workspace.projects.get(projectName);
    if (!project) {
        throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
    }
    return project;
}
function getProjectTarget(project, buildTarget, type = 'options') {
    var _a, _b;
    const options = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(buildTarget)) === null || _b === void 0 ? void 0 : _b[type];
    if (!options) {
        throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.${type}.`);
    }
    return options;
}
function addStylePreprocessorOptions(workspace, projectName) {
    var _a, _b;
    var _c;
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const build = project.targets.get(exports.BUILD_TARGET_BUILD);
    if (build == null || build.options == null)
        return;
    const stylePreprocessorOptions = ((_a = (_c = build.options).stylePreprocessorOptions) !== null && _a !== void 0 ? _a : (_c.stylePreprocessorOptions = {}));
    let includePaths = (_b = stylePreprocessorOptions.includePaths) !== null && _b !== void 0 ? _b : [];
    if (!Array.isArray(includePaths))
        includePaths = [];
    if (includePaths.includes(`node_modules/`))
        return;
    includePaths.push(`node_modules/`);
    stylePreprocessorOptions.includePaths = includePaths;
}
function addStyleResources(workspace, projectName) {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const build = project.targets.get(exports.BUILD_TARGET_BUILD);
    if (build == null || build.options == null)
        return;
    if (!Array.isArray(build.options.assets))
        build.options.assets = [];
    build.options.assets.push(`src/assets`);
}
function addSchematicCollections(workspace) {
    var _a, _b;
    var _c;
    const cli = ((_a = (_c = workspace.extensions).cli) !== null && _a !== void 0 ? _a : (_c.cli = {}));
    if (cli.schematicCollections)
        return;
    const schematicCollections = (_b = cli.schematicCollections) !== null && _b !== void 0 ? _b : [];
    if (!schematicCollections.includes(`@schematics/angular`))
        schematicCollections.push(`@schematics/angular`);
    if (!schematicCollections.includes(`ng-alain`))
        schematicCollections.push(`ng-alain`);
    cli.schematicCollections = schematicCollections;
}
function addFileReplacements(workspace, projectName) {
    var _a, _b;
    var _c;
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const build = project.targets.get(exports.BUILD_TARGET_BUILD);
    if (build == null || build.options == null)
        return;
    const production = ((_b = (_c = ((_a = build.configurations) !== null && _a !== void 0 ? _a : (build.configurations = {}))).production) !== null && _b !== void 0 ? _b : (_c.production = {}));
    if (!Array.isArray(production.fileReplacements))
        production.fileReplacements = [];
    production.fileReplacements.push({
        replace: 'src/environments/environment.ts',
        with: 'src/environments/environment.prod.ts'
    });
}
function addViTestConfig(workspace, projectName) {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null)
        return;
    const test = project.targets.get(exports.BUILD_TARGET_TEST);
    if (test == null)
        return;
    if (test.options == null)
        test.options = {};
    test.options['browsers'] = 'chromium';
    test.options['runnerConfig'] = 'vitest.config.ts';
    if (test.configurations == null)
        test.configurations = {};
    if (test.configurations['coverage'] == null)
        test.configurations['coverage'] = {};
    test.configurations['coverage']['coverageReporters'] = ['lcov'];
    test.configurations['coverage']['browsers'] = ['ChromiumHeadless'];
}
//# sourceMappingURL=workspace.js.map