"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixHmr = void 0;
const core_1 = require("@angular-devkit/core");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ts = require("typescript");
const utils_1 = require("../../../utils");
const json_1 = require("../../../utils/json");
const main_1 = require("./files-tpl/main");
function removeHmrInEnt(sourceRoot, tree, name) {
    const src = core_1.normalize(`${sourceRoot}/environments/${name}`);
    if (!tree.exists(src))
        return;
    const source = utils_1.getSourceFile(tree, src);
    const hmrNode = ast_utils_1.findNode(source, ts.SyntaxKind.Identifier, 'hmr');
    if (hmrNode == null || hmrNode.parent == null || hmrNode.parent.kind !== ts.SyntaxKind.PropertyAssignment) {
        return;
    }
    const content = utils_1.readContent(tree, src);
    const prefix = content.substring(0, hmrNode.pos);
    const suffix = content.substring(hmrNode.parent.end);
    tree.overwrite(src, `${prefix}${suffix}`.replace(/,,/g, ','));
}
function fixHmr(sourceRoot) {
    return (tree, context) => {
        utils_1.logStart(context, `Using built-in hmr instead of '@angularclass/hmr'`);
        // 检查是否存在 `hmr.ts` 文件作为是否已经安装 hmr 的前提条件
        const hmrTsPath = core_1.normalize(`${sourceRoot}/hmr.ts`);
        if (!tree.exists(hmrTsPath)) {
            utils_1.logWarn(context, `Ingored the part migration when not found '${hmrTsPath}'`);
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
        utils_1.logInfo(context, `Remove '@angularclass/hmr'`);
        // 2、移除 angular.json 里面的 hmr 配置项，以及 environments 下相关的 hmr 配置
        utils_1.removeAllowedCommonJsDependencies('@angularclass/hmr');
        // 移除 `environments.ts` 的 `hmr: false`
        removeHmrInEnt(sourceRoot, tree, 'environment.prod.ts');
        removeHmrInEnt(sourceRoot, tree, 'environment.ts');
        // 删除 `environment.hmr.ts`
        const environmentHmrTsPath = core_1.normalize(`${sourceRoot}/environments/environment.hmr.ts`);
        if (tree.exists(environmentHmrTsPath)) {
            tree.delete(environmentHmrTsPath);
        }
        utils_1.logInfo(context, `Removed 'environments.hmr.ts' file`);
        // 3、修改 package.json 命令行 `-c=hmr` 为 `--hmr`
        const packageJson = utils_1.readPackage(tree);
        delete packageJson.devDependencies['@angularclass/hmr'];
        if (packageJson.scripts.hmr) {
            packageJson.scripts.hmr = packageJson.scripts.hmr.replace(`-c=hmr`, `--hmr`);
        }
        utils_1.writePackage(tree, packageJson);
        utils_1.logInfo(context, `'-c=hmr' instead of '--hmr' in package.json`);
        // 4、修改 `main.ts` 并移除 `hmr.ts` 文件
        tree.delete(hmrTsPath);
        tree.overwrite(core_1.normalize(`${sourceRoot}/main.ts`), main_1.default);
        utils_1.logInfo(context, `Modify 'main.ts' and remove 'hmr.ts' file`);
    };
}
exports.fixHmr = fixHmr;
//# sourceMappingURL=hmr.js.map