"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeDelonVersions = void 0;
const lib_versions_1 = require("./lib-versions");
const log_1 = require("./log");
const package_1 = require("./package");
/**
 * 修复所有 DELON 版本号
 */
function UpgradeDelonVersions(version = lib_versions_1.VERSION) {
    return (tree, context) => {
        package_1.addPackage(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`));
        log_1.logStart(context, `Upgrade @delon/* version number`);
    };
}
exports.UpgradeDelonVersions = UpgradeDelonVersions;
//# sourceMappingURL=versions.js.map