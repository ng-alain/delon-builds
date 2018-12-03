/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService } from '@delon/util';
import { XlsxConfig } from './xlsx.config';
export class XlsxService {
    /**
     * @param {?} cog
     * @param {?} http
     * @param {?} lazy
     */
    constructor(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @return {?}
     */
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    /**
     * @param {?} wb
     * @return {?}
     */
    read(wb) {
        /** @type {?} */
        const ret = {};
        wb.SheetNames.forEach(name => {
            /** @type {?} */
            const sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param {?} fileOrUrl
     * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     * @return {?}
     */
    import(fileOrUrl, rABS = 'readAsBinaryString') {
        return new Promise((resolver, reject) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http
                        .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                        .subscribe((res) => {
                        /** @type {?} */
                        const wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                        resolver(this.read(wb));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (e) => {
                    /** @type {?} */
                    const wb = XLSX.read(e.target.result, { type: 'binary' });
                    resolver(this.read(wb));
                };
                reader[rABS](fileOrUrl);
            });
        });
    }
    /**
     * 导出
     * @param {?} options
     * @return {?}
     */
    export(options) {
        return this.init().then(() => {
            /** @type {?} */
            const wb = XLSX.utils.book_new();
            if (Array.isArray(options.sheets)) {
                ((/** @type {?} */ (options.sheets))).forEach((value, index) => {
                    /** @type {?} */
                    const ws = XLSX.utils.aoa_to_sheet(value.data);
                    XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                });
            }
            else {
                wb.SheetNames = Object.keys(options.sheets);
                wb.Sheets = options.sheets;
            }
            if (options.callback)
                options.callback(wb);
            /** @type {?} */
            const wbout = XLSX.write(wb, Object.assign({
                bookType: 'xlsx',
                bookSST: false,
                type: 'array',
            }, options.opts));
            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        });
    }
}
XlsxService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
XlsxService.ctorParameters = () => [
    { type: XlsxConfig },
    { type: HttpClient },
    { type: LazyService }
];
if (false) {
    /** @type {?} */
    XlsxService.prototype.cog;
    /** @type {?} */
    XlsxService.prototype.http;
    /** @type {?} */
    XlsxService.prototype.lazy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBQ3RCLFlBQ1UsR0FBZSxFQUNmLElBQWdCLEVBQ2hCLElBQWlCO1FBRmpCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQWE7SUFDeEIsQ0FBQzs7OztJQUVJLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRU8sSUFBSSxDQUFDLEVBQU87O2NBQ1osR0FBRyxHQUFRLEVBQUU7UUFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNyQixLQUFLLEdBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdE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YUFDZCxFQUNELE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FDRjtZQUNELE1BQU0sQ0FDSixJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLENBQUMsRUFDdkQsT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQ2xDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQS9GRixVQUFVOzs7O1lBSkYsVUFBVTtZQUxWLFVBQVU7WUFFVixXQUFXOzs7O0lBVWhCLDBCQUF1Qjs7SUFDdkIsMkJBQXdCOztJQUN4QiwyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBMYXp5U2VydmljZSwgTGF6eVJlc3VsdCB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5pbXBvcnQgeyBYbHN4Q29uZmlnIH0gZnJvbSAnLi94bHN4LmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb2c6IFhsc3hDb25maWcsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICkge31cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybF0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZCh3YjogYW55KTogeyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0ge1xuICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgc2hlZXQ6IGFueSA9IHdiLlNoZWV0c1tuYW1lXTtcbiAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqIEBwYXJhbSByQUJTIOWKoOi9veaVsOaNruaWueW8jyBgcmVhZEFzQmluYXJ5U3RyaW5nYCDvvIjpu5jorqTvvIkg5oiWIGByZWFkQXNBcnJheUJ1ZmZlcmDvvIxb5pu05aSa57uG6IqCXShodHRwOi8vdC5jbi9SM242M0EwKVxuICAgKi9cbiAgaW1wb3J0KFxuICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcbiAgICByQUJTOiAncmVhZEFzQmluYXJ5U3RyaW5nJyB8ICdyZWFkQXNBcnJheUJ1ZmZlcicgPSAncmVhZEFzQmluYXJ5U3RyaW5nJyxcbiAgKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmVyLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KTtcbiAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyW3JBQlNdKGZpbGVPclVybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDlr7zlh7ogKi9cbiAgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAoPFhsc3hFeHBvcnRTaGVldFtdPm9wdGlvbnMuc2hlZXRzKS5mb3JFYWNoKFxuICAgICAgICAgICh2YWx1ZTogWGxzeEV4cG9ydFNoZWV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KFxuICAgICAgICAgICAgICB3YixcbiAgICAgICAgICAgICAgd3MsXG4gICAgICAgICAgICAgIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdiLlNoZWV0TmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLnNoZWV0cyk7XG4gICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayh3Yik7XG5cbiAgICAgIGNvbnN0IHdib3V0OiBBcnJheUJ1ZmZlciA9IFhMU1gud3JpdGUoXG4gICAgICAgIHdiLFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXG4gICAgICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLm9wdHMsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgc2F2ZUFzKFxuICAgICAgICBuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLFxuICAgICAgICBvcHRpb25zLmZpbGVuYW1lIHx8ICdleHBvcnQueGxzeCcsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=