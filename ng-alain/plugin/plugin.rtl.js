"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginRTL = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const alain_1 = require("../utils/alain");
const file_1 = require("../utils/file");
const project_1 = require("../utils/project");
let project;
function fixImport() {
    return (host) => {
        const basicComponentPath = core_1.normalize(`${project.sourceRoot}/app/layout/basic/basic.component.ts`);
        if (host.exists(basicComponentPath)) {
            const content = file_1.readContent(host, basicComponentPath).replace(`<div nz-menu style="width: 200px;">`, `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl></header-rtl></div>`);
            host.overwrite(basicComponentPath, content);
        }
        // src/app/layout/layout.module.ts
        const layoutModulePath = core_1.normalize(`${project.sourceRoot}/app/layout/layout.module.ts`);
        if (host.exists(layoutModulePath)) {
            const rtlComponentName = 'HeaderRTLComponent';
            alain_1.addImportToModule(host, layoutModulePath, rtlComponentName, './basic/widgets/rtl.component');
            alain_1.addValueToVariable(host, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
        }
        // src/app/app.module.ts
        const appModulePath = core_1.normalize(`${project.sourceRoot}/app/app.module.ts`);
        if (host.exists(appModulePath)) {
            const bidiModuleName = 'BidiModule';
            alain_1.addImportToModule(host, appModulePath, bidiModuleName, '@angular/cdk/bidi');
            alain_1.addValueToVariable(host, appModulePath, 'GLOBAL_THIRD_MODULES', bidiModuleName);
        }
        // src/styles/theme.less
        const themeLessPath = core_1.normalize(`${project.sourceRoot}/styles/theme.less`);
        if (host.exists(themeLessPath)) {
            const content = file_1.readContent(host, themeLessPath);
            if (!content.includes(`@rtl-enabled: true;`)) {
                host.overwrite(themeLessPath, content + `\n@rtl-enabled: true;\n`);
            }
        }
        return host;
    };
}
function pluginRTL(options) {
    return (host) => {
        if (options.type !== 'add') {
            throw new schematics_1.SchematicsException(`Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`);
        }
        project = project_1.getProject(host, options.project);
        return schematics_1.chain([schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/rtl'), [schematics_1.move(`${project.sourceRoot}/app`), file_1.overwriteIfExists(host)])), fixImport()]);
    };
}
exports.pluginRTL = pluginRTL;
//# sourceMappingURL=plugin.rtl.js.map