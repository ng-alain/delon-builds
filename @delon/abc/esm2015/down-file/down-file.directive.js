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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBU3BDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBNEI1QixZQUFvQixFQUFjLEVBQVUsS0FBa0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7Ozs7UUF4QnhDLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7UUFNOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDOzs7O1FBRWpELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTSxDQUFDO0lBZ0JlLENBQUM7Ozs7OztJQWQxRCxjQUFjLENBQUMsSUFBbUI7O2NBQ2xDLEdBQUcsR0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDNUIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2tCQUNyQixLQUFLLEdBQUcsU0FBUzs7Z0JBQ25CLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBQztRQUNKLE9BQU8sR0FBRyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLO2FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQzNCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7YUFDRCxTQUFTOzs7O1FBQ1IsQ0FBQyxHQUF1QixFQUFFLEVBQUU7WUFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBQSxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjs7a0JBQ0ssV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7a0JBQ3pFLFFBQVEsR0FDWixJQUFJLENBQUMsUUFBUTtnQkFDYixXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUN4QixXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUN2QixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUM7Ozs7UUFDRCxHQUFHLENBQUMsRUFBRTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxFQUNGLENBQUM7SUFDTixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjthQUNGOzs7O1lBVm1CLFVBQVU7WUFDckIsV0FBVzs7O3VCQVlqQixLQUFLLFNBQUMsV0FBVzt5QkFFakIsS0FBSyxTQUFDLGFBQWE7c0JBRW5CLEtBQUssU0FBQyxVQUFVO3VCQUVoQixLQUFLLFNBQUMsV0FBVztzQkFFakIsTUFBTTtvQkFFTixNQUFNOzs7Ozs7O0lBVlAscUNBQWlDOzs7OztJQUVqQyx1Q0FBaUQ7Ozs7O0lBRWpELG9DQUFtQzs7Ozs7SUFFbkMscUNBQXFDOzs7OztJQUVyQyxvQ0FBb0U7Ozs7O0lBRXBFLGtDQUFrRDs7Ozs7SUFnQnRDLCtCQUFzQjs7Ozs7SUFBRSxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyxcbiAgZXhwb3J0QXM6ICdkb3duRmlsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtZGF0YScpIGh0dHBEYXRhOiB7fTtcbiAgLyoqIOivt+axguexu+WeiyAqL1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIC8qKiDkuIvovb3lnLDlnYAgKi9cbiAgQElucHV0KCdodHRwLXVybCcpIGh0dHBVcmw6IHN0cmluZztcbiAgLyoqIOaMh+WumuaWh+S7tuWQje+8jOiLpeS4uuepuuS7juacjeWKoeerr+i/lOWbnueahCBgaGVhZGVyYCDkuK3ojrflj5YgYGZpbGVuYW1lYOOAgWB4LWZpbGVuYW1lYCAqL1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lOiBzdHJpbmc7XG4gIC8qKiDmiJDlip/lm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBSZXNwb25zZTxCbG9iPj4oKTtcbiAgLyoqIOmUmeivr+WbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIHByaXZhdGUgZ2V0RGlzcG9zaXRpb24oZGF0YTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IGFycjogQXJyYXk8e30+ID0gKGRhdGEgfHwgJycpXG4gICAgICAuc3BsaXQoJzsnKVxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cih1dGZJZC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgobywgaXRlbSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfaHR0cDogX0h0dHBDbGllbnQpIHt9XG5cbiAgX2NsaWNrKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5faHR0cFxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5IS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbiA9IHRoaXMuZ2V0RGlzcG9zaXRpb24ocmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJykpO1xuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID1cbiAgICAgICAgICAgIHRoaXMuZmlsZU5hbWUgfHxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZSpgXSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHxcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCd4LWZpbGVuYW1lJyk7XG4gICAgICAgICAgc2F2ZUFzKHJlcy5ib2R5LCBkZWNvZGVVUkkoZmlsZU5hbWUpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgfVxufVxuIl19