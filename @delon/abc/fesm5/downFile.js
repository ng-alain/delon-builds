import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { __spread } from 'tslib';
import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, Optional, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _HttpClient, AlainThemeModule } from '@delon/theme';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
var DownFileDirective = /** @class */ (function () {
    function DownFileDirective(el, http, _http) {
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
    DownFileDirective.prototype.getDisposition = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var arr = (data || '')
            .split(';')
            .filter(function (i) { return i.includes('='); })
            .map(function (v) {
            var _a;
            /** @type {?} */
            var strArr = v.split('=');
            /** @type {?} */
            var utfId = "UTF-8''";
            /** @type {?} */
            var value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return _a = {}, _a[strArr[0].trim()] = value, _a;
        });
        return arr.reduce(function (o, item) { return item; }, {});
    };
    /**
     * @return {?}
     */
    DownFileDirective.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.el.nativeElement.disabled = true;
        ((/** @type {?} */ ((this._http || this.http))))
            .request(this.httpMethod, this.httpUrl, {
            params: this.httpData || {},
            responseType: 'blob',
            observe: 'response',
        })
            .subscribe(function (res) {
            if (res.status !== 200 || res.body.size <= 0) {
                _this.error.emit(res);
                return;
            }
            /** @type {?} */
            var disposition = _this.getDisposition(res.headers.get('content-disposition'));
            /** @type {?} */
            var fileName = _this.fileName ||
                disposition["filename*"] ||
                disposition["filename"] ||
                res.headers.get('filename') ||
                res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            _this.success.emit(res);
            _this.el.nativeElement.disabled = false;
        }, function (err) {
            _this.error.emit(err);
            _this.el.nativeElement.disabled = false;
        });
    };
    DownFileDirective.decorators = [
        { type: Directive, args: [{ selector: '[down-file]' },] }
    ];
    /** @nocollapse */
    DownFileDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HttpClient },
        { type: _HttpClient, decorators: [{ type: Optional }] }
    ]; };
    DownFileDirective.propDecorators = {
        httpData: [{ type: Input, args: ['http-data',] }],
        httpMethod: [{ type: Input, args: ['http-method',] }],
        httpUrl: [{ type: Input, args: ['http-url',] }],
        fileName: [{ type: Input, args: ['file-name',] }],
        success: [{ type: Output }],
        error: [{ type: Output }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return DownFileDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DIRECTIVES = [DownFileDirective];
var DownFileModule = /** @class */ (function () {
    function DownFileModule() {
    }
    /**
     * @return {?}
     */
    DownFileModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: DownFileModule, providers: [] };
    };
    DownFileModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, AlainThemeModule],
                    declarations: __spread(DIRECTIVES),
                    exports: __spread(DIRECTIVES),
                },] }
    ];
    return DownFileModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { DownFileDirective, DownFileModule };

//# sourceMappingURL=downFile.js.map