import { Injectable, Directive, HostListener, Input, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XlsxConfig {
    constructor() {
        /**
         * Xlsx library path
         */
        this.url = '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
        /**
         * Defines which Xlsx optional modules should get loaded, e.g:
         *
         * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
         */
        this.modules = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XlsxService {
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
                (/** @type {?} */ (options.sheets)).forEach((value, index) => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class XlsxDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @return {?}
     */
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.decorators = [
    { type: Directive, args: [{ selector: '[xlsx]' },] }
];
/** @nocollapse */
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }],
    _click: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [XlsxDirective];
class XlsxModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: XlsxModule,
            providers: [XlsxService, XlsxConfig],
        };
    }
}
XlsxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { XlsxConfig, XlsxService, XlsxDirective, XlsxModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy94bHN4L3hsc3guY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3hsc3gveGxzeC5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9hYmMveGxzeC94bHN4Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgWGxzeENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogWGxzeCBsaWJyYXJ5IHBhdGhcclxuICAgKi9cclxuICB1cmw/ID0gJy8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xMi4xMy94bHN4LmZ1bGwubWluLmpzJztcclxuICAvKipcclxuICAgKiBEZWZpbmVzIHdoaWNoIFhsc3ggb3B0aW9uYWwgbW9kdWxlcyBzaG91bGQgZ2V0IGxvYWRlZCwgZS5nOlxyXG4gICAqXHJcbiAgICogYFsgJy8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xMi4xMy9jcGV4Y2VsLmpzJyBdYFxyXG4gICAqL1xyXG4gIG1vZHVsZXM/OiBzdHJpbmdbXSA9IFtdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IExhenlTZXJ2aWNlLCBMYXp5UmVzdWx0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XHJcbmltcG9ydCB7IFhsc3hDb25maWcgfSBmcm9tICcuL3hsc3guY29uZmlnJztcclxuXHJcbmRlY2xhcmUgdmFyIFhMU1g6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29nOiBYbHN4Q29uZmlnLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmxdLmNvbmNhdCh0aGlzLmNvZy5tb2R1bGVzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWQod2I6IGFueSk6IHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9IHtcclxuICAgIGNvbnN0IHJldDogYW55ID0ge307XHJcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoZWV0OiBhbnkgPSB3Yi5TaGVldHNbbmFtZV07XHJcbiAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKvwrzDpcKFwqVFeGNlbMOlwrnCtsOowr7Ck8OlwofCukpTT07Dr8K8wozDpsKUwq/DpsKMwoEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDDo8KAwoFVUkwgw6XCvcKiw6XCvMKPXHJcbiAgICogQHBhcmFtIHJBQlMgw6XCisKgw6jCvcK9w6bClcKww6bCjcKuw6bClsK5w6XCvMKPIGByZWFkQXNCaW5hcnlTdHJpbmdgIMOvwrzCiMOpwrvCmMOowq7CpMOvwrzCiSDDpsKIwpYgYHJlYWRBc0FycmF5QnVmZmVyYMOvwrzCjFvDpsKbwrTDpcKkwprDp8K7wobDqMKKwoJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXHJcbiAgICovXHJcbiAgaW1wb3J0KFxyXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxyXG4gICAgckFCUzogJ3JlYWRBc0JpbmFyeVN0cmluZycgfCAncmVhZEFzQXJyYXlCdWZmZXInID0gJ3JlYWRBc0JpbmFyeVN0cmluZycsXHJcbiAgKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PigocmVzb2x2ZXIsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBmcm9tIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVyKHRoaXMucmVhZCh3YikpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmcm9tIGZpbGVcclxuICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KTtcclxuICAgICAgICAgIHJlc29sdmVyKHRoaXMucmVhZCh3YikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyW3JBQlNdKGZpbGVPclVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6XCr8K8w6XCh8K6ICovXHJcbiAgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdiOiBhbnkgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xyXG4gICAgICAgICg8WGxzeEV4cG9ydFNoZWV0W10+b3B0aW9ucy5zaGVldHMpLmZvckVhY2goXHJcbiAgICAgICAgICAodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XHJcbiAgICAgICAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQoXHJcbiAgICAgICAgICAgICAgd2IsXHJcbiAgICAgICAgICAgICAgd3MsXHJcbiAgICAgICAgICAgICAgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdiLlNoZWV0TmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLnNoZWV0cyk7XHJcbiAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcclxuXHJcbiAgICAgIGNvbnN0IHdib3V0OiBBcnJheUJ1ZmZlciA9IFhMU1gud3JpdGUoXHJcbiAgICAgICAgd2IsXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYm9va1R5cGU6ICd4bHN4JyxcclxuICAgICAgICAgICAgYm9va1NTVDogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb3B0aW9ucy5vcHRzLFxyXG4gICAgICAgICksXHJcbiAgICAgICk7XHJcbiAgICAgIHNhdmVBcyhcclxuICAgICAgICBuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLFxyXG4gICAgICAgIG9wdGlvbnMuZmlsZW5hbWUgfHwgJ2V4cG9ydC54bHN4JyxcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XHJcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi94bHN4LnR5cGVzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t4bHN4XScgfSlcclxuZXhwb3J0IGNsYXNzIFhsc3hEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgneGxzeCcpIGRhdGE6IFhsc3hFeHBvcnRPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogWGxzeFNlcnZpY2UpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLnNydi5leHBvcnQodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XHJcbmltcG9ydCB7IFhsc3hEaXJlY3RpdmUgfSBmcm9tICcuL3hsc3guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgWGxzeENvbmZpZyB9IGZyb20gJy4veGxzeC5jb25maWcnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtYbHN4RGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYbHN4TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBYbHN4TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtYbHN4U2VydmljZSwgWGxzeENvbmZpZ10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OzttQkFJUyxpREFBaUQ7Ozs7Ozt1QkFNbkMsRUFBRTs7Q0FDeEI7Ozs7OztBQ1hEOzs7Ozs7SUFZRSxZQUNVLEtBQ0EsTUFDQTtRQUZBLFFBQUcsR0FBSCxHQUFHO1FBQ0gsU0FB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