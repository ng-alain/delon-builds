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
exports.fixHmr = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const workspace_1 = require("@schematics/angular/utility/workspace");
const ts = require("typescript");
const utils_1 = require("../../../utils");
const main_1 = require("./files-tpl/main");
function removeHmrOfAngularJson(context) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach(project => {
            [utils_1.BUILD_TARGET_BUILD, utils_1.BUILD_TARGET_SERVE].forEach(targetName => {
                delete project.targets.get(targetName).configurations.hmr;
            });
        });
        utils_1.logInfo(context, `Remove '@angularclass/hmr'`);
    }));
}
function removeHmrInEnt(sourceRoot, name) {
    return (tree) => {
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
    };
}
function removeHmrTs(sourceRoot) {
    return (tree, context) => {
        // 删除 `environment.hmr.ts`
        const environmentHmrTsPath = core_1.normalize(`${sourceRoot}/environments/environment.hmr.ts`);
        if (tree.exists(environmentHmrTsPath)) {
            tree.delete(environmentHmrTsPath);
        }
        utils_1.logInfo(context, `Removed 'environments.hmr.ts' file`);
    };
}
function fixPackage() {
    return (tree, context) => {
        const packageJson = utils_1.readPackage(tree);
        delete packageJson.devDependencies['@angularclass/hmr'];
        if (packageJson.scripts.hmr) {
            packageJson.scripts.hmr = packageJson.scripts.hmr.replace(`-c=hmr`, `--hmr`);
        }
        utils_1.writePackage(tree, packageJson);
        utils_1.logInfo(context, `'-c=hmr' instead of '--hmr' in package.json`);
    };
}
function fixMainTs(hmrTsPath, sourceRoot) {
    return (tree, context) => {
        tree.delete(hmrTsPath);
        tree.overwrite(core_1.normalize(`${sourceRoot}/main.ts`), main_1.default);
        utils_1.logInfo(context, `Modify 'main.ts' and remove 'hmr.ts' file`);
    };
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
        return schematics_1.chain([
            // 1、移除所有 `@angularclass/hmr` 的引用
            removeHmrOfAngularJson(context),
            // 2、移除 angular.json 里面的 hmr 配置项，以及 environments 下相关的 hmr 配置
            utils_1.removeAllowedCommonJsDependencies('@angularclass/hmr'),
            // 移除 `environments.ts` 的 `hmr: false`
            removeHmrInEnt(sourceRoot, 'environment.prod.ts'),
            removeHmrInEnt(sourceRoot, 'environment.ts'),
            // 删除 `environment.hmr.ts`
            removeHmrTs(sourceRoot),
            // 3、修改 package.json 命令行 `-c=hmr` 为 `--hmr`
            fixPackage(),
            // 4、修改 `main.ts` 并移除 `hmr.ts` 文件
            fixMainTs(hmrTsPath, sourceRoot),
        ]);
    };
}
exports.fixHmr = fixHmr;
//# sourceMappingURL=hmr.js.map