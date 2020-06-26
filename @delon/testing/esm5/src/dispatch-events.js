/**
 * @fileoverview added by tsickle
 * Generated from: src/dispatch-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { createFakeEvent, createKeyboardEvent, createMouseEvent, createTouchEvent } from './event-objects';
/**
 * Utility to dispatch any event on a Node.
 * @param {?} node
 * @param {?} event
 * @return {?}
 */
export function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @param {?} node
 * @param {?} type
 * @param {?=} canBubble
 * @return {?}
 */
export function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, typeof type === 'string' ? createFakeEvent(type, canBubble) : type);
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @param {?} node
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @return {?}
 */
export function dispatchKeyboardEvent(node, type, keyCode, target) {
    return (/** @type {?} */ (dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} event
 * @return {?}
 */
export function dispatchMouseEvent(node, type, x, y, event) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (event === void 0) { event = createMouseEvent(type, x, y); }
    return (/** @type {?} */ (dispatchEvent(node, event)));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
export function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return dispatchEvent(node, createTouchEvent(type, x, y));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3Rlc3RpbmcvIiwic291cmNlcyI6WyJzcmMvZGlzcGF0Y2gtZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQUczRyxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQW1CLEVBQUUsS0FBWTtJQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBbUIsRUFBRSxJQUFvQixFQUFFLFNBQW1CO0lBQzlGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pHLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFnQjtJQUMvRixPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFpQixDQUFDO0FBQzFGLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxDQUFLLEVBQUUsQ0FBSyxFQUFFLEtBQW9DO0lBQWxELGtCQUFBLEVBQUEsS0FBSztJQUFFLGtCQUFBLEVBQUEsS0FBSztJQUFFLHNCQUFBLEVBQUEsUUFBUSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3RyxPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQWMsQ0FBQztBQUNsRCxDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxDQUFLLEVBQUUsQ0FBSztJQUFaLGtCQUFBLEVBQUEsS0FBSztJQUFFLGtCQUFBLEVBQUEsS0FBSztJQUN2RSxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlRmFrZUV2ZW50LCBjcmVhdGVLZXlib2FyZEV2ZW50LCBjcmVhdGVNb3VzZUV2ZW50LCBjcmVhdGVUb3VjaEV2ZW50IH0gZnJvbSAnLi9ldmVudC1vYmplY3RzJztcblxuLyoqIFV0aWxpdHkgdG8gZGlzcGF0Y2ggYW55IGV2ZW50IG9uIGEgTm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIGV2ZW50OiBFdmVudCk6IEV2ZW50IHtcbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgZmFrZSBldmVudCBvbiBhIHNwZWNpZmllZCBub2RlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRmFrZUV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIHR5cGU6IHN0cmluZyB8IEV2ZW50LCBjYW5CdWJibGU/OiBib29sZWFuKTogRXZlbnQge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBjcmVhdGVGYWtlRXZlbnQodHlwZSwgY2FuQnViYmxlKSA6IHR5cGUpO1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEga2V5Ym9hcmQgZXZlbnQgd2l0aCBhIHNwZWNpZmllZCBrZXkgY29kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEtleWJvYXJkRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQpOiBLZXlib2FyZEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlLCBrZXlDb2RlLCB0YXJnZXQpKSBhcyBLZXlib2FyZEV2ZW50O1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgbW91c2UgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaE1vdXNlRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCB4ID0gMCwgeSA9IDAsIGV2ZW50ID0gY3JlYXRlTW91c2VFdmVudCh0eXBlLCB4LCB5KSk6IE1vdXNlRXZlbnQge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBldmVudCkgYXMgTW91c2VFdmVudDtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIHRvdWNoIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hUb3VjaEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgeCA9IDAsIHkgPSAwKSB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZVRvdWNoRXZlbnQodHlwZSwgeCwgeSkpO1xufVxuIl19