"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walker = exports.Rule = void 0;
const chalk = require("chalk");
const tslint_1 = require("tslint");
const component_walker_1 = require("../../tslint/component-walker");
const literal_1 = require("../../typescript/literal");
const upgrade_data_1 = require("../../upgrade-data");
/**
 * Rule that walks through every inline or external HTML template and updates outdated
 * CSS selectors.
 */
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
exports.Rule = Rule;
class Walker extends component_walker_1.ComponentWalker {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getUpgradeDataFromWalker(this, 'cssSelectors');
    }
    visitInlineTemplate(node) {
        this._createReplacementsForContent(node, node.getText()).forEach(data => {
            this.addFailureAtReplacement(data.failureMessage, data.replacement);
        });
    }
    visitExternalTemplate(node) {
        this._createReplacementsForContent(node, node.getText()).forEach(data => {
            this.addExternalFailureAtReplacement(node, data.failureMessage, data.replacement);
        });
    }
    /**
     * Searches for outdated css selectors in the specified content and creates replacements
     * with the according messages that can be added to a rule failure.
     */
    _createReplacementsForContent(node, templateContent) {
        const replacements = [];
        this.data.forEach(data => {
            if (data.whitelist && !data.whitelist.html) {
                return;
            }
            const failureMessage = `Found deprecated CSS selector "${chalk.red(data.replace)}"` + ` which has been renamed to "${chalk.green(data.replaceWith)}"`;
            literal_1.findAllSubstringIndices(templateContent, data.replace)
                .map(offset => node.getStart() + offset)
                .map(start => new tslint_1.Replacement(start, data.replace.length, data.replaceWith))
                .forEach(replacement => replacements.push({ replacement, failureMessage }));
        });
        return replacements;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=cssSelectorsTemplateRule.js.map