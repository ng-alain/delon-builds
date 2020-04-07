/**
 * @fileoverview added by tsickle
 * Generated from: down-file.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';
export class DownFileDirective {
    /**
     * @param {?} el
     * @param {?} _http
     */
    constructor(el, _http) {
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
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    getDisposition(data) {
        /** @type {?} */
        const arr = (data || '')
            .split(';')
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i.includes('=')))
            .map((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            /** @type {?} */
            const strArr = v.split('=');
            /** @type {?} */
            const utfId = `UTF-8''`;
            /** @type {?} */
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        }));
        return arr.reduce((/**
         * @param {?} _o
         * @param {?} item
         * @return {?}
         */
        (_o, item) => item), {});
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setDisabled(status) {
        /** @type {?} */
        const el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    /**
     * @return {?}
     */
    _click() {
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
        (res) => {
            if (res.status !== 200 || (/** @type {?} */ (res.body)).size <= 0) {
                this.error.emit(res);
                return;
            }
            /** @type {?} */
            const disposition = this.getDisposition(res.headers.get('content-disposition'));
            /** @type {?} */
            let fileName = this.fileName;
            if (typeof fileName === 'function')
                fileName = fileName(res);
            fileName =
                fileName || disposition[`filename*`] || disposition[`filename`] || res.headers.get('filename') || res.headers.get('x-filename');
            saveAs(res.body, decodeURI((/** @type {?} */ (fileName))));
            this.success.emit(res);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => this.error.emit(err)), (/**
         * @return {?}
         */
        () => this.setDisabled(false)));
    }
}
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
DownFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: _HttpClient }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: Input, args: ['http-data',] }],
    httpBody: [{ type: Input, args: ['http-body',] }],
    httpMethod: [{ type: Input, args: ['http-method',] }],
    httpUrl: [{ type: Input, args: ['http-url',] }],
    fileName: [{ type: Input, args: ['file-name',] }],
    success: [{ type: Output }],
    error: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQVNwQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQStCNUIsWUFBb0IsRUFBaUMsRUFBVSxLQUFrQjtRQUE3RCxPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7UUE5QnpFLHlCQUFvQixHQUFHLElBQUksQ0FBQzs7OztRQU1kLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7UUFNOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDOzs7O1FBRWpELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztZQWlCN0Msb0JBQW9CLEdBQUcsS0FBSztRQUNoQyxJQUFJO1lBQ0Ysb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckM7UUFBQyxXQUFNLEdBQUU7UUFDVixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7Ozs7O0lBdkJPLGNBQWMsQ0FBQyxJQUFtQjs7Y0FDbEMsR0FBRyxHQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsR0FBRyxD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Q0FBQzs7O1FBQzNCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQzlCLENBQUM7SUFDTixDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjthQUNGOzs7O1lBVm1CLFVBQVU7WUFDckIsV0FBVzs7O3VCQWFqQixLQUFLLFNBQUMsV0FBVzt1QkFFakIsS0FBSyxTQUFDLFdBQVc7eUJBRWpCLEtBQUssU0FBQyxhQUFhO3NCQUVuQixLQUFLLFNBQUMsVUFBVTt1QkFFaEIsS0FBSyxTQUFDLFdBQVc7c0JBRWpCLE1BQU07b0JBRU4sTUFBTTs7Ozs7OztJQWRQLGlEQUFvQzs7Ozs7SUFFcEMscUNBQWlDOzs7OztJQUVqQyxxQ0FBaUM7Ozs7O0lBRWpDLHVDQUFpRDs7Ozs7SUFFakQsb0NBQW1DOzs7OztJQUVuQyxxQ0FBNkU7Ozs7O0lBRTdFLG9DQUFvRTs7Ozs7SUFFcEUsa0NBQW1EOzs7OztJQWdCdkMsK0JBQXlDOzs7OztJQUFFLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBleHBvcnRBczogJ2Rvd25GaWxlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRG93bkZpbGVEaXJlY3RpdmUge1xuICBwcml2YXRlIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gdHJ1ZTtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtZGF0YScpIGh0dHBEYXRhOiB7fTtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtYm9keScpIGh0dHBCb2R5OiB7fTtcbiAgLyoqIOivt+axguexu+WeiyAqL1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIC8qKiDkuIvovb3lnLDlnYAgKi9cbiAgQElucHV0KCdodHRwLXVybCcpIGh0dHBVcmw6IHN0cmluZztcbiAgLyoqIOaMh+WumuaWh+S7tuWQje+8jOiLpeS4uuepuuS7juacjeWKoeerr+i/lOWbnueahCBgaGVhZGVyYCDkuK3ojrflj5YgYGZpbGVuYW1lYOOAgWB4LWZpbGVuYW1lYCAqL1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lOiBzdHJpbmcgfCAoKHJlcDogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiBzdHJpbmcpO1xuICAvKiog5oiQ5Yqf5Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+KCk7XG4gIC8qKiDplJnor6/lm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgYXJyOiBBcnJheTx7fT4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChfbywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD4sIHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50KSB7XG4gICAgbGV0IGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gISFuZXcgQmxvYigpO1xuICAgIH0gY2F0Y2gge31cbiAgICB0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkID0gaXNGaWxlU2F2ZXJTdXBwb3J0ZWQ7XG4gICAgaWYgKCFpc0ZpbGVTYXZlclN1cHBvcnRlZCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkb3duLWZpbGVfX25vdC1zdXBwb3J0YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICBlbC5jbGFzc0xpc3Rbc3RhdHVzID8gJ2FkZCcgOiAncmVtb3ZlJ10oYGRvd24tZmlsZV9fZGlzYWJsZWRgKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICB0aGlzLl9odHRwXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgICBib2R5OiB0aGlzLmh0dHBCb2R5LFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkhLnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uID0gdGhpcy5nZXREaXNwb3NpdGlvbihyZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSk7XG4gICAgICAgICAgbGV0IGZpbGVOYW1lID0gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVOYW1lID09PSAnZnVuY3Rpb24nKSBmaWxlTmFtZSA9IGZpbGVOYW1lKHJlcyk7XG4gICAgICAgICAgZmlsZU5hbWUgPVxuICAgICAgICAgICAgZmlsZU5hbWUgfHwgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8IGRpc3Bvc2l0aW9uW2BmaWxlbmFtZWBdIHx8IHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fCByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHksIGRlY29kZVVSSShmaWxlTmFtZSBhcyBzdHJpbmcpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5lcnJvci5lbWl0KGVyciksXG4gICAgICAgICgpID0+IHRoaXMuc2V0RGlzYWJsZWQoZmFsc2UpLFxuICAgICAgKTtcbiAgfVxufVxuIl19