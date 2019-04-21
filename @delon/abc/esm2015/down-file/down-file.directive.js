/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @param {?} o
         * @param {?} item
         * @return {?}
         */
        (o, item) => item), {});
    }
    /**
     * @return {?}
     */
    _click() {
        this.el.nativeElement.disabled = true;
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
        (res) => {
            if (res.status !== 200 || (/** @type {?} */ (res.body)).size <= 0) {
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
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.error.emit(err);
            this.el.nativeElement.disabled = false;
        }));
    }
}
DownFileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[down-file]',
                host: {
                    '(click)': '_click()',
                },
                exportAs: 'downFileDirective',
            },] }
];
/** @nocollapse */
DownFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: _HttpClient }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: Input, args: ['http-data',] }],
    httpMethod: [{ type: Input, args: ['http-method',] }],
    httpUrl: [{ type: Input, args: ['http-url',] }],
    fileName: [{ type: Input, args: ['file-name',] }],
    success: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBU3BDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBNEI1QixZQUFvQixFQUFjLEVBQVUsS0FBa0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7Ozs7UUF4QnhDLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7UUFNOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDOzs7O1FBRWpELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTSxDQUFDO0lBZ0JlLENBQUM7Ozs7OztJQWQxRCxjQUFjLENBQUMsSUFBbUI7O2NBQ2xDLEdBQUcsR0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDNUIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2tCQUNyQixLQUFLLEdBQUcsU0FBUzs7Z0JBQ25CLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQztRQUNKLE9BQU8sR0FBRyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLO2FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQzNCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7YUFDRCxTQUFTOzs7O1FBQ1IsQ0FBQyxHQUF1QixFQUFFLEVBQUU7WUFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBQSxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjs7a0JBQ0ssV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7a0JBQ3pFLFFBQVEsR0FDWixJQUFJLENBQUMsUUFBUTtnQkFDYixXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUN4QixXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUN2QixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUM7Ozs7UUFDRCxHQUFHLENBQUMsRUFBRTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxFQUNGLENBQUM7SUFDTixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2dCQUNELFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFWbUIsVUFBVTtZQUNyQixXQUFXOzs7dUJBWWpCLEtBQUssU0FBQyxXQUFXO3lCQUVqQixLQUFLLFNBQUMsYUFBYTtzQkFFbkIsS0FBSyxTQUFDLFVBQVU7dUJBRWhCLEtBQUssU0FBQyxXQUFXO3NCQUVqQixNQUFNO29CQUVOLE1BQU07Ozs7Ozs7SUFWUCxxQ0FBaUM7Ozs7O0lBRWpDLHVDQUFpRDs7Ozs7SUFFakQsb0NBQW1DOzs7OztJQUVuQyxxQ0FBcUM7Ozs7O0lBRXJDLG9DQUFvRTs7Ozs7SUFFcEUsa0NBQWtEOzs7OztJQWdCdEMsK0JBQXNCOzs7OztJQUFFLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxuICBleHBvcnRBczogJ2Rvd25GaWxlRGlyZWN0aXZlJyxcbn0pXG5leHBvcnQgY2xhc3MgRG93bkZpbGVEaXJlY3RpdmUge1xuICAvKiogVVJM6K+35rGC5Y+C5pWwICovXG4gIEBJbnB1dCgnaHR0cC1kYXRhJykgaHR0cERhdGE6IHt9O1xuICAvKiog6K+35rGC57G75Z6LICovXG4gIEBJbnB1dCgnaHR0cC1tZXRob2QnKSBodHRwTWV0aG9kOiBzdHJpbmcgPSAnZ2V0JztcbiAgLyoqIOS4i+i9veWcsOWdgCAqL1xuICBASW5wdXQoJ2h0dHAtdXJsJykgaHR0cFVybDogc3RyaW5nO1xuICAvKiog5oyH5a6a5paH5Lu25ZCN77yM6Iul5Li656m65LuO5pyN5Yqh56uv6L+U5Zue55qEIGBoZWFkZXJgIOS4reiOt+WPliBgZmlsZW5hbWVg44CBYHgtZmlsZW5hbWVgICovXG4gIEBJbnB1dCgnZmlsZS1uYW1lJykgZmlsZU5hbWU6IHN0cmluZztcbiAgLyoqIOaIkOWKn+WbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICAvKiog6ZSZ6K+v5Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgYXJyOiBBcnJheTx7fT4gPSAoZGF0YSB8fCAnJylcbiAgICAgIC5zcGxpdCgnOycpXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxuICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgY29uc3Qgc3RyQXJyID0gdi5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xuICAgICAgICBpZiAodmFsdWUuc3RhcnRzV2l0aCh1dGZJZCkpIHZhbHVlID0gdmFsdWUuc3Vic3RyKHV0ZklkLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChvLCBpdGVtKSA9PiBpdGVtLCB7fSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCkge31cblxuICBfY2xpY2soKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9odHRwXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkhLnNpemUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uID0gdGhpcy5nZXREaXNwb3NpdGlvbihyZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSk7XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPVxuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHksIGRlY29kZVVSSShmaWxlTmFtZSkpO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG59XG4iXX0=