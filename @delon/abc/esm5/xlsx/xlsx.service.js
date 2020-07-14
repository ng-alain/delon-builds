/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __awaiter, __generator } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util";
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
    /**
     * @param {?} options
     * @return {?}
     */
    XlsxService.prototype.export = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.init().then((/**
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
                            /** @type {?} */
                            var filename = options.filename || 'export.xlsx';
                            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
                        }));
                    }))];
            });
        });
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
    /** @nocollapse */ XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
    return XlsxService;
}());
export { XlsxService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQStCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBTXBDO0lBR0UscUJBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QixFQUFVLE1BQWM7UUFBbEcsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFBeUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwSCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxnREFBZ0Q7WUFDckQsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sMEJBQUk7Ozs7SUFBWjtRQUNFLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQzs7Ozs7OztJQUVPLDBCQUFJOzs7Ozs7SUFBWixVQUFhLElBQWUsRUFB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U0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3hELEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBekdGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBVHpCLFVBQVU7Z0JBRXVDLFdBQVc7Z0JBQTVELGtCQUFrQjtnQkFETixNQUFNOzs7c0JBRDNCO0NBbUhDLEFBMUdELElBMEdDO1NBekdZLFdBQVc7Ozs7OztJQUN0QiwwQkFBNkI7Ozs7O0lBQ2pCLDJCQUF3Qjs7Ozs7SUFBRSwyQkFBeUI7Ozs7O0lBQWlDLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5YbHN4Q29uZmlnLCBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5YbHN4Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3hsc3gnLCB7XG4gICAgICB1cmw6ICcvL2Nkbi5ib290Y3NzLmNvbS94bHN4LzAuMTUuNi94bHN4LmZ1bGwubWluLmpzJyxcbiAgICAgIG1vZHVsZXM6IFtdLFxuICAgIH0pITtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0eXBlb2YgWExTWCAhPT0gJ3VuZGVmaW5lZCcgPyBQcm9taXNlLnJlc29sdmUoW10pIDogdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy5tb2R1bGVzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkKGRhdGE6IE56U2FmZUFueSwgb3B0aW9uczogeyB0eXBlOiAnYXJyYXknIHwgJ2JpbmFyeScgfSk6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9IHtcbiAgICBjb25zdCByZXQ6IE56U2FmZUFueSA9IHt9O1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgc2hlZXQ6IE56U2FmZUFueSA9IHdiLlNoZWV0c1tuYW1lXTtcbiAgICAgICAgcmV0W25hbWVdID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5a+85YWlRXhjZWzlubbovpPlh7pKU09O77yM5pSv5oyBIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5g44CBVVJMIOW9ouW8j1xuICAgKiBAcGFyYW0gckFCUyDliqDovb3mlbDmja7mlrnlvI8gYHJlYWRBc0JpbmFyeVN0cmluZ2Ag77yI6buY6K6k77yJIOaIliBgcmVhZEFzQXJyYXlCdWZmZXJg77yMW+abtOWkmue7huiKgl0oaHR0cDovL3QuY24vUjNuNjNBMClcbiAgICovXG4gIGltcG9ydChcbiAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsXG4gICAgckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInID0gJ3JlYWRBc0JpbmFyeVN0cmluZycsXG4gICk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKHRoaXMucmVhZChuZXcgVWludDhBcnJheShyZXMpLCB7IHR5cGU6ICdhcnJheScgfSkpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gcmVzb2x2ZSh0aGlzLnJlYWQoZS50YXJnZXQucmVzdWx0LCB7IHR5cGU6ICdiaW5hcnknIH0pKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXJbckFCU10oZmlsZU9yVXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgeGxzeC5qc2ApKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgKG9wdGlvbnMuc2hlZXRzIGFzIFhsc3hFeHBvcnRTaGVldFtdKS5mb3JFYWNoKCh2YWx1ZTogWGxzeEV4cG9ydFNoZWV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgIGNvbnN0IHdib3V0OiBBcnJheUJ1ZmZlciA9IFhMU1gud3JpdGUod2IsIHtcbiAgICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgLi4ub3B0aW9ucy5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lIHx8ICdleHBvcnQueGxzeCc7XG4gICAgICAgIHNhdmVBcyhuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLCBmaWxlbmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja7ovaznrKblj7flkI1cbiAgICogLSBgMWAgPT4gYEFgXG4gICAqIC0gYDI3YCA9PiBgQUFgXG4gICAqIC0gYDcwM2AgPT4gYEFBQWBcbiAgICovXG4gIG51bWJlclRvU2NoZW1hKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydENvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBsZXQgcmVzID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAtLXZhbDtcbiAgICAgIHJlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb2RlICsgKHZhbCAlIDI2KSkgKyByZXM7XG4gICAgICB2YWwgPSAodmFsIC8gMjYpID4+IDA7XG4gICAgfSB3aGlsZSAodmFsID4gMCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=