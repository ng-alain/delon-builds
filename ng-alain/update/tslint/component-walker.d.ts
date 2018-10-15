/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { IOptions, RuleWalker } from 'tslint';
import * as ts from 'typescript';
import { ExternalResource } from './component-file';
/**
 * Custom TSLint rule walker that identifies Angular components and visits specific parts of
 * the component metadata.
 */
export declare class ComponentWalker extends RuleWalker {
    protected visitInlineTemplate(_template: ts.StringLiteral): void;
    protected visitInlineStylesheet(_stylesheet: ts.StringLiteral): void;
    protected visitExternalTemplate(_template: ExternalResource): void;
    protected visitExternalStylesheet(_stylesheet: ExternalResource): void;
    private skipFiles;
    constructor(sourceFile: ts.SourceFile, options: IOptions, skipFiles?: string[]);
    visitNode(node: ts.Node): void;
    private _visitDirectiveCallExpression;
    private _reportInlineStyles;
    private _visitExternalStylesArrayLiteral;
    private _reportExternalTemplate;
    _reportExternalStyle(stylePath: string): void;
    /**
     * Recursively searches for the metadata object literal expression inside of a directive call
     * expression. Since expression calls can be nested through *parenthesized* expressions, we
     * need to recursively visit and check every expression inside of a parenthesized expression.
     *
     * e.g. @Component((({myMetadataExpression}))) will return `myMetadataExpression`.
     */
    private _findMetadataFromExpression;
}
