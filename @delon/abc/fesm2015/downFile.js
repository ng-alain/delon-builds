import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, Optional, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { _HttpClient, AlainThemeModule } from '@delon/theme';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
class DownFileDirective {
    /**
     * @param {?} el
     * @param {?} http
     * @param {?} _http
     */
    constructor(el, http, _http) {
        this.el = el;
        this.http = http;
        this._http = _http;
        /**
         * 请求类型
         */
        this.httpMethod = 'get';
        /**
         * 成功回调
         */
        this.success = new EventEmitter();
        /**
         * 错误回调
         */
        this.error = new EventEmitter();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getDisposition(data) {
        /** @type {?} */
        const arr = (data || '')
            .split(';')
            .filter(i => i.includes('='))
            .map(v => {
            /** @type {?} */
            const strArr = v.split('=');
            /** @type {?} */
            const utfId = `UTF-8''`;
            /** @type {?} */
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        });
        return arr.reduce((o, item) => item, {});
    }
    /**
     * @return {?}
     */
    _click() {
        this.el.nativeElement.disabled = true;
        (/** @type {?} */ ((this._http || this.http)))
            .request(this.httpMethod, this.httpUrl, {
            params: this.httpData || {},
            responseType: 'blob',
            observe: 'response',
        })
            .subscribe((res) => {
            if (res.status !== 200 || res.body.size <= 0) {
                this.error.emit(res);
                return;
            }
            /** @type {?} */
            const disposition = this.getDisposition(res.headers.get('content-disposition'));
            /** @type {?} */
            const fileName = this.fileName ||
                disposition[`filename*`] ||
                disposition[`filename`] ||
                res.headers.get('filename') ||
                res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            this.success.emit(res);
            this.el.nativeElement.disabled = false;
        }, err => {
            this.error.emit(err);
            this.el.nativeElement.disabled = false;
        });
    }
}
DownFileDirective.decorators = [
    { type: Directive, args: [{ selector: '[down-file]' },] }
];
/** @nocollapse */
DownFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HttpClient },
    { type: _HttpClient, decorators: [{ type: Optional }] }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: Input, args: ['http-data',] }],
    httpMethod: [{ type: Input, args: ['http-method',] }],
    httpUrl: [{ type: Input, args: ['http-url',] }],
    fileName: [{ type: Input, args: ['file-name',] }],
    success: [{ type: Output }],
    error: [{ type: Output }],
    _click: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DIRECTIVES = [DownFileDirective];
class DownFileModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DownFileModule, providers: [] };
    }
}
DownFileModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AlainThemeModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
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

export { DownFileDirective, DownFileModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bkZpbGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlL2Rvd24tZmlsZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlL2Rvd24tZmlsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbi8qKlxuICogw6bClsKHw6TCu8K2w6TCuMKLw6jCvcK9XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBuei1idXR0b24gZG93bi1maWxlIGh0dHAtdXJsPVwiYXNzZXRzL2RlbW97e2l9fVwiIGZpbGUtbmFtZT1cImRlbW/DpMK4wq3DpsKWwodcIj57e2l9fTwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyB9KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgLyoqIFVSTMOowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsCAqL1xuICBASW5wdXQoJ2h0dHAtZGF0YScpXG4gIGh0dHBEYXRhOiBhbnk7XG4gIC8qKiDDqMKvwrfDpsKxwoLDp8KxwrvDpcKewosgKi9cbiAgQElucHV0KCdodHRwLW1ldGhvZCcpXG4gIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICAvKiogw6TCuMKLw6jCvcK9w6XCnMKww6XCncKAICovXG4gIEBJbnB1dCgnaHR0cC11cmwnKVxuICBodHRwVXJsOiBzdHJpbmc7XG4gIC8qKiDDpsKMwofDpcKuwprDpsKWwofDpMK7wrbDpcKQwo3Dr8K8wozDqMKLwqXDpMK4wrrDp8KpwrrDpMK7wo7DpsKcwo3DpcKKwqHDp8Krwq/DqMK/wpTDpcKbwp7Dp8KawoQgYGhlYWRlcmAgw6TCuMKtw6jCjsK3w6XCj8KWIGBmaWxlbmFtZWDDo8KAwoFgeC1maWxlbmFtZWAgKi9cbiAgQElucHV0KCdmaWxlLW5hbWUnKVxuICBmaWxlTmFtZTogc3RyaW5nO1xuICAvKiogw6bCiMKQw6XCisKfw6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBzdWNjZXNzOiBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PiA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICAvKiogw6nClMKZw6jCr8Kvw6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGdldERpc3Bvc2l0aW9uKGRhdGE6IHN0cmluZykge1xuICAgIGNvbnN0IGFycjogYW55ID0gKGRhdGEgfHwgJycpXG4gICAgICAuc3BsaXQoJzsnKVxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cih1dGZJZC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgobywgaXRlbTogYW55KSA9PiBpdGVtLCB7fSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2NsaWNrKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgKCh0aGlzLl9odHRwIHx8IHRoaXMuaHR0cCkgYXMgYW55KVxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5LnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uOiBhbnkgPSB0aGlzLmdldERpc3Bvc2l0aW9uKFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJyksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9XG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWUqYF0gfHxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZWBdIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ2ZpbGVuYW1lJykgfHxcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgneC1maWxlbmFtZScpO1xuICAgICAgICAgIHNhdmVBcyhyZXMuYm9keSwgZGVjb2RlVVJJKGZpbGVOYW1lKSk7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQocmVzKTtcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWxhaW5UaGVtZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERvd25GaWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kb3duLWZpbGUuZGlyZWN0aXZlJztcblxuY29uc3QgRElSRUNUSVZFUyA9IFtEb3duRmlsZURpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFsYWluVGhlbWVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBEb3duRmlsZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEb3duRmlsZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xu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