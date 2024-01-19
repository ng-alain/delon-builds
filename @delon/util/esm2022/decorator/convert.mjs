import { warn } from '@delon/util/other';
function propDecoratorFactory(name, fallback, defaultValue) {
    function propDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__${propName}`;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
            }
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get() {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                }
                this[privatePropName] = fallback(value, defaultValue);
            }
        };
    }
    return propDecorator;
}
export function toBoolean(value, defaultValue = false) {
    return value == null ? defaultValue : `${value}` !== 'false';
}
/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: booleanAttribute })` instead of `@InputBoolean()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) })` instead of `@InputBoolean(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * {AT}Input() {AT}InputBoolean() visible: boolean = false;
 * {AT}Input() {AT}InputBoolean(null) visible: boolean = false;
 * ```
 */
export function InputBoolean(defaultValue = false) {
    return propDecoratorFactory('InputBoolean', toBoolean, defaultValue);
}
export function toNumber(value, fallbackValue = 0) {
    return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: numberAttribute })` instead of `@InputNumber()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })` instead of `@InputNumber(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * {AT}Input() {AT}InputNumber() visible: number = 1;
 * {AT}Input() {AT}InputNumber(null) visible: number = 2;
 * ```
 */
export function InputNumber(defaultValue = 0) {
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZGVjb3JhdG9yL2NvbnZlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXpDLFNBQVMsb0JBQW9CLENBQzNCLElBQVksRUFDWixRQUFzQyxFQUN0QyxZQUF1QjtJQUV2QixTQUFTLGFBQWEsQ0FDcEIsTUFBaUIsRUFDakIsUUFBZ0IsRUFDaEIsa0JBQXVEO1FBRXZELE1BQU0sZUFBZSxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFFMUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFLENBQUM7WUFDbEQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxhQUFhLGVBQWUsK0NBQStDLElBQUksYUFBYSxDQUFDLENBQUM7WUFDckcsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRztnQkFDRCxPQUFPLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUc7b0JBQ2pELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBUTtnQkFDVixJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNqRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsS0FBYyxFQUNkLGVBQTJDLEtBQUs7SUFFaEQsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0FBQy9ELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsZUFBK0IsS0FBSztJQUMvRCxPQUFPLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUlELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLGdCQUF3QixDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUN6RyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLGVBQThCLENBQUM7SUFDekQsT0FBTyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBCb29sZWFuSW5wdXQgPSBib29sZWFuIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbmV4cG9ydCB0eXBlIE51bWJlcklucHV0ID0gbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuZnVuY3Rpb24gcHJvcERlY29yYXRvckZhY3Rvcnk8VCwgRD4oXG4gIG5hbWU6IHN0cmluZyxcbiAgZmFsbGJhY2s6ICh2OiBULCBkZWZhdWx0VmFsdWU6IEQpID0+IEQsXG4gIGRlZmF1bHRWYWx1ZTogTnpTYWZlQW55XG4pOiAodGFyZ2V0OiBOelNhZmVBbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHZvaWQge1xuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKFxuICAgIHRhcmdldDogTnpTYWZlQW55LFxuICAgIHByb3BOYW1lOiBzdHJpbmcsXG4gICAgb3JpZ2luYWxEZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8TnpTYWZlQW55PlxuICApOiBOelNhZmVBbnkge1xuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtwcm9wTmFtZX1gO1xuXG4gICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcbiAgICAgICAgd2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSAke25hbWV9IGRlY29yYXRvci5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldFxuICAgICAgICAgID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKClcbiAgICAgICAgICA6IHRoaXNbcHJpdmF0ZVByb3BOYW1lXTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKGZhbGxiYWNrKHZhbHVlLCBkZWZhdWx0VmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSBmYWxsYmFjayh2YWx1ZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4oXG4gIHZhbHVlOiB1bmtub3duLFxuICBkZWZhdWx0VmFsdWU6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkID0gZmFsc2Vcbik6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYnVpbHQtaW4gYHRyYW5zZm9ybWAgYW5kIGBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYCBjYW4gYmUgcmVtb3ZlZFxuICogLSBVc2UgYEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KWAgaW5zdGVhZCBvZiBgQElucHV0Qm9vbGVhbigpYFxuICogLSBVc2UgYEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogYm9vbGVhbkF0dHJpYnV0ZSh2KSkgfSlgIGluc3RlYWQgb2YgYEBJbnB1dEJvb2xlYW4obnVsbClgXG4gKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqXG4gKiBgYGB0c1xuICoge0FUfUlucHV0KCkge0FUfUlucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqIHtBVH1JbnB1dCgpIHtBVH1JbnB1dEJvb2xlYW4obnVsbCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuIHwgbnVsbCA9IGZhbHNlKTogTnpTYWZlQW55IHtcbiAgcmV0dXJuIHByb3BEZWNvcmF0b3JGYWN0b3J5KCdJbnB1dEJvb2xlYW4nLCB0b0Jvb2xlYW4sIGRlZmF1bHRWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogdW5rbm93bik6IG51bWJlcjtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiB1bmtub3duLCBmYWxsYmFja1ZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlIGFzIE56U2FmZUFueSkpICYmICFpc05hTihOdW1iZXIodmFsdWUpKSA/IE51bWJlcih2YWx1ZSkgOiBmYWxsYmFja1ZhbHVlO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYnVpbHQtaW4gYHRyYW5zZm9ybWAgYW5kIGBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYCBjYW4gYmUgcmVtb3ZlZFxuICogLSBVc2UgYEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pYCBpbnN0ZWFkIG9mIGBASW5wdXROdW1iZXIoKWBcbiAqIC0gVXNlIGBASW5wdXQoeyB0cmFuc2Zvcm06ICh2OiB1bmtub3duKSA9PiAodiA9PSBudWxsID8gbnVsbCA6IG51bWJlckF0dHJpYnV0ZSh2KSkgfSlgIGluc3RlYWQgb2YgYEBJbnB1dE51bWJlcihudWxsKWBcbiAqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXG4gKlxuICogYGBgdHNcbiAqIHtBVH1JbnB1dCgpIHtBVH1JbnB1dE51bWJlcigpIHZpc2libGU6IG51bWJlciA9IDE7XG4gKiB7QVR9SW5wdXQoKSB7QVR9SW5wdXROdW1iZXIobnVsbCkgdmlzaWJsZTogbnVtYmVyID0gMjtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoZGVmYXVsdFZhbHVlOiBudW1iZXIgfCBudWxsID0gMCk6IE56U2FmZUFueSB7XG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXROdW1iZXInLCB0b051bWJlciwgZGVmYXVsdFZhbHVlKTtcbn1cbiJdfQ==