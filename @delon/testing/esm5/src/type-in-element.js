/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { dispatchFakeEvent } from './dispatch-events';
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param {?} value Value to be set on the input.
 * @param {?} element Element onto which to set the value.
 * @return {?}
 */
export function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3Rlc3RpbmcvIiwic291cmNlcyI6WyJzcmMvdHlwZS1pbi1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0FBUXRELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYSxFQUFFLE9BQXlCO0lBQ3BFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN0QixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBkaXNwYXRjaEZha2VFdmVudCB9IGZyb20gJy4vZGlzcGF0Y2gtZXZlbnRzJztcblxuLyoqXG4gKiBGb2N1c2VzIGFuIGlucHV0LCBzZXRzIGl0cyB2YWx1ZSBhbmQgZGlzcGF0Y2hlc1xuICogdGhlIGBpbnB1dGAgZXZlbnQsIHNpbXVsYXRpbmcgdGhlIHVzZXIgdHlwaW5nLlxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIGJlIHNldCBvbiB0aGUgaW5wdXQuXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IG9udG8gd2hpY2ggdG8gc2V0IHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGVJbkVsZW1lbnQodmFsdWU6IHN0cmluZywgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCkge1xuICBlbGVtZW50LmZvY3VzKCk7XG4gIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgZGlzcGF0Y2hGYWtlRXZlbnQoZWxlbWVudCwgJ2lucHV0Jyk7XG59XG4iXX0=