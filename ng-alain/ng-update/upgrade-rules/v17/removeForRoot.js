"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeForRoot = void 0;
const utils_1 = require("../../../utils");
function removeForRoot() {
    return (tree, context) => {
        const angularJson = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const projectNames = Object.keys(angularJson.projects);
        for (const name of projectNames) {
            const sourceRoot = angularJson.projects[name].sourceRoot;
            removeAlainThemeForRoot(tree, name, sourceRoot, context);
            removeAlainThemeForChild(tree, name, sourceRoot, context);
            removeDelonACLModuleForRoot(tree, name, sourceRoot, context);
        }
    };
}
exports.removeForRoot = removeForRoot;
function removeAlainThemeForRoot(tree, name, sourceRoot, context) {
    const modulePath = `${sourceRoot}/app/global-config.module.ts`;
    if (!tree.exists(modulePath))
        return;
    const forRoot = 'AlainThemeModule.forRoot()';
    const content = tree.readText(modulePath);
    tree.overwrite(modulePath, content.replace(/AlainThemeModule\.forRoot\(\),?/g, ''));
    (0, utils_1.logInfo)(context, `Remove ${forRoot} in ${name} project`);
}
function removeAlainThemeForChild(tree, name, _, context) {
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
function removeDelonACLModuleForRoot(tree, name, sourceRoot, context) {
    const modulePath = `${sourceRoot}/app/global-config.module.ts`;
    if (!tree.exists(modulePath))
        return;
    const forRoot = 'DelonACLModule.forRoot()';
    const content = tree.readText(modulePath);
    tree.overwrite(modulePath, content.replace(/DelonACLModule\.forRoot\(\),?/g, ''));
    (0, utils_1.logInfo)(context, `Remove ${forRoot} in ${name} project`);
}
//# sourceMappingURL=removeForRoot.js.map