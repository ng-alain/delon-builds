"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceProvideAlainConfig = void 0;
const utils_1 = require("../../../utils");
function replaceProvideAlainConfig() {
    return (tree, context) => {
        const angularJson = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH);
        const projectNames = Object.keys(angularJson.projects);
        for (const name of projectNames) {
            run(tree, name, angularJson.projects[name].sourceRoot, context);
        }
    };
}
exports.replaceProvideAlainConfig = replaceProvideAlainConfig;
function run(tree, name, sourceRoot, context) {
    const filePath = `${sourceRoot}/app/global-config.module.ts`;
    if (!tree.exists(filePath))
        return;
    const text = '{ provide: ALAIN_CONFIG, useValue: alainConfig }';
    const content = tree.readText(filePath).replace(text, 'provideAlainConfig(alainConfig)');
    tree.overwrite(filePath, content);
    (0, utils_1.logInfo)(context, `Use provideAlainConfig instead of ALAIN_CONFIG in ${name} project`);
}
//# sourceMappingURL=replaceProvideAlainConfig.js.map