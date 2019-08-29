/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.success = new EventEmitter();
        /**
         * 错误回调
         */
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
            var fileName = _this.fileName ||
                disposition["filename*"] ||
                disposition["filename"] ||
                res.headers.get('filename') ||
                res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDO0lBb0NFLDJCQUFvQixFQUFpQyxFQUFVLEtBQWtCO1FBQTdELE9BQUUsR0FBRixFQUFFLENBQStCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQTVCekUseUJBQW9CLEdBQUcsSUFBSSxDQUFDOzs7O1FBSWQsZUFBVSxHQUFXLEtBQUssQ0FBQzs7OztRQU05QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7Ozs7UUFFakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1lBaUI3QyxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hDLElBQUk7WUFDRixvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUFDLFdBQU0sR0FBRTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7Ozs7SUF2Qk8sMENBQWM7Ozs7O0lBQXRCLFVBQXVCLElBQW1COztZQUNsQyxHQUFHLEdBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixN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QVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSxVQUFVO3FCQUN0QjtpQkFDRjs7OztnQkFWbUIsVUFBVTtnQkFDckIsV0FBVzs7OzJCQWFqQixLQUFLLFNBQUMsV0FBVzs2QkFFakIsS0FBSyxTQUFDLGFBQWE7MEJBRW5CLEtBQUssU0FBQyxVQUFVOzJCQUVoQixLQUFLLFNBQUMsV0FBVzswQkFFakIsTUFBTTt3QkFFTixNQUFNOztJQWdFVCx3QkFBQztDQUFBLEFBcEZELElBb0ZDO1NBN0VZLGlCQUFpQjs7Ozs7O0lBQzVCLGlEQUFvQzs7Ozs7SUFFcEMscUNBQWlDOzs7OztJQUVqQyx1Q0FBaUQ7Ozs7O0lBRWpELG9DQUFtQzs7Ozs7SUFFbkMscUNBQXFDOzs7OztJQUVyQyxvQ0FBb0U7Ozs7O0lBRXBFLGtDQUFtRDs7Ozs7SUFnQnZDLCtCQUF5Qzs7Ozs7SUFBRSxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyxcbiAgZXhwb3J0QXM6ICdkb3duRmlsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IHRydWU7XG4gIC8qKiBVUkzor7fmsYLlj4LmlbAgKi9cbiAgQElucHV0KCdodHRwLWRhdGEnKSBodHRwRGF0YToge307XG4gIC8qKiDor7fmsYLnsbvlnosgKi9cbiAgQElucHV0KCdodHRwLW1ldGhvZCcpIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICAvKiog5LiL6L295Zyw5Z2AICovXG4gIEBJbnB1dCgnaHR0cC11cmwnKSBodHRwVXJsOiBzdHJpbmc7XG4gIC8qKiDmjIflrprmlofku7blkI3vvIzoi6XkuLrnqbrku47mnI3liqHnq6/ov5Tlm57nmoQgYGhlYWRlcmAg5Lit6I635Y+WIGBmaWxlbmFtZWDjgIFgeC1maWxlbmFtZWAgKi9cbiAgQElucHV0KCdmaWxlLW5hbWUnKSBmaWxlTmFtZTogc3RyaW5nO1xuICAvKiog5oiQ5Yqf5Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+KCk7XG4gIC8qKiDplJnor6/lm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgYXJyOiBBcnJheTx7fT4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChfbywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD4sIHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50KSB7XG4gICAgbGV0IGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gISFuZXcgQmxvYigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkID0gaXNGaWxlU2F2ZXJTdXBwb3J0ZWQ7XG4gICAgaWYgKCFpc0ZpbGVTYXZlclN1cHBvcnRlZCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkb3duLWZpbGVfX25vdC1zdXBwb3J0YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICBlbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oYGRvd24tZmlsZV9fZGlzYWJsZWRgKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICB0aGlzLl9odHRwXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkhLnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uID0gdGhpcy5nZXREaXNwb3NpdGlvbihyZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSk7XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPVxuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHksIGRlY29kZVVSSShmaWxlTmFtZSkpO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB0aGlzLmVycm9yLmVtaXQoZXJyKSxcbiAgICAgICAgKCkgPT4gdGhpcy5zZXREaXNhYmxlZChmYWxzZSksXG4gICAgICApO1xuICB9XG59XG4iXX0=