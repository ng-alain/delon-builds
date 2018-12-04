/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('file-saver'), require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/xlsx', ['exports', '@angular/common/http', 'file-saver', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.xlsx = {}),global.ng.common.http,global.saveAs,global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,http,fileSaver,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var XlsxConfig = /** @class */ (function () {
        function XlsxConfig() {
            /**
             * Xlsx library path
             */
            this.url = '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
            /**
             * Defines which Xlsx optional modules should get loaded, e.g:
             *
             * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
             */
            this.modules = [];
        }
        return XlsxConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var XlsxService = /** @class */ (function () {
        function XlsxService(cog, http$$1, lazy) {
            this.cog = cog;
            this.http = http$$1;
            this.lazy = lazy;
        }
        /**
         * @return {?}
         */
        XlsxService.prototype.init = /**
         * @return {?}
         */
            function () {
                return this.lazy.load([this.cog.url].concat(this.cog.modules));
            };
        /**
         * @param {?} wb
         * @return {?}
         */
        XlsxService.prototype.read = /**
         * @param {?} wb
         * @return {?}
         */
            function (wb) {
                /** @type {?} */
                var ret = {};
                wb.SheetNames.forEach(function (name) {
                    /** @type {?} */
                    var sheet = wb.Sheets[name];
                    ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                });
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
                if (rABS === void 0) {
                    rABS = 'readAsBinaryString';
                }
                return new Promise(function (resolver, reject) {
                    _this.init().then(function () {
                        // from url
                        if (typeof fileOrUrl === 'string') {
                            _this.http
                                .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                                .subscribe(function (res) {
                                /** @type {?} */
                                var wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                                resolver(_this.read(wb));
                            }, function (err) {
                                reject(err);
                            });
                            return;
                        }
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            /** @type {?} */
                            var wb = XLSX.read(e.target.result, { type: 'binary' });
                            resolver(_this.read(wb));
                        };
                        reader[rABS](fileOrUrl);
                    });
                });
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
                return this.init().then(function () {
                    /** @type {?} */
                    var wb = XLSX.utils.book_new();
                    if (Array.isArray(options.sheets)) {
                        ( /** @type {?} */(options.sheets)).forEach(function (value, index) {
                            /** @type {?} */
                            var ws = XLSX.utils.aoa_to_sheet(value.data);
                            XLSX.utils.book_append_sheet(wb, ws, value.name || "Sheet" + (index + 1));
                        });
                    }
                    else {
                        wb.SheetNames = Object.keys(options.sheets);
                        wb.Sheets = options.sheets;
                    }
                    if (options.callback)
                        options.callback(wb);
                    /** @type {?} */
                    var wbout = XLSX.write(wb, Object.assign({
                        bookType: 'xlsx',
                        bookSST: false,
                        type: 'array',
                    }, options.opts));
                    fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
                });
            };
        XlsxService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        XlsxService.ctorParameters = function () {
            return [
                { type: XlsxConfig },
                { type: http.HttpClient },
                { type: util.LazyService }
            ];
        };
        return XlsxService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            { type: core.Directive, args: [{ selector: '[xlsx]' },] }
        ];
        /** @nocollapse */
        XlsxDirective.ctorParameters = function () {
            return [
                { type: XlsxService }
            ];
        };
        XlsxDirective.propDecorators = {
            data: [{ type: core.Input, args: ['xlsx',] }],
            _click: [{ type: core.HostListener, args: ['click',] }]
        };
        return XlsxDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [XlsxDirective];
    var XlsxModule = /** @class */ (function () {
        function XlsxModule() {
        }
        /**
         * @return {?}
         */
        XlsxModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: XlsxModule,
                    providers: [XlsxService, XlsxConfig],
                };
            };
        XlsxModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return XlsxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.XlsxConfig = XlsxConfig;
    exports.XlsxService = XlsxService;
    exports.XlsxDirective = XlsxDirective;
    exports.XlsxModule = XlsxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=xlsx.umd.js.map