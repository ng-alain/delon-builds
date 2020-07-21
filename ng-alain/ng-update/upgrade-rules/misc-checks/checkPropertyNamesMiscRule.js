"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walker = exports.Rule = void 0;
const chalk = require("chalk");
const tslint_1 = require("tslint");
const elements_1 = require("../../html-parsing/elements");
const component_walker_1 = require("../../tslint/component-walker");
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
                message: `Found removed @Output() "${chalk.red(list.attr)}" on "${chalk.bold('st(simple-table)')}". ` +
                    `Use "${chalk.green('(change)')}" instead, Document: https://ng-alain.com/components/table#STChange`,
            });
        });
        elements_1.findElementHasAttribute(content, 'st', '[sortReName]').forEach(offset => {
            failures.push({
                start: node.getStart() + offset,
                end: node.getStart() + offset + '[sortReName]'.length,
                message: `Found deprecated @Input() "${chalk.red('[sortReName]')}" which has been removed, Use "${chalk.green('STColumn.sort.reName')}" instead.`,
            });
        });
        elements_1.findElementHasAttributes(content, 'sv', ['detailClass', '[detailClass]']).forEach(list => {
            failures.push({
                start: node.getStart() + list.offset,
                end: node.getStart() + list.offset + list.attr.length,
                message: `Found deprecated @Input() "${chalk.red(list.attr)}" on "${chalk.bold('sv(desc-list-item)')}". ` +
                    `Use "${chalk.green('[type]')}" instead, Document: https://ng-alain.com/components/view#sv`,
            });
        });
        elements_1.findElements(content, 'standard-form-row').forEach(offset => {
            failures.push({
                start: node.getStart() + offset,
                end: node.getStart() + offset + 'standard-form-row'.length,
                message: `Found deprecated component "${chalk.red('[standard-form-row]')}" which has been removed, you can use "${chalk.green('[se]')}" instead, Document: https://ng-alain.com/components/edit`,
            });
        });
        return failures;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=checkPropertyNamesMiscRule.js.map