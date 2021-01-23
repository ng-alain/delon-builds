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
import isUtf8 from 'isutf8';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQStCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7OztBQVE1QixNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUN0QixZQUFvQixJQUFnQixFQUFVLElBQWlCLEVBQUUsU0FBNkIsRUFBVSxNQUFjO1FBQWxHLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQXlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEgsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxHQUFHLEVBQUUsZ0VBQWdFO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLDhEQUE4RCxDQUFDO1NBQzFFLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFHTyxJQUFJO1FBQ1YsT0FBTyxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluWGxzeENvbmZpZywgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCBpc1V0ZjggZnJvbSAnaXN1dGY4JztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucywgWGxzeEV4cG9ydFJlc3VsdCwgWGxzeEV4cG9ydFNoZWV0IH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuZGVjbGFyZSB2YXIgWExTWDogYW55O1xuZGVjbGFyZSB2YXIgY3B0YWJsZTogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd4bHN4Jywge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3hsc3gvMC4xNi44L3hsc3guZnVsbC5taW4uanMnLFxuICAgICAgbW9kdWxlczogW2BodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMveGxzeC8wLjE2LjgvY3BleGNlbC5taW4uanNgXSxcbiAgICB9KSE7XG4gIH1cbiAgcHJpdmF0ZSBjb2c6IEFsYWluWGxzeENvbmZpZztcblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdHlwZW9mIFhMU1ggIT09ICd1bmRlZmluZWQnID8gUHJvbWlzZS5yZXNvbHZlKFtdKSA6IHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZChkYXRhOiBOelNhZmVBbnksIG9wdGlvbnM6IHsgdHlwZTogJ2FycmF5JyB8ICdiaW5hcnknIHwgJ3N0cmluZycgfSk6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9IHtcbiAgICBjb25zdCByZXQ6IE56U2FmZUFueSA9IHt9O1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdiaW5hcnknKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICBpZiAoIWlzVXRmOChidWYpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBjcHRhYmxlLnV0aWxzLmRlY29kZSg5MzYsIGJ1Zik7XG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdhcnJheSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB3YiA9IFhMU1gucmVhZChkYXRhLCBvcHRpb25zKTtcbiAgICAgIHdiLlNoZWV0TmFtZXMuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoZWV0OiBOelNhZmVBbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICovXG4gIGltcG9ydChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQg5peg6aG75oyH5a6aIGByQUJTYCDlj4LmlbDvvIzku44xMi545ZCO5bCG56e76ZmkXG4gICAqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICogQHBhcmFtIHJBQlMg5Yqg6L295pWw5o2u5pa55byPIGByZWFkQXNCaW5hcnlTdHJpbmdgIOaIliBgcmVhZEFzQXJyYXlCdWZmZXJgIO+8iOm7mOiupO+8ie+8jFvmm7TlpJrnu4boioJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICBpbXBvcnQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCByQUJTOiAncmVhZEFzQmluYXJ5U3RyaW5nJyB8ICdyZWFkQXNBcnJheUJ1ZmZlcicpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PjtcblxuICBpbXBvcnQoXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxuICAgIF9yQUJTOiAncmVhZEFzQmluYXJ5U3RyaW5nJyB8ICdyZWFkQXNBcnJheUJ1ZmZlcicgPSAncmVhZEFzQmluYXJ5U3RyaW5nJyxcbiAgKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KSkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKHRoaXMucmVhZChlLnRhcmdldC5yZXN1bHQsIHsgdHlwZTogJ2JpbmFyeScgfSkpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlT3JVcmwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCB4bHN4LmpzYCkpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgICAgIChvcHRpb25zLnNoZWV0cyBhcyBYbHN4RXhwb3J0U2hlZXRbXSkuZm9yRWFjaCgodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdzOiBhbnkgPSBYTFNYLnV0aWxzLmFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgICAgICBjb25zdCB3Ym91dDogQXJyYXlCdWZmZXIgPSBYTFNYLndyaXRlKHdiLCB7XG4gICAgICAgICAgICAgIGJvb2tUeXBlOiAneGxzeCcsXG4gICAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAuLi5vcHRpb25zLm9wdHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZSB8fCAnZXhwb3J0Lnhsc3gnO1xuICAgICAgICAgICAgc2F2ZUFzKG5ldyBCbG9iKFt3Ym91dF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSksIGZpbGVuYW1lKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSh7IGZpbGVuYW1lLCB3YiB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5pWw5o2u6L2s56ym5Y+35ZCNXG4gICAqIC0gYDFgID0+IGBBYFxuICAgKiAtIGAyN2AgPT4gYEFBYFxuICAgKiAtIGA3MDNgID0+IGBBQUFgXG4gICAqL1xuICBudW1iZXJUb1NjaGVtYSh2YWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnRDb2RlID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgbGV0IHJlcyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgLS12YWw7XG4gICAgICByZXMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Q29kZSArICh2YWwgJSAyNikpICsgcmVzO1xuICAgICAgdmFsID0gKHZhbCAvIDI2KSA+PiAwO1xuICAgIH0gd2hpbGUgKHZhbCA+IDApO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuIl19