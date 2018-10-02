/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, Optional, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@delon/theme';
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
export class DownFileDirective {
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
    /** @type {?} */
    DownFileDirective.prototype.el;
    /** @type {?} */
    DownFileDirective.prototype.http;
    /** @type {?} */
    DownFileDirective.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFVM0MsTUFBTTs7Ozs7O0lBa0NKLFlBQ1UsSUFDQSxNQUNZLEtBQWtCO1FBRjlCLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7UUFDUSxVQUFLLEdBQUwsS0FBSyxDQUFhOzs7OzBCQS9CbkIsS0FBSzs7Ozt1QkFTa0IsSUFBSSxZQUFZLEVBQXNCOzs7O3FCQUd2RCxJQUFJLFlBQVksRUFBTztLQW9COUM7Ozs7O0lBbEJJLGNBQWMsQ0FBQyxJQUFZOztRQUNqQyxNQUFNLEdBQUcsR0FBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUNQLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQzVCLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQzs7WUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFVaEQsTUFBTTtRQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEMsbUJBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQVEsRUFBQzthQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDM0IsWUFBWSxFQUFFLE1BQU07WUFDcEIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQzthQUNELFNBQVMsQ0FDUixDQUFDLEdBQXVCLEVBQUUsRUFBRTtZQUMxQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjs7WUFDRCxNQUFNLFdBQVcsR0FBUSxJQUFJLENBQUMsY0FBYyxDQUMxQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUN2QyxDQUFDOztZQUNGLE1BQU0sUUFBUSxHQUNaLElBQUksQ0FBQyxRQUFRO2dCQUNiLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLFdBQVcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN4QyxFQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN4QyxDQUNGLENBQUM7S0FDTDs7O1lBMUVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7Ozs7WUFsQnBDLFVBQVU7WUFPVyxVQUFVO1lBRXhCLFdBQVcsdUJBK0NmLFFBQVE7Ozt1QkFuQ1YsS0FBSyxTQUFDLFdBQVc7eUJBR2pCLEtBQUssU0FBQyxhQUFhO3NCQUduQixLQUFLLFNBQUMsVUFBVTt1QkFHaEIsS0FBSyxTQUFDLFdBQVc7c0JBR2pCLE1BQU07b0JBR04sTUFBTTtxQkF1Qk4sWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIE9wdGlvbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG4vKipcclxuICog5paH5Lu25LiL6L29XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBuei1idXR0b24gZG93bi1maWxlIGh0dHAtdXJsPVwiYXNzZXRzL2RlbW97e2l9fVwiIGZpbGUtbmFtZT1cImRlbW/kuK3mlodcIj57e2l9fTwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyB9KVxyXG5leHBvcnQgY2xhc3MgRG93bkZpbGVEaXJlY3RpdmUge1xyXG4gIC8qKiBVUkzor7fmsYLlj4LmlbAgKi9cclxuICBASW5wdXQoJ2h0dHAtZGF0YScpXHJcbiAgaHR0cERhdGE6IGFueTtcclxuICAvKiog6K+35rGC57G75Z6LICovXHJcbiAgQElucHV0KCdodHRwLW1ldGhvZCcpXHJcbiAgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XHJcbiAgLyoqIOS4i+i9veWcsOWdgCAqL1xyXG4gIEBJbnB1dCgnaHR0cC11cmwnKVxyXG4gIGh0dHBVcmw6IHN0cmluZztcclxuICAvKiog5oyH5a6a5paH5Lu25ZCN77yM6Iul5Li656m65LuO5pyN5Yqh56uv6L+U5Zue55qEIGBoZWFkZXJgIOS4reiOt+WPliBgZmlsZW5hbWVg44CBYHgtZmlsZW5hbWVgICovXHJcbiAgQElucHV0KCdmaWxlLW5hbWUnKVxyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgLyoqIOaIkOWKn+WbnuiwgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+ID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+KCk7XHJcbiAgLyoqIOmUmeivr+WbnuiwgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwcml2YXRlIGdldERpc3Bvc2l0aW9uKGRhdGE6IHN0cmluZykge1xyXG4gICAgY29uc3QgYXJyOiBhbnkgPSAoZGF0YSB8fCAnJylcclxuICAgICAgLnNwbGl0KCc7JylcclxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcclxuICAgICAgLm1hcCh2ID0+IHtcclxuICAgICAgICBjb25zdCBzdHJBcnIgPSB2LnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gc3RyQXJyWzFdO1xyXG4gICAgICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKHV0ZklkKSkgdmFsdWUgPSB2YWx1ZS5zdWJzdHIodXRmSWQubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKG8sIGl0ZW06IGFueSkgPT4gaXRlbSwge30pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfaHR0cDogX0h0dHBDbGllbnQsXHJcbiAgKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICgodGhpcy5faHR0cCB8fCB0aGlzLmh0dHApIGFzIGFueSlcclxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcclxuICAgICAgICBwYXJhbXM6IHRoaXMuaHR0cERhdGEgfHwge30sXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgfHwgcmVzLmJvZHkuc2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbjogYW55ID0gdGhpcy5nZXREaXNwb3NpdGlvbihcclxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJyksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPVxyXG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lIHx8XHJcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZSpgXSB8fFxyXG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fFxyXG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ2ZpbGVuYW1lJykgfHxcclxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCd4LWZpbGVuYW1lJyk7XHJcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHksIGRlY29kZVVSSShmaWxlTmFtZSkpO1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQocmVzKTtcclxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xyXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl19