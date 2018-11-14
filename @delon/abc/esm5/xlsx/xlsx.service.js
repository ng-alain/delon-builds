/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService } from '@delon/util';
import { XlsxConfig } from './xlsx.config';
var XlsxService = /** @class */ (function () {
    function XlsxService(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
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
        if (rABS === void 0) { rABS = 'readAsBinaryString'; }
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
                // from file
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
                ((/** @type {?} */ (options.sheets))).forEach(function (value, index) {
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
            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        });
    };
    XlsxService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    XlsxService.ctorParameters = function () { return [
        { type: XlsxConfig },
        { type: HttpClient },
        { type: LazyService }
    ]; };
    return XlsxService;
}());
export { XlsxService };
if (false) {
    /** @type {?} */
    XlsxService.prototype.cog;
    /** @type {?} */
    XlsxService.prototype.http;
    /** @type {?} */
    XlsxService.prototype.lazy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQUVFLHFCQUNVLEdBQWUsRUFDZixJQUFnQixFQUNoQixJQUFpQjtRQUZqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ3hCLENBQUM7Ozs7SUFFSSwwQkFBSTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRU8sMEJBQUk7Ozs7SUFBWixVQUFhLEVBQU87O1lBQ1osR0FBRyxHQUFRLEVBQUU7UUFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztnQkFDbEIsS0FBSyxHQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDLENB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Q0QsT0FBTyxDQUFDLElBQUksQ0FDYixDQUNGO1lBQ0QsTUFBTSxDQUNKLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FDbEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBL0ZGLFVBQVU7Ozs7Z0JBSkYsVUFBVTtnQkFMVixVQUFVO2dCQUVWLFdBQVc7O0lBdUdwQixrQkFBQztDQUFBLEFBaEdELElBZ0dDO1NBL0ZZLFdBQVc7OztJQUVwQiwwQkFBdUI7O0lBQ3ZCLDJCQUF3Qjs7SUFDeEIsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UsIExhenlSZXN1bHQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuaW1wb3J0IHsgWGxzeENvbmZpZyB9IGZyb20gJy4veGxzeC5jb25maWcnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29nOiBYbHN4Q29uZmlnLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmxdLmNvbmNhdCh0aGlzLmNvZy5tb2R1bGVzKSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWQod2I6IGFueSk6IHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9IHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIHdiLlNoZWV0TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNoZWV0OiBhbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICByZXRbbmFtZV0gPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5a+85YWlRXhjZWzlubbovpPlh7pKU09O77yM5pSv5oyBIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5g44CBVVJMIOW9ouW8j1xuICAgKiBAcGFyYW0gckFCUyDliqDovb3mlbDmja7mlrnlvI8gYHJlYWRBc0JpbmFyeVN0cmluZ2Ag77yI6buY6K6k77yJIOaIliBgcmVhZEFzQXJyYXlCdWZmZXJg77yMW+abtOWkmue7huiKgl0oaHR0cDovL3QuY24vUjNuNjNBMClcbiAgICovXG4gIGltcG9ydChcbiAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsXG4gICAgckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInID0gJ3JlYWRBc0JpbmFyeVN0cmluZycsXG4gICk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+KChyZXNvbHZlciwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChuZXcgVWludDhBcnJheShyZXMpLCB7IHR5cGU6ICdhcnJheScgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIodGhpcy5yZWFkKHdiKSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gucmVhZChlLnRhcmdldC5yZXN1bHQsIHsgdHlwZTogJ2JpbmFyeScgfSk7XG4gICAgICAgICAgcmVzb2x2ZXIodGhpcy5yZWFkKHdiKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlcltyQUJTXShmaWxlT3JVcmwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5a+85Ye6ICovXG4gIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHdiOiBhbnkgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnNoZWV0cykpIHtcbiAgICAgICAgKDxYbHN4RXhwb3J0U2hlZXRbXT5vcHRpb25zLnNoZWV0cykuZm9yRWFjaChcbiAgICAgICAgICAodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3M6IGFueSA9IFhMU1gudXRpbHMuYW9hX3RvX3NoZWV0KHZhbHVlLmRhdGEpO1xuICAgICAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldChcbiAgICAgICAgICAgICAgd2IsXG4gICAgICAgICAgICAgIHdzLFxuICAgICAgICAgICAgICB2YWx1ZS5uYW1lIHx8IGBTaGVldCR7aW5kZXggKyAxfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICBjb25zdCB3Ym91dDogQXJyYXlCdWZmZXIgPSBYTFNYLndyaXRlKFxuICAgICAgICB3YixcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICAgICAgYm9va1NTVDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9ucy5vcHRzLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICAgIHNhdmVBcyhcbiAgICAgICAgbmV3IEJsb2IoW3dib3V0XSwgeyB0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB9KSxcbiAgICAgICAgb3B0aW9ucy5maWxlbmFtZSB8fCAnZXhwb3J0Lnhsc3gnLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19