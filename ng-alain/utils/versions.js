"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeMainVersions = void 0;
const lib_versions_1 = require("./lib-versions");
const package_1 = require("./package");
/**
 * 修复主要依赖的版本号
 */
function UpgradeMainVersions(tree, version = lib_versions_1.VERSION) {
    package_1.addPackage(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`));
    package_1.addPackage(tree, [
        `ng-alain@${version}`,
        `ng-alain-codelyzer@^0.0.1`,
        `ng-alain-plugin-theme@^11.0.1`,
        `source-map-explorer@^2.5.1`,
        `@delon/testing@${version}`,
    ], 'devDependencies');
    // TODO: fix angular depends on 6.x
    package_1.addPackage(tree, ['ajv@^7.1.1', 'ajv-formats@^2.0.2']);
}
exports.UpgradeMainVersions = UpgradeMainVersions;
//# sourceMappingURL=versions.js.map