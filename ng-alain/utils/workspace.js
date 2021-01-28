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
exports.removeAllowedCommonJsDependencies = exports.addAllowedCommonJsDependencies = exports.addAssetsToTarget = exports.getProject = exports.BUILD_TARGET_SERVE = exports.BUILD_TARGET_TEST = exports.BUILD_TARGET_BUILD = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
exports.BUILD_TARGET_BUILD = 'build';
exports.BUILD_TARGET_TEST = 'test';
exports.BUILD_TARGET_SERVE = 'serve';
function getProjectName(workspace, name) {
    if (name && workspace.projects.has(name)) {
        return name;
    }
    if (workspace.projects.size === 1) {
        return Array.from(workspace.projects.keys())[0];
    }
    const defaultProject = workspace.extensions.defaultProject;
    if (defaultProject && typeof defaultProject === 'string') {
        return defaultProject;
    }
    return null;
}
function getProject(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const workspace = yield workspace_1.getWorkspace(tree);
        projectName = getProjectName(workspace, projectName);
        if (!projectName || !workspace.projects.has(projectName)) {
            throw new schematics_1.SchematicsException(`No project named "${projectName}" exists.`);
        }
        const project = schematics_2.getProjectFromWorkspace(workspace, projectName);
        return { project, name: projectName };
    });
}
exports.getProject = getProject;
function addAssetsToTarget(resources, behavior, types = [exports.BUILD_TARGET_BUILD, exports.BUILD_TARGET_TEST], projectName, clean = false) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = schematics_2.getProjectFromWorkspace(workspace, projectName);
        types.forEach(buildTarget => {
            const targetOptions = schematics_2.getProjectTargetOptions(project, buildTarget);
            const styles = targetOptions.styles;
            const scripts = targetOptions.scripts;
            for (const item of resources) {
                const list = item.type === 'script' ? scripts : styles;
                if (clean === true) {
                    list.length = 0;
                }
                if (behavior === 'add') {
                    list.push(item.value);
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
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = schematics_2.getProjectFromWorkspace(workspace, projectName);
        const targetOptions = schematics_2.getProjectTargetOptions(project, exports.BUILD_TARGET_BUILD);
        let list = targetOptions.allowedCommonJsDependencies;
        if (!Array.isArray(list)) {
            list = [];
        }
        if (Array.isArray(items)) {
            list = [...list, ...items];
        }
        const result = new Set(...list);
        // in angular.json
        [
            // 'codesandbox/lib/api/define',
            'hammerjs',
            'file-saver',
            '@ant-design/colors',
            '@antv/path-util',
            '@antv/g-canvas',
            '@antv/g-base',
            '@antv/g-svg',
            '@antv/g-math',
            '@antv/attr',
            '@antv/adjust',
            '@antv/component',
            '@antv/util',
        ].forEach(key => result.add(key));
        targetOptions.allowedCommonJsDependencies = Array.from(result).sort();
    }));
}
exports.addAllowedCommonJsDependencies = addAllowedCommonJsDependencies;
function removeAllowedCommonJsDependencies(key, projectName) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = schematics_2.getProjectFromWorkspace(workspace, projectName);
        const targetOptions = schematics_2.getProjectTargetOptions(project, exports.BUILD_TARGET_BUILD);
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
//# sourceMappingURL=workspace.js.map