/**
 * @license ng-alain(cipchk@qq.com) v11.0.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util'), require('file-saver'), require('isutf8'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/xlsx', ['exports', '@angular/common/http', '@angular/core', '@delon/util', 'file-saver', 'isutf8', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.xlsx = {}), global.ng.common.http, global.ng.core, global.delon.util, global.saveAs, global.isUtf8, global.ng.common));
}(this, (function (exports, i1, i0, i2, fileSaver, isUtf8, common) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var isUtf8__default = /*#__PURE__*/_interopDefaultLegacy(isUtf8);

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

    var XlsxService = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} lazy
         * @param {?} configSrv
         * @param {?} ngZone
         */
        function XlsxService(http, lazy, configSrv, ngZone) {
            this.http = http;
            this.lazy = lazy;
            this.ngZone = ngZone;
            this.cog = ( /** @type {?} */(configSrv.merge('xlsx', {
                url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
                modules: ["https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js"],
            })));
        }
        /**
         * @private
         * @return {?}
         */
        XlsxService.prototype.init = function () {
            return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([( /** @type {?} */(this.cog.url))].concat(( /** @type {?} */(this.cog.modules))));
        };
        /**
         * @private
         * @param {?} data
         * @param {?} options
         * @return {?}
         */
        XlsxService.prototype.read = function (data, options) {
            /** @type {?} */
            var ret = {};
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                if (options.type === 'binary') {
                    /** @type {?} */
                    var buf = new Uint8Array(data);
                    if (!isUtf8__default['default'](buf)) {
                        try {
                            data = cptable.utils.decode(936, buf);
                            options.type = 'string';
                        }
                        catch (_a) {
                            options.type = 'array';
                        }
                    }
                }
                /** @type {?} */
                var wb = XLSX.read(data, options);
                wb.SheetNames.forEach(( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) {
                    /** @type {?} */
                    var sheet = wb.Sheets[name];
                    ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                }));
            }));
            return ret;
        };
        /**
         * @param {?} fileOrUrl
         * @param {?=} _rABS
         * @return {?}
         */
        XlsxService.prototype.import = function (fileOrUrl, _rABS) {
            var _this = this;
            if (_rABS === void 0) { _rABS = 'readAsBinaryString'; }
            return new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */function (resolve, reject) {
                _this.init()
                    .then(( /**
             * @return {?}
             */function () {
                    // from url
                    if (typeof fileOrUrl === 'string') {
                        _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
                            _this.ngZone.run(( /**
                             * @return {?}
                             */function () { return resolve(_this.read(new Uint8Array(res), { type: 'array' })); }));
                        }), ( /**
                         * @param {?} err
                         * @return {?}
                         */function (err) {
                            reject(err);
                        }));
                        return;
                    }
                    // from file
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onload = ( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () { return resolve(_this.read(e.target.result, { type: 'binary' })); }));
                    });
                    reader.readAsArrayBuffer(fileOrUrl);
                }))
                    .catch(( /**
             * @return {?}
             */function () { return reject("Unable to load xlsx.js"); }));
            }));
        };
        /**
         * @param {?} options
         * @return {?}
         */
        XlsxService.prototype.export = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_b) {
                    return [2 /*return*/, new Promise(( /**
                         * @param {?} resolve
                         * @param {?} reject
                         * @return {?}
                         */function (resolve, reject) {
                            _this.init()
                                .then(( /**
                         * @return {?}
                         */function () {
                                _this.ngZone.runOutsideAngular(( /**
                                 * @return {?}
                                 */function () {
                                    /** @type {?} */
                                    var wb = XLSX.utils.book_new();
                                    if (Array.isArray(options.sheets)) {
                                        (( /** @type {?} */(options.sheets))).forEach(( /**
                                         * @param {?} value
                                         * @param {?} index
                                         * @return {?}
                                         */function (value, index) {
                                            /** @type {?} */
                                            var ws = XLSX.utils.aoa_to_sheet(value.data);
                                            XLSX.utils.book_append_sheet(wb, ws, value.name || "Sheet" + (index + 1));
                                        }));
                                    }
                                    else {
                                        wb.SheetNames = Object.keys(options.sheets);
                                        wb.Sheets = options.sheets;
                                    }
                                    if (options.callback)
                                        options.callback(wb);
                                    /** @type {?} */
                                    var wbout = XLSX.write(wb, Object.assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
                                    /** @type {?} */
                                    var filename = options.filename || 'export.xlsx';
                                    fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
                                    resolve({ filename: filename, wb: wb });
                                }));
                            }))
                                .catch(( /**
                         * @param {?} err
                         * @return {?}
                         */function (/**
                         * @param {?} err
                         * @return {?}
                         */ err) { return reject(err); }));
                        }))];
                });
            });
        };
        /**
         * 数据转符号名
         * - `1` => `A`
         * - `27` => `AA`
         * - `703` => `AAA`
         * @param {?} val
         * @return {?}
         */
        XlsxService.prototype.numberToSchema = function (val) {
            /** @type {?} */
            var startCode = 'A'.charCodeAt(0);
            /** @type {?} */
            var res = '';
            do {
                --val;
                res = String.fromCharCode(startCode + (val % 26)) + res;
                val = (val / 26) >> 0;
            } while (val > 0);
            return res;
        };
        return XlsxService;
    }());
    XlsxService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    XlsxService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: i2.LazyService },
        { type: i2.AlainConfigService },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        XlsxService.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        XlsxService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        XlsxService.prototype.lazy;
        /**
         * @type {?}
         * @private
         */
        XlsxService.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: xlsx.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsxDirective = /** @class */ (function () {
        /**
         * @param {?} srv
         */
        function XlsxDirective(srv) {
            this.srv = srv;
        }
        /**
         * @return {?}
         */
        XlsxDirective.prototype._click = function () {
            this.srv.export(this.data);
        };
        return XlsxDirective;
    }());
    XlsxDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[xlsx]',
                    exportAs: 'xlsx',
                    host: {
                        '(click)': '_click()',
                    },
                },] }
    ];
    /** @nocollapse */
    XlsxDirective.ctorParameters = function () { return [
        { type: XlsxService }
    ]; };
    XlsxDirective.propDecorators = {
        data: [{ type: i0.Input, args: ['xlsx',] }]
    };
    if (false) {
        /** @type {?} */
        XlsxDirective.prototype.data;
        /**
         * @type {?}
         * @private
         */
        XlsxDirective.prototype.srv;
    }

    /** @type {?} */
    var COMPONENTS = [XlsxDirective];
    var XlsxModule = /** @class */ (function () {
        function XlsxModule() {
        }
        return XlsxModule;
    }());
    XlsxModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, i2.DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: xlsx.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.XlsxDirective = XlsxDirective;
    exports.XlsxModule = XlsxModule;
    exports.XlsxService = XlsxService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xlsx.umd.js.map
