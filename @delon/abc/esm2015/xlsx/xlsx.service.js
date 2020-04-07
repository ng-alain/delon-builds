/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTTNDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBb0IsR0FBZSxFQUFVLElBQWdCLEVBQVUsSUFBaUI7UUFBcEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUcsQ0FBQzs7Ozs7SUFFcEYsSUFBSTtRQUNWLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQzs7Ozs7O0lBRU8sSUFBSSxDQUFDLEVBQU87O2NBQ1osR0FBRyxHQUFRLEVBQUU7UUFDbkIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNyQixLQUFLLEdBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7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RUQsSUFBSSxPQUFPLENBQUMsUUFBUTtnQkFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztrQkFFckMsS0FBSyxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQ3RDLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsSUFBSSxFQUFFLE9BQU8sSUFDVixPQUFPLENBQUMsSUFBSSxFQUNmO1lBQ0YsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLENBQUM7UUFDckcsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3RUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUx6QixVQUFVO1lBTFYsVUFBVTtZQUVFLFdBQVc7Ozs7Ozs7O0lBVWxCLDBCQUF1Qjs7Ozs7SUFBRSwyQkFBd0I7Ozs7O0lBQUUsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IFhsc3hDb25maWcgfSBmcm9tICcuL3hsc3guY29uZmlnJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZzogWGxzeENvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0eXBlb2YgWExTWCAhPT0gJ3VuZGVmaW5lZCcgPyBQcm9taXNlLnJlc29sdmUoW10pIDogdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy5tb2R1bGVzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkKHdiOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaGVldDogYW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgcmV0W25hbWVdID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICogQHBhcmFtIHJBQlMg5Yqg6L295pWw5o2u5pa55byPIGByZWFkQXNCaW5hcnlTdHJpbmdgIO+8iOm7mOiupO+8iSDmiJYgYHJlYWRBc0FycmF5QnVmZmVyYO+8jFvmm7TlpJrnu4boioJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXG4gICAqL1xuICBpbXBvcnQoXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxuICAgIHJBQlM6ICdyZWFkQXNCaW5hcnlTdHJpbmcnIHwgJ3JlYWRBc0FycmF5QnVmZmVyJyA9ICdyZWFkQXNCaW5hcnlTdHJpbmcnLFxuICApOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChuZXcgVWludDhBcnJheShyZXMpLCB7IHR5cGU6ICdhcnJheScgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KTtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZWFkKHdiKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXJbckFCU10oZmlsZU9yVXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgeGxzeC5qc2ApKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDlr7zlh7ogKi9cbiAgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2IuU2hlZXROYW1lcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuc2hlZXRzKTtcbiAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcblxuICAgICAgY29uc3Qgd2JvdXQ6IEFycmF5QnVmZmVyID0gWExTWC53cml0ZSh3Yiwge1xuICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgLi4ub3B0aW9ucy5vcHRzLFxuICAgICAgfSk7XG4gICAgICBzYXZlQXMobmV3IEJsb2IoW3dib3V0XSwgeyB0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB9KSwgb3B0aW9ucy5maWxlbmFtZSB8fCAnZXhwb3J0Lnhsc3gnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19