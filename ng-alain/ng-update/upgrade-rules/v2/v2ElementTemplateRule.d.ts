import { RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
import { ExternalResource } from '../../tslint/component-file';
import { ComponentWalker } from '../../tslint/component-walker';
import { DomService } from '../../dom/dom.service';
export declare class Rule extends Rules.AbstractRule {
    apply(sourceFile: ts.SourceFile): RuleFailure[];
}
export declare class Walker extends ComponentWalker {
    data: import("../../data/v2-element").V2ElementUpgradeData[];
    dom: DomService;
    visitInlineTemplate(node: ts.StringLiteralLike): void;
    visitExternalTemplate(node: ExternalResource): void;
    private _createReplacementsForContent;
}
