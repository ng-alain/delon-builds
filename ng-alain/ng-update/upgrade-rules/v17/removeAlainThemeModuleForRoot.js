"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAlainThemeModuleForRoot = void 0;
const utils_1 = require("../../../utils");
function removeAlainThemeModuleForRoot() {
    return (tree, context) => {
        const angularJson = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const projectNames = Object.keys(angularJson.projects);
        for (const name of projectNames) {
            removeForRoot(tree, name, angularJson.projects[name].sourceRoot, context);
            removeForChild(tree, name, angularJson.projects[name].sourceRoot, context);
        }
    };
}
exports.removeAlainThemeModuleForRoot = removeAlainThemeModuleForRoot;
function removeForRoot(tree, name, sourceRoot, context) {
    const modulePath = `${sourceRoot}/app/global-config.module.ts`;
    if (!tree.exists(modulePath))
        return;
    const forRoot = 'AlainThemeModule.forRoot()';
    const content = tree.readText(modulePath).replace(`${forRoot},`, '');
    tree.overwrite(modulePath, content);
    (0, utils_1.logInfo)(context, `Remove ${forRoot} in ${name} project`);
}
function removeForChild(tree, name, _, context) {
    const forChild = 'AlainThemeModule.forChild()';
    tree.visit((path, entry) => {
        if (!entry || !path.endsWith('.ts'))
            return;
        const content = tree.readText(path);
        if (!content.includes(forChild))
            return;
        tree.overwrite(path, content.replace(forChild, 'AlainThemeModule'));
    });
    (0, utils_1.logInfo)(context, `Remove ${forChild} in ${name} project`);
}
//# sourceMappingURL=removeAlainThemeModuleForRoot.js.map