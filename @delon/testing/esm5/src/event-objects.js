/**
 * @fileoverview added by tsickle
 * Generated from: src/event-objects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
export function createMouseEvent(type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    /** @type {?} */
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, false /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, 0 /* button */, null /* relatedTarget */);
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
export function createTouchEvent(type, pageX, pageY) {
    if (pageX === void 0) { pageX = 0; }
    if (pageY === void 0) { pageY = 0; }
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    var event = document.createEvent('UIEvent');
    /** @type {?} */
    var touchDetails = { pageX: pageX, pageY: pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
export function createKeyboardEvent(type, keyCode, target, key) {
    /** @type {?} */
    var event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    /** @type {?} */
    var initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
    /** @type {?} */
    var originalPreventDefault = event.preventDefault;
    initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            function () { return keyCode; }) },
        key: { get: (/**
             * @return {?}
             */
            function () { return key; }) },
        target: { get: (/**
             * @return {?}
             */
            function () { return target; }) },
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            function () { return true; }) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
export function createFakeEvent(type, canBubble, cancelable) {
    if (canBubble === void 0) { canBubble = true; }
    if (cancelable === void 0) { cancelable = true; }
    /** @type {?} */
    var event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsic3JjL2V2ZW50LW9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsQ0FBSyxFQUFFLENBQUs7SUFBWixrQkFBQSxFQUFBLEtBQUs7SUFBRSxrQkFBQSxFQUFBLEtBQUs7O1FBQ25ELEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztJQUVoRCxLQUFLLENBQUMsY0FBYyxDQUNsQixJQUFJLEVBQ0osS0FBSyxDQUFDLGVBQWUsRUFDckIsS0FBSyxDQUFDLGdCQUFnQixFQUN0QixNQUFNLENBQUMsVUFBVSxFQUNqQixDQUFDLENBQUMsWUFBWSxFQUNkLENBQUMsQ0FBQyxhQUFhLEVBQ2YsQ0FBQyxDQUFDLGFBQWEsRUFDZixDQUFDLENBQUMsYUFBYSxFQUNmLENBQUMsQ0FBQyxhQUFhLEVBQ2YsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksRUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsQ0FBQyxDQUFDLFlBQVksRUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFTLEVBQUUsS0FBUztJQUFwQixzQkFBQSxFQUFBLFNBQVM7SUFBRSxzQkFBQSxFQUFBLFNBQVM7Ozs7UUFHM0QsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDOztRQUN2QyxZQUFZLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTtJQUVyQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUvQyx1RkFBdUY7SUFDdkYscUJBQXFCO0lBQ3JCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7S0FDbkMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxNQUFnQixFQUFFLEdBQVk7O1FBQ3pGLEtBQUssR0FBRyxtQkFBQSxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFPOzs7UUFFcEQsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUN6RSxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYztJQUVuRCxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFOUQsd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzdCLE9BQU8sRUFBRSxFQUFFLEdBQUc7OztZQUFFLGNBQU0sT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFBLEVBQUU7UUFDL0IsR0FBRyxFQUFFLEVBQUUsR0FBRzs7O1lBQUUsY0FBTSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUEsRUFBRTtRQUN2QixNQUFNLEVBQUUsRUFBRSxHQUFHOzs7WUFBRSxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQSxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILG9GQUFvRjtJQUNwRixLQUFLLENBQUMsY0FBYzs7O0lBQUc7UUFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHOzs7WUFBRSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQSxFQUFFLENBQUMsQ0FBQztRQUN0RSwyQ0FBMkM7UUFDM0MsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQSxDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7OztBQUdELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBWSxFQUFFLFNBQWdCLEVBQUUsVUFBaUI7SUFBbkMsMEJBQUEsRUFBQSxnQkFBZ0I7SUFBRSwyQkFBQSxFQUFBLGlCQUFpQjs7UUFDekUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIENyZWF0ZXMgYSBicm93c2VyIE1vdXNlRXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW91c2VFdmVudCh0eXBlOiBzdHJpbmcsIHggPSAwLCB5ID0gMCkge1xuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG5cbiAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoXG4gICAgdHlwZSxcbiAgICBmYWxzZSAvKiBjYW5CdWJibGUgKi8sXG4gICAgZmFsc2UgLyogY2FuY2VsYWJsZSAqLyxcbiAgICB3aW5kb3cgLyogdmlldyAqLyxcbiAgICAwIC8qIGRldGFpbCAqLyxcbiAgICB4IC8qIHNjcmVlblggKi8sXG4gICAgeSAvKiBzY3JlZW5ZICovLFxuICAgIHggLyogY2xpZW50WCAqLyxcbiAgICB5IC8qIGNsaWVudFkgKi8sXG4gICAgZmFsc2UgLyogY3RybEtleSAqLyxcbiAgICBmYWxzZSAvKiBhbHRLZXkgKi8sXG4gICAgZmFsc2UgLyogc2hpZnRLZXkgKi8sXG4gICAgZmFsc2UgLyogbWV0YUtleSAqLyxcbiAgICAwIC8qIGJ1dHRvbiAqLyxcbiAgICBudWxsIC8qIHJlbGF0ZWRUYXJnZXQgKi8sXG4gICk7XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogQ3JlYXRlcyBhIGJyb3dzZXIgVG91Y2hFdmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgcG9pbnRlciBjb29yZGluYXRlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3VjaEV2ZW50KHR5cGU6IHN0cmluZywgcGFnZVggPSAwLCBwYWdlWSA9IDApIHtcbiAgLy8gSW4gZmF2b3Igb2YgY3JlYXRpbmcgZXZlbnRzIHRoYXQgd29yayBmb3IgbW9zdCBvZiB0aGUgYnJvd3NlcnMsIHRoZSBldmVudCBpcyBjcmVhdGVkXG4gIC8vIGFzIGEgYmFzaWMgVUkgRXZlbnQuIFRoZSBuZWNlc3NhcnkgZGV0YWlscyBmb3IgdGhlIGV2ZW50IHdpbGwgYmUgc2V0IG1hbnVhbGx5LlxuICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdVSUV2ZW50Jyk7XG4gIGNvbnN0IHRvdWNoRGV0YWlscyA9IHsgcGFnZVgsIHBhZ2VZIH07XG5cbiAgZXZlbnQuaW5pdFVJRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwKTtcblxuICAvLyBNb3N0IG9mIHRoZSBicm93c2VycyBkb24ndCBoYXZlIGEgXCJpbml0VG91Y2hFdmVudFwiIG1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZVxuICAvLyB0aGUgdG91Y2ggZGV0YWlscy5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnQsIHtcbiAgICB0b3VjaGVzOiB7IHZhbHVlOiBbdG91Y2hEZXRhaWxzXSB9LFxuICB9KTtcblxuICByZXR1cm4gZXZlbnQ7XG59XG5cbi8qKiBEaXNwYXRjaGVzIGEga2V5ZG93biBldmVudCBmcm9tIGFuIGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlOiBzdHJpbmcsIGtleUNvZGU6IG51bWJlciwgdGFyZ2V0PzogRWxlbWVudCwga2V5Pzogc3RyaW5nKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0tleWJvYXJkRXZlbnQnKSBhcyBhbnk7XG4gIC8vIEZpcmVmb3ggZG9lcyBub3Qgc3VwcG9ydCBgaW5pdEtleWJvYXJkRXZlbnRgLCBidXQgc3VwcG9ydHMgYGluaXRLZXlFdmVudGAuXG4gIGNvbnN0IGluaXRFdmVudEZuID0gKGV2ZW50LmluaXRLZXlFdmVudCB8fCBldmVudC5pbml0S2V5Ym9hcmRFdmVudCkuYmluZChldmVudCk7XG4gIGNvbnN0IG9yaWdpbmFsUHJldmVudERlZmF1bHQgPSBldmVudC5wcmV2ZW50RGVmYXVsdDtcblxuICBpbml0RXZlbnRGbih0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGtleUNvZGUpO1xuXG4gIC8vIFdlYmtpdCBCcm93c2VycyBkb24ndCBzZXQgdGhlIGtleUNvZGUgd2hlbiBjYWxsaW5nIHRoZSBpbml0IGZ1bmN0aW9uLlxuICAvLyBTZWUgcmVsYXRlZCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2NzM1XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV2ZW50LCB7XG4gICAga2V5Q29kZTogeyBnZXQ6ICgpID0+IGtleUNvZGUgfSxcbiAgICBrZXk6IHsgZ2V0OiAoKSA9PiBrZXkgfSxcbiAgICB0YXJnZXQ6IHsgZ2V0OiAoKSA9PiB0YXJnZXQgfSxcbiAgfSk7XG5cbiAgLy8gSUUgd29uJ3Qgc2V0IGBkZWZhdWx0UHJldmVudGVkYCBvbiBzeW50aGV0aWMgZXZlbnRzIHNvIHdlIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnZGVmYXVsdFByZXZlbnRlZCcsIHsgZ2V0OiAoKSA9PiB0cnVlIH0pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICByZXR1cm4gb3JpZ2luYWxQcmV2ZW50RGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqIENyZWF0ZXMgYSBmYWtlIGV2ZW50IG9iamVjdCB3aXRoIGFueSBkZXNpcmVkIGV2ZW50IHR5cGUuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFrZUV2ZW50KHR5cGU6IHN0cmluZywgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IHRydWUpIHtcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGNhbkJ1YmJsZSwgY2FuY2VsYWJsZSk7XG4gIHJldHVybiBldmVudDtcbn1cbiJdfQ==