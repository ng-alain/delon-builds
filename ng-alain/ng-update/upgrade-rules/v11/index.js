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
exports.v11Rule = void 0;
const color_1 = require("@angular/cli/utilities/color");
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
const hmr_1 = require("./hmr");
const layout_1 = require("./layout");
let project;
function fixVersion() {
    return (tree, context) => {
        versions_1.UpgradeMainVersions(tree);
        utils_1.logStart(context, `Upgrade @delon/* version number`);
    };
}
function fixThirdVersion() {
    return (tree, context) => {
        // dependencies
        utils_1.addPackage(tree, [
            `ng-zorro-antd@^12.0.1`,
            `ngx-ueditor@^12.0.0`,
            `ngx-tinymce@^12.0.0`,
            `ngx-countdown@^12.0.1`,
            'ajv@^8.6.2'
        ], 'dependencies');
        // dependencies
        utils_1.addPackage(tree, [`ng-alain-plugin-theme@^12.0.0`, `ng-alain-sts@^0.0.1`], 'devDependencies');
        utils_1.logStart(context, `Upgrade third libs version number`);
    };
}
function fixAnalyze() {
    return (tree, context) => {
        const packageJson = utils_1.readPackage(tree);
        delete packageJson.devDependencies['webpack-bundle-analyzer'];
        packageJson.devDependencies['source-map-explorer'] = '^2.5.1';
        if (packageJson.scripts.analyze) {
            packageJson.scripts.analyze = packageJson.scripts.analyze.replace(`--stats-json`, `--source-map`);
            packageJson.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
        }
        utils_1.logStart(context, `Usd source-map-explorer instead of webpack-bundle-analyzer`);
    };
}
function finished() {
    return (_tree, context) => {
        context.logger.info(color_1.colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`));
    };
}
function v11Rule() {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        project = (yield utils_1.getProject(tree)).project;
        return schematics_1.chain([
            fixVersion(),
            fixThirdVersion(),
            fixAnalyze(),
            hmr_1.fixHmr(project.sourceRoot),
            layout_1.fixLayout(project),
            finished()
        ]);
    });
}
exports.v11Rule = v11Rule;
//# sourceMappingURL=index.js.map