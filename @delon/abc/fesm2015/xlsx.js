import { __awaiter } from 'tslib';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { ɵɵinject, NgZone, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵngDeclareDirective, Directive, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { LazyService, AlainConfigService, DelonUtilModule } from '@delon/util';
import { saveAs } from 'file-saver';
import isUtf8 from 'isutf8';
import { CommonModule } from '@angular/common';

class XlsxService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('xlsx', {
            url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
            modules: [`https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js`],
        });
    }
    init() {
        return typeof XLSX !== 'undefined' ? Promise.resolve([]) : this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    read(data, options) {
        const ret = {};
        this.ngZone.runOutsideAngular(() => {
            if (options.type === 'binary') {
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
            const wb = XLSX.read(data, options);
            wb.SheetNames.forEach((name) => {
                const sheet = wb.Sheets[name];
                ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            });
        });
        return ret;
    }
    import(fileOrUrl, _rABS = 'readAsBinaryString') {
        return new Promise((resolve, reject) => {
            this.init()
                .then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => {
                        this.ngZone.run(() => resolve(this.read(new Uint8Array(res), { type: 'array' })));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                // from file
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.ngZone.run(() => resolve(this.read(e.target.result, { type: 'binary' })));
                };
                reader.readAsArrayBuffer(fileOrUrl);
            })
                .catch(() => reject(`Unable to load xlsx.js`));
        });
    }
    export(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.init()
                    .then(() => {
                    this.ngZone.runOutsideAngular(() => {
                        const wb = XLSX.utils.book_new();
                        if (Array.isArray(options.sheets)) {
                            options.sheets.forEach((value, index) => {
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
                        const wbout = XLSX.write(wb, Object.assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
                        const filename = options.filename || 'export.xlsx';
                        saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
                        resolve({ filename, wb });
                    });
                })
                    .catch(err => reject(err));
            });
        });
    }
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    numberToSchema(val) {
        const startCode = 'A'.charCodeAt(0);
        let res = '';
        do {
            --val;
            res = String.fromCharCode(startCode + (val % 26)) + res;
            val = (val / 26) >> 0;
        } while (val > 0);
        return res;
    }
}
/** @nocollapse */ XlsxService.ɵfac = function XlsxService_Factory(t) { return new (t || XlsxService)(ɵɵinject(HttpClient), ɵɵinject(LazyService), ɵɵinject(AlainConfigService), ɵɵinject(NgZone)); };
/** @nocollapse */ XlsxService.ɵprov = ɵɵdefineInjectable({ token: XlsxService, factory: XlsxService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(XlsxService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: HttpClient }, { type: LazyService }, { type: AlainConfigService }, { type: NgZone }]; }, null); })();

class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
}
/** @nocollapse */ XlsxDirective.ɵfac = function XlsxDirective_Factory(t) { return new (t || XlsxDirective)(ɵɵdirectiveInject(XlsxService)); };
/** @nocollapse */ XlsxDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: XlsxDirective, selector: "[xlsx]", inputs: { data: ["xlsx", "data"] }, host: { listeners: { "click": "_click()" } }, exportAs: ["xlsx"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(XlsxDirective, [{
        type: Directive,
        args: [{
                selector: '[xlsx]',
                exportAs: 'xlsx',
                host: {
                    '(click)': '_click()',
                },
            }]
    }], function () { return [{ type: XlsxService }]; }, { data: [{
            type: Input,
            args: ['xlsx']
        }] }); })();

const COMPONENTS = [XlsxDirective];
class XlsxModule {
}
/** @nocollapse */ XlsxModule.ɵmod = ɵɵdefineNgModule({ type: XlsxModule });
/** @nocollapse */ XlsxModule.ɵinj = ɵɵdefineInjector({ factory: function XlsxModule_Factory(t) { return new (t || XlsxModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(XlsxModule, { declarations: [XlsxDirective], imports: [CommonModule, DelonUtilModule], exports: [XlsxDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(XlsxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { XlsxDirective, XlsxModule, XlsxService };
//# sourceMappingURL=xlsx.js.map
