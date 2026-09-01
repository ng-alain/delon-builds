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
exports.v22Rule = v22Rule;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
/** The node version of https://github.com/ng-alain/ng-alain/pull/2636 */
const NODE_VERSION = '24.20.0';
/**
 * Overwrite the eslint flat config with the same template shipped to `ng-add`
 * (`application/files/root/eslint.config.mjs`), keeping a single source of truth.
 */
function updateEslintConfig() {
    return (tree) => {
        const content = (0, utils_1.getFileContentInApplicationFiles)('root/eslint.config.mjs');
        if (!content) {
            // e.g. running from source without the build step; keep the user's config instead of wiping it
            return tree;
        }
        // Remove `eslint.config.js` to avoid duplicate configs, ng-alain only uses `eslint.config.mjs`
        if (tree.exists('eslint.config.js')) {
            tree.delete('eslint.config.js');
        }
        (0, utils_1.writeFile)(tree, 'eslint.config.mjs', content);
        return tree;
    };
}
function updateNvmrc() {
    return (tree) => {
        (0, utils_1.writeFile)(tree, '.nvmrc', NODE_VERSION);
        return tree;
    };
}
/**
 * Fix tsconfig paths after removing `baseUrl` (Angular 22):
 * - add `./` prefix to `@shared`, `@core`, `@env/*`, `@_mock`
 * - remove `baseUrl` if exists
 *
 * https://github.com/ng-alain/ng-alain/pull/2636
 */
function fixTsConfigPaths(tree) {
    var _a, _b, _c;
    const tsConfigPath = 'tsconfig.json';
    if (!tree.exists(tsConfigPath))
        return tree;
    const tsconfig = (0, utils_1.readJSON)(tree, tsConfigPath);
    const paths = ((_b = (_a = tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths) !== null && _b !== void 0 ? _b : {});
    // Prefix every relative alias (ng-alain's and user's own), so paths keep
    // resolving after `baseUrl` is gone. Absolute values are left untouched.
    const modifies = Object.entries(paths)
        .filter(([, value]) => Array.isArray(value))
        .map(([key, value]) => ({
        path: ['compilerOptions', 'paths', key],
        value: value.map(v => (v.startsWith('./') || v.startsWith('/') ? v : `./${v}`))
    }));
    if (modifies.length > 0) {
        (0, utils_1.modifyJSON)(tree, tsConfigPath, modifies);
    }
    // Remove `baseUrl` only when it's the scaffold default (`./`): the `./`-prefixed
    // aliases then resolve against the tsconfig dir identically. A custom `baseUrl`
    // (e.g. `src`) is preserved so imports keep resolving.
    const baseUrl = (_c = tsconfig === null || tsconfig === void 0 ? void 0 : tsconfig.compilerOptions) === null || _c === void 0 ? void 0 : _c.baseUrl;
    if (baseUrl == null || baseUrl === './') {
        // Delete `baseUrl` in its own pass (no-op when absent): jsonc-parser extends a
        // deletion edit to the whole line, which would overlap the path edits on a
        // single-line tsconfig.
        (0, utils_1.modifyJSON)(tree, tsConfigPath, { path: ['compilerOptions', 'baseUrl'], value: undefined });
    }
    return tree;
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        (0, utils_1.logFinished)(context, `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2635`);
    };
}
function v22Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, versions_1.UpgradeMainVersions)(tree);
        // Remove eslint plugins no longer used by the v22 config
        // https://github.com/ng-alain/ng-alain/pull/2636
        (0, utils_1.removePackage)(tree, ['eslint-config-prettier', 'eslint-plugin-import', 'eslint-plugin-prefer-arrow'], 'devDependencies');
        (0, utils_1.logInfo)(context, `Upgrade dependency version number`);
        return (0, schematics_1.chain)([updateEslintConfig(), updateNvmrc(), fixTsConfigPaths, finished()]);
    });
}
//# sourceMappingURL=index.js.map