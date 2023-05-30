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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZGVjb3JhdG9yL2NvbnZlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXpDLFNBQVMsb0JBQW9CLENBQzNCLElBQVksRUFDWixRQUFzQyxFQUN0QyxZQUF1QjtJQUV2QixTQUFTLGFBQWEsQ0FDcEIsTUFBaUIsRUFDakIsUUFBZ0IsRUFDaEIsa0JBQXVEO1FBRXZELE1BQU0sZUFBZSxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFFMUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO1lBQ2pELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDakUsSUFBSSxDQUFDLGFBQWEsZUFBZSwrQ0FBK0MsSUFBSSxhQUFhLENBQUMsQ0FBQzthQUNwRztTQUNGO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLEdBQUc7Z0JBQ0QsT0FBTyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHO29CQUNqRCxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsR0FBRyxDQUFDLEtBQVE7Z0JBQ1YsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsS0FBYyxFQUNkLGVBQTJDLEtBQUs7SUFFaEQsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0FBQy9ELENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxlQUErQixLQUFLO0lBQy9ELE9BQU8sb0JBQW9CLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBSUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsZ0JBQXdCLENBQUM7SUFDaEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQ3pHLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxlQUE4QixDQUFDO0lBQ3pELE9BQU8sb0JBQW9CLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQm9vbGVhbklucHV0ID0gYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG5leHBvcnQgdHlwZSBOdW1iZXJJbnB1dCA9IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG5cbmZ1bmN0aW9uIHByb3BEZWNvcmF0b3JGYWN0b3J5PFQsIEQ+KFxuICBuYW1lOiBzdHJpbmcsXG4gIGZhbGxiYWNrOiAodjogVCwgZGVmYXVsdFZhbHVlOiBEKSA9PiBELFxuICBkZWZhdWx0VmFsdWU6IE56U2FmZUFueVxuKTogKHRhcmdldDogTnpTYWZlQW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB2b2lkIHtcbiAgZnVuY3Rpb24gcHJvcERlY29yYXRvcihcbiAgICB0YXJnZXQ6IE56U2FmZUFueSxcbiAgICBwcm9wTmFtZTogc3RyaW5nLFxuICAgIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPE56U2FmZUFueT5cbiAgKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7cHJvcE5hbWV9YDtcblxuICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICAgIHdhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgJHtuYW1lfSBkZWNvcmF0b3IuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5nZXRcbiAgICAgICAgICA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpXG4gICAgICAgICAgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKShmYWxsYmFjayh2YWx1ZSwgZGVmYXVsdFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gZmFsbGJhY2sodmFsdWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBwcm9wRGVjb3JhdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKFxuICB2YWx1ZTogdW5rbm93bixcbiAgZGVmYXVsdFZhbHVlOiBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGZhbHNlXG4pOiBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxuICpcbiAqIGBgYHRzXG4gKiB7QVR9SW5wdXQoKSB7QVR9SW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICoge0FUfUlucHV0KCkge0FUfUlucHV0Qm9vbGVhbihudWxsKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gfCBudWxsID0gZmFsc2UpOiBOelNhZmVBbnkge1xuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0Qm9vbGVhbicsIHRvQm9vbGVhbiwgZGVmYXVsdFZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiB1bmtub3duKTogbnVtYmVyO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyPEQ+KHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IHVua25vd24sIGZhbGxiYWNrVmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgTnpTYWZlQW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpID8gTnVtYmVyKHZhbHVlKSA6IGZhbGxiYWNrVmFsdWU7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b051bWJlclxuICpcbiAqIGBgYHRzXG4gKiB7QVR9SW5wdXQoKSB7QVR9SW5wdXROdW1iZXIoKSB2aXNpYmxlOiBudW1iZXIgPSAxO1xuICoge0FUfUlucHV0KCkge0FUfUlucHV0TnVtYmVyKG51bGwpIHZpc2libGU6IG51bWJlciA9IDI7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKGRlZmF1bHRWYWx1ZTogbnVtYmVyIHwgbnVsbCA9IDApOiBOelNhZmVBbnkge1xuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0TnVtYmVyJywgdG9OdW1iZXIsIGRlZmF1bHRWYWx1ZSk7XG59XG4iXX0=