/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                (/** @type {?} */ (options.sheets)).forEach(function (value, index) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFNekMscUJBQ1UsS0FDQSxNQUNBO1FBRkEsUUFBRyxHQUFILEdBQUc7UUFDSCxTQUFJLEdBQUosSUFBSTtRQUNKLFNBQUksR0FBSixJQUFJO0tBQ1Y7Ozs7SUFFSSwwQkFBSTs7OztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd6RCwwQkFBSTs7OztjQUFDLEVBQU87O1FBQ2xCLElBQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O1lBQ3hCLElBQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDOztJQUdiOzs7T0FHRzs7Ozs7OztJ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QUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FDbEMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOztnQkEvRkYsVUFBVTs7OztnQkFKRixVQUFVO2dCQUxWLFVBQVU7Z0JBRVYsV0FBVzs7c0JBSHBCOztTQVdhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBMYXp5U2VydmljZSwgTGF6eVJlc3VsdCB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xyXG5pbXBvcnQgeyBYbHN4Q29uZmlnIH0gZnJvbSAnLi94bHN4LmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvZzogWGxzeENvbmZpZyxcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcclxuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkKHdiOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfSB7XHJcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xyXG4gICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBzaGVldDogYW55ID0gd2IuU2hlZXRzW25hbWVdO1xyXG4gICAgICByZXRbbmFtZV0gPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5a+85YWlRXhjZWzlubbovpPlh7pKU09O77yM5pSv5oyBIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5g44CBVVJMIOW9ouW8j1xyXG4gICAqIEBwYXJhbSByQUJTIOWKoOi9veaVsOaNruaWueW8jyBgcmVhZEFzQmluYXJ5U3RyaW5nYCDvvIjpu5jorqTvvIkg5oiWIGByZWFkQXNBcnJheUJ1ZmZlcmDvvIxb5pu05aSa57uG6IqCXShodHRwOi8vdC5jbi9SM242M0EwKVxyXG4gICAqL1xyXG4gIGltcG9ydChcclxuICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcclxuICAgIHJBQlM6ICdyZWFkQXNCaW5hcnlTdHJpbmcnIHwgJ3JlYWRBc0FycmF5QnVmZmVyJyA9ICdyZWFkQXNCaW5hcnlTdHJpbmcnLFxyXG4gICk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmVyLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gZnJvbSB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChuZXcgVWludDhBcnJheShyZXMpLCB7IHR5cGU6ICdhcnJheScgfSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZnJvbSBmaWxlXHJcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gucmVhZChlLnRhcmdldC5yZXN1bHQsIHsgdHlwZTogJ2JpbmFyeScgfSk7XHJcbiAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlcltyQUJTXShmaWxlT3JVcmwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOWvvOWHuiAqL1xyXG4gIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCB3YjogYW55ID0gWExTWC51dGlscy5ib29rX25ldygpO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnNoZWV0cykpIHtcclxuICAgICAgICAoPFhsc3hFeHBvcnRTaGVldFtdPm9wdGlvbnMuc2hlZXRzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd3M6IGFueSA9IFhMU1gudXRpbHMuYW9hX3RvX3NoZWV0KHZhbHVlLmRhdGEpO1xyXG4gICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KFxyXG4gICAgICAgICAgICAgIHdiLFxyXG4gICAgICAgICAgICAgIHdzLFxyXG4gICAgICAgICAgICAgIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xyXG4gICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayh3Yik7XHJcblxyXG4gICAgICBjb25zdCB3Ym91dDogQXJyYXlCdWZmZXIgPSBYTFNYLndyaXRlKFxyXG4gICAgICAgIHdiLFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXHJcbiAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9wdGlvbnMub3B0cyxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICBzYXZlQXMoXHJcbiAgICAgICAgbmV3IEJsb2IoW3dib3V0XSwgeyB0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB9KSxcclxuICAgICAgICBvcHRpb25zLmZpbGVuYW1lIHx8ICdleHBvcnQueGxzeCcsXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19