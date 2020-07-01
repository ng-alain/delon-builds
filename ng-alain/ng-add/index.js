"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const json_1 = require("../utils/json");
function genRules(options) {
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
            defaultLanguage: options.defaultLanguage,
        }));
    }
    if (options.npm) {
        rules.push(schematics_1.schematic('plugin', {
            name: 'networkEnv',
            type: 'add',
            packageManager: 'npm',
        }));
    }
    if (options.yarn) {
        rules.push(schematics_1.schematic('plugin', {
            name: 'networkEnv',
            type: 'add',
            packageManager: 'yarn',
        }));
    }
    if (options.hmr) {
        rules.push(schematics_1.schematic('plugin', { name: 'hmr', type: 'add' }));
    }
    return schematics_1.chain(rules);
}
function default_1(options) {
    return (host) => {
        const pkg = json_1.getJSON(host, `package.json`);
        let ngCoreVersion = pkg.dependencies['@angular/core'];
        if (/^[\^|\~]/g.test(ngCoreVersion)) {
            ngCoreVersion = ngCoreVersion.substr(1);
        }
        if (!ngCoreVersion.startsWith('9.')) {
            throw new Error(`Sorry, the current version only supports angular 9.x, pls downgrade the global Anguar-cli version: [yarn global add @angular/cli@9.x] (or via npm: [npm install -g @angular/cli@9.x])`);
        }
        return genRules(options);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map