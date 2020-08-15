"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v10Rule = void 0;
const colors = require("ansi-colors");
const alain_1 = require("../../../utils/alain");
const contents_1 = require("../../../utils/contents");
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
function fixPluginTheme(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [`ng-alain-plugin-theme@^10.0.1`], 'devDependencies');
    // remove antd-theme-generator
    json_1.removePackageFromPackageJson(tree, ['antd-theme-generator', 'less-bundle-promise', 'less-plugin-clean-css', 'less-plugin-npm-import'], 'devDependencies');
    // fix scripts
    const json = json_1.getPackage(tree);
    const cleanCommand = `npm run color-less && `;
    ['start', 'hmr', 'build', 'ie:start', 'ie:hmr']
        .filter(key => json.scripts[key].includes(cleanCommand))
        .forEach(key => {
        json.scripts[key] = json.scripts[key].replace(cleanCommand, ``);
    });
    json.scripts.start = `ng serve -o`;
    json.scripts.hmr = `ng serve -c=hmr`;
    json.scripts.build = `ng serve -c=hmr`;
    json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
    json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
    json_1.overwritePackage(tree, json);
    // add ng-alain.json
    alain_1.tryAddFile(tree, `ng-alain.json`, contents_1.NG_ALAIN_JSON);
    // fix .gitignore
    const gitignorePath = `.gitignore`;
    const gitignoreContent = file_1.readContent(tree, gitignorePath).replace(`/src/assets/alain-*.less`, `/src/assets/color.less`);
    file_1.overwriteFile(tree, gitignorePath, gitignoreContent, true, true);
    // fix src/app/layout/default/setting-drawer/setting-drawer.component.ts
    const drawerPath = `${project.sourceRoot}/app/layout/default/setting-drawer/setting-drawer.component.ts`;
    const drawerContent = file_1.readContent(tree, drawerPath).replace(`./assets/alain-default.less`, `./assets/color.less`);
    file_1.overwriteFile(tree, drawerPath, drawerContent, true, true);
    // fix src/styles.less
    const stylesPath = `${project.sourceRoot}/styles.less`;
    const stylesContent = file_1.readContent(tree, stylesPath)
        .replace(`// You can directly set the default theme`, ``)
        .replace('// - `dark` Import the official dark less style file', ``)
        .replace('// - `compact` Import the official compact less style file', ``)
        .replace(`// @import '~@delon/theme/theme-dark.less';`, ``)
        .trim();
    file_1.overwriteFile(tree, stylesPath, stylesContent, true, true);
    // fix src/styles/theme.less
    const themePath = `${project.sourceRoot}/styles/theme.less`;
    let themeContent = file_1.readContent(tree, themePath)
        .replace(`// 可以通过 https://ng-alain.github.io/ng-alain/ 获取主题参数代码`, ``)
        .replace('// The theme paraments can be generated at https://ng-alain.github.io/ng-alain/', ``)
        .trim();
    themeContent = `// You can directly set the default theme
// - \`default\` Default theme
// - \`dark\` Import the official dark less style file
// - \`compact\` Import the official compact less style file
@import '~@delon/theme/theme-default.less';

// ==========The following is the custom theme variable area==========
// The theme paraments can be generated at https://ng-alain.github.io/ng-alain/
// @primary-color: #f50;

${themeContent}
`;
    file_1.overwriteFile(tree, themePath, themeContent.trim() + '\n', true, true);
    context.logger.info(`  ✓  use 'ng-alain-plugin-theme' instand of 'scripts/themes.js' or 'scripts/color-less.js'`);
}
function fixThirdVersion(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        `ng-zorro-antd@^10.0.0-beta.4`,
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
        fixPluginTheme(tree, context);
        updateBrowserslistrc(tree, context);
        json_1.addAllowedCommonJsDependencies(tree);
        context.logger.info(colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1783`));
    };
}
exports.v10Rule = v10Rule;
//# sourceMappingURL=v10Rule.js.map