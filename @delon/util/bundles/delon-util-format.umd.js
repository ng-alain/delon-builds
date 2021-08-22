/**
 * @license ng-alain(cipchk@qq.com) v12.2.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/other'), require('@angular/common'), require('@angular/core'), require('@delon/util/config')) :
    typeof define === 'function' && define.amd ? define('@delon/util/format', ['exports', '@delon/util/other', '@angular/common', '@angular/core', '@delon/util/config'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.format = {}), global.delon.util.other, global.ng.common, global.ng.core, global.delon.util.config));
}(this, (function (exports, other, common, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * String formatting
     *
     * 字符串格式化
     * ```
     * format('this is ${name}', { name: 'asdf' })
     * // output: this is asdf
     * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
     * // output: this is asdf
     * ```
     */
    function format(str, obj, needDeepGet) {
        if (needDeepGet === void 0) { needDeepGet = false; }
        return (str || '').replace(/\${([^}]+)}/g, function (_work, key) { return needDeepGet ? other.deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''; });
    }
    /**
     * Format mask
     *
     * 格式化掩码
     * ```ts
     * formatMask('123', '(###)') => (123)
     * ```
     */
    function formatMask(value, mask) {
        if (!value) {
            return '';
        }
        var splitValue = value.split('');
        return mask
            .split('')
            .reduce(function (res, cur) {
            if (cur === '#') {
                if (splitValue.length > 0) {
                    res.push(splitValue.shift());
                }
            }
            else {
                res.push(cur);
            }
            return res;
        }, [])
            .join('');
    }

    var REGEX_STR = {
        num: "((-?\\d+\\.\\d+)|(-?\\d+)|(-?\\.\\d+))",
        idCard: "(^\\d{15}$)|(^\\d{17}(?:[0-9]|X)$)",
        mobile: "(0|\\+?86|17951)?(13[0-9]|14[57]|15[0-9]|16[2567]|17[0678]|18[0-9])[0-9]{8}",
        url: "(((^https?:(?://)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+(?::\\d+)?|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[\\w]*))?)",
        ip: "(?:^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$)|(?:^(?:(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)",
        color: "(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\\b|(?:rgb|hsl)a?\\([^\\)]*\\)",
        chinese: "[\u4E00-\u9FA5]+"
    };
    function genRegex(str, flags) {
        return new RegExp("^" + str + "$", flags);
    }
    var REGEX = {
        num: genRegex(REGEX_STR.num),
        idCard: genRegex(REGEX_STR.idCard, 'i'),
        mobile: genRegex(REGEX_STR.mobile),
        url: genRegex(REGEX_STR.url),
        ip: genRegex(REGEX_STR.ip),
        color: genRegex(REGEX_STR.color),
        chinese: genRegex(REGEX_STR.chinese)
    };
    /**
     * Wheter is number
     *
     * 是否为数字
     */
    function isNum(value) {
        return REGEX.num.test(value.toString());
    }
    /**
     * Wheter is integer
     *
     * 是否为整数
     */
    function isInt(value) {
        return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
    }
    /**
     * Wheter is decimal
     *
     * 是否为小数点数值
     */
    function isDecimal(value) {
        return isNum(value) && !isInt(value);
    }
    /**
     * Wheter is People's Republic of China identity card
     *
     * 是否为中华人民共和国居民身份证
     */
    function isIdCard(value) {
        return REGEX.idCard.test(value);
    }
    /**
     * Wheter is china mobile (China)
     *
     * 是否为手机号（中国）
     */
    function isMobile(value) {
        return REGEX.mobile.test(value);
    }
    /**
     * Wheter is url address
     *
     * 是否URL地址
     */
    function isUrl(url) {
        return REGEX.url.test(url);
    }
    /**
     * Wheter is IPv4 address (Support v4, v6)
     *
     * 是否IP4地址（支持v4、v6）
     */
    function isIp(ip) {
        return REGEX.ip.test(ip);
    }
    /**
     * Wheter is color
     *
     * 是否颜色代码值
     */
    function isColor(color) {
        return REGEX.color.test(color);
    }
    /**
     * Wheter is chinese
     *
     * 是否中文
     */
    function isChinese(value) {
        return REGEX.chinese.test(value);
    }

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
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
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var CurrencyMega_Powers = [
        { unit: 'Q', value: Math.pow(10, 15) },
        { unit: 'T', value: Math.pow(10, 12) },
        { unit: 'B', value: Math.pow(10, 9) },
        { unit: 'M', value: Math.pow(10, 6) },
        { unit: 'K', value: 1000 }
    ];

    var CurrencyService = /** @class */ (function () {
        function CurrencyService(cog, locale, _defaultCurrencyCode) {
            if (_defaultCurrencyCode === void 0) { _defaultCurrencyCode = 'USD'; }
            this.locale = locale;
            this.currencyPipe = new common.CurrencyPipe(locale, _defaultCurrencyCode);
            this.c = cog.merge('utilCurrency', {
                startingUnit: 'yuan',
                megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' },
                precision: 2,
                ingoreZeroPrecision: true
            });
        }
        /**
         * Format a number with commas as thousands separators
         *
         * 格式化货币，用逗号将数字格式化为千位分隔符
         * ```ts
         * 10000 => `10,000`
         * 10000.567 => `10,000.57`
         * ```
         */
        CurrencyService.prototype.format = function (value, options) {
            options = Object.assign({ startingUnit: this.c.startingUnit, precision: this.c.precision, ingoreZeroPrecision: this.c.ingoreZeroPrecision, ngCurrency: this.c.ngCurrency }, options);
            var truthValue = Number(value);
            if (value == null || isNaN(truthValue)) {
                return '';
            }
            if (options.startingUnit === 'cent') {
                truthValue = truthValue / 100;
            }
            if (options.ngCurrency != null) {
                var cur = options.ngCurrency;
                return this.currencyPipe.transform(truthValue, cur.currencyCode, cur.display, cur.digitsInfo, cur.locale || this.locale);
            }
            var res = common.formatNumber(truthValue, this.locale, "." + (options.ingoreZeroPrecision ? 1 : options.precision) + "-" + options.precision);
            return options.ingoreZeroPrecision ? res.replace(/(?:\.[0]+)$/g, '') : res;
        };
        /**
         * Large number format filter
         *
         * 大数据格式化
         * ```ts
         * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
         * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
         * ```
         */
        CurrencyService.prototype.mega = function (value, options) {
            var e_1, _a;
            options = Object.assign({ precision: this.c.precision, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit }, options);
            var num = Number(value);
            var res = { raw: value, value: '', unit: '', unitI18n: '' };
            if (isNaN(num) || num === 0) {
                res.value = value.toString();
                return res;
            }
            if (options.startingUnit === 'cent') {
                num = num / 100;
            }
            var abs = Math.abs(+num);
            var rounder = Math.pow(10, options.precision);
            var isNegative = num < 0;
            try {
                for (var CurrencyMega_Powers_1 = __values(CurrencyMega_Powers), CurrencyMega_Powers_1_1 = CurrencyMega_Powers_1.next(); !CurrencyMega_Powers_1_1.done; CurrencyMega_Powers_1_1 = CurrencyMega_Powers_1.next()) {
                    var p = CurrencyMega_Powers_1_1.value;
                    var reduced = abs / p.value;
                    reduced = Math.round(reduced * rounder) / rounder;
                    if (reduced >= 1) {
                        abs = reduced;
                        res.unit = p.unit;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (CurrencyMega_Powers_1_1 && !CurrencyMega_Powers_1_1.done && (_a = CurrencyMega_Powers_1.return)) _a.call(CurrencyMega_Powers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            res.value = (isNegative ? '-' : '') + abs;
            res.unitI18n = options.unitI18n[res.unit];
            return res;
        };
        /**
         * Converted into RMB notation.
         *
         * 转化成人民币表示法
         */
        CurrencyService.prototype.cny = function (value, options) {
            var _a;
            options = Object.assign({ inWords: true, minusSymbol: '负', startingUnit: this.c.startingUnit }, options);
            value = Number(value);
            if (isNaN(value)) {
                return '';
            }
            if (options.startingUnit === 'cent') {
                value = value / 100;
            }
            value = value.toString();
            var integer;
            var decimal;
            _a = __read(value.split('.'), 2), integer = _a[0], decimal = _a[1];
            var symbol = '';
            if (integer.startsWith('-')) {
                symbol = options.minusSymbol;
                integer = integer.substr(1);
            }
            if (/^-?\d+$/.test(value)) {
                decimal = null;
            }
            integer = (+integer).toString();
            var inWords = options.inWords;
            var unit = {
                num: inWords
                    ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
                    : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
                radice: inWords
                    ? [
                        '',
                        '拾',
                        '佰',
                        '仟',
                        '万',
                        '拾',
                        '佰',
                        '仟',
                        '亿',
                        '拾',
                        '佰',
                        '仟',
                        '万亿',
                        '拾',
                        '佰',
                        '仟',
                        '兆',
                        '拾',
                        '佰',
                        '仟'
                    ]
                    : [
                        '',
                        '十',
                        '百',
                        '千',
                        '万',
                        '十',
                        '百',
                        '千',
                        '亿',
                        '十',
                        '百',
                        '千',
                        '万亿',
                        '十',
                        '百',
                        '千',
                        '兆',
                        '十',
                        '百',
                        '千'
                    ],
                dec: ['角', '分', '厘', '毫']
            };
            if (inWords) {
                value = (+value).toFixed(5).toString();
            }
            var integerRes = '';
            var integerCount = integer.length;
            if (integer === '0' || integerCount === 0) {
                integerRes = '零';
            }
            else {
                var cnDesc = '';
                for (var i = 0; i < integerCount; i++) {
                    var n = +integer[i];
                    var j = integerCount - i - 1;
                    var isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
                    var cnZero = isZero ? '零' : '';
                    var isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
                    var descMark = cnDesc;
                    var cnNum = unit.num[n];
                    cnDesc = isEmpptyUnit ? '' : unit.radice[j];
                    // 第一位是一十
                    if (i === 0 && cnNum === '一' && cnDesc === '十')
                        cnNum = '';
                    var isChangeEr = n > 1 &&
                        cnNum === '二' && // 去除首位
                        ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                        descMark !== '十'; // 不读十两
                    if (isChangeEr)
                        cnNum = '两';
                    integerRes += cnZero + cnNum + cnDesc;
                }
            }
            // 小数部分拼接
            var decimalRes = '';
            var decimalCount = decimal ? decimal.toString().length : 0;
            if (decimal === null) {
                decimalRes = inWords ? '整' : '';
            }
            else if (decimal === '0') {
                decimalRes = '零';
            }
            else {
                for (var i = 0; i < decimalCount; i++) {
                    if (inWords && i > unit.dec.length - 1)
                        break;
                    var n = decimal[i];
                    var cnZero = n === '0' ? '零' : '';
                    var cnNum = unit.num[+n];
                    var cnDesc = inWords ? unit.dec[i] : '';
                    decimalRes += cnZero + cnNum + cnDesc;
                }
            }
            var ret = symbol +
                (inWords
                    ? integerRes + (decimalRes === '零' ? '元整' : "\u5143" + decimalRes)
                    : integerRes + (decimalRes === '' ? '' : "\u70B9" + decimalRes));
            return ret;
        };
        return CurrencyService;
    }());
    CurrencyService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function CurrencyService_Factory() { return new CurrencyService(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService), i0__namespace.ɵɵinject(i0__namespace.LOCALE_ID), i0__namespace.ɵɵinject(i0__namespace.DEFAULT_CURRENCY_CODE)); }, token: CurrencyService, providedIn: "root" });
    CurrencyService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    CurrencyService.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: String, decorators: [{ type: i0.Inject, args: [i0.LOCALE_ID,] }] },
        { type: String, decorators: [{ type: i0.Inject, args: [i0.DEFAULT_CURRENCY_CODE,] }] }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CurrencyMega_Powers = CurrencyMega_Powers;
    exports.CurrencyService = CurrencyService;
    exports.REGEX = REGEX;
    exports.REGEX_STR = REGEX_STR;
    exports.format = format;
    exports.formatMask = formatMask;
    exports.isChinese = isChinese;
    exports.isColor = isColor;
    exports.isDecimal = isDecimal;
    exports.isIdCard = isIdCard;
    exports.isInt = isInt;
    exports.isIp = isIp;
    exports.isMobile = isMobile;
    exports.isNum = isNum;
    exports.isUrl = isUrl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-format.umd.js.map
