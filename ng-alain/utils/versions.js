"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeDelonVersions = void 0;
const lib_versions_1 = require("./lib-versions");
const package_1 = require("./package");
/**
 * 修复所有 DELON 版本号
 */
function UpgradeDelonVersions(tree, version = lib_versions_1.VERSION) {
    package_1.addPackage(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`));
}
exports.UpgradeDelonVersions = UpgradeDelonVersions;
//# sourceMappingURL=versions.js.map