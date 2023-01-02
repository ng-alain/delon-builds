"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const colors = require("ansi-colors");
const utils_1 = require("../utils");
const node_1 = require("../utils/node");
const V = 15;
function genRules(options) {
    return () => {
        const rules = [];
        const applicationOptions = Object.assign({}, options);
        rules.push((0, schematics_1.schematic)('application', applicationOptions));
        if (options.codeStyle) {
            rules.push((0, schematics_1.schematic)('plugin', { name: 'codeStyle', type: 'add' }));
        }
        if (options.defaultLanguage) {
            rules.push((0, schematics_1.schematic)('plugin', {
                name: 'defaultLanguage',
                type: 'add',
                defaultLanguage: options.defaultLanguage
            }));
        }
        if (options.npm) {
            rules.push((0, schematics_1.schematic)('plugin', {
                name: 'networkEnv',
                type: 'add',
                packageManager: 'npm'
            }));
        }
        if (options.yarn) {
            rules.push((0, schematics_1.schematic)('plugin', {
                name: 'networkEnv',
                type: 'add',
                packageManager: 'yarn'
            }));
        }
        return (0, schematics_1.chain)(rules);
    };
}
function isYarn(tree) {
    var _a, _b;
    return ((_b = (_a = (0, utils_1.readJSON)(tree, '/angular.json')) === null || _a === void 0 ? void 0 : _a.cli) === null || _b === void 0 ? void 0 : _b.packageManager) === 'yarn';
}
function finished() {
    return (_, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.info(colors.green(`
✓  Congratulations, NG-ALAIN scaffold generation complete 🎉.

NG-ALAIN documentation site: https://ng-alain.com
`));
    };
}
function default_1(options) {
    return (tree, context) => {
        if (!isYarn(tree)) {
            context.logger.warn(`TIPS:: Please use yarn instead of NPM to install dependencies`);
        }
        const nodeVersion = (0, node_1.getNodeMajorVersion)();
        const allowNodeVersions = [12, 14, 16];
        if (!allowNodeVersions.some(v => nodeVersion === v)) {
            const versions = allowNodeVersions.join(', ');
            throw new schematics_1.SchematicsException(`Sorry, currently only supports ${versions} major version number of node (Got ${process.version}), pls refer to https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3`);
        }
        const pkg = (0, utils_1.readPackage)(tree);
        if (pkg.devDependencies['ng-alain']) {
            throw new schematics_1.SchematicsException(`Already an NG-ALAIN project and can't be executed again: ng add ng-alain`);
        }
        let ngCoreVersion = pkg.dependencies['@angular/core'];
        if (/^[\^|\~]/g.test(ngCoreVersion)) {
            ngCoreVersion = ngCoreVersion.substring(1);
        }
        if (!ngCoreVersion.startsWith(`${V}.`)) {
            throw new schematics_1.SchematicsException(`Sorry, the current version only supports angular ${V}.x, pls downgrade the global Anguar-cli version: [yarn global add @angular/cli@${V}] (or via npm: [npm install -g @angular/cli@${V}])`);
        }
        return (0, schematics_1.chain)([genRules(options), finished()])(tree, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map