/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('extend'), require('@angular/core'), require('ng-zorro-antd/core/environments'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/util/other', ['exports', 'extend', '@angular/core', 'ng-zorro-antd/core/environments', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.other = {}), global.extend, global.ng.core, global.environments, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, extend, i0, environments, i1, rxjs, operators) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var extend__default = /*#__PURE__*/_interopDefaultLegacy(extend);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Gets the value at `path` of `object`, like `_.get` in lodash.
     *
     * 类似 `_.get`，根据 `path` 获取安全值
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    function deepGet(obj, path, defaultValue) {
        if (!obj || path == null || path.length === 0)
            return defaultValue;
        if (!Array.isArray(path)) {
            path = ~path.indexOf('.') ? path.split('.') : [path];
        }
        if (path.length === 1) {
            /** @type {?} */
            var checkObj = obj[path[0]];
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        /** @type {?} */
        var res = path.reduce(( /**
         * @param {?} o
         * @param {?} k
         * @return {?}
         */function (o, k) { return (o || {})[k]; }), obj);
        return typeof res === 'undefined' ? defaultValue : res;
    }
    /**
     * Base on [extend](https://github.com/justmoon/node-extend) deep copy.
     *
     * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
     * @param {?} obj
     * @return {?}
     */
    function deepCopy(obj) {
        /** @type {?} */
        var result = extend__default['default'](true, {}, { _: obj });
        return result._;
    }
    /**
     * Deep merge object.
     *
     * 深度合并对象
     *
     * @param {?} original 原始对象
     * @param {?} arrayProcessMethod 数组处理方式
     *  - `true` 表示替换新值，不管新值为哪种类型
     *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
     * @param {...?} objects 要合并的对象
     * @return {?}
     */
    function deepMergeKey(original, arrayProcessMethod) {
        var objects = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            objects[_i - 2] = arguments[_i];
        }
        if (Array.isArray(original) || typeof original !== 'object')
            return original;
        /** @type {?} */
        var isObject = ( /**
         * @param {?} v
         * @return {?}
         */function (v) { return typeof v === 'object' || typeof v === 'function'; });
        /** @type {?} */
        var merge = ( /**
         * @param {?} target
         * @param {?} obj
         * @return {?}
         */function (target, obj) {
            Object.keys(obj)
                .filter(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) { return key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key); }))
                .forEach(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) {
                /** @type {?} */
                var fromValue = obj[key];
                /** @type {?} */
                var toValue = target[key];
                if (Array.isArray(toValue)) {
                    target[key] = arrayProcessMethod ? fromValue : __spread(toValue, fromValue);
                }
                else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
                    target[key] = merge(toValue, fromValue);
                }
                else {
                    target[key] = deepCopy(fromValue);
                }
            }));
            return target;
        });
        objects.filter(( /**
         * @param {?} v
         * @return {?}
         */function (/**
         * @param {?} v
         * @return {?}
         */ v) { return v != null && isObject(v); })).forEach(( /**
         * @param {?} v
         * @return {?}
         */function (/**
         * @param {?} v
         * @return {?}
         */ v) { return merge(original, v); }));
        return original;
    }
    /**
     * Deep merge object.
     *
     * 深度合并对象
     * @param {?} original
     * @param {...?} objects
     * @return {?}
     */
    function deepMerge(original) {
        var objects = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            objects[_i - 1] = arguments[_i];
        }
        return deepMergeKey.apply(void 0, __spread([original, false], objects));
    }

    /** @type {?} */
    var record = {};
    /** @type {?} */
    var PREFIX = '[@DELON]:';
    /**
     * @param {...?} args
     * @return {?}
     */
    function notRecorded() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /** @type {?} */
        var asRecord = args.reduce(( /**
         * @param {?} acc
         * @param {?} c
         * @return {?}
         */function (acc, c) { return acc + c.toString(); }), '');
        if (record[asRecord]) {
            return false;
        }
        else {
            record[asRecord] = true;
            return true;
        }
    }
    /**
     * @param {?} consoleFunc
     * @param {...?} args
     * @return {?}
     */
    function consoleCommonBehavior(consoleFunc) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (environments.environment.isTestMode || (i0.isDevMode() && notRecorded.apply(void 0, __spread(args)))) {
            consoleFunc.apply(void 0, __spread(args));
        }
    }
    // Warning should only be printed in dev mode and only once.
    /** @type {?} */
    var warn = ( /**
     * @param {...?} args
     * @return {?}
     */function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return consoleCommonBehavior.apply(void 0, __spread([( /**
             * @param {...?} arg
             * @return {?}
             */function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spread([PREFIX], arg));
            })], args));
    });
    /** @type {?} */
    var deprecation11 = ( /**
     * @param {?} comp
     * @param {?} from
     * @param {?=} to
     * @return {?}
     */function (comp, from, to) {
        warnDeprecation(comp + " => '" + from + "' is going to be removed in 11.0.0" + (to ? ", Please use '" + to + "' instead" : "") + ".");
    });
    /** @type {?} */
    var warnDeprecation = ( /**
     * @param {...?} args
     * @return {?}
     */function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!environments.environment.isTestMode) {
            /** @type {?} */
            var stack_1 = new Error().stack;
            return consoleCommonBehavior.apply(void 0, __spread([( /**
                 * @param {...?} arg
                 * @return {?}
                 */function () {
                    var arg = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        arg[_i] = arguments[_i];
                    }
                    return console.warn.apply(console, __spread([PREFIX, 'deprecated:'], arg, [stack_1]));
                })], args));
        }
        else {
            return ( /**
             * @return {?}
             */function () { });
        }
    });
    // Log should only be printed in dev mode.
    /** @type {?} */
    var log = ( /**
     * @param {...?} args
     * @return {?}
     */function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (i0.isDevMode()) {
            console.log.apply(console, __spread([PREFIX], args));
        }
    });

    /**
     * @fileoverview added by tsickle
     * Generated from: copy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Copy text to clipboard
     *
     * 复制字符串文档至剪贴板
     * @param {?} value
     * @return {?}
     */
    function copy(value) {
        return new Promise(( /**
         * @param {?} resolve
         * @return {?}
         */function (resolve) {
            /** @type {?} */
            var copyTextArea = null;
            try {
                copyTextArea = document.createElement('textarea');
                copyTextArea.style.height = '0px';
                copyTextArea.style.opacity = '0';
                copyTextArea.style.width = '0px';
                document.body.appendChild(copyTextArea);
                copyTextArea.value = value;
                copyTextArea.select();
                document.execCommand('copy');
                resolve(value);
            }
            finally {
                if (copyTextArea && copyTextArea.parentNode) {
                    copyTextArea.parentNode.removeChild(copyTextArea);
                }
            }
        }));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: check.ts
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
                warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
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
     * Generated from: lazy.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function LazyResult() { }
    if (false) {
        /** @type {?} */
        LazyResult.prototype.path;
        /** @type {?} */
        LazyResult.prototype.status;
        /** @type {?|undefined} */
        LazyResult.prototype.error;
    }
    /**
     * 延迟加载资源（js 或 css）服务
     */
    var LazyService = /** @class */ (function () {
        /**
         * @param {?} doc
         */
        function LazyService(doc) {
            this.doc = doc;
            this.list = {};
            this.cached = {};
            this._notify = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(LazyService.prototype, "change", {
            /**
             * @return {?}
             */
            get: function () {
                return this._notify.asObservable().pipe(operators.share(), operators.filter(( /**
                 * @param {?} ls
                 * @return {?}
                 */function (/**
                 * @param {?} ls
                 * @return {?}
                 */ ls) { return ls.length !== 0; })));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        LazyService.prototype.clear = function () {
            this.list = {};
            this.cached = {};
        };
        /**
         * @param {?} paths
         * @return {?}
         */
        LazyService.prototype.load = function (paths) {
            var _this = this;
            if (!Array.isArray(paths)) {
                paths = [paths];
            }
            /** @type {?} */
            var promises = [];
            paths.forEach(( /**
             * @param {?} path
             * @return {?}
             */function (/**
             * @param {?} path
             * @return {?}
             */ path) {
                if (path.endsWith('.js')) {
                    promises.push(_this.loadScript(path));
                }
                else {
                    promises.push(_this.loadStyle(path));
                }
            }));
            return Promise.all(promises).then(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                _this._notify.next(res);
                return Promise.resolve(res);
            }));
        };
        /**
         * @param {?} path
         * @param {?=} innerContent
         * @return {?}
         */
        LazyService.prototype.loadScript = function (path, innerContent) {
            var _this = this;
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (/**
             * @param {?} resolve
             * @return {?}
             */ resolve) {
                if (_this.list[path] === true) {
                    resolve(Object.assign(Object.assign({}, _this.cached[path]), { status: 'loading' }));
                    return;
                }
                _this.list[path] = true;
                /** @type {?} */
                var onSuccess = ( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    _this.cached[path] = item;
                    resolve(item);
                    _this._notify.next([item]);
                });
                /** @type {?} */
                var node = ( /** @type {?} */(_this.doc.createElement('script')));
                node.type = 'text/javascript';
                node.src = path;
                node.charset = 'utf-8';
                if (innerContent) {
                    node.innerHTML = innerContent;
                }
                if (node.readyState) {
                    // IE
                    node.onreadystatechange = ( /**
                     * @return {?}
                     */function () {
                        if (node.readyState === 'loaded' || node.readyState === 'complete') {
                            node.onreadystatechange = null;
                            onSuccess({
                                path: path,
                                status: 'ok',
                            });
                        }
                    });
                }
                else {
                    node.onload = ( /**
                     * @return {?}
                     */function () { return onSuccess({
                        path: path,
                        status: 'ok',
                    }); });
                }
                node.onerror = ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) { return onSuccess({
                    path: path,
                    status: 'error',
                    error: error,
                }); });
                _this.doc.getElementsByTagName('head')[0].appendChild(node);
            }));
        };
        /**
         * @param {?} path
         * @param {?=} rel
         * @param {?=} innerContent
         * @return {?}
         */
        LazyService.prototype.loadStyle = function (path, rel, innerContent) {
            var _this = this;
            if (rel === void 0) { rel = 'stylesheet'; }
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (/**
             * @param {?} resolve
             * @return {?}
             */ resolve) {
                if (_this.list[path] === true) {
                    resolve(_this.cached[path]);
                    return;
                }
                _this.list[path] = true;
                /** @type {?} */
                var node = ( /** @type {?} */(_this.doc.createElement('link')));
                node.rel = rel;
                node.type = 'text/css';
                node.href = path;
                if (innerContent) {
                    node.innerHTML = innerContent;
                }
                _this.doc.getElementsByTagName('head')[0].appendChild(node);
                /** @type {?} */
                var item = {
                    path: path,
                    status: 'ok',
                };
                _this.cached[path] = item;
                resolve(item);
            }));
        };
        return LazyService;
    }());
    LazyService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LazyService.prototype.list;
        /**
         * @type {?}
         * @private
         */
        LazyService.prototype.cached;
        /**
         * @type {?}
         * @private
         */
        LazyService.prototype._notify;
        /**
         * @type {?}
         * @private
         */
        LazyService.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: assert.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} msg
     * @param {?=} actual
     * @param {?=} expected
     * @param {?=} comparison
     * @return {?}
     */
    function throwError(msg, actual, expected, comparison) {
        if (i0.isDevMode()) {
            throw new Error("ASSERTION ERROR: " + msg + (comparison == null ? '' : " [Expected=> " + expected + " " + comparison + " " + actual + " <=Actual]"));
        }
    }
    /**
     * @param {?} assertion
     * @param {?=} msg
     * @return {?}
     */
    function assert(assertion, msg) {
        if (!assertion) {
            throwError(msg);
        }
    }
    /**
     * @param {?} actual
     * @param {?=} msg
     * @return {?}
     */
    function assertNumber(actual, msg) {
        if (!(typeof actual === 'number')) {
            throwError(msg, typeof actual, 'number', '===');
        }
    }
    /**
     * @param {?} actual
     * @param {?=} msg
     * @return {?}
     */
    function assertString(actual, msg) {
        if (!(typeof actual === 'string')) {
            throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: other.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.InputBoolean = InputBoolean;
    exports.InputNumber = InputNumber;
    exports.LazyService = LazyService;
    exports.PREFIX = PREFIX;
    exports.assert = assert;
    exports.assertNumber = assertNumber;
    exports.assertString = assertString;
    exports.copy = copy;
    exports.deepCopy = deepCopy;
    exports.deepGet = deepGet;
    exports.deepMerge = deepMerge;
    exports.deepMergeKey = deepMergeKey;
    exports.deprecation11 = deprecation11;
    exports.log = log;
    exports.toBoolean = toBoolean;
    exports.toNumber = toNumber;
    exports.warn = warn;
    exports.warnDeprecation = warnDeprecation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=other.umd.js.map
