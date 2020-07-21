/**
 * @fileoverview added by tsickle
 * Generated from: src/other/check.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { warn } from '../logger/logger';
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        /** @type {?} */
        const node = nodes.item(i);
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @param {?} defaultValue
 * @return {?}
 */
function propDecoratorFactory(name, fallback, defaultValue) {
    /**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function propDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        return {
            /**
             * @return {?}
             */
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                }
                this[privatePropName] = fallback(value, defaultValue);
            },
        };
    }
    return propDecorator;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
export function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * \@Input() InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} defaultValue
 * @return {?}
 */
export function InputBoolean(defaultValue = false) {
    return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue = 0) {
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} defaultValue
 * @return {?}
 */
export function InputNumber(defaultValue = 0) {
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3NyYy9vdGhlci9jaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFeEMsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUFvQjs7VUFDcEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekYsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEYsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7OztBQUVELFNBQVMsb0JBQW9CLENBQzNCLElBQVksRUFDWixRQUFzQyxFQUN0QyxZQUF1Qjs7Ozs7OztJQUV2QixTQUFTLGFBQWEsQ0FBQyxNQUFpQixFQUFFLFFBQWdCLEVBQUUsa0JBQXVEOztjQUMzRyxlQUFlLEdBQUcsT0FBTyxRQUFRLEVBQUU7UUFFekMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxhQUFhLGVBQWUsK0NBQStDLElBQUksYUFBYSxDQUFDLENBQUM7U0FDcEc7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxPQUFPOzs7O1lBQ0wsR0FBRztnQkFDRCxPQUFPLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEgsQ0FBQzs7Ozs7WUFDRCxHQUFHLENBQUMsS0FBUTtnQkFDVixJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtvQkFDaEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUNELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3hELENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBVSxFQUFFLGlCQUFpQyxLQUFLO0lBQzFFLE9BQU8sY0FBYyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0FBQzlHLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsWUFBWSxDQUFDLGVBQStCLEtBQUs7SUFDL0QsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3RFLENBQUM7Ozs7OztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBVSxFQUFFLGdCQUF3QixDQUFDO0lBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDbkcsQ0FBQzs7Ozs7Ozs7OztBQVVELE1BQU0sVUFBVSxXQUFXLENBQUMsZUFBOEIsQ0FBQztJQUN6RCxPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vZGVzID0gZWxlbWVudC5jaGlsZE5vZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLml0ZW0oaSk7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgJiYgbm9kZS50ZXh0Q29udGVudCEudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBwcm9wRGVjb3JhdG9yRmFjdG9yeTxULCBEPihcbiAgbmFtZTogc3RyaW5nLFxuICBmYWxsYmFjazogKHY6IFQsIGRlZmF1bHRWYWx1ZTogRCkgPT4gRCxcbiAgZGVmYXVsdFZhbHVlOiBOelNhZmVBbnksXG4pOiAodGFyZ2V0OiBOelNhZmVBbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHZvaWQge1xuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKHRhcmdldDogTnpTYWZlQW55LCBwcm9wTmFtZTogc3RyaW5nLCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxOelNhZmVBbnk+KTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7cHJvcE5hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICB3YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5ICR7bmFtZX0gZGVjb3JhdG9yLmApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykoZmFsbGJhY2sodmFsdWUsIGRlZmF1bHRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IGZhbGxiYWNrKHZhbHVlLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSwgYWxsb3dVbmRlZmluZWQ6IGJvb2xlYW4gfCBudWxsID0gZmFsc2UpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqXG4gKiBgYGB0c1xuICogQElucHV0KCkgSW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICogQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gfCBudWxsID0gZmFsc2UpOiBOelNhZmVBbnkge1xuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0TnVtYmVyJywgdG9Cb29sZWFuLCBkZWZhdWx0VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSk6IG51bWJlcjtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogYW55LCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkgPyBOdW1iZXIodmFsdWUpIDogZmFsbGJhY2tWYWx1ZTtcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXG4gKlxuICogYGBgdHNcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpc2libGU6IG51bWJlciA9IDE7XG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgdmlzaWJsZTogbnVtYmVyID0gMjtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoZGVmYXVsdFZhbHVlOiBudW1iZXIgfCBudWxsID0gMCk6IE56U2FmZUFueSB7XG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXROdW1iZXInLCB0b051bWJlciwgZGVmYXVsdFZhbHVlKTtcbn1cbiJdfQ==