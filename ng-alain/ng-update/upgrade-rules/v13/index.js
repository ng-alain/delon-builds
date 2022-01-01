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
exports.v13Rule = void 0;
const color_1 = require("@angular/cli/utilities/color");
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function upgradeThirdVersion() {
    return (tree, context) => {
        (0, utils_1.addPackage)(tree, [`tslib@^2.2.0`, `ngx-ueditor@^13.0.0`, `ngx-tinymce@^13.0.0`], 'dependencies');
        (0, utils_1.logStart)(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
    };
}
function finished() {
    return (_tree, context) => {
        context.logger.info(color_1.colors.green(`  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2174`));
    };
}
function v13Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([upgradeThirdVersion(), finished()]);
    });
}
exports.v13Rule = v13Rule;
//# sourceMappingURL=index.js.map