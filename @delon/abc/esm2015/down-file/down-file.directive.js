/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        ((/** @type {?} */ ((this._http || this.http))))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7QUFVM0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBa0M1QixZQUNVLEVBQWMsRUFDZCxJQUFnQixFQUNKLEtBQWtCO1FBRjlCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0osVUFBSyxHQUFMLEtBQUssQ0FBYTs7OztRQS9CeEMsZUFBVSxHQUFXLEtBQUssQ0FBQzs7OztRQVNsQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7Ozs7UUFHakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFvQnRDLENBQUM7Ozs7O0lBbEJJLGNBQWMsQ0FBQyxJQUFZOztjQUMzQixHQUFHLEdBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ0QsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztrQkFDckIsS0FBSyxHQUFHLFNBQVM7O2dCQUNuQixLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDSixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQVNELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLENBQUMsbUJBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBTyxDQUFDO2FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRTtZQUMzQixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO2FBQ0QsU0FBUyxDQUNSLENBQUMsR0FBdUIsRUFBRSxFQUFFO1lBQzFCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsT0FBTzthQUNSOztrQkFDSyxXQUFXLEdBQVEsSUFBSSxDQUFDLGNBQWMsQ0FDMUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FDdkM7O2tCQUNLLFFBQVEsR0FDWixJQUFJLENBQUMsUUFBUTtnQkFDYixXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUN4QixXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUN2QixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDOzs7WUExRUYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTs7OztZQWxCcEMsVUFBVTtZQU9XLFVBQVU7WUFFeEIsV0FBVyx1QkErQ2YsUUFBUTs7O3VCQW5DVixLQUFLLFNBQUMsV0FBVzt5QkFHakIsS0FBSyxTQUFDLGFBQWE7c0JBR25CLEtBQUssU0FBQyxVQUFVO3VCQUdoQixLQUFLLFNBQUMsV0FBVztzQkFHakIsTUFBTTtvQkFHTixNQUFNO3FCQXVCTixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQXRDckIscUNBQ2M7Ozs7O0lBRWQsdUNBQzJCOzs7OztJQUUzQixvQ0FDZ0I7Ozs7O0lBRWhCLHFDQUNpQjs7Ozs7SUFFakIsb0NBQzBEOzs7OztJQUUxRCxrQ0FDeUM7O0lBaUJ2QywrQkFBc0I7O0lBQ3RCLGlDQUF3Qjs7SUFDeEIsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbi8qKlxuICog5paH5Lu25LiL6L29XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBuei1idXR0b24gZG93bi1maWxlIGh0dHAtdXJsPVwiYXNzZXRzL2RlbW97e2l9fVwiIGZpbGUtbmFtZT1cImRlbW/kuK3mlodcIj57e2l9fTwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkb3duLWZpbGVdJyB9KVxuZXhwb3J0IGNsYXNzIERvd25GaWxlRGlyZWN0aXZlIHtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtZGF0YScpXG4gIGh0dHBEYXRhOiBhbnk7XG4gIC8qKiDor7fmsYLnsbvlnosgKi9cbiAgQElucHV0KCdodHRwLW1ldGhvZCcpXG4gIGh0dHBNZXRob2Q6IHN0cmluZyA9ICdnZXQnO1xuICAvKiog5LiL6L295Zyw5Z2AICovXG4gIEBJbnB1dCgnaHR0cC11cmwnKVxuICBodHRwVXJsOiBzdHJpbmc7XG4gIC8qKiDmjIflrprmlofku7blkI3vvIzoi6XkuLrnqbrku47mnI3liqHnq6/ov5Tlm57nmoQgYGhlYWRlcmAg5Lit6I635Y+WIGBmaWxlbmFtZWDjgIFgeC1maWxlbmFtZWAgKi9cbiAgQElucHV0KCdmaWxlLW5hbWUnKVxuICBmaWxlTmFtZTogc3RyaW5nO1xuICAvKiog5oiQ5Yqf5Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+KCk7XG4gIC8qKiDplJnor6/lm57osIMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhcnI6IGFueSA9IChkYXRhIHx8ICcnKVxuICAgICAgLnNwbGl0KCc7JylcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCc9JykpXG4gICAgICAubWFwKHYgPT4ge1xuICAgICAgICBjb25zdCBzdHJBcnIgPSB2LnNwbGl0KCc9Jyk7XG4gICAgICAgIGNvbnN0IHV0ZklkID0gYFVURi04JydgO1xuICAgICAgICBsZXQgdmFsdWUgPSBzdHJBcnJbMV07XG4gICAgICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKHV0ZklkKSkgdmFsdWUgPSB2YWx1ZS5zdWJzdHIodXRmSWQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHsgW3N0ckFyclswXS50cmltKCldOiB2YWx1ZSB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKG8sIGl0ZW06IGFueSkgPT4gaXRlbSwge30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfaHR0cDogX0h0dHBDbGllbnQsXG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICgodGhpcy5faHR0cCB8fCB0aGlzLmh0dHApIGFzIGFueSlcbiAgICAgIC5yZXF1ZXN0KHRoaXMuaHR0cE1ldGhvZCwgdGhpcy5odHRwVXJsLCB7XG4gICAgICAgIHBhcmFtczogdGhpcy5odHRwRGF0YSB8fCB7fSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCB8fCByZXMuYm9keS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbjogYW55ID0gdGhpcy5nZXREaXNwb3NpdGlvbihcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1kaXNwb3NpdGlvbicpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPVxuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8XG4gICAgICAgICAgICBkaXNwb3NpdGlvbltgZmlsZW5hbWVgXSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8XG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcbiAgICAgICAgICBzYXZlQXMocmVzLmJvZHksIGRlY29kZVVSSShmaWxlTmFtZSkpO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KHJlcyk7XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG59XG4iXX0=