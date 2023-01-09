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
exports.v15Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const colors = require("ansi-colors");
const utils_1 = require("../../../utils");
const less_1 = require("../../../utils/less");
const versions_1 = require("../../../utils/versions");
function removeDuplicateDependencies() {
    return (tree, context) => {
        const pkg = (0, utils_1.readPackage)(tree);
        if (!pkg.devDependencies)
            return;
        delete pkg.devDependencies['ng-alain-sts'];
        delete pkg.devDependencies['ng-alain-plugin-theme'];
        (0, utils_1.writePackage)(tree, pkg);
        (0, utils_1.logStart)(context, `Remove duplicate dev-dependencies: 'ng-alain-sts', 'ng-alain-plugin-theme'`);
    };
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(colors.green(`  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2347`));
    };
}
function v15Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([(0, less_1.addImportNotation)(), removeDuplicateDependencies(), finished()]);
    });
}
exports.v15Rule = v15Rule;
//# sourceMappingURL=index.js.map