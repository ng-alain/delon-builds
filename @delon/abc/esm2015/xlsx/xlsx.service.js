/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import { XlsxConfig } from './xlsx.config';
import * as i0 from "@angular/core";
import * as i1 from "./xlsx.config";
import * as i2 from "@angular/common/http";
import * as i3 from "@delon/util";
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
     * @private
     * @return {?}
     */
    init() {
        return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.modules))));
    }
    /**
     * @private
     * @param {?} wb
     * @return {?}
     */
    read(wb) {
        /** @type {?} */
        const ret = {};
        wb.SheetNames.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            /** @type {?} */
            const sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        }));
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param {?} fileOrUrl
     * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     * @return {?}
     */
    import(fileOrUrl, rABS = 'readAsBinaryString') {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.init()
                .then((/**
             * @return {?}
             */
            () => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    (res) => {
                        /** @type {?} */
                        const wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                        resolve(this.read(wb));
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        reject(err);
                    }));
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    /** @type {?} */
                    const wb = XLSX.read(e.target.result, { type: 'binary' });
                    resolve(this.read(wb));
                });
                reader[rABS](fileOrUrl);
            }))
                .catch((/**
             * @return {?}
             */
            () => reject(`Unable to load xlsx.js`)));
        }));
    }
    /**
     * 导出
     * @param {?} options
     * @return {?}
     */
    export(options) {
        return this.init().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const wb = XLSX.utils.book_new();
            if (Array.isArray(options.sheets)) {
                ((/** @type {?} */ (options.sheets))).forEach((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                (value, index) => {
                    /** @type {?} */
                    const ws = XLSX.utils.aoa_to_sheet(value.data);
                    XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                }));
            }
            else {
                wb.SheetNames = Object.keys(options.sheets);
                wb.Sheets = options.sheets;
            }
            if (options.callback)
                options.callback(wb);
            /** @type {?} */
            const wbout = XLSX.write(wb, Object.assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        }));
    }
}
XlsxService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
XlsxService.ctorParameters = () => [
    { type: XlsxConfig },
    { type: HttpClient },
    { type: LazyService }
];
/** @nocollapse */ XlsxService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.XlsxConfig), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.LazyService)); }, token: XlsxService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNM0MsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUN0QixZQUFvQixHQUFlLEVBQVUsSUFBZ0IsRUFBVSxJQUFpQjtRQUFwRSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUVwRixJQUFJO1FBQ1YsT0FBTyxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsRUFBTzs7Y0FDWixHQUFHLEdBQVEsRUFBRTtRQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTs7a0JBQ3JCLEtBQUssR0FBUSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZ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RCxJQUFJLE9BQU8sQ0FBQyxRQUFRO2dCQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O2tCQUVyQyxLQUFLLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFDdEMsUUFBUSxFQUFFLE1BQU0sRUFDaEIsT0FBTyxFQUFFLEtBQUssRUFDZCxJQUFJLEVBQUUsT0FBTyxJQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQ2Y7WUFDRixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQztRQUNyRyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTdFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTHpCLFVBQVU7WUFMVixVQUFVO1lBRUUsV0FBVzs7Ozs7Ozs7SUFVbEIsMEJBQXVCOzs7OztJQUFFLDJCQUF3Qjs7Ozs7SUFBRSwyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuaW1wb3J0IHsgWGxzeENvbmZpZyB9IGZyb20gJy4veGxzeC5jb25maWcnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nOiBYbHN4Q29uZmlnLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHR5cGVvZiBYTFNYICE9PSAndW5kZWZpbmVkJyA/IFByb21pc2UucmVzb2x2ZShbXSkgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWQod2I6IGFueSk6IHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9IHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIHdiLlNoZWV0TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNoZWV0OiBhbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICByZXRbbmFtZV0gPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5a+85YWlRXhjZWzlubbovpPlh7pKU09O77yM5pSv5oyBIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5g44CBVVJMIOW9ouW8j1xuICAgKiBAcGFyYW0gckFCUyDliqDovb3mlbDmja7mlrnlvI8gYHJlYWRBc0JpbmFyeVN0cmluZ2Ag77yI6buY6K6k77yJIOaIliBgcmVhZEFzQXJyYXlCdWZmZXJg77yMW+abtOWkmue7huiKgl0oaHR0cDovL3QuY24vUjNuNjNBMClcbiAgICovXG4gIGltcG9ydChcbiAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsXG4gICAgckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInID0gJ3JlYWRBc0JpbmFyeVN0cmluZycsXG4gICk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVhZCh3YikpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdiOiBhbnkgPSBYTFNYLnJlYWQoZS50YXJnZXQucmVzdWx0LCB7IHR5cGU6ICdiaW5hcnknIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlcltyQUJTXShmaWxlT3JVcmwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCB4bHN4LmpzYCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOWvvOWHuiAqL1xuICBleHBvcnQob3B0aW9uczogWGxzeEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCB3YjogYW55ID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgIChvcHRpb25zLnNoZWV0cyBhcyBYbHN4RXhwb3J0U2hlZXRbXSkuZm9yRWFjaCgodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHdzOiBhbnkgPSBYTFNYLnV0aWxzLmFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICBjb25zdCB3Ym91dDogQXJyYXlCdWZmZXIgPSBYTFNYLndyaXRlKHdiLCB7XG4gICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXG4gICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAuLi5vcHRpb25zLm9wdHMsXG4gICAgICB9KTtcbiAgICAgIHNhdmVBcyhuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLCBvcHRpb25zLmZpbGVuYW1lIHx8ICdleHBvcnQueGxzeCcpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=