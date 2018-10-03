/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';

/** Returns the text of a string literal without the quotes. */
export function getLiteralTextWithoutQuotes(literal: ts.StringLiteral) {
  return literal.getText().substring(1, literal.getText().length - 1);
}

/** Finds all start indices of the given search string in the input string. */
export function findAllSubstringIndices(input: string, search: string): number[] {
  const result: number[] = [];
  let i = -1;
  while ((i = input.indexOf(search, i + 1)) !== -1) {
    result.push(i);
    // if (i > 3 && !input.substr(i - 3, i).startsWith('')) {
    //   result.push(i);
    // }
  }
  return result;
}
