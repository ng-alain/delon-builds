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
exports.v13Rule = void 0;
const color_1 = require("@angular/cli/utilities/color");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const workspace_1 = require("@schematics/angular/utility/workspace");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function addStylePreprocessorOptions() {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.addStylePreprocessorOptionsToAllProject)(workspace);
    }));
}
// Using ~ is deprecated and can be removed from your code
function fixLessResolver() {
    return (tree, context) => {
        (0, utils_1.logStart)(context, `Removed deprecated ~ in less file, pls refer to https://github.com/webpack-contrib/less-loader#imports`);
        tree.visit(path => {
            if (!path.endsWith(`.less`))
                return;
            const content = tree
                .read(path)
                .toString('utf8')
                .replace(/^(@import ['"]{1})~/gm, '$1');
            tree.overwrite(path, content);
        });
    };
}
function removeIE() {
    return (tree, context) => {
        const pkg = (0, utils_1.readPackage)(tree);
        if (pkg.scripts && !pkg.scripts['ie:start'])
            return;
        context.logger.warn(color_1.colors.yellow(`TIPS: Starting from NG-ALAIN 13 will no longer support IE`));
    };
}
function addYarn(context) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const cli = workspace.extensions.cli;
        if (cli && cli.packageManager)
            return;
        if (cli == null)
            workspace.extensions.cli = {};
        workspace.extensions.cli['packageManager'] = 'yarn';
        (0, utils_1.logStart)(context, `Configuration optimization using Yarn to install dependencies`);
    }));
}
function upgradeKarmaCoverage() {
    return (tree, context) => {
        const karmaConfJs = 'karma.conf.js';
        const pkg = (0, utils_1.readPackage)(tree);
        if (!pkg.devDependencies || !pkg.devDependencies['karma-coverage-istanbul-reporter'] || !tree.exists(karmaConfJs))
            return;
        delete pkg.devDependencies['karma-coverage-istanbul-reporter'];
        (0, utils_1.writePackage)(tree, pkg);
        // update karma.conf.js
        const content = (0, utils_1.readContent)(tree, karmaConfJs).replace(`karma-coverage-istanbul-reporter`, 'karma-coverage');
        tree.overwrite(karmaConfJs, content);
        (0, utils_1.logStart)(context, `karma-coverage instead of karma-coverage-istanbul-reporter`);
    };
}
function upgradeThirdVersion() {
    return (tree, context) => {
        (0, utils_1.addPackage)(tree, [`ngx-ueditor@^13.0.0`, `ngx-tinymce@^13.0.0`], 'dependencies');
        (0, utils_1.logStart)(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
    };
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(color_1.colors.green(`  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2174`));
    };
}
function v13Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([
            removeIE(),
            addStylePreprocessorOptions(),
            fixLessResolver(),
            upgradeKarmaCoverage(),
            upgradeThirdVersion(),
            addYarn(context),
            finished()
        ]);
    });
}
exports.v13Rule = v13Rule;
//# sourceMappingURL=index.js.map