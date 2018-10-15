"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** Returns the text of a string literal without the quotes. */
function getLiteralTextWithoutQuotes(literal) {
    return literal.getText().substring(1, literal.getText().length - 1);
}
exports.getLiteralTextWithoutQuotes = getLiteralTextWithoutQuotes;
/** Finds all start indices of the given search string in the input string. */
function findAllSubstringIndices(input, search) {
    const result = [];
    let i = -1;
    while ((i = input.indexOf(search, i + 1)) !== -1) {
        result.push(i);
        // if (i > 3 && !input.substr(i - 3, i).startsWith('')) {
        //   result.push(i);
        // }
    }
    return result;
}
exports.findAllSubstringIndices = findAllSubstringIndices;
//# sourceMappingURL=literal.js.map