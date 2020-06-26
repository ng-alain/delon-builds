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
export function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
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
export function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return dispatchEvent(node, createTouchEvent(type, x, y));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3Rlc3RpbmcvIiwic291cmNlcyI6WyJzcmMvZGlzcGF0Y2gtZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQUczRyxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQW1CLEVBQUUsS0FBWTtJQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBbUIsRUFBRSxJQUFvQixFQUFFLFNBQW1CO0lBQzlGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pHLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFnQjtJQUMvRixPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFpQixDQUFDO0FBQzFGLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdHLE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBYyxDQUFDO0FBQ2xELENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDdkUsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGNyZWF0ZUZha2VFdmVudCwgY3JlYXRlS2V5Ym9hcmRFdmVudCwgY3JlYXRlTW91c2VFdmVudCwgY3JlYXRlVG91Y2hFdmVudCB9IGZyb20gJy4vZXZlbnQtb2JqZWN0cyc7XG5cbi8qKiBVdGlsaXR5IHRvIGRpc3BhdGNoIGFueSBldmVudCBvbiBhIE5vZGUuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCBldmVudDogRXZlbnQpOiBFdmVudCB7XG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGZha2UgZXZlbnQgb24gYSBzcGVjaWZpZWQgbm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEZha2VFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCB0eXBlOiBzdHJpbmcgfCBFdmVudCwgY2FuQnViYmxlPzogYm9vbGVhbik6IEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gY3JlYXRlRmFrZUV2ZW50KHR5cGUsIGNhbkJ1YmJsZSkgOiB0eXBlKTtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGtleWJvYXJkIGV2ZW50IHdpdGggYSBzcGVjaWZpZWQga2V5IGNvZGUuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hLZXlib2FyZEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywga2V5Q29kZTogbnVtYmVyLCB0YXJnZXQ/OiBFbGVtZW50KTogS2V5Ym9hcmRFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZSwga2V5Q29kZSwgdGFyZ2V0KSkgYXMgS2V5Ym9hcmRFdmVudDtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIG1vdXNlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hNb3VzZUV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgeCA9IDAsIHkgPSAwLCBldmVudCA9IGNyZWF0ZU1vdXNlRXZlbnQodHlwZSwgeCwgeSkpOiBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgZXZlbnQpIGFzIE1vdXNlRXZlbnQ7XG59XG5cbi8qKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSB0b3VjaCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoVG91Y2hFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIHggPSAwLCB5ID0gMCkge1xuICByZXR1cm4gZGlzcGF0Y2hFdmVudChub2RlLCBjcmVhdGVUb3VjaEV2ZW50KHR5cGUsIHgsIHkpKTtcbn1cbiJdfQ==