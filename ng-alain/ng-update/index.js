"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = require("glob");
const target_version_1 = require("./target-version");
const upgrade_rules_1 = require("./upgrade-rules");
const upgrade_data_1 = require("./upgrade-data");
/** List of additional upgrade rules which are specifically for the CDK. */
const extraUpgradeRules = [
    // Misc check rules
    'check-property-names-misc',
    // v2
    ['v2-element-template', target_version_1.TargetVersion.V2],
];
const ruleDirectories = glob_1.sync('upgrade-rules/**/', { cwd: __dirname, absolute: true });
/** TSLint upgrade configuration that will be passed to the CDK ng-update rule. */
const tslintUpgradeConfig = {
    upgradeData: upgrade_data_1.delonUpgradeData,
    extraRuleDirectories: ruleDirectories,
    extraUpgradeRules,
};
function updateToV2() {
    return upgrade_rules_1.createUpgradeRule(target_version_1.TargetVersion.V2, tslintUpgradeConfig);
}
exports.updateToV2 = updateToV2;
function postUpdate() {
    return () => console.log('\nComplete! Please check the output above for any issues that were detected but could not' +
        ' be automatically fixed.');
}
exports.postUpdate = postUpdate;
//# sourceMappingURL=index.js.map