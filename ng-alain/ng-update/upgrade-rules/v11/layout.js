"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixLayout = void 0;
const core_1 = require("@angular-devkit/core");
const file_1 = require("../../../utils/file");
const log_1 = require("../../../utils/log");
let project;
let tree;
let context;
function upgradeStylePath() {
    const stylesLessPath = core_1.normalize(`${project.sourceRoot}/styles.less`);
    if (!tree.exists(stylesLessPath)) {
        return;
    }
    // 更新样式引入路径
    const content = file_1.readContent(tree, stylesLessPath)
        .replace(`@import '~@delon/theme/layout/default/index';`, `@import '~@delon/theme/layout-default/style/index';`)
        .replace(`@import '~@delon/theme/layout/fullscreen/index';`, `@import '~@delon/theme/layout-blank/style/index';`);
    file_1.overwriteFile(tree, stylesLessPath, content, true);
    log_1.logInfo(context, `Update style import path`);
    // 修改 fullscreen 的样式
    const fullscreenComponentPath = core_1.normalize(`${project.sourceRoot}/app/layout/fullscreen/fullscreen.component.ts`);
    if (!tree.exists(fullscreenComponentPath)) {
        return;
    }
    const content1 = file_1.readContent(tree, stylesLessPath).replace(`alain-fullscreen`, `alain-blank`);
    file_1.overwriteFile(tree, stylesLessPath, content1, true);
    log_1.logInfo(context, `Update alain-fullscreen to alain-blank`);
}
function fixLayout(p, t, c) {
    project = p;
    tree = t;
    context = c;
    log_1.logStart(context, `Use @delon/theme/layout instead`);
    upgradeStylePath();
}
exports.fixLayout = fixLayout;
//# sourceMappingURL=layout.js.map