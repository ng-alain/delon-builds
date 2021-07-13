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
exports.v12Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
// 修正 angular.json 的格式
function fixAngularJson(context) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach((project, name) => {
            const removeKeys = [
                'aot',
                'vendorChunk',
                'extractLicenses',
                'buildOptimizer',
                'sourceMap',
                'optimization',
                'namedChunks'
            ];
            const build = project.targets.get(utils_1.BUILD_TARGET_BUILD);
            if (build == null)
                throw new Error(`Can't find build node in angular.json`);
            const buildOptions = build.options;
            removeKeys.forEach(key => delete buildOptions[key]);
            const prodConfigurations = build === null || build === void 0 ? void 0 : build.configurations.production;
            removeKeys.forEach(key => delete prodConfigurations[key]);
            build.configurations.development = {
                buildOptimizer: false,
                optimization: false,
                vendorChunk: true,
                extractLicenses: false,
                sourceMap: true,
                namedChunks: true
            };
            build.defaultConfiguration = 'production';
            // serve
            const serve = project.targets.get(utils_1.BUILD_TARGET_SERVE);
            if (serve == null)
                throw new Error(`Can't find serve node in angular.json`);
            serve.configurations.development = {
                browserTarget: `${name}:build:development`
            };
            serve.defaultConfiguration = 'development';
        });
        utils_1.logStart(context, `Fix angular.json`);
    }));
}
function upgradeThirdVersion() {
    return (tree, context) => {
        utils_1.addPackage(tree, [`tslib@^2.2.0`, `ngx-ueditor@^12.0.0`, `ngx-tinymce@^12.0.0`], 'dependencies');
        utils_1.logStart(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
    };
}
function removeThird() {
    return (tree, context) => {
        utils_1.removePackage(tree, ['ng-alain-codelyzer', `ngx-countdown`], 'dependencies');
        utils_1.logStart(context, `Remove redundant dependencies: ng-alain-codelyzer, ngx-countdown`);
    };
}
function migrateESLint(context) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        utils_1.logStart(context, `Migrate to ESLint`);
        // 新增 .eslintignore, .eslintrc.js
        utils_1.logInfo(context, `Add .eslintignore, .eslintrc.js`);
        // 重命名 .prettierr -> .prettierr.js 并修正内容
        utils_1.logInfo(context, `Rename .prettierr -> .prettierr.js`);
        // 更新 .vscode/settings 的 source.fixAll.tslint 为 source.fixAll.eslint
        utils_1.logInfo(context, `Update .vscode/settings`);
        // 移除 tslint.json
        utils_1.logInfo(context, `Remove tslint.json`);
    }));
}
function fixPackageJson() {
    return (tree, context) => {
        const packageJson = utils_1.readPackage(tree);
        delete packageJson.scripts['pretty-quick'];
        delete packageJson.scripts['tslint-check'];
        packageJson.scripts['prepare'] = 'husky install';
        delete packageJson.devDependencies['pretty-quick'];
        utils_1.logStart(context, `Update package.json`);
    };
}
function v12Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        utils_1.logStart(context, `Upgrade @delon/* version number`);
        versions_1.UpgradeMainVersions(tree);
        return schematics_1.chain([
            fixAngularJson(context),
            migrateESLint(context),
            versions_1.addESLintRule(context),
            upgradeThirdVersion(),
            removeThird(),
            fixPackageJson()
        ]);
    });
}
exports.v12Rule = v12Rule;
//# sourceMappingURL=index.js.map