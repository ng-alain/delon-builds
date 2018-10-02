/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
/** Returns the text of a string literal without the quotes. */
export declare function getLiteralTextWithoutQuotes(literal: ts.StringLiteral): string;
/** Finds all start indices of the given search string in the input string. */
export declare function findAllSubstringIndices(input: string, search: string): number[];
