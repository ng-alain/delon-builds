import { __awaiter, __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Injectable, Directive, Input, NgModule } from '@angular/core';
import isUtf8 from 'isutf8';
import { ZoneOutside } from '@delon/util/decorator';
import * as i1 from '@angular/common/http';
import * as i2 from '@delon/util/other';
import * as i3 from '@delon/util/config';
import { CommonModule } from '@angular/common';

class XlsxService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('xlsx', {
            url: 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js',
            modules: [`https://cdn.jsdelivr.net/npm/xlsx/dist/cpexcel.js`]
        });
    }
    init() {
        return typeof XLSX !== 'undefined'
            ? Promise.resolve([])
            : this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    read(data) {
        const { read, utils: { sheet_to_json } } = XLSX;
        const ret = {};
        const buf = new Uint8Array(data);
        let type = 'array';
        if (!isUtf8(buf)) {
            try {
                data = cptable.utils.decode(936, buf);
                type = 'string';
            }
            catch (_a) { }
        }
        const wb = read(data, { type });
        wb.SheetNames.forEach((name) => {
            const sheet = wb.Sheets[name];
            ret[name] = sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     */
    import(fileOrUrl) {
        return new Promise((resolve, reject) => {
            const r = (data) => this.ngZone.run(() => resolve(this.read(data)));
            this.init()
                .then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
                        next: (res) => r(new Uint8Array(res)),
                        error: (err) => reject(err)
                    });
                    return;
                }
                // from file
                const reader = new FileReader();
                reader.onload = (e) => r(e.target.result);
                reader.onerror = (e) => reject(e);
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
                    options = Object.assign({ format: 'xlsx' }, options);
                    const { writeFile, utils: { book_new, aoa_to_sheet, book_append_sheet } } = XLSX;
                    const wb = book_new();
                    if (Array.isArray(options.sheets)) {
                        options.sheets.forEach((value, index) => {
                            const ws = aoa_to_sheet(value.data);
                            book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                        });
                    }
                    else {
                        wb.SheetNames = Object.keys(options.sheets);
                        wb.Sheets = options.sheets;
                    }
                    if (options.callback)
                        options.callback(wb);
                    const filename = options.filename || `export.${options.format}`;
                    writeFile(wb, filename, Object.assign({ bookType: options.format, bookSST: false, type: 'array' }, options.opts));
                    resolve({ filename, wb });
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
XlsxService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
XlsxService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxService, providedIn: 'root' });
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, propDecorators: { read: [], export: [] } });

class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxDirective, deps: [{ token: XlsxService }], target: i0.ɵɵFactoryTarget.Directive });
XlsxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: XlsxDirective, selector: "[xlsx]", inputs: { data: ["xlsx", "data"] }, host: { listeners: { "click": "_click()" } }, exportAs: ["xlsx"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xlsx]',
                    exportAs: 'xlsx',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: XlsxService }]; }, propDecorators: { data: [{
                type: Input,
                args: ['xlsx']
            }] } });

const COMPONENTS = [XlsxDirective];
class XlsxModule {
}
XlsxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
XlsxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxModule, declarations: [XlsxDirective], imports: [CommonModule], exports: [XlsxDirective] });
XlsxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: XlsxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { XlsxDirective, XlsxModule, XlsxService };
//# sourceMappingURL=xlsx.mjs.map
