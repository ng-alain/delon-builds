import { __awaiter, __decorate } from 'tslib';
import * as i1 from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, NgZone, Directive, Input, NgModule } from '@angular/core';
import isUtf8 from 'isutf8';
import * as i3 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import * as i2 from '@delon/util/other';
import { LazyService } from '@delon/util/other';
import { CommonModule } from '@angular/common';

class XlsxService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('xlsx', {
            url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
            modules: [`https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js`]
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
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => r(new Uint8Array(res)), (err) => reject(err));
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
XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
XlsxService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
XlsxService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService },
    { type: NgZone }
];
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);

class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xlsx]',
                exportAs: 'xlsx',
                host: {
                    '(click)': '_click()'
                }
            },] }
];
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }]
};

const COMPONENTS = [XlsxDirective];
class XlsxModule {
}
XlsxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { XlsxDirective, XlsxModule, XlsxService };
//# sourceMappingURL=xlsx.js.map
