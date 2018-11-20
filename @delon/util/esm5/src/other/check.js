/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        /** @type {?} */
        var node = nodes.item(i);
        if (node.nodeType === 1 &&
            ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 &&
            node.textContent.toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
export function toBoolean(value, allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return allowUndefined && typeof value === 'undefined'
        ? undefined
        : value != null && "" + value !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 * \@example
 * ```typescript
 * \@Input() \@InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
export function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
            }
        });
    };
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))
        ? Number(value)
        : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
export function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    return function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputNumber decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
            }
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9jaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBb0I7O1FBQ3BDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDL0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQ0UsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQ25CLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUQ7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFDTCxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUMvQztZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsS0FBVSxFQUNWLGNBQXNCO0lBQXRCLCtCQUFBLEVBQUEsc0JBQXNCO0lBRXRCLE9BQU8sY0FBYyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVc7UUFDbkQsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7OztBQVVELE1BQU0sVUFBVSxZQUFZLENBQUMsY0FBc0I7SUFBdEIsK0JBQUEsRUFBQSxzQkFBc0I7SUFDakQsT0FBTyxTQUFTLHlCQUF5QixDQUFFLE1BQWMsRUFBRSxJQUFZOzs7WUFFL0QsZUFBZSxHQUFHLFNBQU8sSUFBTTtRQUVyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYSxlQUFlLHlFQUFxRSxDQUFDLENBQUM7U0FDakg7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsR0FBRzs7O1lBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUMsQ0FBQyxzQ0FBc0M7WUFDeEUsQ0FBQztZQUNELEdBQUc7Ozs7WUFBSCxVQUFJLEtBQVU7Z0JBQ1osSUFBSSxDQUFFLGVBQWUsQ0FBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7WUFDcEcsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBVSxFQUFFLGFBQWlCO0lBQWpCLDhCQUFBLEVBQUEsaUJBQWlCO0lBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsYUFBYSxDQUFDO0FBQ3BCLENBQUM7Ozs7Ozs7Ozs7QUFXRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFFBQVk7SUFBWix5QkFBQSxFQUFBLFlBQVk7SUFDdEMsT0FBTyxTQUFTLHlCQUF5QixDQUFFLE1BQWMsRUFBRSxJQUFZOzs7WUFFL0QsZUFBZSxHQUFHLFNBQU8sSUFBTTtRQUVyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYSxlQUFlLHdFQUFvRSxDQUFDLENBQUM7U0FDaEg7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsR0FBRzs7O1lBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUMsQ0FBQyxzQ0FBc0M7WUFDeEUsQ0FBQztZQUNELEdBQUc7Ozs7WUFBSCxVQUFJLEtBQVU7Z0JBQ1osSUFBSSxDQUFFLGVBQWUsQ0FBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7WUFDN0YsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5pdGVtKGkpO1xuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgIChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUwudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgJiZcbiAgICAgIG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKFxuICB2YWx1ZTogYW55LFxuICBhbGxvd1VuZGVmaW5lZCA9IGZhbHNlLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxuICogQGV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKGFsbG93VW5kZWZpbmVkID0gZmFsc2UpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IElucHV0Qm9vbGVhbiBkZWNvcmF0b3IuYCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b0Jvb2xlYW4odmFsdWUsIGFsbG93VW5kZWZpbmVkKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXI7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnksIGZhbGxiYWNrVmFsdWUgPSAwKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSlcbiAgICA/IE51bWJlcih2YWx1ZSlcbiAgICA6IGZhbGxiYWNrVmFsdWU7XG59XG5cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSB2aXNpYmxlOiBudW1iZXIgPSAyO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE51bWJlcihmYWxsYmFjayA9IDApOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IElucHV0TnVtYmVyIGRlY29yYXRvci5gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICBnZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IHRvTnVtYmVyKHZhbHVlLCBmYWxsYmFjayk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iXX0=