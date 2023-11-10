"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePreloader = void 0;
const utils_1 = require("../../../utils");
function updatePreloader() {
    return (tree, context) => {
        addESLintIgnore(tree);
        const angularJson = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const projectNames = Object.keys(angularJson.projects);
        for (const name of projectNames) {
            const sourceRoot = angularJson.projects[name].sourceRoot;
            fixIndexHtml(tree, name, sourceRoot, context);
            run(tree, name, sourceRoot, context);
        }
    };
}
exports.updatePreloader = updatePreloader;
function addESLintIgnore(tree) {
    const filePath = '/.eslintignore';
    if (!tree.exists(filePath))
        return;
    const content = tree.readText(filePath);
    if (!content.includes('**/src/index.html')) {
        tree.overwrite(filePath, `${content}\n**/src/index.html`);
    }
}
function fixIndexHtml(tree, _, sourceRoot, __) {
    const indexPath = `${sourceRoot}/index.html`;
    if (!tree.exists(indexPath))
        return;
    let indexContent = tree.readText(indexPath);
    const selfClose = '<app-root />';
    if (!indexContent.includes(selfClose))
        return;
    tree.overwrite(indexPath, indexContent.replace(selfClose, '<app-root></app-root>'));
}
function run(tree, name, sourceRoot, context) {
    // main.ts
    const mainPath = `${sourceRoot}/main.ts`;
    if (!tree.exists(mainPath))
        return;
    let mainContent = tree.readText(mainPath);
    ['preloaderFinished();'].forEach(item => {
        if (mainContent.includes(item))
            mainContent = mainContent.replace(item, '');
    });
    tree.overwrite(mainPath, mainContent);
    // app
    const appPath = `${sourceRoot}/app/app.component.ts`;
    if (!tree.exists(appPath))
        return;
    const appContent = tree.readText(appPath);
    if (appContent.includes(', stepPreloader'))
        return;
    const appContentLines = appContent.split('\n');
    const importIndex = appContentLines.findIndex(line => line.includes(', VERSION as VERSION_ALAIN'));
    const addIndex = appContentLines.findIndex(line => line.includes('export class AppComponent'));
    const callDoneIndex = appContentLines.findIndex(line => line.includes('if (ev instanceof NavigationEnd) {'));
    if (importIndex === -1 || addIndex === -1 || callDoneIndex === -1)
        return;
    appContentLines[importIndex] = appContentLines[importIndex].replace(', VERSION as VERSION_ALAIN', ', VERSION as VERSION_ALAIN, stepPreloader');
    appContentLines.splice(addIndex + 1, 0, 'private donePreloader = stepPreloader();');
    appContentLines.splice(callDoneIndex + 2, 0, 'this.donePreloader();');
    tree.overwrite(appPath, appContentLines.join('\n'));
    (0, utils_1.logWarn)(context, `Upgrade preloader in ${name} project`);
}
//# sourceMappingURL=preloader.js.map