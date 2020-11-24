"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v11Rule = void 0;
const core_1 = require("@angular-devkit/core");
const color_1 = require("@angular/cli/utilities/color");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ts = require("typescript");
const ast_1 = require("../../../utils/ast");
const file_1 = require("../../../utils/file");
const json_1 = require("../../../utils/json");
const lib_versions_1 = require("../../../utils/lib-versions");
const project_1 = require("../../../utils/project");
const main_1 = require("./files-tpl/main");
let project;
function fixVersion(tree, context) {
    json_1.addPackageToPackageJson(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${lib_versions_1.VERSION}`));
    context.logger.info(`    ${color_1.colors.green('✓')} Upgrade @delon/* version number`);
}
function fixThirdVersion(tree, context) {
    // dependencies
    json_1.addPackageToPackageJson(tree, [
        // `ng-zorro-antd@^10.0.0-beta.4`,
        // `ngx-ueditor@^11.0.0`,
        `ngx-tinymce@^11.0.0`,
        `ngx-ueditor@^11.0.0`,
    ], 'dependencies');
    // dependencies
    json_1.addPackageToPackageJson(tree, [`webpack-bundle-analyzer@^4.1.0`], 'devDependencies');
    context.logger.info(`    ${color_1.colors.green('✓')} Upgrade third libs version number`);
}
function removeHmrInEnt(tree, name) {
    const src = core_1.normalize(`${project.sourceRoot}/environments/${name}`);
    if (!tree.exists(src))
        return;
    const source = ast_1.getSourceFile(tree, src);
    const hmrNode = ast_utils_1.findNode(source, ts.SyntaxKind.Identifier, 'hmr');
    if (hmrNode == null || hmrNode.parent == null || hmrNode.parent.kind !== ts.SyntaxKind.PropertyAssignment) {
        return;
    }
    const content = file_1.readContent(tree, src);
    const prefix = content.substring(0, hmrNode.pos);
    const suffix = content.substring(hmrNode.parent.end);
    tree.overwrite(src, `${prefix}${suffix}`.replace(/,,/g, ','));
}
function fixHmr(tree, context) {
    context.logger.info(`    ${color_1.colors.green('✓')} Using built-in hmr instead of '@angularclass/hmr'`);
    // 检查是否存在 `hmr.ts` 文件作为是否已经安装 hmr 的前提条件
    const hmrTsPath = core_1.normalize(`${project.sourceRoot}/hmr.ts`);
    if (!tree.exists(hmrTsPath)) {
        context.logger.info(`      ${color_1.colors.yellow('✓')} Ingored the part migration when not found '${hmrTsPath}'`);
        return;
    }
    // 1、移除所有 `@angularclass/hmr` 的引用
    const angularJson = json_1.getAngular(tree);
    Object.keys(angularJson.projects).forEach(projectName => {
        const projectItem = angularJson.projects[projectName];
        ['build', 'serve'].forEach(typeKey => {
            delete projectItem.architect[typeKey].configurations.hmr;
        });
    });
    json_1.overwriteAngular(tree, angularJson);
    context.logger.info(`      ${color_1.colors.green('✓')} Remove '@angularclass/hmr'`);
    // 2、移除 angular.json 里面的 hmr 配置项，以及 environments 下相关的 hmr 配置
    json_1.removeAllowedCommonJsDependencies(tree, '@angularclass/hmr');
    // 移除 `environments.ts` 的 `hmr: false`
    removeHmrInEnt(tree, 'environment.prod.ts');
    removeHmrInEnt(tree, 'environment.ts');
    // 删除 `environment.hmr.ts`
    const environmentHmrTsPath = core_1.normalize(`${project.sourceRoot}/environments/environment.hmr.ts`);
    if (tree.exists(environmentHmrTsPath)) {
        tree.delete(environmentHmrTsPath);
    }
    context.logger.info(`    ${color_1.colors.green('✓')} Removed 'environments.hmr.ts' file`);
    // 3、修改 package.json 命令行 `-c=hmr` 为 `--hmr`
    const packageJson = json_1.getPackage(tree);
    delete packageJson.devDependencies['@angularclass/hmr'];
    packageJson.scripts.hmr = packageJson.scripts.hmr.replace(`-c=hmr`, `--hmr`);
    json_1.overwritePackage(tree, packageJson);
    context.logger.info(`      ${color_1.colors.green('✓')} '-c=hmr' instead of '--hmr' in package.json`);
    // 4、修改 `main.ts` 并移除 `hmr.ts` 文件
    tree.delete(hmrTsPath);
    tree.overwrite(core_1.normalize(`${project.sourceRoot}/main.ts`), main_1.default);
    context.logger.info(`      ${color_1.colors.green('✓')} Modify 'main.ts' and remove 'hmr.ts' file`);
}
function v11Rule() {
    return (tree, context) => {
        project = project_1.getProjectFromWorkspace(project_1.getWorkspace(tree));
        fixVersion(tree, context);
        fixThirdVersion(tree, context);
        fixHmr(tree, context);
        context.logger.info(color_1.colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`));
    };
}
exports.v11Rule = v11Rule;
//# sourceMappingURL=index.js.map