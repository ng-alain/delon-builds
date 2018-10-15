"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const glob_1 = require("glob");
const tslint_1 = require("tslint");
const element_selectors_1 = require("../../delon/data/element-selectors");
const component_walker_1 = require("../../tslint/component-walker");
const rule_failures_1 = require("../../tslint/rule-failures");
const literal_1 = require("../../typescript/literal");
/**
 * Rule that walks through every inline or external CSS stylesheet and updates outdated
 * element selectors.
 */
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
exports.Rule = Rule;
class Walker extends component_walker_1.ComponentWalker {
    constructor(sourceFile, options) {
        // In some applications, developers will have global stylesheets that are not specified in any
        // Angular component. Therefore we glob up all css and scss files outside of node_modules and
        // dist and check them as well.
        const extraFiles = glob_1.sync('!(node_modules|dist)/**/*.+(css|scss|less)');
        super(sourceFile, options, extraFiles);
        extraFiles.forEach(styleUrl => this._reportExternalStyle(styleUrl));
    }
    visitInlineStylesheet(literal) {
        this._createReplacementsForContent(literal, literal.getText())
            .forEach(data => rule_failures_1.addFailureAtReplacement(this, data.failureMessage, data.replacement));
    }
    visitExternalStylesheet(node) {
        this._createReplacementsForContent(node, node.getFullText())
            .map(data => rule_failures_1.createExternalReplacementFailure(node, data.failureMessage, this.getRuleName(), data.replacement))
            .forEach(failure => this.addFailure(failure));
    }
    /**
     * Searches for outdated element selectors in the specified content and creates replacements
     * with the according messages that can be added to a rule failure.
     */
    _createReplacementsForContent(node, stylesheetContent) {
        const replacements = [];
        element_selectors_1.elementSelectors.forEach(selector => {
            const failureMessage = `Found deprecated element selector "${chalk_1.red(selector.replace)}" ` +
                `which has been renamed to "${chalk_1.green(selector.replaceWith)}"`;
            literal_1.findAllSubstringIndices(stylesheetContent, selector.replace)
                .map(offset => node.getStart() + offset)
                .map(start => new tslint_1.Replacement(start, selector.replace.length, selector.replaceWith))
                .forEach(replacement => replacements.push({ replacement, failureMessage }));
        });
        return replacements;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=elementSelectorsStylesheetRule.js.map