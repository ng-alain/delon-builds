"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginSTS = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const utils_1 = require("../utils");
function fixPackage(options) {
    return (tree) => {
        (options.type === 'add' ? utils_1.addPackage : utils_1.removePackage)(tree, ['ng-alain-sts@^0.0.1'], 'devDependencies');
    };
}
function fixFiles() {
    return schematics_1.chain([schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/sts'), [schematics_1.move('/_cli-tpl')]), schematics_1.MergeStrategy.Overwrite)]);
}
function installPackages() {
    return (_tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function pluginSTS(options) {
    return [fixPackage(options), fixFiles(), installPackages()];
}
exports.pluginSTS = pluginSTS;
//# sourceMappingURL=plugin.sts.js.map