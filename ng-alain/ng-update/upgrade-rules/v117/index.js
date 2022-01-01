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
exports.v117Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function removeAjvLib(context) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach(project => {
            [utils_1.BUILD_TARGET_BUILD, utils_1.BUILD_TARGET_TEST].forEach(targetName => {
                var _a, _b;
                const targetOptions = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(targetName)) === null || _b === void 0 ? void 0 : _b.options;
                if (!targetOptions) {
                    return;
                }
                // options
                const scripts = targetOptions.scripts;
                const ajvJsPath = `node_modules/ajv/dist/ajv.bundle.js`;
                if (Array.isArray(scripts)) {
                    const idx = scripts.findIndex(w => w === ajvJsPath);
                    if (idx !== -1) {
                        scripts.splice(idx, 1);
                    }
                }
                // add allowedCommonJsDependencies
                if (targetName === utils_1.BUILD_TARGET_BUILD) {
                    let allowedCommonJsDependencies = targetOptions.allowedCommonJsDependencies;
                    if (!Array.isArray(allowedCommonJsDependencies)) {
                        allowedCommonJsDependencies = [];
                    }
                    allowedCommonJsDependencies.push(`ajv`);
                    allowedCommonJsDependencies.push(`ajv-formats`);
                    targetOptions.allowedCommonJsDependencies = allowedCommonJsDependencies;
                }
            });
        });
        (0, utils_1.logInfo)(context, `Remove ajv lib`);
    }));
}
function removeQriousLib(context) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach(project => {
            [utils_1.BUILD_TARGET_BUILD, utils_1.BUILD_TARGET_TEST].forEach(targetName => {
                var _a, _b;
                const targetOptions = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(targetName)) === null || _b === void 0 ? void 0 : _b.options;
                if (!targetOptions) {
                    return;
                }
                // options
                const scripts = targetOptions.scripts;
                const removePath = `node_modules/qrious/dist/qrious.min.js`;
                if (Array.isArray(scripts)) {
                    const idx = scripts.findIndex(w => w === removePath);
                    if (idx !== -1) {
                        scripts.splice(idx, 1);
                    }
                }
            });
        });
        (0, utils_1.logInfo)(context, `Remove qrious lib`);
    }));
}
function v117Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, versions_1.UpgradeMainVersions)(tree);
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, utils_1.removePackage)(tree, ['qrious'], 'dependencies');
        return (0, schematics_1.chain)([removeAjvLib(context), removeQriousLib(context)]);
    });
}
exports.v117Rule = v117Rule;
//# sourceMappingURL=index.js.map