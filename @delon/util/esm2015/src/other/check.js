/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
export function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined'
        ? undefined
        : value != null && `${value}` !== 'false';
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
export function InputBoolean(allowUndefined = false) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
            },
        });
    });
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
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
export function InputNumber(fallback = 0) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputNumber decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
            },
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9vdGhlci9jaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBb0I7O1VBQ3BDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVTtJQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDL0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLEVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLG1CQUFBLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVLEVBQUUsaUJBQWlDLEtBQUs7SUFDMUUsT0FBTyxjQUFjLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVztRQUNuRCxDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0FBQzlDLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsWUFBWSxDQUFDLGlCQUFpQyxLQUFLO0lBQ2pFOzs7OztJQUFPLFNBQVMseUJBQXlCLENBQUMsTUFBYyxFQUFFLElBQVk7OztjQUU5RCxlQUFlLEdBQUcsT0FBTyxJQUFJLEVBQUU7UUFFckMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQ1YsYUFBYSxlQUFlLHFFQUFxRSxDQUNsRyxDQUFDO1NBQ0g7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7WUFDbEMsR0FBRztnQkFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztZQUN0RSxDQUFDOzs7OztZQUNELEdBQUcsQ0FBQyxLQUFVO2dCQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBQ2xHLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFJRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVUsRUFBRSxnQkFBd0IsQ0FBQztJQUM1RCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQ25HLENBQUM7Ozs7Ozs7Ozs7QUFVRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFdBQTBCLENBQUM7SUFDckQ7Ozs7O0lBQU8sU0FBUyx5QkFBeUIsQ0FBQyxNQUFjLEVBQUUsSUFBWTs7O2NBRTlELGVBQWUsR0FBRyxPQUFPLElBQUksRUFBRTtRQUVyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLGVBQWUsb0VBQW9FLENBQ2pHLENBQUM7U0FDSDtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTs7OztZQUNsQyxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBQ3RFLENBQUM7Ozs7O1lBQ0QsR0FBRyxDQUFDLEtBQVU7Z0JBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7WUFDM0YsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5pdGVtKGkpO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUwudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzICYmIG5vZGUudGV4dENvbnRlbnQhLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55LCBhbGxvd1VuZGVmaW5lZDogYm9vbGVhbiB8IG51bGwgPSBmYWxzZSk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gYWxsb3dVbmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqIEBleGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICogQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbihhbGxvd1VuZGVmaW5lZDogYm9vbGVhbiB8IG51bGwgPSBmYWxzZSk6IGFueSB7XG4gIHJldHVybiBmdW5jdGlvbiBJbnB1dEJvb2xlYW5Qcm9wRGVjb3JhdG9yKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBBZGQgb3VyIG93biBwcml2YXRlIHByb3BcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7bmFtZX1gO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpc1twcml2YXRlUHJvcE5hbWVdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IHRvQm9vbGVhbih2YWx1ZSwgYWxsb3dVbmRlZmluZWQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXI7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnksIGZhbGxiYWNrVmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpID8gTnVtYmVyKHZhbHVlKSA6IGZhbGxiYWNrVmFsdWU7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b051bWJlclxuICogQGV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpc2libGU6IG51bWJlciA9IDE7XG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgdmlzaWJsZTogbnVtYmVyID0gMjtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoZmFsbGJhY2s6IG51bWJlciB8IG51bGwgPSAwKTogYW55IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSBJbnB1dE51bWJlciBkZWNvcmF0b3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgIGdldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbcHJpdmF0ZVByb3BOYW1lXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSB0b051bWJlcih2YWx1ZSwgZmFsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==