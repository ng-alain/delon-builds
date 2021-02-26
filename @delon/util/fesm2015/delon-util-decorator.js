import { warn } from '@delon/util/other';

function propDecoratorFactory(name, fallback, defaultValue) {
    function propDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        return {
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
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

function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * @Input() InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
function InputBoolean(defaultValue = false) {
    return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
}

function toNumber(value, fallbackValue = 0) {
    return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
function InputNumber(defaultValue = 0) {
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}

/**
 * Generated bundle index. Do not edit.
 */

export { InputBoolean, InputNumber, propDecoratorFactory, toBoolean, toNumber };
//# sourceMappingURL=delon-util-decorator.js.map
