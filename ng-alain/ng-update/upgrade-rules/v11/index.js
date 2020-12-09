"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v11Rule = void 0;
const color_1 = require("@angular/cli/utilities/color");
const json_1 = require("../../../utils/json");
const lib_versions_1 = require("../../../utils/lib-versions");
const log_1 = require("../../../utils/log");
const project_1 = require("../../../utils/project");
const hmr_1 = require("./hmr");
const layout_1 = require("./layout");
let project;
function fixVersion(tree, context) {
    json_1.addPackageToPackageJson(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${lib_versions_1.VERSION}`));
    log_1.logStart(context, `Upgrade @delon/* version number`);
}
function fixThirdVersion(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        // TODO: Wating ng-zorro-antd upgrade to 11
        // `ng-zorro-antd@^10.0.0-beta.4`,
        `ngx-ueditor@^11.0.0`,
        `ngx-tinymce@^11.0.0`,
        `ngx-ueditor@^11.0.0`,
    ], 'dependencies');
    // dependencies
    json_1.addPackageToPackageJson(tree, [`ng-alain-plugin-theme@^11.0.0`], 'devDependencies');
    log_1.logStart(context, `Upgrade third libs version number`);
}
function fixAnalyze(tree, context) {
    const packageJson = json_1.getPackage(tree);
    delete packageJson.devDependencies['webpack-bundle-analyzer'];
    packageJson.devDependencies['source-map-explorer'] = '^2.5.1';
    if (packageJson.scripts.analyze) {
        packageJson.scripts.analyze = packageJson.scripts.analyze.replace(`--stats-json`, `--source-map`);
        packageJson.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
    }
    log_1.logStart(context, `Usd source-map-explorer instead of webpack-bundle-analyzer`);
}
function v11Rule() {
    return (tree, context) => {
        project = project_1.getProjectFromWorkspace(project_1.getWorkspace(tree));
        fixVersion(tree, context);
        fixThirdVersion(tree, context);
        fixAnalyze(tree, context);
        hmr_1.fixHmr(project.sourceRoot, tree, context);
        layout_1.fixLayout(project, tree, context);
        context.logger.info(color_1.colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`));
    };
}
exports.v11Rule = v11Rule;
//# sourceMappingURL=index.js.map