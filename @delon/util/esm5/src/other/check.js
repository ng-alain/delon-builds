/**
 * @fileoverview added by tsickle
 * Generated from: src/other/check.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { warn } from '../logger/logger';
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
        var privatePropName = "$$__" + propName;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        return {
            get: /**
             * @return {?}
             */
            function () {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
export function toBoolean(value, allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && "" + value !== 'false';
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
export function InputBoolean(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
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
export function InputNumber(defaultValue) {
    if (defaultValue === void 0) { defaultValue = 0; }
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9jaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFeEMsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUFvQjs7UUFDcEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekYsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEYsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7OztBQUVELFNBQVMsb0JBQW9CLENBQzNCLElBQVksRUFDWixRQUFzQyxFQUN0QyxZQUF1Qjs7Ozs7OztJQUV2QixTQUFTLGFBQWEsQ0FBQyxNQUFpQixFQUFFLFFBQWdCLEVBQUUsa0JBQXVEOztZQUMzRyxlQUFlLEdBQUcsU0FBTyxRQUFVO1FBRXpDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsZ0JBQWEsZUFBZSxxREFBK0MsSUFBSSxnQkFBYSxDQUFDLENBQUM7U0FDcEc7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRzs7O1lBQUg7Z0JBQ0UsT0FBTyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BILENBQUM7WUFDRCxHQUFHOzs7O1lBQUgsVUFBSSxLQUFRO2dCQUNWLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDeEQsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVLEVBQUUsY0FBc0M7SUFBdEMsK0JBQUEsRUFBQSxzQkFBc0M7SUFDMUUsT0FBTyxjQUFjLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDO0FBQzlHLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsWUFBWSxDQUFDLFlBQW9DO0lBQXBDLDZCQUFBLEVBQUEsb0JBQW9DO0lBQy9ELE9BQU8sb0JBQW9CLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RSxDQUFDOzs7Ozs7QUFJRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVUsRUFBRSxhQUF5QjtJQUF6Qiw4QkFBQSxFQUFBLGlCQUF5QjtJQUM1RCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQ25HLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFlBQStCO0lBQS9CLDZCQUFBLEVBQUEsZ0JBQStCO0lBQ3pELE9BQU8sb0JBQW9CLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgY29uc3Qgbm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMuaXRlbShpKTtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBub2RlLnRleHRDb250ZW50IS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHByb3BEZWNvcmF0b3JGYWN0b3J5PFQsIEQ+KFxuICBuYW1lOiBzdHJpbmcsXG4gIGZhbGxiYWNrOiAodjogVCwgZGVmYXVsdFZhbHVlOiBEKSA9PiBELFxuICBkZWZhdWx0VmFsdWU6IE56U2FmZUFueSxcbik6ICh0YXJnZXQ6IE56U2FmZUFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4gdm9pZCB7XG4gIGZ1bmN0aW9uIHByb3BEZWNvcmF0b3IodGFyZ2V0OiBOelNhZmVBbnksIHByb3BOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPE56U2FmZUFueT4pOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcbiAgICAgIHdhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgJHtuYW1lfSBkZWNvcmF0b3IuYCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0ID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKCkgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKShmYWxsYmFjayh2YWx1ZSwgZGVmYXVsdFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gZmFsbGJhY2sodmFsdWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcHJvcERlY29yYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55LCBhbGxvd1VuZGVmaW5lZDogYm9vbGVhbiB8IG51bGwgPSBmYWxzZSk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gYWxsb3dVbmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxuICpcbiAqIGBgYHRzXG4gKiBASW5wdXQoKSBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiB8IG51bGwgPSBmYWxzZSk6IE56U2FmZUFueSB7XG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXROdW1iZXInLCB0b0Jvb2xlYW4sIGRlZmF1bHRWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiBhbnksIGZhbGxiYWNrOiBEKTogbnVtYmVyIHwgRDtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55LCBmYWxsYmFja1ZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlIGFzIGFueSkpICYmICFpc05hTihOdW1iZXIodmFsdWUpKSA/IE51bWJlcih2YWx1ZSkgOiBmYWxsYmFja1ZhbHVlO1xufVxuXG4vKipcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9OdW1iZXJcbiAqXG4gKiBgYGB0c1xuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSB2aXNpYmxlOiBudW1iZXIgPSAyO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE51bWJlcihkZWZhdWx0VmFsdWU6IG51bWJlciB8IG51bGwgPSAwKTogTnpTYWZlQW55IHtcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dE51bWJlcicsIHRvTnVtYmVyLCBkZWZhdWx0VmFsdWUpO1xufVxuIl19