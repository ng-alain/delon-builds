/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQStCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBTXBDO0lBR0UscUJBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QixFQUFVLE1BQWM7UUFBbEcsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFBeUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwSCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxnREFBZ0Q7WUFDckQsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sMEJBQUk7Ozs7SUFBWjtRQUNFLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQzs7Ozs7OztJQUVPLDBCQUFJOzs7Ozs7SUFBWixVQUFhLElBQWUsRUFB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R0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4RCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUVsQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXpHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQVR6QixVQUFVO2dCQUV1QyxXQUFXO2dCQUE1RCxrQkFBa0I7Z0JBRE4sTUFBTTs7O3NCQUQzQjtDQW1IQyxBQTFHRCxJQTBHQztTQXpHWSxXQUFXOzs7Ozs7SUFDdEIsMEJBQTZCOzs7OztJQUNqQiwyQkFBd0I7Ozs7O0lBQUUsMkJBQXlCOzs7OztJQUFpQyw2QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluWGxzeENvbmZpZywgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucywgWGxzeEV4cG9ydFNoZWV0IH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuZGVjbGFyZSB2YXIgWExTWDogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluWGxzeENvbmZpZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd4bHN4Jywge1xuICAgICAgdXJsOiAnLy9jZG4uYm9vdGNzcy5jb20veGxzeC8wLjE1LjYveGxzeC5mdWxsLm1pbi5qcycsXG4gICAgICBtb2R1bGVzOiBbXSxcbiAgICB9KSE7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdHlwZW9mIFhMU1ggIT09ICd1bmRlZmluZWQnID8gUHJvbWlzZS5yZXNvbHZlKFtdKSA6IHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZChkYXRhOiBOelNhZmVBbnksIG9wdGlvbnM6IHsgdHlwZTogJ2FycmF5JyB8ICdiaW5hcnknIH0pOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBOelNhZmVBbnkgPSB7fTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChkYXRhLCBvcHRpb25zKTtcbiAgICAgIHdiLlNoZWV0TmFtZXMuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoZWV0OiBOelNhZmVBbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICogQHBhcmFtIHJBQlMg5Yqg6L295pWw5o2u5pa55byPIGByZWFkQXNCaW5hcnlTdHJpbmdgIO+8iOm7mOiupO+8iSDmiJYgYHJlYWRBc0FycmF5QnVmZmVyYO+8jFvmm7TlpJrnu4boioJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXG4gICAqL1xuICBpbXBvcnQoXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxuICAgIHJBQlM6ICdyZWFkQXNCaW5hcnlTdHJpbmcnIHwgJ3JlYWRBc0FycmF5QnVmZmVyJyA9ICdyZWFkQXNCaW5hcnlTdHJpbmcnLFxuICApOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gcmVzb2x2ZSh0aGlzLnJlYWQobmV3IFVpbnQ4QXJyYXkocmVzKSwgeyB0eXBlOiAnYXJyYXknIH0pKSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KSkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyW3JBQlNdKGZpbGVPclVybCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkIHhsc3guanNgKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5a+85Ye6ICovXG4gIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgKG9wdGlvbnMuc2hlZXRzIGFzIFhsc3hFeHBvcnRTaGVldFtdKS5mb3JFYWNoKCh2YWx1ZTogWGxzeEV4cG9ydFNoZWV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgIGNvbnN0IHdib3V0OiBBcnJheUJ1ZmZlciA9IFhMU1gud3JpdGUod2IsIHtcbiAgICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgLi4ub3B0aW9ucy5vcHRzLFxuICAgICAgICB9KTtcbiAgICAgICAgc2F2ZUFzKG5ldyBCbG9iKFt3Ym91dF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSksIG9wdGlvbnMuZmlsZW5hbWUgfHwgJ2V4cG9ydC54bHN4Jyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja7ovaznrKblj7flkI1cbiAgICogLSBgMWAgPT4gYEFgXG4gICAqIC0gYDI3YCA9PiBgQUFgXG4gICAqIC0gYDcwM2AgPT4gYEFBQWBcbiAgICovXG4gIG51bWJlclRvU2NoZW1hKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydENvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBsZXQgcmVzID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAtLXZhbDtcbiAgICAgIHJlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb2RlICsgKHZhbCAlIDI2KSkgKyByZXM7XG4gICAgICB2YWwgPSAodmFsIC8gMjYpID4+IDA7XG4gICAgfSB3aGlsZSAodmFsID4gMCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=