/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/other')) :
    typeof define === 'function' && define.amd ? define('@delon/util/decorator', ['exports', '@delon/util/other'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.decorator = {}), global.delon.util.other));
}(this, (function (exports, other) { 'use strict';

    function propDecoratorFactory(name, fallback, defaultValue) {
        function propDecorator(target, propName, originalDescriptor) {
            var privatePropName = "$$__" + propName;
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                other.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true,
            });
            return {
                get: function () {
                    return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                },
                set: function (value) {
                    if (originalDescriptor && originalDescriptor.set) {
                        originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                    }
                    this[privatePropName] = fallback(value, defaultValue);
                },
            };
        }
        return propDecorator;
    }

    function toBoolean(value, allowUndefined) {
        if (allowUndefined === void 0) { allowUndefined = false; }
        return allowUndefined && typeof value === 'undefined' ? undefined : value != null && "" + value !== 'false';
    }
    /**
     * Input decorator that handle a prop to do get/set automatically with toBoolean
     *
     * ```ts
     * @Input() InputBoolean() visible: boolean = false;
     * @Input() @InputBoolean(null) visible: boolean = false;
     * ```
     */
    function InputBoolean(defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
    }

    function toNumber(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
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
    function InputNumber(defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return propDecoratorFactory('InputNumber', toNumber, defaultValue);
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputBoolean = InputBoolean;
    exports.InputNumber = InputNumber;
    exports.propDecoratorFactory = propDecoratorFactory;
    exports.toBoolean = toBoolean;
    exports.toNumber = toNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-decorator.umd.js.map
