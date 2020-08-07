/**
 * @license ng-alain(cipchk@qq.com) v10.0.0-beta.3
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('extend'), require('date-fns/addDays'), require('date-fns/endOfDay'), require('date-fns/endOfMonth'), require('date-fns/endOfWeek'), require('date-fns/endOfYear'), require('date-fns/parse'), require('date-fns/parseISO'), require('date-fns/startOfDay'), require('date-fns/startOfMonth'), require('date-fns/startOfWeek'), require('date-fns/startOfYear'), require('date-fns/subMonths'), require('date-fns/subWeeks'), require('date-fns/subYears'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/environments'), require('ng-zorro-antd/core/tree')) :
    typeof define === 'function' && define.amd ? define('@delon/util', ['exports', 'extend', 'date-fns/addDays', 'date-fns/endOfDay', 'date-fns/endOfMonth', 'date-fns/endOfWeek', 'date-fns/endOfYear', 'date-fns/parse', 'date-fns/parseISO', 'date-fns/startOfDay', 'date-fns/startOfMonth', 'date-fns/startOfWeek', 'date-fns/startOfYear', 'date-fns/subMonths', 'date-fns/subWeeks', 'date-fns/subYears', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/environments', 'ng-zorro-antd/core/tree'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.util = {}), global.Extend, global.addDays, global.endOfDay, global.endOfMonth, global.endOfWeek, global.endOfYear, global.parse, global.parseISO, global.startOfDay, global.startOfMonth, global.startOfWeek, global.startOfYear, global.subMonths, global.subWeeks, global.subYears, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.environments, global.tree));
}(this, (function (exports, extend, addDays, endOfDay, endOfMonth, endOfWeek, endOfYear, parse, parseISO, startOfDay, startOfMonth, startOfWeek, startOfYear, subMonths, subWeeks, subYears, i1, i0, rxjs, operators, environments, tree) { 'use strict';

    extend = extend && Object.prototype.hasOwnProperty.call(extend, 'default') ? extend['default'] : extend;
    addDays = addDays && Object.prototype.hasOwnProperty.call(addDays, 'default') ? addDays['default'] : addDays;
    endOfDay = endOfDay && Object.prototype.hasOwnProperty.call(endOfDay, 'default') ? endOfDay['default'] : endOfDay;
    endOfMonth = endOfMonth && Object.prototype.hasOwnProperty.call(endOfMonth, 'default') ? endOfMonth['default'] : endOfMonth;
    endOfWeek = endOfWeek && Object.prototype.hasOwnProperty.call(endOfWeek, 'default') ? endOfWeek['default'] : endOfWeek;
    endOfYear = endOfYear && Object.prototype.hasOwnProperty.call(endOfYear, 'default') ? endOfYear['default'] : endOfYear;
    parse = parse && Object.prototype.hasOwnProperty.call(parse, 'default') ? parse['default'] : parse;
    parseISO = parseISO && Object.prototype.hasOwnProperty.call(parseISO, 'default') ? parseISO['default'] : parseISO;
    startOfDay = startOfDay && Object.prototype.hasOwnProperty.call(startOfDay, 'default') ? startOfDay['default'] : startOfDay;
    startOfMonth = startOfMonth && Object.prototype.hasOwnProperty.call(startOfMonth, 'default') ? startOfMonth['default'] : startOfMonth;
    startOfWeek = startOfWeek && Object.prototype.hasOwnProperty.call(startOfWeek, 'default') ? startOfWeek['default'] : startOfWeek;
    startOfYear = startOfYear && Object.prototype.hasOwnProperty.call(startOfYear, 'default') ? startOfYear['default'] : startOfYear;
    subMonths = subMonths && Object.prototype.hasOwnProperty.call(subMonths, 'default') ? subMonths['default'] : subMonths;
    subWeeks = subWeeks && Object.prototype.hasOwnProperty.call(subWeeks, 'default') ? subWeeks['default'] : subWeeks;
    subYears = subYears && Object.prototype.hasOwnProperty.call(subYears, 'default') ? subYears['default'] : subYears;

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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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
     * 类似 `_.get`，根据 `path` 获取安全值
     * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
     *
     * @param {?} obj 数据源，无效时直接返回 `defaultValue` 值
     * @param {?} path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
     * @param {?=} defaultValue 默认值
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
     * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
     * @param {?} obj
     * @return {?}
     */
    function deepCopy(obj) {
        /** @type {?} */
        var result = extend(true, {}, { _: obj });
        return result._;
    }
    /**
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
     * 深度合并对象
     *
     * @param {?} original 原始对象
     * @param {...?} objects 要合并的对象
     * @return {?}
     */
    function deepMerge(original) {
        var objects = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            objects[_i - 1] = arguments[_i];
        }
        return deepMergeKey.apply(void 0, __spread([original, false], objects));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/string/string.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 字符串格式化
     * ```
     * format('this is ${name}', { name: 'asdf' })
     * // output: this is asdf
     * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
     * // output: this is asdf
     * ```
     * @param {?} str
     * @param {?} obj
     * @param {?=} needDeepGet
     * @return {?}
     */
    function format(str, obj, needDeepGet) {
        if (needDeepGet === void 0) { needDeepGet = false; }
        return (str || '').replace(/\${([^}]+)}/g, ( /**
         * @param {?} _work
         * @param {?} key
         * @return {?}
         */function (_work, key) { return needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''; }));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/time/time.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 获取时间范围
     * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
     * @param {?=} time 开始时间
     * @return {?}
     */
    function getTimeDistance(type, time) {
        time = time ? (typeof time === 'string' ? parse(time, 'yyyy-MM-dd HH:mm:ss', new Date()) : new Date(time)) : new Date();
        /** @type {?} */
        var options = { weekStartsOn: 1 };
        /** @type {?} */
        var res;
        switch (type) {
            case 'today':
                res = [time, time];
                break;
            case '-today':
                res = [addDays(time, -1), time];
                break;
            case 'yesterday':
                res = [addDays(time, -1), addDays(time, -1)];
                break;
            case 'week':
                res = [startOfWeek(time, options), endOfWeek(time, options)];
                break;
            case '-week':
                res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
                break;
            case 'month':
                res = [startOfMonth(time), endOfMonth(time)];
                break;
            case '-month':
                res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
                break;
            case 'year':
                res = [startOfYear(time), endOfYear(time)];
                break;
            case '-year':
                res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
                break;
            default:
                res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
                break;
        }
        return fixEndTimeOfRange(res);
    }
    /**
     * fix time is the most, big value
     * @param {?} dates
     * @return {?}
     */
    function fixEndTimeOfRange(dates) {
        return [startOfDay(dates[0]), endOfDay(dates[1])];
    }
    /**
     * Return the date parsed from string using the given format string
     * - If the argument is a number, it is treated as a timestamp.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function toDate(value, options) {
        if (typeof options === 'string')
            options = { formatString: options };
        var _a = Object.assign({ formatString: 'yyyy-MM-dd HH:mm:ss', defaultValue: new Date(NaN) }, options), formatString = _a.formatString, defaultValue = _a.defaultValue;
        if (value == null)
            return defaultValue;
        if (value instanceof Date)
            return value;
        if (typeof value === 'number')
            return new Date(value);
        /** @type {?} */
        var tryDate = !isNaN(+value) ? new Date(+value) : parseISO(value);
        if (isNaN(( /** @type {?} */(tryDate)))) {
            tryDate = parse(value, ( /** @type {?} */(formatString)), defaultValue);
        }
        return isNaN(( /** @type {?} */(tryDate))) ? defaultValue : tryDate;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/lazy/lazy.service.ts
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
     * Generated from: src/validate/validate.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 是否为数字
     * @param {?} value
     * @return {?}
     */
    function isNum(value) {
        return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
    }
    /**
     * 是否为整数
     * @param {?} value
     * @return {?}
     */
    function isInt(value) {
        return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
    }
    /**
     * 是否为小数
     * @param {?} value
     * @return {?}
     */
    function isDecimal(value) {
        return isNum(value) && !isInt(value);
    }
    /**
     * 是否为身份证
     * @param {?} value
     * @return {?}
     */
    function isIdCard(value) {
        return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
    }
    /**
     * 是否为手机号
     * @param {?} value
     * @return {?}
     */
    function isMobile(value) {
        return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
    }
    /**
     * 是否URL地址
     * @param {?} url
     * @return {?}
     */
    function isUrl(url) {
        return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/validate/validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 一套日常验证器
     */
    // tslint:disable-next-line:class-name
    var _Validators = /** @class */ (function () {
        function _Validators() {
        }
        /**
         * 是否为数字
         * @param {?} control
         * @return {?}
         */
        _Validators.num = function (control) {
            return isNum(control.value) ? null : { num: true };
        };
        /**
         * 是否为整数
         * @param {?} control
         * @return {?}
         */
        _Validators.int = function (control) {
            return isInt(control.value) ? null : { int: true };
        };
        /**
         * 是否为小数
         * @param {?} control
         * @return {?}
         */
        _Validators.decimal = function (control) {
            return isDecimal(control.value) ? null : { decimal: true };
        };
        /**
         * 是否为身份证
         * @param {?} control
         * @return {?}
         */
        _Validators.idCard = function (control) {
            return isIdCard(control.value) ? null : { idCard: true };
        };
        /**
         * 是否为手机号
         * @param {?} control
         * @return {?}
         */
        _Validators.mobile = function (control) {
            return isMobile(control.value) ? null : { mobile: true };
        };
        /**
         * 是否URL地址
         * @param {?} control
         * @return {?}
         */
        _Validators.url = function (control) {
            return isUrl(control.value) ? null : { url: true };
        };
        return _Validators;
    }());

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
     * Generated from: src/other/check.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function isEmpty(element) {
        /** @type {?} */
        var nodes = element.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            /** @type {?} */
            var node = nodes.item(i);
            if (node.nodeType === 1 && (( /** @type {?} */(node))).outerHTML.toString().trim().length !== 0) {
                return false;
            }
            else if (node.nodeType === 3 && ( /** @type {?} */(node.textContent)).toString().trim().length !== 0) {
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
     * Generated from: src/other/copy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
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
     * Generated from: src/other/style.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function removeClass(el, classMap, renderer) {
        // tslint:disable-next-line: forin
        for (var i in classMap) {
            renderer.removeClass(el, i);
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function addClass(el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
    /**
     * 更新宿主组件样式 `class`，例如：
     *
     * ```ts
     * updateHostClass(
     *  this.el.nativeElement,
     *  this.renderer,
     *  {
     *    [ 'classname' ]: true,
     *    [ 'classname' ]: this.type === '1',
     *    [ this.cls ]: true,
     *    [ `a-${this.cls}` ]: true
     *  })
     * ```
     *
     * @param {?} el
     * @param {?} renderer
     * @param {?} classMap
     * @param {?=} cleanAll
     * @return {?}
     */
    function updateHostClass(el, renderer, classMap, cleanAll) {
        if (cleanAll === void 0) { cleanAll = false; }
        if (cleanAll === true) {
            renderer.removeAttribute(el, 'class');
        }
        else {
            removeClass(el, classMap, renderer);
        }
        classMap = Object.assign({}, classMap);
        addClass(el, classMap, renderer);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/other/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/config/abc/sv.type.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlainSVConfig = /** @class */ (function () {
        function AlainSVConfig() {
        }
        return AlainSVConfig;
    }());
    if (false) {
        /**
         * 大小，默认：`large`
         * @type {?}
         */
        AlainSVConfig.prototype.size;
        /**
         * 间距，默认：`32`
         * @type {?}
         */
        AlainSVConfig.prototype.gutter;
        /**
         * 布局，默认：`horizontal`
         * @type {?}
         */
        AlainSVConfig.prototype.layout;
        /**
         * 列数，默认：`3`
         * @type {?}
         */
        AlainSVConfig.prototype.col;
        /**
         * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
         * @type {?}
         */
        AlainSVConfig.prototype.default;
        /**
         * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
         * @type {?}
         */
        AlainSVConfig.prototype.labelWidth;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/config/config.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AlainConfig() { }
    if (false) {
        /** @type {?|undefined} */
        AlainConfig.prototype.dataRange;
        /** @type {?|undefined} */
        AlainConfig.prototype.errorCollect;
        /** @type {?|undefined} */
        AlainConfig.prototype.image;
        /** @type {?|undefined} */
        AlainConfig.prototype.loading;
        /** @type {?|undefined} */
        AlainConfig.prototype.lodop;
        /** @type {?|undefined} */
        AlainConfig.prototype.pageHeader;
        /** @type {?|undefined} */
        AlainConfig.prototype.qr;
        /** @type {?|undefined} */
        AlainConfig.prototype.se;
        /** @type {?|undefined} */
        AlainConfig.prototype.sg;
        /** @type {?|undefined} */
        AlainConfig.prototype.sv;
        /** @type {?|undefined} */
        AlainConfig.prototype.st;
        /** @type {?|undefined} */
        AlainConfig.prototype.sf;
        /** @type {?|undefined} */
        AlainConfig.prototype.xlsx;
        /** @type {?|undefined} */
        AlainConfig.prototype.zip;
        /** @type {?|undefined} */
        AlainConfig.prototype.media;
        /** @type {?|undefined} */
        AlainConfig.prototype.acl;
        /** @type {?|undefined} */
        AlainConfig.prototype.auth;
        /** @type {?|undefined} */
        AlainConfig.prototype.cache;
        /** @type {?|undefined} */
        AlainConfig.prototype.chart;
        /** @type {?|undefined} */
        AlainConfig.prototype.mock;
        /** @type {?|undefined} */
        AlainConfig.prototype.utilArray;
        /** @type {?|undefined} */
        AlainConfig.prototype.themeHttp;
        /** @type {?|undefined} */
        AlainConfig.prototype.themeResponsive;
    }
    /** @type {?} */
    var ALAIN_CONFIG = new i0.InjectionToken('alain-config', {
        providedIn: 'root',
        factory: ALAIN_CONFIG_FACTORY,
    });
    /**
     * @return {?}
     */
    function ALAIN_CONFIG_FACTORY() {
        return {};
    }

    var AlainConfigService = /** @class */ (function () {
        /**
         * @param {?=} defaultConfig
         */
        function AlainConfigService(defaultConfig) {
            this.config = Object.assign({}, defaultConfig);
        }
        /**
         * @template T
         * @param {?} componentName
         * @param {?=} key
         * @return {?}
         */
        AlainConfigService.prototype.get = function (componentName, key) {
            var _a;
            /** @type {?} */
            var res = ( /** @type {?} */(((( /** @type {?} */(this.config[componentName]))) || {})));
            return key ? (_a = {}, _a[key] = res[key], _a) : res;
        };
        /**
         * @template T
         * @param {?} componentName
         * @param {...?} defaultValues
         * @return {?}
         */
        AlainConfigService.prototype.merge = function (componentName) {
            var defaultValues = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                defaultValues[_i - 1] = arguments[_i];
            }
            return deepMergeKey.apply(void 0, __spread([{}, true], defaultValues, [this.get(componentName)]));
        };
        /**
         * @template T
         * @param {?} componentThis
         * @param {?} componentName
         * @param {?} defaultValues
         * @return {?}
         */
        AlainConfigService.prototype.attach = function (componentThis, componentName, defaultValues) {
            Object.assign(componentThis, this.merge(componentName, defaultValues));
        };
        /**
         * @template T
         * @param {?} componentThis
         * @param {?} componentName
         * @param {?} key
         * @return {?}
         */
        AlainConfigService.prototype.attachKey = function (componentThis, componentName, key) {
            Object.assign(componentThis, this.get(componentName, key));
        };
        /**
         * @template T
         * @param {?} componentName
         * @param {?} value
         * @return {?}
         */
        AlainConfigService.prototype.set = function (componentName, value) {
            this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
        };
        return AlainConfigService;
    }());
    AlainConfigService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AlainConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_CONFIG,] }] }
    ]; };
    /** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(i0.ɵɵinject(ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AlainConfigService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/config/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */
    function ArrayServiceTreeToArrOptions() { }
    if (false) {
        /**
         * 深度项名，默认：`'deep'`
         * @type {?|undefined}
         */
        ArrayServiceTreeToArrOptions.prototype.deepMapName;
        /**
         * 扁平后数组的父数据项名，默认：`'parent'`
         * @type {?|undefined}
         */
        ArrayServiceTreeToArrOptions.prototype.parentMapName;
        /**
         * 源数据子项名，默认：`'children'`
         * @type {?|undefined}
         */
        ArrayServiceTreeToArrOptions.prototype.childrenMapName;
        /**
         * 是否移除 `children` 节点，默认：`true`
         * @type {?|undefined}
         */
        ArrayServiceTreeToArrOptions.prototype.clearChildren;
        /**
         * 转换成数组结构时回调
         * @type {?|undefined}
         */
        ArrayServiceTreeToArrOptions.prototype.cb;
    }
    /**
     * @record
     */
    function ArrayServiceArrToTreeOptions() { }
    if (false) {
        /**
         * 编号项名，默认：`'id'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeOptions.prototype.idMapName;
        /**
         * 父编号项名，默认：`'parent_id'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
        /**
         * 子项名，默认：`'children'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeOptions.prototype.childrenMapName;
        /**
         * 转换成树数据时回调
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeOptions.prototype.cb;
    }
    /**
     * @record
     */
    function ArrayServiceArrToTreeNodeOptions() { }
    if (false) {
        /**
         * 编号项名，默认：`'id'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
        /**
         * 父编号项名，默认：`'parent_id'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
        /**
         * 标题项名，默认：`'title'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
        /**
         * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
        /**
         * 节点 Checkbox 是否选中项名，默认：`'checked'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
        /**
         * 节点本身是否选中项名，默认：`'selected'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
        /**
         * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
        /**
         * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
        /**
         * 转换成树数据后，执行的递归回调
         * @type {?|undefined}
         */
        ArrayServiceArrToTreeNodeOptions.prototype.cb;
    }
    /**
     * @record
     */
    function ArrayServiceGetKeysByTreeNodeOptions() { }
    if (false) {
        /**
         * 是否包含半选状态的值，默认：`true`
         * @type {?|undefined}
         */
        ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
        /**
         * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
         * @type {?|undefined}
         */
        ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
        /**
         * 回调，返回一个值 `key` 值，优先级高于其他
         * @type {?|undefined}
         */
        ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
    }
    var ArrayService = /** @class */ (function () {
        /**
         * @param {?} cog
         */
        function ArrayService(cog) {
            this.c = ( /** @type {?} */(cog.merge('utilArray', {
                deepMapName: 'deep',
                parentMapName: 'parent',
                idMapName: 'id',
                parentIdMapName: 'parent_id',
                childrenMapName: 'children',
                titleMapName: 'title',
                checkedMapname: 'checked',
                selectedMapname: 'selected',
                expandedMapname: 'expanded',
                disabledMapname: 'disabled',
            })));
        }
        /**
         * 将树结构转换成数组结构
         * @param {?} tree
         * @param {?=} options
         * @return {?}
         */
        ArrayService.prototype.treeToArr = function (tree, options) {
            /** @type {?} */
            var opt = ( /** @type {?} */(Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
            /** @type {?} */
            var result = [];
            /** @type {?} */
            var inFn = ( /**
             * @param {?} list
             * @param {?} parent
             * @param {?=} deep
             * @return {?}
             */function (list, parent, deep) {
                var e_1, _a;
                if (deep === void 0) { deep = 0; }
                try {
                    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                        var i = list_1_1.value;
                        i[( /** @type {?} */(opt.deepMapName))] = deep;
                        i[( /** @type {?} */(opt.parentMapName))] = parent;
                        if (opt.cb) {
                            opt.cb(i, parent, deep);
                        }
                        result.push(i);
                        /** @type {?} */
                        var children = i[( /** @type {?} */(opt.childrenMapName))];
                        if (children != null && Array.isArray(children) && children.length > 0) {
                            inFn(children, i, deep + 1);
                        }
                        if (opt.clearChildren) {
                            delete i[( /** @type {?} */(opt.childrenMapName))];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            inFn(tree, 1);
            return result;
        };
        /**
         * 数组转换成树数据
         * @param {?} arr
         * @param {?=} options
         * @return {?}
         */
        ArrayService.prototype.arrToTree = function (arr, options) {
            var e_2, _a;
            /** @type {?} */
            var opt = ( /** @type {?} */(Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
            /** @type {?} */
            var tree = [];
            /** @type {?} */
            var childrenOf = {};
            try {
                for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                    var item = arr_1_1.value;
                    /** @type {?} */
                    var id = item[( /** @type {?} */(opt.idMapName))];
                    /** @type {?} */
                    var pid = item[( /** @type {?} */(opt.parentIdMapName))];
                    childrenOf[id] = childrenOf[id] || [];
                    item[( /** @type {?} */(opt.childrenMapName))] = childrenOf[id];
                    if (opt.cb) {
                        opt.cb(item);
                    }
                    if (pid) {
                        childrenOf[pid] = childrenOf[pid] || [];
                        childrenOf[pid].push(item);
                    }
                    else {
                        tree.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return tree;
        };
        /**
         * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
         * @param {?} arr
         * @param {?=} options
         * @return {?}
         */
        ArrayService.prototype.arrToTreeNode = function (arr, options) {
            /** @type {?} */
            var opt = ( /** @type {?} */(Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
            /** @type {?} */
            var tree$1 = this.arrToTree(arr, {
                idMapName: opt.idMapName,
                parentIdMapName: opt.parentIdMapName,
                childrenMapName: 'children',
            });
            this.visitTree(tree$1, ( /**
             * @param {?} item
             * @param {?} parent
             * @param {?} deep
             * @return {?}
             */function (item, parent, deep) {
                item.key = item[( /** @type {?} */(opt.idMapName))];
                item.title = item[( /** @type {?} */(opt.titleMapName))];
                item.checked = item[( /** @type {?} */(opt.checkedMapname))];
                item.selected = item[( /** @type {?} */(opt.selectedMapname))];
                item.expanded = item[( /** @type {?} */(opt.expandedMapname))];
                item.disabled = item[( /** @type {?} */(opt.disabledMapname))];
                if (item[( /** @type {?} */(opt.isLeafMapName))] == null) {
                    item.isLeaf = item.children.length === 0;
                }
                else {
                    item.isLeaf = item[( /** @type {?} */(opt.isLeafMapName))];
                }
                if (opt.cb) {
                    opt.cb(item, parent, deep);
                }
            }));
            return tree$1.map(( /**
             * @param {?} node
             * @return {?}
             */function (/**
             * @param {?} node
             * @return {?}
             */ node) { return new tree.NzTreeNode(node); }));
        };
        /**
         * 递归访问整个树
         * @param {?} tree
         * @param {?} cb
         * @param {?=} options
         * @return {?}
         */
        ArrayService.prototype.visitTree = function (tree, cb, options) {
            options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
            /** @type {?} */
            var inFn = ( /**
             * @param {?} data
             * @param {?} parent
             * @param {?} deep
             * @return {?}
             */function (data, parent, deep) {
                var e_3, _a;
                try {
                    for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var item = data_1_1.value;
                        cb(item, parent, deep);
                        /** @type {?} */
                        var childrenVal = item[( /** @type {?} */(( /** @type {?} */(options)).childrenMapName))];
                        if (childrenVal && childrenVal.length > 0) {
                            inFn(childrenVal, item, deep + 1);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
            inFn(tree, null, 1);
        };
        /**
         * 获取所有已经选中的 `key` 值
         * @param {?} tree
         * @param {?=} options
         * @return {?}
         */
        ArrayService.prototype.getKeysByTreeNode = function (tree, options) {
            /** @type {?} */
            var opt = ( /** @type {?} */(Object.assign({ includeHalfChecked: true }, options)));
            /** @type {?} */
            var keys = [];
            this.visitTree(tree, ( /**
             * @param {?} item
             * @param {?} parent
             * @param {?} deep
             * @return {?}
             */function (item, parent, deep) {
                if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                    keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
                }
            }));
            return keys;
        };
        return ArrayService;
    }());
    ArrayService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(AlainConfigService)); }, token: ArrayService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ArrayService.prototype.c;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/logger/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/logger/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/util.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonUtilModule = /** @class */ (function () {
        function DelonUtilModule() {
        }
        return DelonUtilModule;
    }());
    DelonUtilModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: util.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ALAIN_CONFIG = ALAIN_CONFIG;
    exports.ALAIN_CONFIG_FACTORY = ALAIN_CONFIG_FACTORY;
    exports.AlainConfigService = AlainConfigService;
    exports.AlainSVConfig = AlainSVConfig;
    exports.ArrayService = ArrayService;
    exports.DelonUtilModule = DelonUtilModule;
    exports.InputBoolean = InputBoolean;
    exports.InputNumber = InputNumber;
    exports.LazyService = LazyService;
    exports.PREFIX = PREFIX;
    exports._Validators = _Validators;
    exports.copy = copy;
    exports.deepCopy = deepCopy;
    exports.deepGet = deepGet;
    exports.deepMerge = deepMerge;
    exports.deepMergeKey = deepMergeKey;
    exports.deprecation11 = deprecation11;
    exports.fixEndTimeOfRange = fixEndTimeOfRange;
    exports.format = format;
    exports.getTimeDistance = getTimeDistance;
    exports.isDecimal = isDecimal;
    exports.isEmpty = isEmpty;
    exports.isIdCard = isIdCard;
    exports.isInt = isInt;
    exports.isMobile = isMobile;
    exports.isNum = isNum;
    exports.isUrl = isUrl;
    exports.log = log;
    exports.toBoolean = toBoolean;
    exports.toDate = toDate;
    exports.toNumber = toNumber;
    exports.updateHostClass = updateHostClass;
    exports.warn = warn;
    exports.warnDeprecation = warnDeprecation;
    exports.ɵa = AlainConfigService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=util.umd.js.map
