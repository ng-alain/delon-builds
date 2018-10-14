import { ProgramAwareRuleWalker, RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
export declare class Rule extends Rules.TypedRule {
    applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): RuleFailure[];
}
export declare class Walker extends ProgramAwareRuleWalker {
    visitPropertyAccessExpression(node: ts.PropertyAccessExpression): void;
}
