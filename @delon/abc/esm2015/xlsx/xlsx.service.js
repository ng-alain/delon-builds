/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util";
export class XlsxService {
    /**
     * @param {?} http
     * @param {?} lazy
     * @param {?} configSrv
     * @param {?} ngZone
     */
    constructor(http, lazy, configSrv, ngZone) {
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
    init() {
        return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.modules))));
    }
    /**
     * @private
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    read(data, options) {
        /** @type {?} */
        const ret = {};
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const wb = XLSX.read(data, options);
            wb.SheetNames.forEach((/**
             * @param {?} name
             * @return {?}
             */
            (name) => {
                /** @type {?} */
                const sheet = wb.Sheets[name];
                ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            }));
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
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => resolve(this.read(new Uint8Array(res), { type: 'array' }))));
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
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => resolve(this.read(e.target.result, { type: 'binary' }))));
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
     * @param {?} options
     * @return {?}
     */
    export(options) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    this.ngZone.runOutsideAngular((/**
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
                        /** @type {?} */
                        const filename = options.filename || 'export.xlsx';
                        saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
                        resolve({ filename, wb });
                    }));
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => reject(err)));
            }));
        });
    }
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     * @param {?} val
     * @return {?}
     */
    numberToSchema(val) {
        /** @type {?} */
        const startCode = 'A'.charCodeAt(0);
        /** @type {?} */
        let res = '';
        do {
            --val;
            res = String.fromCharCode(startCode + (val % 26)) + res;
            val = (val / 26) >> 0;
        } while (val > 0);
        return res;
    }
}
XlsxService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
XlsxService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService },
    { type: NgZone }
];
/** @nocollapse */ XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQStCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBT3BDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBRXRCLFlBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QixFQUFVLE1BQWM7UUFBbEcsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFBeUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwSCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxnREFBZ0Q7WUFDckQsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxJQUFlLEVBQUUsT0FBcUM7O2NBQzNELEdBQUcsR0FBYyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUMzQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztZQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7O3NCQUMvQixLQUFLLEdBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBTUQsTUFBTSxDQUNKLFNBQXdCLEVBQ3hCLE9BQW1ELG9CQUFvQjtRQUV2RSxPQUFPLElBQUksT0FBTzs7Ozs7UUFBNkIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLElBQUksRUFBRTtpQkFDUixJQUFJOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7b0JBQzVFLENBQUMsR0FBZ0IsRUFBRSxFQUFFO3dCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztvQkFDcEYsQ0FBQzs7OztvQkFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFO3dCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZCxDQUFDLEVBQ0YsQ0FBQztvQkFDRixPQUFPO2lCQUNSOzs7c0JBRUssTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO2dCQUMzQyxNQUFNLENBQUMsTUFBTTs7OztnQkFBRyxDQUFDLENBQU0sRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFDakYsQ0FBQyxDQUFBLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQztpQkFDRCxLQUFLOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBQyxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFSyxNQUFNLENBQUMsT0FBMEI7O1lBQ3JDLE9BQU8sSUFBSSxPQUFPOzs7OztZQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLElBQUksRUFBRTtxQkFDUixJQUFJOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNULElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7b0JBQUMsR0FBRyxFQUFFOzs4QkFDM0IsRUFBRSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO3dCQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUNqQyxDQUFDLG1CQUFBLE9BQU8sQ0FBQyxNQUFNLEVBQXFCLENBQUMsQ0FBQyxPQUFPOzs7Ozs0QkFBQyxDQUFDLEtBQXNCLEVBQUUsS0FBYSxFQUFFLEVBQUU7O3NDQUNoRixFQUFFLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQ0FDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDMUUsQ0FBQyxFQUFDLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsRUFBRSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDNUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3lCQUM1Qjt3QkFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFROzRCQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7OzhCQUVyQyxLQUFLLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFDdEMsUUFBUSxFQUFFLE1BQU0sRUFDaEIsT0FBTyxFQUFFLEtBQUssRUFDZCxJQUFJLEVBQUUsT0FBTyxJQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQ2Y7OzhCQUNJLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWE7d0JBQ2xELE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFFMUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzVCLENBQUMsRUFBQyxDQUFDO2dCQUNMLENBQUMsRUFBQztxQkFDRCxLQUFLOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Ozs7Ozs7OztJQVFELGNBQWMsQ0FBQyxHQUFXOztjQUNsQixTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBQy9CLEdBQUcsR0FBRyxFQUFFO1FBRVosR0FBRztZQUNELEVBQUUsR0FBRyxDQUFDO1lBQ04sR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3hELEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBL0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFUekIsVUFBVTtZQUV1QyxXQUFXO1lBQTVELGtCQUFrQjtZQUROLE1BQU07Ozs7Ozs7O0lBVXpCLDBCQUE2Qjs7Ozs7SUFDakIsMkJBQXdCOzs7OztJQUFFLDJCQUF5Qjs7Ozs7SUFBaUMsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblhsc3hDb25maWcsIExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRSZXN1bHQsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblhsc3hDb25maWc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgneGxzeCcsIHtcbiAgICAgIHVybDogJy8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xNS42L3hsc3guZnVsbC5taW4uanMnLFxuICAgICAgbW9kdWxlczogW10sXG4gICAgfSkhO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHR5cGVvZiBYTFNYICE9PSAndW5kZWZpbmVkJyA/IFByb21pc2UucmVzb2x2ZShbXSkgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWQoZGF0YTogTnpTYWZlQW55LCBvcHRpb25zOiB7IHR5cGU6ICdhcnJheScgfCAnYmluYXJ5JyB9KTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnlbXVtdIH0ge1xuICAgIGNvbnN0IHJldDogTnpTYWZlQW55ID0ge307XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3Qgd2IgPSBYTFNYLnJlYWQoZGF0YSwgb3B0aW9ucyk7XG4gICAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBzaGVldDogTnpTYWZlQW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgICByZXRbbmFtZV0gPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqIEBwYXJhbSByQUJTIOWKoOi9veaVsOaNruaWueW8jyBgcmVhZEFzQmluYXJ5U3RyaW5nYCDvvIjpu5jorqTvvIkg5oiWIGByZWFkQXNBcnJheUJ1ZmZlcmDvvIxb5pu05aSa57uG6IqCXShodHRwOi8vdC5jbi9SM242M0EwKVxuICAgKi9cbiAgaW1wb3J0KFxuICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcbiAgICByQUJTOiAncmVhZEFzQmluYXJ5U3RyaW5nJyB8ICdyZWFkQXNBcnJheUJ1ZmZlcicgPSAncmVhZEFzQmluYXJ5U3RyaW5nJyxcbiAgKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KSkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKHRoaXMucmVhZChlLnRhcmdldC5yZXN1bHQsIHsgdHlwZTogJ2JpbmFyeScgfSkpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlcltyQUJTXShmaWxlT3JVcmwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCB4bHN4LmpzYCkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgICAgIChvcHRpb25zLnNoZWV0cyBhcyBYbHN4RXhwb3J0U2hlZXRbXSkuZm9yRWFjaCgodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzOiBhbnkgPSBYTFNYLnV0aWxzLmFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgICAgICBjb25zdCB3Ym91dDogQXJyYXlCdWZmZXIgPSBYTFNYLndyaXRlKHdiLCB7XG4gICAgICAgICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXG4gICAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAuLi5vcHRpb25zLm9wdHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZSB8fCAnZXhwb3J0Lnhsc3gnO1xuICAgICAgICAgICAgc2F2ZUFzKG5ldyBCbG9iKFt3Ym91dF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSksIGZpbGVuYW1lKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSh7IGZpbGVuYW1lLCB3YiB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5pWw5o2u6L2s56ym5Y+35ZCNXG4gICAqIC0gYDFgID0+IGBBYFxuICAgKiAtIGAyN2AgPT4gYEFBYFxuICAgKiAtIGA3MDNgID0+IGBBQUFgXG4gICAqL1xuICBudW1iZXJUb1NjaGVtYSh2YWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnRDb2RlID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgbGV0IHJlcyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgLS12YWw7XG4gICAgICByZXMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Q29kZSArICh2YWwgJSAyNikpICsgcmVzO1xuICAgICAgdmFsID0gKHZhbCAvIDI2KSA+PiAwO1xuICAgIH0gd2hpbGUgKHZhbCA+IDApO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuIl19