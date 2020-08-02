/**
 * @fileoverview added by tsickle
 * Generated from: src/type-in-element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGVzdGluZy9zcmMvdHlwZS1pbi1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7OztBQVF0RCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWEsRUFBRSxPQUF5QjtJQUNwRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgZGlzcGF0Y2hGYWtlRXZlbnQgfSBmcm9tICcuL2Rpc3BhdGNoLWV2ZW50cyc7XG5cbi8qKlxuICogRm9jdXNlcyBhbiBpbnB1dCwgc2V0cyBpdHMgdmFsdWUgYW5kIGRpc3BhdGNoZXNcbiAqIHRoZSBgaW5wdXRgIGV2ZW50LCBzaW11bGF0aW5nIHRoZSB1c2VyIHR5cGluZy5cbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBiZSBzZXQgb24gdGhlIGlucHV0LlxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBvbnRvIHdoaWNoIHRvIHNldCB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0eXBlSW5FbGVtZW50KHZhbHVlOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgZWxlbWVudC5mb2N1cygpO1xuICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIGRpc3BhdGNoRmFrZUV2ZW50KGVsZW1lbnQsICdpbnB1dCcpO1xufVxuIl19