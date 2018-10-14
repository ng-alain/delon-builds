"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const tslint_1 = require("tslint");
class Rule extends tslint_1.Rules.TypedRule {
    applyWithProgram(sourceFile, program) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions(), program));
    }
}
exports.Rule = Rule;
class Walker extends tslint_1.ProgramAwareRuleWalker {
    visitPropertyAccessExpression(node) {
        const hostType = this.getTypeChecker().getTypeAtLocation(node.expression);
        const typeName = hostType && hostType.symbol && hostType.symbol.getName();
        if (typeName === 'st' &&
            [
                'checkboxChange',
                'radioChange',
                'sortChange',
                'filterChange',
                'rowClick',
                'rowDblClick',
            ].includes(node.name.text)) {
            this.addFailureAtNode(node, `Found deprecated output property "${chalk_1.red(node.name.text)}" of "${chalk_1.bold('simple-table')}" component.` +
                `Use the "${chalk_1.green('change')}" output property instead.`);
        }
        super.visitPropertyAccessExpression(node);
    }
}
exports.Walker = Walker;
//# sourceMappingURL=checkPropertyNamesMiscRule.js.map