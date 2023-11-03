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
exports.v16Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const colors = require("ansi-colors");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
const base_1 = require("../base");
function removeStylelintConfigPrettier() {
    return (tree, context) => {
        const key = `stylelint-config-prettier`;
        context.logger.info(colors.yellow(` ${key} have been deprecated`));
        // remove package.json
        const packageJson = (0, utils_1.readPackage)(tree);
        if (packageJson != null) {
            delete packageJson.devDependencies[key];
            (0, utils_1.writePackage)(tree, packageJson);
        }
        // remote .stylelintrc
        const stylelintrcFilePath = '.stylelintrc';
        const stylelintrcjson = (0, utils_1.readJSON)(tree, stylelintrcFilePath);
        if (stylelintrcjson != null) {
            if (!Array.isArray(stylelintrcjson.extends))
                stylelintrcjson.extends = [];
            const arr = stylelintrcjson.extends;
            const idx = arr.indexOf(key);
            if (idx !== -1) {
                arr.splice(idx, 1);
                (0, utils_1.writeJSON)(tree, stylelintrcFilePath, stylelintrcjson);
            }
        }
    };
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(colors.green(`  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`));
    };
}
function v16Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([removeStylelintConfigPrettier(), (0, base_1.updateMockPath)(), finished()]);
    });
}
exports.v16Rule = v16Rule;
//# sourceMappingURL=index.js.map