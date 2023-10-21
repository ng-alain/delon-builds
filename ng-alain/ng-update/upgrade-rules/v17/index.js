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
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const colors = require("ansi-colors");
const utils_1 = require("../../../utils");
const versions_1 = require("../../../utils/versions");
function qr() {
    return (_, context) => {
        context.logger.info(colors.yellow(` [qr] Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.`));
    };
}
function autoRegisterFormWidgets() {
    return (tree, context) => {
        const angularJson = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const projectNames = Object.keys(angularJson.projects);
        for (const name of projectNames) {
            autoRegisterFormWidgetsRun(tree, name, angularJson.projects[name].sourceRoot, context);
        }
    };
}
function autoRegisterFormWidgetsRun(tree, name, sourceRoot, context) {
    const modulePath = `${sourceRoot}/app/shared/json-schema/json-schema.module.ts`;
    if (!tree.exists(modulePath))
        return;
    const list = [
        { symbolName: 'AutoCompleteWidgetModule', fileName: '@delon/form/widgets/autocomplete' },
        { symbolName: 'CascaderWidgetModule', fileName: '@delon/form/widgets/cascader' },
        { symbolName: 'MentionWidgetModule', fileName: '@delon/form/widgets/mention' },
        { symbolName: 'RateWidgetModule', fileName: '@delon/form/widgets/rate' },
        { symbolName: 'SliderWidgetModule', fileName: '@delon/form/widgets/slider' },
        { symbolName: 'TagWidgetModule', fileName: '@delon/form/widgets/tag' },
        { symbolName: 'TimeWidgetModule', fileName: '@delon/form/widgets/time' },
        { symbolName: 'TransferWidgetModule', fileName: '@delon/form/widgets/transfer' },
        { symbolName: 'TreeSelectWidgetModule', fileName: '@delon/form/widgets/tree-select' },
        { symbolName: 'UploadWidgetModule', fileName: '@delon/form/widgets/upload' }
    ];
    const source = (0, utils_1.getSourceFile)(tree, modulePath);
    const changes = [];
    for (const item of list) {
        changes.push((0, ast_utils_1.insertImport)(source, modulePath, item.symbolName, item.fileName));
        changes.push(...(0, ast_utils_1.addSymbolToNgModuleMetadata)(source, modulePath, 'imports', item.symbolName));
    }
    (0, utils_1.applyChanges)(tree, modulePath, changes);
    context.logger.info(colors.yellow(` [@delon/form] Register all widgets in ${name} project, you can reduce package size by removing unnecessary parts`));
}
function finished() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(colors.green(`  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`));
    };
}
function v17Rule() {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        (0, utils_1.logStart)(context, `Upgrade @delon/* version number`);
        (0, versions_1.UpgradeMainVersions)(tree);
        return (0, schematics_1.chain)([autoRegisterFormWidgets(), qr(), finished()]);
    });
}
exports.v17Rule = v17Rule;
//# sourceMappingURL=index.js.map