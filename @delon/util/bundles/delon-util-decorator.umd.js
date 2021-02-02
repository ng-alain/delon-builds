/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/other')) :
    typeof define === 'function' && define.amd ? define('@delon/util/decorator', ['exports', '@delon/util/other'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.decorator = {}), global.delon.util.other));
}(this, (function (exports, other) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                other.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true,
            });
            return {
                /**
                 * @return {?}
                 */
                get: function () {
                    return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                },
                /**
                 * @param {?} value
                 * @return {?}
                 */
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

    /**
     * @fileoverview added by tsickle
     * Generated from: boolean-property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @param {?=} allowUndefined
     * @return {?}
     */
    function toBoolean(value, allowUndefined) {
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
    function InputBoolean(defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: number-property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @param {?=} fallbackValue
     * @return {?}
     */
    function toNumber(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
        return !isNaN(parseFloat(( /** @type {?} */(value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
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
    function InputNumber(defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return propDecoratorFactory('InputNumber', toNumber, defaultValue);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: delon-util-decorator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.InputBoolean = InputBoolean;
    exports.InputNumber = InputNumber;
    exports.propDecoratorFactory = propDecoratorFactory;
    exports.toBoolean = toBoolean;
    exports.toNumber = toNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-decorator.umd.js.map
