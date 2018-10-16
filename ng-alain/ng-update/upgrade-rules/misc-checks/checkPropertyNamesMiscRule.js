"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const tslint_1 = require("tslint");
const component_walker_1 = require("../../tslint/component-walker");
const elements_1 = require("../../html-parsing/elements");
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
exports.Rule = Rule;
class Walker extends component_walker_1.ComponentWalker {
    visitInlineTemplate(node) {
        this._createFailuresForContent(node, node.getText()).forEach(data => {
            this.addFailureFromStartToEnd(data.start, data.end, data.message);
        });
    }
    visitExternalTemplate(node) {
        this._createFailuresForContent(node, node.getText()).forEach(data => {
            this.addExternalFailureFromStartToEnd(node, data.start, data.end, data.message);
        });
    }
    _createFailuresForContent(node, content) {
        const failures = [];
        elements_1.findElementHasAttributes(content, 'st', [
            '(checkboxChange)',
            '(radioChange)',
            '(sortChange)',
            '(filterChange)',
            '(rowClick)',
            '(rowDblClick)',
        ]).forEach(list => {
            failures.push({
                start: node.getStart() + list.offset,
                end: node.getStart() + list.offset + list.attr.length,
                message: `Found deprecated output property "${chalk_1.red(list.attr)}" of "${chalk_1.bold('simple-table (st)')}" component. ` +
                    `Use the "${chalk_1.green('(change)')}" output property instead, Document: https://ng-alain.com/components/table#STChange`,
            });
        });
        elements_1.findElementHasAttribute(content, 'st', '[sortReName]').forEach(offset => {
            failures.push({
                start: node.getStart() + offset,
                end: node.getStart() + offset + '[sortReName]'.length,
                message: `Found deprecated property "${chalk_1.red('[sortReName]')}" which has been removed, Just only via "STColumn.sort.reName"`,
            });
        });
        elements_1.findElementHasAttributes(content, 'sv', [
            'detailClass',
            '[detailClass]',
        ]).forEach(list => {
            failures.push({
                start: node.getStart() + list.offset,
                end: node.getStart() + list.offset + list.attr.length,
                message: `Found deprecated output property "${chalk_1.red(list.attr)}" of "${chalk_1.bold('desc-list-item (sv)')}" component. ` +
                    `Use the "${chalk_1.green('[type]')}" output property instead, Document: https://ng-alain.com/components/view#sv`,
            });
        });
        elements_1.findElements(content, 'standard-form-row').forEach(offset => {
            failures.push({
                start: node.getStart() + offset,
                end: node.getStart() + offset + 'standard-form-row'.length,
                message: `Found deprecated component "${chalk_1.red('[standard-form-row]')}" which has been removed, you can use "${chalk_1.green('[se]')}" instead, Document: https://ng-alain.com/components/edit`,
            });
        });
        return failures;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=checkPropertyNamesMiscRule.js.map