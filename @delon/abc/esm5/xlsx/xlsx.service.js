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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFNekMscUJBQ1UsS0FDQSxNQUNBO1FBRkEsUUFBRyxHQUFILEdBQUc7UUFDSCxTQUFJLEdBQUosSUFBSTtRQUNKLFNBQUksR0FBSixJQUFJO0tBQ1Y7Ozs7SUFFSSwwQkFBSTs7OztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd6RCwwQkFBSTs7OztjQUFDLEVBQU87O1FBQ2xCLElBQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O1lBQ3hCLElBQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDOztJQUdiOzs7T0FHRzs7Ozs7OztJQUNILDRCQUFNOzs7Ozs7SUFBTixVQUNFLFNBQXdCLEVBQ3hCLElBQXVFO1FBRnpFLGlCQThCQztRQTVCQyxxQkFBQSxFQUFBLDJCQUF1RTtRQUV2RSxPQUFPLElBQUksT0FBTyxDQUE2QixVQUFDLFFBQVEsRUFBRSxNQUFNO1lBQzlELEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7O2dCQUVmLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO29CQUNqQyxLQUFJLENBQUMsSUFBSTt5QkFDTixPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQzt5QkFDMUQsU0FBUyxDQUNSLFVBQUMsR0FBZ0I7O3dCQUNmLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFDN0QsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDekIsRUFDRCxVQUFDLEdBQVE7d0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNiLENBQ0YsQ0FBQztvQkFDSixPQUFPO2lCQUNSOztnQkFFRCxJQUFNLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUM1QyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQUMsQ0FBTTs7b0JBQ3JCLElBQU0sRUFBRSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDL0QsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDekIsQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7SUFFRCxTQUFTOzs7Ozs7SUFDVCw0QkFBTTs7Ozs7SUFBTixVQUFPLE9BQTBCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQzs7WUFDdEIsSUFBTSxFQUFFLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNqQyxtQkFBb0IsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLE9BQU8sQ0FDekMsVUFBQyxLQUFzQixFQUFFLEtBQWE7O29CQUNwQyxJQUFNLEVBQUUsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQzFCLEVBQUUsRUFDRixFQUFFLEVBQ0YsS0FBSyxDQUFDLElBQUksSUFBSSxXQUFRLEtBQUssR0FBRyxDQUFDLENBQUUsQ0FDbEMsQ0FBQztpQkFDSCxDQUNGLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxFQUFFLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDNUI7WUFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFRO2dCQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRTNDLElBQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUNuQyxFQUFFLEVBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FDWDtnQkFDRSxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsSUFBSSxFQUFFLE9BQU87YUFDZCxFQUNELE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FDRixDQUFDO1lBQ0YsTUFBTSxDQUNKLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FDbEMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOztnQkEvRkYsVUFBVTs7OztnQkFKRixVQUFVO2dCQUxWLFVBQVU7Z0JBRVYsV0FBVzs7c0JBSHBCOztTQVdhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBMYXp5U2VydmljZSwgTGF6eVJlc3VsdCB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5pbXBvcnQgeyBYbHN4Q29uZmlnIH0gZnJvbSAnLi94bHN4LmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb2c6IFhsc3hDb25maWcsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICkge31cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybF0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZCh3YjogYW55KTogeyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0ge1xuICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgc2hlZXQ6IGFueSA9IHdiLlNoZWV0c1tuYW1lXTtcbiAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqIEBwYXJhbSByQUJTIOWKoOi9veaVsOaNruaWueW8jyBgcmVhZEFzQmluYXJ5U3RyaW5nYCDvvIjpu5jorqTvvIkg5oiWIGByZWFkQXNBcnJheUJ1ZmZlcmDvvIxb5pu05aSa57uG6IqCXShodHRwOi8vdC5jbi9SM242M0EwKVxuICAgKi9cbiAgaW1wb3J0KFxuICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcbiAgICByQUJTOiAncmVhZEFzQmluYXJ5U3RyaW5nJyB8ICdyZWFkQXNBcnJheUJ1ZmZlcicgPSAncmVhZEFzQmluYXJ5U3RyaW5nJyxcbiAgKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmVyLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KTtcbiAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyW3JBQlNdKGZpbGVPclVybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDlr7zlh7ogKi9cbiAgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAoPFhsc3hFeHBvcnRTaGVldFtdPm9wdGlvbnMuc2hlZXRzKS5mb3JFYWNoKFxuICAgICAgICAgICh2YWx1ZTogWGxzeEV4cG9ydFNoZWV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KFxuICAgICAgICAgICAgICB3YixcbiAgICAgICAgICAgICAgd3MsXG4gICAgICAgICAgICAgIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdiLlNoZWV0TmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLnNoZWV0cyk7XG4gICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayh3Yik7XG5cbiAgICAgIGNvbnN0IHdib3V0OiBBcnJheUJ1ZmZlciA9IFhMU1gud3JpdGUoXG4gICAgICAgIHdiLFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXG4gICAgICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLm9wdHMsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgc2F2ZUFzKFxuICAgICAgICBuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLFxuICAgICAgICBvcHRpb25zLmZpbGVuYW1lIHx8ICdleHBvcnQueGxzeCcsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=