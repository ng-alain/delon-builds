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
    return (host) => {
        const basicComponentPath = core_1.normalize(`${project.sourceRoot}/app/layout/basic/basic.component.ts`);
        if (host.exists(basicComponentPath)) {
            const content = utils_1.readContent(host, basicComponentPath).replace(`<div nz-menu style="width: 200px;">`, `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl></header-rtl></div>`);
            host.overwrite(basicComponentPath, content);
        }
        // src/app/layout/layout.module.ts
        const layoutModulePath = core_1.normalize(`${project.sourceRoot}/app/layout/layout.module.ts`);
        if (host.exists(layoutModulePath)) {
            const rtlComponentName = 'HeaderRTLComponent';
            utils_1.addImportToModule(host, layoutModulePath, rtlComponentName, './basic/widgets/rtl.component');
            utils_1.addValueToVariable(host, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
        }
        // src/app/app.module.ts
        const appModulePath = core_1.normalize(`${project.sourceRoot}/app/app.module.ts`);
        if (host.exists(appModulePath)) {
            const bidiModuleName = 'BidiModule';
            utils_1.addImportToModule(host, appModulePath, bidiModuleName, '@angular/cdk/bidi');
            utils_1.addValueToVariable(host, appModulePath, 'GLOBAL_THIRD_MODULES', bidiModuleName);
        }
        return host;
    };
}
function pluginRTL(options) {
    return (host) => __awaiter(this, void 0, void 0, function* () {
        if (options.type !== 'add') {
            throw new schematics_1.SchematicsException(`Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`);
        }
        project = (yield utils_1.getProject(host, options.project)).project;
        return schematics_1.chain([schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/rtl'), [schematics_1.move(`${project.sourceRoot}/app`), utils_1.overwriteIfExists(host)])), fixImport()]);
    });
}
exports.pluginRTL = pluginRTL;
//# sourceMappingURL=plugin.rtl.js.map