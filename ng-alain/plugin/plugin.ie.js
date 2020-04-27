"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../utils/file");
const json_1 = require("../utils/json");
const project_1 = require("../utils/project");
const tsconfig_es5_app_1 = require("./files/ie/tsconfig-es5.app");
const tsconfig_es5_spec_1 = require("./files/ie/tsconfig-es5.spec");
let project;
function setAngularJson(host, options) {
    const json = json_1.getAngular(host);
    const project = project_1.getProjectFromWorkspace(json, options.project);
    if (options.type === 'add') {
        project.architect.build.configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
        project.architect.serve.configurations.es5 = { browserTarget: `${project.name}:build:es5` };
        project.architect.test.configurations = {
            es5: { tsConfig: './tsconfig-es5.app.json' },
        };
        project.architect.e2e.configurations.es5 = { browserTarget: `${project.name}:build:es5` };
    }
    else {
        delete project.architect.build.configurations.es5;
        delete project.architect.serve.configurations.es5;
        delete project.architect.test.configurations;
        delete project.architect.e2e.configurations.es5;
    }
    json_1.overwriteAngular(host, json);
}
function setBrowserslist(host, options) {
    const filePath = `/browserslist`;
    let content = file_1.readContent(host, filePath);
    if (options.type === 'add') {
        content = content.replace(`not IE 9-11`, `not IE 9-10`);
    }
    else {
        content = content.replace(`not IE 9-10`, `not IE 9-11`);
    }
    file_1.overwriteFile(host, filePath, content, true, true);
}
function setPackage(host, options) {
    // libs
    (options.type === 'add' ? json_1.addPackageToPackageJson : json_1.removePackageFromPackageJson)(host, ['classlist.js@DEP-9.0.0', 'web-animations-js@DEP-9.0.0'], 'dependencies');
    // scripts
    (options.type === 'add' ? json_1.addPackageToPackageJson : json_1.removePackageFromPackageJson)(host, ['ie:start@npm run color-less && ng serve -o --configuration es5', 'ie:hmr@npm run color-less && ng serve -c=hmr --configuration es5'], 'scripts');
}
function setPolyfills(host, options) {
    const filePath = `${project.sourceRoot}/app/app.module.ts`;
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
    file_1.overwriteFile(host, filePath, content, true, true);
}
function setTsConfig(host, options) {
    // build
    const buildFilePath = `/tsconfig-es5.app.json`;
    if (host.exists(buildFilePath))
        host.delete(buildFilePath);
    if (options.type === 'add') {
        file_1.overwriteFile(host, buildFilePath, JSON.stringify(tsconfig_es5_app_1.default, null, 2), true, true);
    }
    // spec
    const specFilePath = `/tsconfig-es5.spec.json`;
    if (host.exists(specFilePath))
        host.delete(specFilePath);
    if (options.type === 'add') {
        file_1.overwriteFile(host, specFilePath, JSON.stringify(tsconfig_es5_spec_1.default, null, 2), true, true);
    }
}
function pluginIE(options) {
    return (host) => {
        project = project_1.getProject(host, options.project);
        setAngularJson(host, options);
        setBrowserslist(host, options);
        setPackage(host, options);
        setPolyfills(host, options);
        setTsConfig(host, options);
    };
}
exports.pluginIE = pluginIE;
//# sourceMappingURL=plugin.ie.js.map