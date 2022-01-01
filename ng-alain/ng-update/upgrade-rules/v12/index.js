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
const color_1 = require("@angular/cli/utilities/color");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const utils_1 = require("../../../utils");
const code_style_1 = require("../../../utils/code-style");
const versions_1 = require("../../../utils/versions");
// 修正 angular.json 的格式
function fixAngularJson(context) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
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
        (0, utils_1.logStart)(context, `Fix angular.json`);
    }));
}
function upgradeThirdVersion() {
    return (tree, context) => {
        (0, utils_1.addPackage)(tree, [`ngx-ueditor@^13.0.0`, `ngx-tinymce@^13.0.0`], 'dependencies');
        (0, utils_1.logStart)(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
    };
}
function removeThird() {
    return (tree, context) => {
        (0, utils_1.removePackage)(tree, [`ngx-countdown`], 'dependencies');
        (0, utils_1.removePackage)(tree, ['nz-tslint-rules', 'ng-alain-codelyzer'], 'devDependencies');
        (0, utils_1.logStart)(context, `Remove redundant dependencies: ngx-countdown, ng-alain-codelyzer, nz-tslint-rules`);
    };
}
function migrateESLint(tree, context) {
    return (0, workspace_1.updateWorkspace)(_ => {
        (0, utils_1.logStart)(context, `Migrate to ESLint`);
        // 新增 .eslintignore, .eslintrc.js
        ['.eslintignore', '.eslintrc.js'].forEach(f => {
            (0, utils_1.overwriteFile)({
                tree,
                filePath: f,
                content: (0, utils_1.getFileContentInApplicationFiles)(`root/${f}`),
                overwrite: true,
                contentIsString: true
            });
        });
        (0, utils_1.logInfo)(context, `Add .eslintignore, .eslintrc.js`);
        // 重命名 .prettierr -> .prettierr.js 并修正内容
        (0, utils_1.tryDelFile)(tree, '.prettierrc');
        (0, utils_1.overwriteFile)({
            tree,
            filePath: '.prettierrc.js',
            content: (0, utils_1.getFileContentInApplicationFiles)(`root/.prettierrc.js`),
            overwrite: true,
            contentIsString: true
        });
        (0, utils_1.logInfo)(context, `Rename .prettierrc -> .prettierrc.js`);
        // 更新 .vscode/settings 的 source.fixAll.tslint 为 source.fixAll.eslint
        const vscodeSettingFilePath = `.vscode/settings.json`;
        if (tree.exists(vscodeSettingFilePath)) {
            const vscodeSettingContent = (0, utils_1.readContent)(tree, vscodeSettingFilePath).replace(`source.fixAll.tslint`, `source.fixAll.eslint`);
            (0, utils_1.writeFile)(tree, vscodeSettingFilePath, vscodeSettingContent);
            (0, utils_1.logInfo)(context, `Update .vscode/settings`);
        }
        // 移除 tslint.json
        (0, utils_1.tryDelFile)(tree, 'tslint.json');
        (0, utils_1.logInfo)(context, `Remove tslint.json`);
    });
}
function upgradeHusky() {
    return (tree, context) => {
        (0, utils_1.logStart)(context, `Upgrade husky to 6.0`);
        const packageJson = (0, utils_1.readPackage)(tree);
        delete packageJson.scripts['pretty-quick'];
        delete packageJson.scripts['tslint-check'];
        packageJson.scripts['prepare'] = 'husky install';
        delete packageJson.devDependencies['pretty-quick'];
        delete packageJson['husky'];
        packageJson[code_style_1.LINT_STAGED] = code_style_1.LINT_STAGED_CONFIG;
        ['.husky/.gitignore', '.husky/pre-commit'].forEach(f => {
            (0, utils_1.overwriteFile)({
                tree,
                filePath: f,
                content: (0, utils_1.getFileContentInApplicationFiles)(`root/${f}`),
                overwrite: true,
                contentIsString: true
            });
        });
        (0, utils_1.writePackage)(tree, packageJson);
    };
}
function formatJson() {
    return (tree) => {
        const angularJson = `angular.json`;
        const json = (0, utils_1.readJSON)(tree, angularJson);
        (0, utils_1.writeJSON)(tree, angularJson, json);
    };
}
function finished() {
    return (_tree, context) => {
        context.logger.warn(color_1.colors.yellow(`  ✓  After the upgrade is complete, you still need to execute \`ng lint --fix\` to fix the code format, Abort more detail please refer to upgrade guide https://ng-alain.com/docs/style-guide`));
        context.logger.info(color_1.colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2027`));
    };
}
function v12Rule(options) {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number ${JSON.stringify(options)}`);
        (0, versions_1.UpgradeMainVersions)(tree);
        const rules = [
            migrateESLint(tree, context),
            (0, versions_1.addESLintRule)(context),
            upgradeThirdVersion(),
            removeThird(),
            upgradeHusky(),
            formatJson(),
            finished()
        ];
        if (options.fixAngularJson !== false) {
            rules.splice(0, 0, fixAngularJson(context));
        }
        return (0, schematics_1.chain)(rules);
    });
}
exports.v12Rule = v12Rule;
//# sourceMappingURL=index.js.map