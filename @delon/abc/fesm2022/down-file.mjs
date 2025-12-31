import * as i0 from '@angular/core';
import { inject, ElementRef, EventEmitter, Output, Input, Directive, NgModule } from '@angular/core';
import { finalize } from 'rxjs';
import { saveAs } from 'file-saver';
import { _HttpClient, AlainThemeModule } from '@delon/theme';
import { CommonModule } from '@angular/common';

class DownFileDirective {
    el = inject(ElementRef).nativeElement;
    _http = inject(_HttpClient);
    httpData;
    httpBody;
    httpMethod = 'get';
    httpUrl;
    fileName;
    pre;
    success = new EventEmitter();
    error = new EventEmitter();
    getDisposition(data) {
        const arr = (data ?? '')
            .split(';')
            .filter(i => i.includes('='))
            .map(v => {
            const strArr = v.split('=');
            const utfId = `UTF-8''`;
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substring(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((_o, item) => item, {});
    }
    isFileSaverSupported = false;
    constructor() {
        try {
            this.isFileSaverSupported = !!new Blob();
        }
        catch { }
        if (!this.isFileSaverSupported) {
            this.el.classList.add(`down-file__not-support`);
        }
    }
    setDisabled(status) {
        const el = this.el;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    async _click(ev) {
        if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(await this.pre(ev)))) {
            ev.stopPropagation();
            ev.preventDefault();
            return;
        }
        this.setDisabled(true);
        this._http
            .request(this.httpMethod, this.httpUrl, {
            params: this.httpData ?? {},
            responseType: 'blob',
            observe: 'response',
            body: this.httpBody
        })
            .pipe(finalize(() => this.setDisabled(false)))
            .subscribe({
            next: (res) => {
                if (res.status !== 200 || res.body.size <= 0) {
                    this.error.emit(res);
                    return;
                }
                const disposition = this.getDisposition(res.headers.get('content-disposition'));
                let fileName = this.fileName;
                if (typeof fileName === 'function')
                    fileName = fileName(res);
                fileName =
                    fileName ||
                        disposition[`filename*`] ||
                        disposition[`filename`] ||
                        res.headers.get('filename') ||
                        res.headers.get('x-filename');
                saveAs(res.body, decodeURI(fileName));
                this.success.emit(res);
            },
            error: err => this.error.emit(err)
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: DownFileDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.0.6", type: DownFileDirective, isStandalone: true, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: DownFileDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[down-file]',
                    exportAs: 'downFile',
                    host: {
                        '(click)': '_click($event)'
                    }
                }]
        }], ctorParameters: () => [], propDecorators: { httpData: [{
                type: Input,
                args: ['http-data']
            }], httpBody: [{
                type: Input,
                args: ['http-body']
            }], httpMethod: [{
                type: Input,
                args: ['http-method']
            }], httpUrl: [{
                type: Input,
                args: [{ alias: 'http-url', required: true }]
            }], fileName: [{
                type: Input,
                args: ['file-name']
            }], pre: [{
                type: Input
            }], success: [{
                type: Output
            }], error: [{
                type: Output
            }] } });

const DIRECTIVES = [DownFileDirective];
class DownFileModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: DownFileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.6", ngImport: i0, type: DownFileModule, imports: [CommonModule, AlainThemeModule, DownFileDirective], exports: [DownFileDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: DownFileModule, imports: [CommonModule, AlainThemeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: DownFileModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AlainThemeModule, ...DIRECTIVES],
                    exports: DIRECTIVES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DownFileDirective, DownFileModule };
//# sourceMappingURL=down-file.mjs.map
