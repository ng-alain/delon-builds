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
exports.pluginRTL = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../utils");
let project;
function fixImport() {
    return (tree) => {
        const basicComponentPath = (0, core_1.normalize)(`${project.sourceRoot}/app/layout/basic/basic.component.ts`);
        if (tree.exists(basicComponentPath)) {
            const content = (0, utils_1.readContent)(tree, basicComponentPath).replace(`<div nz-menu style="width: 200px;">`, `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl></header-rtl></div>`);
            tree.overwrite(basicComponentPath, content);
        }
        // src/app/layout/layout.module.ts
        const layoutModulePath = (0, core_1.normalize)(`${project.sourceRoot}/app/layout/layout.module.ts`);
        if (tree.exists(layoutModulePath)) {
            const rtlComponentName = 'HeaderRTLComponent';
            (0, utils_1.addImportToModule)(tree, layoutModulePath, rtlComponentName, './basic/widgets/rtl.component');
            (0, utils_1.addValueToVariable)(tree, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
        }
        // src/app/app.module.ts
        const appModulePath = (0, core_1.normalize)(`${project.sourceRoot}/app/app.module.ts`);
        if (tree.exists(appModulePath)) {
            const bidiModuleName = 'BidiModule';
            (0, utils_1.addImportToModule)(tree, appModulePath, bidiModuleName, '@angular/cdk/bidi');
            (0, utils_1.addValueToVariable)(tree, appModulePath, 'GLOBAL_THIRD_MODULES', bidiModuleName);
        }
        return tree;
    };
}
function pluginRTL(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        if (options.type !== 'add') {
            throw new schematics_1.SchematicsException(`Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`);
        }
        project = (yield (0, utils_1.getProject)(tree, options.project)).project;
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)((0, schematics_1.apply)((0, schematics_1.url)('./files/rtl'), [(0, schematics_1.move)(`${project.sourceRoot}/app`), (0, utils_1.overwriteIfExists)(tree)])),
            fixImport()
        ]);
    });
}
exports.pluginRTL = pluginRTL;
//# sourceMappingURL=plugin.rtl.js.map