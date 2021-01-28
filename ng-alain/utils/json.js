"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllowedCommonJsDependencies = exports.addAllowedCommonJsDependencies = exports.scriptsToAngularJson = exports.overwriteAngular = exports.getAngular = exports.removePackageFromPackageJson = exports.addPackageToPackageJson = exports.overwritePackage = exports.getPackage = exports.overwriteJSON = exports.getJSON = void 0;
const jsonc_parser_1 = require("jsonc-parser");
const project_1 = require("./project");
function getJSON(host, jsonFile, type) {
    if (!host.exists(jsonFile))
        return null;
    const sourceText = host.read(jsonFile).toString('utf-8');
    try {
        const json = jsonc_parser_1.parse(sourceText);
        if (type && !json[type]) {
            json[type] = {};
        }
        return json;
    }
    catch (ex) {
        console.log(`Can't parse json file (${jsonFile}), pls check for comments or trailing commas, or validate json via https://jsonlint.com/`);
        throw ex;
    }
}
exports.getJSON = getJSON;
function overwriteJSON(host, jsonFile, json) {
    host.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
exports.overwriteJSON = overwriteJSON;
function getPackage(host, type) {
    return getJSON(host, 'package.json', type);
}
exports.getPackage = getPackage;
function overwritePackage(host, json) {
    return overwriteJSON(host, 'package.json', json);
}
exports.overwritePackage = overwritePackage;
/**
 * Adds a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ])
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ], 'devDependencies')
 * ```
 */
function addPackageToPackageJson(host, pkg, type = 'dependencies') {
    const json = getJSON(host, 'package.json', type);
    if (json == null)
        return host;
    if (!Array.isArray(pkg))
        pkg = [pkg];
    pkg.forEach(p => {
        if (!json[type][p]) {
            const pos = p.lastIndexOf('@');
            json[type][p.substr(0, pos)] = p.substr(pos + 1);
        }
    });
    overwritePackage(host, json);
    return host;
}
exports.addPackageToPackageJson = addPackageToPackageJson;
/**
 * Removes a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc' ])
 * addPackageToPackageJson(host, [ '＠delon/abc' ], 'devDependencies')
 * ```
 */
function removePackageFromPackageJson(host, pkg, type = 'dependencies') {
    const json = getJSON(host, 'package.json', type);
    if (json == null)
        return host;
    if (!Array.isArray(pkg))
        pkg = [pkg];
    pkg.forEach(p => delete json[type][p.indexOf('@') !== -1 ? p.substr(0, p.lastIndexOf('@')) : p]);
    overwritePackage(host, json);
    return host;
}
exports.removePackageFromPackageJson = removePackageFromPackageJson;
function getAngular(host, type) {
    return getJSON(host, 'angular.json', type);
}
exports.getAngular = getAngular;
function overwriteAngular(host, json) {
    return overwriteJSON(host, 'angular.json', json);
}
exports.overwriteAngular = overwriteAngular;
function scriptsToAngularJson(host, resources, behavior, types = ['build', 'test'], projectName, clean = false) {
    const json = getAngular(host);
    const project = project_1.getProjectFromWorkspace(json, projectName);
    types.forEach(type => {
        const scriptsNode = (project.targets || project.architect)[type].options.scripts;
        const stylesNode = (project.targets || project.architect)[type].options.styles;
        for (const path of resources) {
            const list = path.endsWith('.js') ? scriptsNode : stylesNode;
            if (clean === true)
                list.length = 0;
            if (behavior === 'add') {
                list.push(path);
            }
            else {
                const idx = list.indexOf(path);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
    });
    overwriteAngular(host, json);
    return host;
}
exports.scriptsToAngularJson = scriptsToAngularJson;
function addAllowedCommonJsDependencies(host, items) {
    const json = getAngular(host);
    const project = project_1.getProjectFromWorkspace(json);
    let list = project.architect.build.options.allowedCommonJsDependencies;
    if (!Array.isArray(list)) {
        list = [];
    }
    if (Array.isArray(items)) {
        list = [...list, ...items];
    }
    const result = new Set(...list);
    // in angular.json
    [
        // 'codesandbox/lib/api/define',
        'hammerjs',
        'file-saver',
        '@ant-design/colors',
        '@antv/path-util',
        '@antv/g-canvas',
        '@antv/g-base',
        '@antv/g-svg',
        '@antv/g-math',
        '@antv/attr',
        '@antv/adjust',
        '@antv/component',
        '@antv/util',
    ].forEach(key => result.add(key));
    project.architect.build.options.allowedCommonJsDependencies = Array.from(result).sort();
    overwriteAngular(host, json);
}
exports.addAllowedCommonJsDependencies = addAllowedCommonJsDependencies;
function removeAllowedCommonJsDependencies(host, key) {
    const json = getAngular(host);
    const project = project_1.getProjectFromWorkspace(json);
    const list = project.architect.build.options.allowedCommonJsDependencies;
    if (!Array.isArray(list)) {
        return;
    }
    const pos = list.indexOf(key);
    if (pos === -1)
        return;
    list.splice(pos, 1);
    project.architect.build.options.allowedCommonJsDependencies = list.sort();
    overwriteAngular(host, json);
}
exports.removeAllowedCommonJsDependencies = removeAllowedCommonJsDependencies;
//# sourceMappingURL=json.js.map