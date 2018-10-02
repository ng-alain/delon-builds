"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const upgradeRules = [
    // Element selector update rules
    'element-selectors-string-literal',
    'element-selectors-stylesheet',
    'element-selectors-template',
];
const rulesDirectory = [
    path_1.join(__dirname, 'rules/'),
    path_1.join(__dirname, 'rules/element-selectors'),
];
function createTslintConfig(target) {
    const rules = upgradeRules.reduce((result, ruleName) => {
        result[ruleName] = [true, target];
        return result;
    }, {});
    return { rulesDirectory, rules };
}
exports.createTslintConfig = createTslintConfig;
//# sourceMappingURL=tslint-update.js.map