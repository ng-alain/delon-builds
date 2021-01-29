/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { saveAs } from 'file-saver';
import isUtf8 from 'isutf8';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util/other";
import * as i3 from "@delon/util/config";
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
            url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
            modules: [`https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js`],
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
            if (options.type === 'binary') {
                /** @type {?} */
                const buf = new Uint8Array(data);
                if (!isUtf8(buf)) {
                    try {
                        data = cptable.utils.decode(936, buf);
                        options.type = 'string';
                    }
                    catch (_a) {
                        options.type = 'array';
                    }
                }
            }
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
     * @param {?} fileOrUrl
     * @param {?=} _rABS
     * @return {?}
     */
    import(fileOrUrl, _rABS = 'readAsBinaryString') {
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
                reader.readAsArrayBuffer(fileOrUrl);
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
/** @nocollapse */ XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7OztBQVE1QixNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUN0QixZQUFvQixJQUFnQixFQUFVLElBQWlCLEVBQUUsU0FBNkIsRUFBVSxNQUFjO1FBQWxHLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQXlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEgsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxHQUFHLEVBQUUsZ0VBQWdFO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLDhEQUE4RCxDQUFDO1NBQzFFLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFHTyxJQUFJO1FBQ1YsT0FBTyxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FB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Ozs7SUFBRSwyQkFBeUI7Ozs7O0lBQWlDLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5YbHN4Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgaXNVdGY4IGZyb20gJ2lzdXRmOCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRSZXN1bHQsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcbmRlY2xhcmUgdmFyIGNwdGFibGU6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgneGxzeCcsIHtcbiAgICAgIHVybDogJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy94bHN4LzAuMTYuOC94bHN4LmZ1bGwubWluLmpzJyxcbiAgICAgIG1vZHVsZXM6IFtgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3hsc3gvMC4xNi44L2NwZXhjZWwubWluLmpzYF0sXG4gICAgfSkhO1xuICB9XG4gIHByaXZhdGUgY29nOiBBbGFpblhsc3hDb25maWc7XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHR5cGVvZiBYTFNYICE9PSAndW5kZWZpbmVkJyA/IFByb21pc2UucmVzb2x2ZShbXSkgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWQoZGF0YTogTnpTYWZlQW55LCBvcHRpb25zOiB7IHR5cGU6ICdhcnJheScgfCAnYmluYXJ5JyB8ICdzdHJpbmcnIH0pOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBOelNhZmVBbnkgPSB7fTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy50eXBlID09PSAnYmluYXJ5Jykge1xuICAgICAgICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgaWYgKCFpc1V0ZjgoYnVmKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gY3B0YWJsZS51dGlscy5kZWNvZGUoOTM2LCBidWYpO1xuICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ3N0cmluZyc7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnYXJyYXknO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgd2IgPSBYTFNYLnJlYWQoZGF0YSwgb3B0aW9ucyk7XG4gICAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBzaGVldDogTnpTYWZlQW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgICByZXRbbmFtZV0gPSBYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqL1xuICBpbXBvcnQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIOaXoOmhu+aMh+WumiBgckFCU2Ag5Y+C5pWw77yM5LuOMTIueOWQjuWwhuenu+mZpFxuICAgKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqIEBwYXJhbSByQUJTIOWKoOi9veaVsOaNruaWueW8jyBgcmVhZEFzQmluYXJ5U3RyaW5nYCDmiJYgYHJlYWRBc0FycmF5QnVmZmVyYCDvvIjpu5jorqTvvInvvIxb5pu05aSa57uG6IqCXShodHRwOi8vdC5jbi9SM242M0EwKVxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgaW1wb3J0KGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT47XG5cbiAgaW1wb3J0KFxuICAgIGZpbGVPclVybDogRmlsZSB8IHN0cmluZyxcbiAgICBfckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInID0gJ3JlYWRBc0JpbmFyeVN0cmluZycsXG4gICk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnlbXVtdIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKHRoaXMucmVhZChuZXcgVWludDhBcnJheShyZXMpLCB7IHR5cGU6ICdhcnJheScgfSkpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gcmVzb2x2ZSh0aGlzLnJlYWQoZS50YXJnZXQucmVzdWx0LCB7IHR5cGU6ICdiaW5hcnknIH0pKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZU9yVXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgeGxzeC5qc2ApKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2IuU2hlZXROYW1lcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuc2hlZXRzKTtcbiAgICAgICAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcblxuICAgICAgICAgICAgY29uc3Qgd2JvdXQ6IEFycmF5QnVmZmVyID0gWExTWC53cml0ZSh3Yiwge1xuICAgICAgICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgLi4ub3B0aW9ucy5vcHRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUgfHwgJ2V4cG9ydC54bHN4JztcbiAgICAgICAgICAgIHNhdmVBcyhuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoeyBmaWxlbmFtZSwgd2IgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOaNrui9rOespuWPt+WQjVxuICAgKiAtIGAxYCA9PiBgQWBcbiAgICogLSBgMjdgID0+IGBBQWBcbiAgICogLSBgNzAzYCA9PiBgQUFBYFxuICAgKi9cbiAgbnVtYmVyVG9TY2hlbWEodmFsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0Q29kZSA9ICdBJy5jaGFyQ29kZUF0KDApO1xuICAgIGxldCByZXMgPSAnJztcblxuICAgIGRvIHtcbiAgICAgIC0tdmFsO1xuICAgICAgcmVzID0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydENvZGUgKyAodmFsICUgMjYpKSArIHJlcztcbiAgICAgIHZhbCA9ICh2YWwgLyAyNikgPj4gMDtcbiAgICB9IHdoaWxlICh2YWwgPiAwKTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==