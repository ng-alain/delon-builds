import { __assign, __spread } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, ɵɵdefineInjectable, ɵɵinject, Directive, Input, NgModule } from '@angular/core';
import { LazyService, AlainConfigService, DelonUtilModule } from '@delon/util';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';

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
    function XlsxService(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = (/** @type {?} */ (configSrv.merge('xlsx', {
            url: '//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js',
            modules: [],
        })));
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
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    XlsxService.prototype.read = /**
     * @private
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (data, options) {
        /** @type {?} */
        var ret = {};
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var wb = XLSX.read(data, options);
            wb.SheetNames.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                /** @type {?} */
                var sheet = wb.Sheets[name];
                ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            }));
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
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () { return resolve(_this.read(new Uint8Array(res), { type: 'array' })); }));
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
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () { return resolve(_this.read(e.target.result, { type: 'binary' })); }));
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
        var _this = this;
        return this.init().then((/**
         * @return {?}
         */
        function () {
            _this.ngZone.runOutsideAngular((/**
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
                saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
            }));
        }));
    };
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     * @param {?} val
     * @return {?}
     */
    XlsxService.prototype.numberToSchema = /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    XlsxService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    XlsxService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LazyService },
        { type: AlainConfigService },
        { type: NgZone }
    ]; };
    /** @nocollapse */ XlsxService.ɵprov = ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(ɵɵinject(HttpClient), ɵɵinject(LazyService), ɵɵinject(AlainConfigService), ɵɵinject(NgZone)); }, token: XlsxService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    XlsxService.prototype.ngZone;
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
        { type: Directive, args: [{
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
        data: [{ type: Input, args: ['xlsx',] }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return XlsxModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { XlsxDirective, XlsxModule, XlsxService };
//# sourceMappingURL=xlsx.js.map
