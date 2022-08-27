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
exports.v14Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const workspace_1 = require("@schematics/angular/utility/workspace");
const colors = require("ansi-colors");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function fixSchematicCollections(context) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.addSchematicCollections)(workspace);
        (0, utils_1.logStart)(context, `Add schematicCollections you can use 'ng g list' is equivalent to 'ng generate ng-alain:list'`);
    }));
}
function addEslintPluginDeprecation() {
    return (tree, context) => {
        const path = '.eslintrc.js';
        if (!tree.exists(path))
            return;
        let content = tree.readText(path);
        if (content.includes(`['@typescript-eslint', 'jsdoc', 'import']`)) {
            content = content.replace(`['@typescript-eslint', 'jsdoc', 'import']`, `['@typescript-eslint', 'jsdoc', 'import', 'deprecation']`);
        }
        if (content.includes(`'prefer-const': 'off',`)) {
            content = content.replace(`'prefer-const': 'off',`, `'prefer-const': 'off',\n'deprecation/deprecation': 'warn',`);
        }
        tree.overwrite(path, content);
        // add deprecation
        (0, utils_1.addPackage)(tree, `eslint-plugin-prettier@^2.7.1`, 'devDependencies');
        (0, utils_1.logStart)(context, `Add deprecation warn of eslint`);
    };
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(colors.green(`  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2285`));
    };
}
function v14Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([
            (0, utils_1.addAllowSyntheticDefaultImports)(),
            // Configuring CommonJS dependencies
            // https://angular.io/guide/build#configuring-commonjs-dependencies
            (0, utils_1.addAllowedCommonJsDependencies)([]),
            fixSchematicCollections(context),
            addEslintPluginDeprecation(),
            finished()
        ]);
    });
}
exports.v14Rule = v14Rule;
//# sourceMappingURL=index.js.map