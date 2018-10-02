/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            (/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0) {
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
 * \@Input() \@InputBoolean() visible: boolean = false;
 * \@Input() \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
export function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
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
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value))
        ? Number(value)
        : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1;
 * \@Input() \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
export function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9jaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sa0JBQWtCLE9BQW9COztJQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztRQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQ0UsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQ25CLG1CQUFDLElBQW1CLEVBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUQ7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFDTCxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUMvQztZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7OztBQUVELE1BQU0sb0JBQ0osS0FBVSxFQUNWLGNBQXNCO0lBQXRCLCtCQUFBLEVBQUEsc0JBQXNCO0lBRXRCLE9BQU8sY0FBYyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVc7UUFDbkQsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7Q0FDN0M7Ozs7Ozs7Ozs7O0FBVUQsTUFBTSx1QkFBdUIsY0FBc0I7SUFBdEIsK0JBQUEsRUFBQSxzQkFBc0I7O0lBQ2pELE9BQU8sbUNBQW9DLE1BQWMsRUFBRSxJQUFZOztRQUVyRSxJQUFNLGVBQWUsR0FBRyxTQUFPLElBQU0sQ0FBQztRQUV0QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYSxlQUFlLHlFQUFxRSxDQUFDLENBQUM7U0FDakg7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsR0FBRzs7O1lBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUM7YUFDaEM7WUFDRCxHQUFHOzs7O1lBQUgsVUFBSSxLQUFVO2dCQUNaLElBQUksQ0FBRSxlQUFlLENBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzVEO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNIOzs7Ozs7QUFJRCxNQUFNLG1CQUFtQixLQUFVLEVBQUUsYUFBaUI7SUFBakIsOEJBQUEsRUFBQSxpQkFBaUI7SUFDcEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLG1CQUFDLEtBQVksRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLGFBQWEsQ0FBQztDQUNuQjs7Ozs7Ozs7Ozs7QUFXRCxNQUFNLHNCQUFzQixRQUFZO0lBQVoseUJBQUEsRUFBQSxZQUFZOztJQUN0QyxPQUFPLG1DQUFvQyxNQUFjLEVBQUUsSUFBWTs7UUFFckUsSUFBTSxlQUFlLEdBQUcsU0FBTyxJQUFNLENBQUM7UUFFdEMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWEsZUFBZSx3RUFBb0UsQ0FBQyxDQUFDO1NBQ2hIO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2xDLEdBQUc7OztZQUFIO2dCQUNFLE9BQU8sSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO2FBQ2hDO1lBQ0QsR0FBRzs7OztZQUFILFVBQUksS0FBVTtnQkFDWixJQUFJLENBQUUsZUFBZSxDQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNyRDtTQUNGLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgbm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLml0ZW0oaSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEgJiZcclxuICAgICAgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBub2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgIG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbihcclxuICB2YWx1ZTogYW55LFxyXG4gIGFsbG93VW5kZWZpbmVkID0gZmFsc2UsXHJcbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oYWxsb3dVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICBnZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdID0gdG9Cb29sZWFuKHZhbHVlLCBhbGxvd1VuZGVmaW5lZCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZSA9IDApIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpXHJcbiAgICA/IE51bWJlcih2YWx1ZSlcclxuICAgIDogZmFsbGJhY2tWYWx1ZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIHZpc2libGU6IG51bWJlciA9IDI7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKGZhbGxiYWNrID0gMCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXROdW1iZXIgZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgIGdldCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b051bWJlcih2YWx1ZSwgZmFsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==