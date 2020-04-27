"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("ansi-colors");
const file_1 = require("../../../utils/file");
const json_1 = require("../../../utils/json");
const lib_versions_1 = require("../../../utils/lib-versions");
const project_1 = require("../../../utils/project");
const lintstagedrc_1 = require("./files-tpl/lintstagedrc");
const st_widget_module_1 = require("./files-tpl/st-widget.module");
let project;
function fixVersion(tree, context) {
    json_1.addPackageToPackageJson(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${lib_versions_1.VERSION}`));
    context.logger.info(`  ✓  Upgrade @delon/* version number`);
}
function fixThirdVersion(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [`@ngx-translate/core@^12.1.2`, `ajv@^6.12.0`, `ngx-tinymce@^9.0.0`, `ngx-ueditor@^9.0.0`, `screenfull@^5.0.2`], 'dependencies');
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        `@types/jszip@^3.1.7`,
        `husky@^4.2.3`,
        `lint-staged@^10.1.2`,
        `prettier@^2.0.4`,
        `stylelint@^13.3.1`,
        `stylelint-config-prettier@^8.0.1`,
        `stylelint-config-standard@^20.0.0`,
        `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
        `stylelint-order@^4.0.0`,
        `webpack-bundle-analyzer@^3.6.1`,
        `antd-theme-generator@^1.1.9`,
        `xlsx@^0.15.6`,
    ], 'devDependencies');
    context.logger.info(`  ✓  Upgrade third libs version number`);
}
function fixScripts(tree, context) {
    const json = json_1.getJSON(tree, 'package.json');
    json.scripts['lint:ts'] = `ng lint --fix`;
    delete json['lint-staged'];
    file_1.overwriteFile(tree, '/.lintstagedrc.js', lintstagedrc_1.default, true);
    json_1.overwritePackage(tree, json);
    context.logger.info(`  ✓  Upgrade [lint:ts] script`);
}
function addStWidgetModule(tree, context) {
    file_1.overwriteFile(tree, `${project.sourceRoot}/app/shared/st-widget/st-widget.module.ts`, st_widget_module_1.default, true, true);
    context.logger.info(colors.red(`  ⚠  Add [st-widget.module.ts], But you must manually import in [app.module.ts] to take effect.`));
}
function addGlobalConfigModule(tree, context) {
    file_1.overwriteFile(tree, `${project.sourceRoot}/app/global-config.module.ts`, st_widget_module_1.default, true, true);
    context.logger.info(colors.red(`  ⚠  Using [global-config.module.ts] instead of [delon.module.ts], But you must manually remove [delon.module.ts]`));
}
function v9Rule() {
    return (tree, context) => {
        project = project_1.getProjectFromWorkspace(project_1.getWorkspace(tree));
        fixVersion(tree, context);
        fixThirdVersion(tree, context);
        fixScripts(tree, context);
        addStWidgetModule(tree, context);
        addGlobalConfigModule(tree, context);
        context.logger.info(colors.yellow(`  ✓  你还需要手工处理，请仔细阅读：https://github.com/ng-alain/ng-alain/issues/1569 \nYou still need to do it manually, please refer to the details: https://github.com/ng-alain/ng-alain/issues/1569`));
    };
}
exports.v9Rule = v9Rule;
//# sourceMappingURL=v9Rule.js.map