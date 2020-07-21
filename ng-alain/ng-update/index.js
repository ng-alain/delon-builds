"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV9 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const glob_1 = require("glob");
const upgrade_data_1 = require("./upgrade-data");
const v9Rule_1 = require("./upgrade-rules/v9/v9Rule");
/** List of additional upgrade rules which are specifically for the CDK. */
const extraUpgradeRules = [
    // Misc check rules
    'check-property-names-misc',
];
const ruleDirectories = glob_1.sync('upgrade-rules/**/', {
    cwd: __dirname,
    absolute: true,
});
/** TSLint upgrade configuration that will be passed to the CDK ng-update rule. */
const tslintUpgradeConfig = {
    upgradeData: upgrade_data_1.delonUpgradeData,
    extraRuleDirectories: ruleDirectories,
    extraUpgradeRules,
};
function updateToV9() {
    return schematics_1.chain([v9Rule_1.v9Rule]);
}
exports.updateToV9 = updateToV9;
function postUpdate() {
    return () => console.log('\nComplete! Please check the output above for any issues that were detected but could not be automatically fixed.');
}
exports.postUpdate = postUpdate;
//# sourceMappingURL=index.js.map