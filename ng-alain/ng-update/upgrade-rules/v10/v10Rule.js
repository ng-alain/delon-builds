"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v10Rule = void 0;
const colors = require("ansi-colors");
const file_1 = require("../../../utils/file");
const json_1 = require("../../../utils/json");
const lib_versions_1 = require("../../../utils/lib-versions");
const project_1 = require("../../../utils/project");
const browserslistrc_1 = require("./files-tpl/browserslistrc");
let project;
function fixVersion(tree, context) {
    json_1.addPackageToPackageJson(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${lib_versions_1.VERSION}`));
    context.logger.info(`  ✓  Upgrade @delon/* version number`);
}
function fixThirdVersion(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        `ng-zorro-antd@^10.0.0-beta.0`,
        `@ngx-translate/core@^13.0.0`,
        `@ngx-translate/http-loader@^6.0.0`,
        `ajv@^6.12.3`,
        `ngx-tinymce@^10.0.0`,
        `ngx-ueditor@^10.0.0`,
        `screenfull@^5.0.2`,
    ], 'dependencies');
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        `@types/jszip@^3.1.7`,
        `husky@^4.2.3`,
        `pretty-quick@^2.0.1`,
        `prettier@^2.0.5`,
        `stylelint@^13.3.1`,
        `stylelint-config-prettier@^8.0.1`,
        `stylelint-config-standard@^20.0.0`,
        `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
        `stylelint-order@^4.0.0`,
        `webpack-bundle-analyzer@^3.6.1`,
        `antd-theme-generator@1.2.2`,
        `xlsx@^0.16.1`,
    ], 'devDependencies');
    context.logger.info(`  ✓  Upgrade third libs version number`);
}
function updateBrowserslistrc(tree, context) {
    file_1.overwriteFile(tree, '/.browserslistrc', browserslistrc_1.default, true);
    context.logger.info(`  ✓  Upgrade browserslistrc, (NOTICE: If you are using the ie plugin, please make sure to manually modify 'not IE 11' to 'IE11' in '.browserslistrc')`);
}
function v10Rule() {
    return (tree, context) => {
        project = project_1.getProjectFromWorkspace(project_1.getWorkspace(tree));
        fixVersion(tree, context);
        fixThirdVersion(tree, context);
        updateBrowserslistrc(tree, context);
        json_1.addAllowedCommonJsDependencies(tree);
        context.logger.info(colors.green(`  ✓  Congratulations, Please refer to https://github.com/ng-alain/ng-alain/issues/1783 for upgrade guide`));
    };
}
exports.v10Rule = v10Rule;
//# sourceMappingURL=v10Rule.js.map