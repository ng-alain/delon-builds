"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleUpgradeData = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const data_1 = require("./data");
exports.ruleUpgradeData = {
    attributeSelectors: data_1.attributeSelectors,
    classNames: data_1.classNames,
    constructorChecks: data_1.constructorChecks,
    cssSelectors: data_1.cssSelectors,
    elementSelectors: data_1.elementSelectors,
    inputNames: data_1.inputNames,
    methodCallChecks: data_1.methodCallChecks,
    outputNames: data_1.outputNames,
    propertyNames: data_1.propertyNames,
    symbolRemoval: schematics_1.symbolRemoval,
    cssTokens: data_1.cssTokens
};
//# sourceMappingURL=upgrade-data.js.map