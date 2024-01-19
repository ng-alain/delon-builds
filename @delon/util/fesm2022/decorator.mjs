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
function toBoolean(value, defaultValue = false) {
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
function InputBoolean(defaultValue = false) {
    return propDecoratorFactory('InputBoolean', toBoolean, defaultValue);
}
function toNumber(value, fallbackValue = 0) {
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
function InputNumber(defaultValue = 0) {
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}

function makeFn(type, options) {
    return (_, __, descriptor) => {
        const source = descriptor.value;
        descriptor.value = function (...data) {
            const that = this;
            const ngZone = that[options?.ngZoneName || 'ngZone'];
            if (!ngZone) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    warn(`ZoneOutside: Decorator should have 'ngZone' property with 'NgZone' class.`);
                }
                return source.call(this, ...data);
            }
            let res;
            ngZone[type](() => {
                res = source.call(this, ...data);
            });
            return res;
        };
        return descriptor;
    };
}
/**
 * The decoration method runs in `runOutsideAngular`
 *
 * 装饰方法运行在 `runOutsideAngular` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneOutside()
 *  runOutsideAngular(): void {}
 * }
 * ```
 */
function ZoneOutside(options) {
    return makeFn('runOutsideAngular', options);
}
/**
 * The decoration method runs in `run`
 *
 * 装饰方法运行在 `run` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneRun()
 *  run(): void {}
 * }
 * ```
 */
function ZoneRun(options) {
    return makeFn('run', options);
}

/**
 * Generated bundle index. Do not edit.
 */

export { InputBoolean, InputNumber, ZoneOutside, ZoneRun, toBoolean, toNumber };
//# sourceMappingURL=decorator.mjs.map
