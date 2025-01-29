"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const colors = require("ansi-colors");
const utils_1 = require("../utils");
const node_1 = require("../utils/node");
const V = 19;
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
        return (0, schematics_1.chain)(rules);
    };
}
// function isYarn(tree: Tree): boolean {
//   return readJSON(tree, DEFAULT_WORKSPACE_PATH)?.cli?.packageManager === 'yarn';
// }
function isValidProjectName(tree, name) {
    var _a, _b;
    return Object.keys((_b = (_a = (0, utils_1.readJSON)(tree, utils_1.DEFAULT_WORKSPACE_PATH)) === null || _a === void 0 ? void 0 : _a.projects) !== null && _b !== void 0 ? _b : {}).indexOf(name) !== -1;
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
        // if (!isYarn(tree)) {
        //   context.logger.warn(`TIPS:: Please use yarn instead of NPM to install dependencies`);
        // }
        const nodeVersion = (0, node_1.getNodeMajorVersion)();
        const allowNodeVersions = [18, 20, 22];
        if (!allowNodeVersions.some(v => nodeVersion === v)) {
            const versions = allowNodeVersions.join(', ');
            throw new schematics_1.SchematicsException(`Sorry, currently only supports ${versions} major version number of node (Got ${process.version}), pls refer to https://angular.dev/reference/versions#actively-supported-versions`);
        }
        const pkg = (0, utils_1.readPackage)(tree);
        if (options.project) {
            if (!isValidProjectName(tree, options.project)) {
                throw new schematics_1.SchematicsException(`Not found under the projects node of angular.json: ${options.project}`);
            }
        }
        else {
            if (pkg.devDependencies['ng-alain']) {
                throw new schematics_1.SchematicsException(`Already an NG-ALAIN project and can't be executed again: ng add ng-alain`);
            }
        }
        let ngCoreVersion = pkg.dependencies['@angular/core'];
        if (/^[\^|~]/g.test(ngCoreVersion)) {
            ngCoreVersion = ngCoreVersion.substring(1);
        }
        if (!ngCoreVersion.startsWith(`${V}.`)) {
            throw new schematics_1.SchematicsException(`Sorry, the current version only supports angular ${V}.x, pls downgrade the global Anguar-cli version: [npm install -g @angular/cli@${V}]`);
        }
        return (0, schematics_1.chain)([genRules(options), finished()])(tree, context);
    };
}
//# sourceMappingURL=index.js.map