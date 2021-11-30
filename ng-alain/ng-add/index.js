"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeMajorVersion = void 0;
const color_1 = require("@angular/cli/utilities/color");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const fs_1 = require("fs");
const path_1 = require("path");
const utils_1 = require("../utils");
const V = 12;
function genRules(options) {
    return () => {
        const rules = [];
        const applicationOptions = Object.assign({}, options);
        rules.push(schematics_1.schematic('application', applicationOptions));
        if (options.codeStyle) {
            rules.push(schematics_1.schematic('plugin', { name: 'codeStyle', type: 'add' }));
        }
        if (options.defaultLanguage) {
            rules.push(schematics_1.schematic('plugin', {
                name: 'defaultLanguage',
                type: 'add',
                defaultLanguage: options.defaultLanguage
            }));
        }
        if (options.npm) {
            rules.push(schematics_1.schematic('plugin', {
                name: 'networkEnv',
                type: 'add',
                packageManager: 'npm'
            }));
        }
        if (options.yarn) {
            rules.push(schematics_1.schematic('plugin', {
                name: 'networkEnv',
                type: 'add',
                packageManager: 'yarn'
            }));
        }
        return schematics_1.chain(rules);
    };
}
function getFiles() {
    const nodeModulesPath = path_1.join(process.cwd(), 'node_modules');
    if (!fs_1.statSync(nodeModulesPath).isDirectory())
        return [];
    return fs_1.readdirSync(nodeModulesPath) || [];
}
function isUseCNPM() {
    const names = getFiles();
    const res = ['_@angular', '_ng-zorro-antd'].every(prefix => names.findIndex(w => w.startsWith(prefix)) !== -1);
    return res;
}
function finished() {
    return (_, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(color_1.colors.green(`
✓  Congratulations, NG-ALAIN scaffold generation complete 🎉.

NG-ALAIN documentation site: https://ng-alain.com
`));
    };
}
function getNodeMajorVersion() {
    return +process.version.match(/^v(\d+)/)[1];
}
exports.getNodeMajorVersion = getNodeMajorVersion;
function default_1(options) {
    return (tree, context) => {
        if (isUseCNPM()) {
            throw new schematics_1.SchematicsException(`Sorry, Don't use cnpm to install dependencies, pls refer to: https://ng-alain.com/docs/faq#Installation`);
        }
        const nodeVersion = getNodeMajorVersion();
        const allowNodeVersions = [12, 14];
        if (!allowNodeVersions.some(v => nodeVersion === v)) {
            const versions = allowNodeVersions.join(', ');
            throw new schematics_1.SchematicsException(`Sorry, currently only supports ${versions} major version number of node, pls refer to https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3`);
        }
        const pkg = utils_1.readPackage(tree);
        if (pkg.devDependencies['ng-alain']) {
            throw new schematics_1.SchematicsException(`Already an NG-ALAIN project and can't be executed again: ng add ng-alain`);
        }
        let ngCoreVersion = pkg.dependencies['@angular/core'];
        if (/^[\^|\~]/g.test(ngCoreVersion)) {
            ngCoreVersion = ngCoreVersion.substr(1);
        }
        if (!ngCoreVersion.startsWith(`${V}.`)) {
            throw new schematics_1.SchematicsException(`Sorry, the current version only supports angular ${V}.x, pls downgrade the global Anguar-cli version: [yarn global add @angular/cli@${V}] (or via npm: [npm install -g @angular/cli@${V}])`);
        }
        return schematics_1.chain([genRules(options), finished()])(tree, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map