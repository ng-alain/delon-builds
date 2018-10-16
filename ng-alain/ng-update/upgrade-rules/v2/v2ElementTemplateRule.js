"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslint_1 = require("tslint");
const component_walker_1 = require("../../tslint/component-walker");
const upgrade_data_1 = require("../../upgrade-data");
const dom_service_1 = require("../../dom/dom.service");
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
exports.Rule = Rule;
class Walker extends component_walker_1.ComponentWalker {
    constructor() {
        super(...arguments);
        this.data = upgrade_data_1.getUpgradeDataFromWalker(this, 'v2Element');
        this.dom = new dom_service_1.DomService();
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
    _createReplacementsForContent(node, templateContent) {
        const replacements = [];
        this.dom.replace(templateContent, this.data, dom => {
            const newHtml = this.dom.prettify(dom);
            replacements.push({
                replacement: new tslint_1.Replacement(node.getStart(), templateContent.length, newHtml),
                failureMessage: ``,
            });
        });
        return replacements;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=v2ElementTemplateRule.js.map