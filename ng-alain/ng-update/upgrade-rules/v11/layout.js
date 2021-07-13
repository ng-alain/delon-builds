"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixLayout = void 0;
const core_1 = require("@angular-devkit/core");
const utils_1 = require("../../../utils");
let project;
let tree;
let context;
function upgradeStylePath() {
    const stylesLessPath = core_1.normalize(`${project.sourceRoot}/styles.less`);
    if (!tree.exists(stylesLessPath)) {
        return;
    }
    // 更新样式引入路径
    const stylesLessContent = utils_1.readContent(tree, stylesLessPath)
        .replace(`~@delon/theme/layout/default/index`, `~@delon/theme/layout-default/style/index`)
        .replace(`~@delon/theme/layout/fullscreen/index`, `~@delon/theme/layout-blank/style/index`);
    tree.overwrite(stylesLessPath, stylesLessContent);
    utils_1.logInfo(context, `Update style import path`);
    // 修改 fullscreen 的样式
    const fullscreenComponentPath = core_1.normalize(`${project.sourceRoot}/app/layout/fullscreen/fullscreen.component.ts`);
    if (!tree.exists(fullscreenComponentPath)) {
        return;
    }
    const fullscreenComponentContent = utils_1.readContent(tree, fullscreenComponentPath).replace(`alain-fullscreen`, `alain-blank`);
    tree.overwrite(fullscreenComponentPath, fullscreenComponentContent);
    utils_1.logInfo(context, `Update alain-fullscreen to alain-blank`);
}
function fixLayout(p) {
    return (t, c) => {
        project = p;
        tree = t;
        context = c;
        utils_1.logStart(context, `Use @delon/theme/layout instead`);
        upgradeStylePath();
    };
}
exports.fixLayout = fixLayout;
//# sourceMappingURL=layout.js.map