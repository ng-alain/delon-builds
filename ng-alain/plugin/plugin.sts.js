"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const json_1 = require("../utils/json");
function fixPackage(options) {
    return (host) => {
        (options.type === 'add' ? json_1.addPackageToPackageJson : json_1.removePackageFromPackageJson)(host, ['ng-alain-sts@DEP-7.3.1'], 'devDependencies');
    };
}
function fixFiles() {
    return schematics_1.chain([schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/sts'), [schematics_1.move('/_cli-tpl')]), schematics_1.MergeStrategy.Overwrite)]);
}
function installPackages() {
    return (_host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function pluginSTS(options) {
    return [fixPackage(options), fixFiles(), installPackages()];
}
exports.pluginSTS = pluginSTS;
//# sourceMappingURL=plugin.sts.js.map