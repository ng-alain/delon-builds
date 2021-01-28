"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginIE = void 0;
const colors = require("ansi-colors");
const utils_1 = require("../utils");
const json_1 = require("../utils/json");
const project_1 = require("../utils/project");
const tsconfig_es5_app_1 = require("./files/ie/tsconfig-es5.app");
const tsconfig_es5_spec_1 = require("./files/ie/tsconfig-es5.spec");
let project;
function setAngularJson(host, options) {
    const json = json_1.getAngular(host);
    const p = project_1.getProjectFromWorkspace(json, options.project);
    if (options.type === 'add') {
        p.architect.build.configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
        p.architect.serve.configurations.es5 = { browserTarget: `${p.name}:build:es5` };
        p.architect.test.configurations = {
            es5: { tsConfig: './tsconfig-es5.app.json' },
        };
        p.architect.e2e.configurations.es5 = { browserTarget: `${p.name}:build:es5` };
    }
    else {
        delete p.architect.build.configurations.es5;
        delete p.architect.serve.configurations.es5;
        delete p.architect.test.configurations;
        delete p.architect.e2e.configurations.es5;
    }
    json_1.overwriteAngular(host, json);
}
function setBrowserslist(tree, options) {
    const filePath = `${options.root}/.browserslistrc`;
    let content = utils_1.readContent(tree, filePath);
    if (options.type === 'add') {
        content = content.replace(`not IE 11`, `IE 11`);
    }
    else {
        content = content.replace(`IE 11`, `not IE 11`);
    }
    utils_1.overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
}
function setPackage(host, options) {
    // libs
    (options.type === 'add' ? json_1.addPackageToPackageJson : json_1.removePackageFromPackageJson)(host, ['classlist.js@^1.1.0', 'web-animations-js@^2.3.2'], 'dependencies');
    // scripts
    (options.type === 'add' ? json_1.addPackageToPackageJson : json_1.removePackageFromPackageJson)(host, ['ie:start@ng serve -o --configuration es5', 'ie:hmr@ng serve --hmr --configuration es5'], 'scripts');
}
function setPolyfills(tree, options) {
    const filePath = `${project.sourceRoot}/polyfills.ts`;
    let content = '';
    if (options.type === 'add') {
        content = `import 'core-js/modules/es.array.includes';
import 'classlist.js';
import 'web-animations-js';
import 'zone.js/dist/zone';`;
    }
    else {
        content = `import 'zone.js/dist/zone';`;
    }
    utils_1.overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
}
function setTsConfig(tree, options) {
    // build
    const buildFilePath = `${options.root}/tsconfig-es5.app.json`;
    if (tree.exists(buildFilePath))
        tree.delete(buildFilePath);
    if (options.type === 'add') {
        utils_1.overwriteFile({
            tree,
            filePath: buildFilePath,
            content: JSON.stringify(tsconfig_es5_app_1.default, null, 2),
            overwrite: true,
            contentIsString: true,
        });
    }
    // spec
    const specFilePath = `${options.root}/tsconfig-es5.spec.json`;
    if (tree.exists(specFilePath))
        tree.delete(specFilePath);
    if (options.type === 'add') {
        utils_1.overwriteFile({
            tree,
            filePath: specFilePath,
            content: JSON.stringify(tsconfig_es5_spec_1.default, null, 2),
            overwrite: true,
            contentIsString: true,
        });
    }
}
function pluginIE(options) {
    return (host, context) => {
        project = project_1.getProject(host, options.project);
        setAngularJson(host, options);
        setBrowserslist(host, options);
        setPackage(host, options);
        setPolyfills(host, options);
        setTsConfig(host, options);
        context.logger.info(colors.yellow(`  ⚠  If you encounter [No provider for AlainConfigService], please refer to https://github.com/ng-alain/ng-alain/issues/1624#issuecomment-623071468`));
    };
}
exports.pluginIE = pluginIE;
//# sourceMappingURL=plugin.ie.js.map