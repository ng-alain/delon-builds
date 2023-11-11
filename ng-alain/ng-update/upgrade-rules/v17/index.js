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
exports.v17Rule = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const angularJson_1 = require("./angularJson");
const autoRegisterFormWidgets_1 = require("./autoRegisterFormWidgets");
const preloader_1 = require("./preloader");
const removeForRoot_1 = require("./removeForRoot");
const replaceProvideConfig_1 = require("./replaceProvideConfig");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        (0, utils_1.logWarn)(context, `Please check the modified files. Some upgrades may have incorrect formats or missing imports.`);
        (0, utils_1.logWarn)(context, `Please check the modified files. Some upgrades may have incorrect formats or missing imports.`);
        (0, utils_1.logWarn)(context, `Please check the modified files. Some upgrades may have incorrect formats or missing imports.`);
        (0, utils_1.logFinished)(context, `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`);
    };
}
function v17Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, versions_1.UpgradeMainVersions)(tree);
        (0, utils_1.logInfo)(context, `Upgrade dependency version number`);
        return (0, schematics_1.chain)([
            (0, angularJson_1.fixAngularJson)(),
            (0, removeForRoot_1.removeForRoot)(),
            (0, autoRegisterFormWidgets_1.autoRegisterFormWidgets)(),
            (0, replaceProvideConfig_1.replaceProvideConfig)(),
            (0, preloader_1.updatePreloader)(),
            finished()
        ]);
    });
}
exports.v17Rule = v17Rule;
//# sourceMappingURL=index.js.map