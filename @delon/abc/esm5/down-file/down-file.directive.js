/**
 * @fileoverview added by tsickle
 * Generated from: down-file.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';
var DownFileDirective = /** @class */ (function () {
    function DownFileDirective(el, _http) {
        this.el = el;
        this._http = _http;
        this.isFileSaverSupported = true;
        /**
         * 请求类型
         */
        this.httpMethod = 'get';
        /**
         * 成功回调
         */
        // tslint:disable-next-line:no-output-native
        this.success = new EventEmitter();
        /**
         * 错误回调
         */
        // tslint:disable-next-line:no-output-native
        this.error = new EventEmitter();
        /** @type {?} */
        var isFileSaverSupported = false;
        try {
            isFileSaverSupported = !!new Blob();
        }
        catch (_a) { }
        this.isFileSaverSupported = isFileSaverSupported;
        if (!isFileSaverSupported) {
            el.nativeElement.classList.add("down-file__not-support");
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    DownFileDirective.prototype.getDisposition = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var arr = (data || '')
            .split(';')
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.includes('='); }))
            .map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
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
        }));
        return arr.reduce((/**
         * @param {?} _o
         * @param {?} item
         * @return {?}
         */
        function (_o, item) { return item; }), {});
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    DownFileDirective.prototype.setDisabled = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        /** @type {?} */
        var el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove']("down-file__disabled");
    };
    /**
     * @return {?}
     */
    DownFileDirective.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isFileSaverSupported) {
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
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res.status !== 200 || (/** @type {?} */ (res.body)).size <= 0) {
                _this.error.emit(res);
                return;
            }
            /** @type {?} */
            var disposition = _this.getDisposition(res.headers.get('content-disposition'));
            /** @type {?} */
            var fileName = _this.fileName;
            if (typeof fileName === 'function')
                fileName = fileName(res);
            fileName =
                fileName || disposition["filename*"] || disposition["filename"] || res.headers.get('filename') || res.headers.get('x-filename');
            saveAs((/** @type {?} */ (res.body)), decodeURI((/** @type {?} */ (fileName))));
            _this.success.emit(res);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.error.emit(err); }), (/**
         * @return {?}
         */
        function () { return _this.setDisabled(false); }));
    };
    DownFileDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[down-file]',
                    exportAs: 'downFile',
                    host: {
                        '(click)': '_click()',
                    },
                },] }
    ];
    /** @nocollapse */
    DownFileDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: _HttpClient }
    ]; };
    DownFileDirective.propDecorators = {
        httpData: [{ type: Input, args: ['http-data',] }],
        httpBody: [{ type: Input, args: ['http-body',] }],
        httpMethod: [{ type: Input, args: ['http-method',] }],
        httpUrl: [{ type: Input, args: ['http-url',] }],
        fileName: [{ type: Input, args: ['file-name',] }],
        success: [{ type: Output }],
        error: [{ type: Output }]
    };
    return DownFileDirective;
}());
export { DownFileDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DownFileDirective.prototype.isFileSaverSupported;
    /**
     * URL请求参数
     * @type {?}
     */
    DownFileDirective.prototype.httpData;
    /**
     * URL请求参数
     * @type {?}
     */
    DownFileDirective.prototype.httpBody;
    /**
     * 请求类型
     * @type {?}
     */
    DownFileDirective.prototype.httpMethod;
    /**
     * 下载地址
     * @type {?}
     */
    DownFileDirective.prototype.httpUrl;
    /**
     * 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename`
     * @type {?}
     */
    DownFileDirective.prototype.fileName;
    /**
     * 成功回调
     * @type {?}
     */
    DownFileDirective.prototype.success;
    /**
     * 错误回调
     * @type {?}
     */
    DownFileDirective.prototype.error;
    /**
     * @type {?}
     * @private
     */
    DownFileDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DownFileDirective.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUdwQztJQXdDRSwyQkFBb0IsRUFBaUMsRUFBVSxLQUFrQjtRQUE3RCxPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7UUFoQ3pFLHlCQUFvQixHQUFHLElBQUksQ0FBQzs7OztRQU1kLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7O1FBTzlCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7Ozs7UUFHakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1lBaUI3QyxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hDLElBQUk7WUFDRixvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUFDLFdBQU0sR0FBRTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7Ozs7SUF2Qk8sMENBQWM7Ozs7O0lBQXRCLFVBQXVCLElBQW1COztZQUNsQyxHQUFHLEdBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFD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QUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFwQixDQUFvQjs7O1FBQzNCLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixFQUM5QixDQUFDO0lBQ04sQ0FBQzs7Z0JBdEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0Y7Ozs7Z0JBWG1CLFVBQVU7Z0JBQ3JCLFdBQVc7OzsyQkFjakIsS0FBSyxTQUFDLFdBQVc7MkJBRWpCLEtBQUssU0FBQyxXQUFXOzZCQUVqQixLQUFLLFNBQUMsYUFBYTswQkFFbkIsS0FBSyxTQUFDLFVBQVU7MkJBRWhCLEtBQUssU0FBQyxXQUFXOzBCQUdqQixNQUFNO3dCQUdOLE1BQU07O0lBK0RULHdCQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0FoRlksaUJBQWlCOzs7Ozs7SUFDNUIsaURBQW9DOzs7OztJQUVwQyxxQ0FBaUM7Ozs7O0lBRWpDLHFDQUFpQzs7Ozs7SUFFakMsdUNBQWlEOzs7OztJQUVqRCxvQ0FBbUM7Ozs7O0lBRW5DLHFDQUE2RTs7Ozs7SUFHN0Usb0NBQW9FOzs7OztJQUdwRSxrQ0FBbUQ7Ozs7O0lBZ0J2QywrQkFBeUM7Ozs7O0lBQUUsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyxcbiAgZXhwb3J0QXM6ICdkb3duRmlsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IHRydWU7XG4gIC8qKiBVUkzor7fmsYLlj4LmlbAgKi9cbiAgQElucHV0KCdodHRwLWRhdGEnKSBodHRwRGF0YToge307XG4gIC8qKiBVUkzor7fmsYLlj4LmlbAgKi9cbiAgQElucHV0KCdodHRwLWJvZHknKSBodHRwQm9keToge307XG4gIC8qKiDor7fmsYLnsbvlnosgKi9cbiAgQElucHV0KCdodHRwLW1ldGhvZCcpIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICAvKiog5LiL6L295Zyw5Z2AICovXG4gIEBJbnB1dCgnaHR0cC11cmwnKSBodHRwVXJsOiBzdHJpbmc7XG4gIC8qKiDmjIflrprmlofku7blkI3vvIzoi6XkuLrnqbrku47mnI3liqHnq6/ov5Tlm57nmoQgYGhlYWRlcmAg5Lit6I635Y+WIGBmaWxlbmFtZWDjgIFgeC1maWxlbmFtZWAgKi9cbiAgQElucHV0KCdmaWxlLW5hbWUnKSBmaWxlTmFtZTogc3RyaW5nIHwgKChyZXA6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4gc3RyaW5nKTtcbiAgLyoqIOaIkOWKn+WbnuiwgyAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICAvKiog6ZSZ6K+v5Zue6LCDICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgZ2V0RGlzcG9zaXRpb24oZGF0YTogc3RyaW5nIHwgbnVsbCk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgYXJyOiBBcnJheTx7fT4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChfbywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD4sIHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50KSB7XG4gICAgbGV0IGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gISFuZXcgQmxvYigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkID0gaXNGaWxlU2F2ZXJTdXBwb3J0ZWQ7XG4gICAgaWYgKCFpc0ZpbGVTYXZlclN1cHBvcnRlZCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkb3duLWZpbGVfX25vdC1zdXBwb3J0YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICBlbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oYGRvd24tZmlsZV9fZGlzYWJsZWRgKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICB0aGlzLl9odHRwXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgICBib2R5OiB0aGlzLmh0dHBCb2R5LFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkhLnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uID0gdGhpcy5nZXREaXNwb3NpdGlvbihyZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSk7XG4gICAgICAgICAgbGV0IGZpbGVOYW1lID0gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVOYW1lID09PSAnZnVuY3Rpb24nKSBmaWxlTmFtZSA9IGZpbGVOYW1lKHJlcyk7XG4gICAgICAgICAgZmlsZU5hbWUgPVxuICAgICAgICAgICAgZmlsZU5hbWUgfHwgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8IGRpc3Bvc2l0aW9uW2BmaWxlbmFtZWBdIHx8IHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fCByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHkhLCBkZWNvZGVVUkkoZmlsZU5hbWUgYXMgc3RyaW5nKSk7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQocmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHRoaXMuZXJyb3IuZW1pdChlcnIpLFxuICAgICAgICAoKSA9PiB0aGlzLnNldERpc2FibGVkKGZhbHNlKSxcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==