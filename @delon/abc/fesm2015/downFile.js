import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ElementRef, ɵɵngDeclareDirective, ɵsetClassMetadata, Directive, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { _HttpClient, AlainThemeModule } from '@delon/theme';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';

class DownFileDirective {
    constructor(el, _http) {
        this.el = el;
        this._http = _http;
        this.isFileSaverSupported = true;
        this.httpMethod = 'get';
        this.success = new EventEmitter();
        this.error = new EventEmitter();
        let isFileSaverSupported = false;
        try {
            isFileSaverSupported = !!new Blob();
        }
        catch (_a) { }
        this.isFileSaverSupported = isFileSaverSupported;
        if (!isFileSaverSupported) {
            el.nativeElement.classList.add(`down-file__not-support`);
        }
    }
    getDisposition(data) {
        const arr = (data || '')
            .split(';')
            .filter(i => i.includes('='))
            .map(v => {
            const strArr = v.split('=');
            const utfId = `UTF-8''`;
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((_o, item) => item, {});
    }
    setDisabled(status) {
        const el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    _click(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(yield this.pre(ev)))) {
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            this.setDisabled(true);
            this._http
                .request(this.httpMethod, this.httpUrl, {
                params: this.httpData || {},
                responseType: 'blob',
                observe: 'response',
                body: this.httpBody,
            })
                .subscribe((res) => {
                if (res.status !== 200 || res.body.size <= 0) {
                    this.error.emit(res);
                    return;
                }
                const disposition = this.getDisposition(res.headers.get('content-disposition'));
                let fileName = this.fileName;
                if (typeof fileName === 'function')
                    fileName = fileName(res);
                fileName =
                    fileName || disposition[`filename*`] || disposition[`filename`] || res.headers.get('filename') || res.headers.get('x-filename');
                saveAs(res.body, decodeURI(fileName));
                this.success.emit(res);
            }, err => this.error.emit(err), () => this.setDisabled(false));
        });
    }
}
/** @nocollapse */ DownFileDirective.ɵfac = function DownFileDirective_Factory(t) { return new (t || DownFileDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(_HttpClient)); };
/** @nocollapse */ DownFileDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: DownFileDirective, selector: "[down-file]", inputs: { httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpMethod: ["http-method", "httpMethod"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, host: { listeners: { "click": "_click($event)" } }, exportAs: ["downFile"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DownFileDirective, [{
        type: Directive,
        args: [{
                selector: '[down-file]',
                exportAs: 'downFile',
                host: {
                    '(click)': '_click($event)',
                },
            }]
    }], function () { return [{ type: ElementRef }, { type: _HttpClient }]; }, { httpData: [{
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
            args: ['http-url']
        }], fileName: [{
            type: Input,
            args: ['file-name']
        }], pre: [{
            type: Input
        }], success: [{
            type: Output
        }], error: [{
            type: Output
        }] }); })();

const DIRECTIVES = [DownFileDirective];
class DownFileModule {
}
/** @nocollapse */ DownFileModule.ɵmod = ɵɵdefineNgModule({ type: DownFileModule });
/** @nocollapse */ DownFileModule.ɵinj = ɵɵdefineInjector({ factory: function DownFileModule_Factory(t) { return new (t || DownFileModule)(); }, imports: [[CommonModule, AlainThemeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DownFileModule, { declarations: [DownFileDirective], imports: [CommonModule, AlainThemeModule], exports: [DownFileDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DownFileModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, AlainThemeModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DownFileDirective, DownFileModule };
//# sourceMappingURL=downFile.js.map
