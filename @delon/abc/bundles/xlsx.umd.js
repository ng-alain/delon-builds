/**
 * @license ng-alain(cipchk@qq.com) v9.2.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util'), require('file-saver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/xlsx', ['exports', '@angular/common/http', '@angular/core', '@delon/util', 'file-saver', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.xlsx = {}), global.ng.common.http, global.ng.core, global.delon.util, global.saveAs, global.ng.common));
}(this, (function (exports, http, core, util, fileSaver, common) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
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
     * @fileoverview added by tsickle
     * Generated from: xlsx.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function XlsxExportOptions() { }
    if (false) {
        /**
         * worksheets in the workbook, e.g:
         * - `{ Sheet1: { A1: { t:"n", v:10000 } } }`
         * - `[['1'], [1]]`
         * @type {?}
         */
        XlsxExportOptions.prototype.sheets;
        /**
         * save file name, default: `export.xlsx`
         * @type {?|undefined}
         */
        XlsxExportOptions.prototype.filename;
        /** @type {?|undefined} */
        XlsxExportOptions.prototype.opts;
        /**
         * triggers when saveas
         * @type {?|undefined}
         */
        XlsxExportOptions.prototype.callback;
    }
    /**
     * @record
     */
    function XlsxExportSheet() { }
    if (false) {
        /**
         * arrays to a worksheet
         * @type {?}
         */
        XlsxExportSheet.prototype.data;
        /**
         * sheet name
         * @type {?|undefined}
         */
        XlsxExportSheet.prototype.name;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: xlsx.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsxService = /** @class */ (function () {
        function XlsxService(http, lazy, configSrv) {
            this.http = http;
            this.lazy = lazy;
            this.cog = configSrv.merge('xlsx', {
                url: '//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js',
                modules: [],
            });
        }
        /**
         * @private
         * @return {?}
         */
        XlsxService.prototype.init = /**
         * @private
         * @return {?}
         */
        function () {
            return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.modules))));
        };
        /**
         * @private
         * @param {?} wb
         * @return {?}
         */
        XlsxService.prototype.read = /**
         * @private
         * @param {?} wb
         * @return {?}
         */
        function (wb) {
            /** @type {?} */
            var ret = {};
            wb.SheetNames.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                /** @type {?} */
                var sheet = wb.Sheets[name];
                ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            }));
            return ret;
        };
        /**
         * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
         * @param rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
         */
        /**
         * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
         * @param {?} fileOrUrl
         * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
         * @return {?}
         */
        XlsxService.prototype.import = /**
         * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
         * @param {?} fileOrUrl
         * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
         * @return {?}
         */
        function (fileOrUrl, rABS) {
            var _this = this;
            if (rABS === void 0) { rABS = 'readAsBinaryString'; }
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                _this.init()
                    .then((/**
                 * @return {?}
                 */
                function () {
                    // from url
                    if (typeof fileOrUrl === 'string') {
                        _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) {
                            /** @type {?} */
                            var wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                            resolve(_this.read(wb));
                        }), (/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) {
                            reject(err);
                        }));
                        return;
                    }
                    // from file
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onload = (/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) {
                        /** @type {?} */
                        var wb = XLSX.read(e.target.result, { type: 'binary' });
                        resolve(_this.read(wb));
                    });
                    reader[rABS](fileOrUrl);
                }))
                    .catch((/**
                 * @return {?}
                 */
                function () { return reject("Unable to load xlsx.js"); }));
            }));
        };
        /** 导出 */
        /**
         * 导出
         * @param {?} options
         * @return {?}
         */
        XlsxService.prototype.export = /**
         * 导出
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return this.init().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var wb = XLSX.utils.book_new();
                if (Array.isArray(options.sheets)) {
                    ((/** @type {?} */ (options.sheets))).forEach((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) {
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
                var wbout = XLSX.write(wb, __assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
                fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
            }));
        };
        XlsxService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        XlsxService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: util.LazyService },
            { type: util.AlainConfigService }
        ]; };
        /** @nocollapse */ XlsxService.ɵprov = core.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(util.LazyService), core.ɵɵinject(util.AlainConfigService)); }, token: XlsxService, providedIn: "root" });
        return XlsxService;
    }());
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
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: xlsx.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var XlsxDirective = /** @class */ (function () {
        function XlsxDirective(srv) {
            this.srv = srv;
        }
        /**
         * @return {?}
         */
        XlsxDirective.prototype._click = /**
         * @return {?}
         */
        function () {
            this.srv.export(this.data);
        };
        XlsxDirective.decorators = [
            { type: core.Directive, args: [{
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
            data: [{ type: core.Input, args: ['xlsx',] }]
        };
        return XlsxDirective;
    }());
    if (false) {
        /** @type {?} */
        XlsxDirective.prototype.data;
        /**
         * @type {?}
         * @private
         */
        XlsxDirective.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: xlsx.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [XlsxDirective];
    var XlsxModule = /** @class */ (function () {
        function XlsxModule() {
        }
        XlsxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return XlsxModule;
    }());

    exports.XlsxDirective = XlsxDirective;
    exports.XlsxModule = XlsxModule;
    exports.XlsxService = XlsxService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xlsx.umd.js.map
