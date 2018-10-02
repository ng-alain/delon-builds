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
        (/** @type {?} */ ((this._http || this.http)))
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
export { DownFileDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lBNEN6QywyQkFDVSxJQUNBLE1BQ1ksS0FBa0I7UUFGOUIsT0FBRSxHQUFGLEVBQUU7UUFDRixTQUFJLEdBQUosSUFBSTtRQUNRLFVBQUssR0FBTCxLQUFLLENBQWE7Ozs7MEJBL0JuQixLQUFLOzs7O3VCQVNrQixJQUFJLFlBQVksRUFBc0I7Ozs7cUJBR3ZELElBQUksWUFBWSxFQUFPO0tBb0I5Qzs7Ozs7SUFsQkksMENBQWM7Ozs7Y0FBQyxJQUFZOztRQUNqQyxJQUFNLEdBQUcsR0FBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxVQUFBLENBQUM7OztZQUNKLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQzVCLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQzs7WUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLGdCQUFTLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFHLEtBQUssS0FBRztTQUN0QyxDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsSUFBUyxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFVaEQsa0NBQU07OztJQUROO1FBQUEsaUJBaUNDO1FBL0JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEMsbUJBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQVEsRUFBQzthQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDM0IsWUFBWSxFQUFFLE1BQU07WUFDcEIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQzthQUNELFNBQVMsQ0FDUixVQUFDLEdBQXVCO1lBQ3RCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsT0FBTzthQUNSOztZQUNELElBQU0sV0FBVyxHQUFRLEtBQUksQ0FBQyxjQUFjLENBQzFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQ3ZDLENBQUM7O1lBQ0YsSUFBTSxRQUFRLEdBQ1osS0FBSSxDQUFDLFFBQVE7Z0JBQ2IsV0FBVyxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsV0FBVyxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3hDLEVBQ0QsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN4QyxDQUNGLENBQUM7S0FDTDs7Z0JBMUVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7Ozs7Z0JBbEJwQyxVQUFVO2dCQU9XLFVBQVU7Z0JBRXhCLFdBQVcsdUJBK0NmLFFBQVE7OzsyQkFuQ1YsS0FBSyxTQUFDLFdBQVc7NkJBR2pCLEtBQUssU0FBQyxhQUFhOzBCQUduQixLQUFLLFNBQUMsVUFBVTsyQkFHaEIsS0FBSyxTQUFDLFdBQVc7MEJBR2pCLE1BQU07d0JBR04sTUFBTTt5QkF1Qk4sWUFBWSxTQUFDLE9BQU87OzRCQTdEdkI7O1NBcUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgT3B0aW9uYWwsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbi8qKlxyXG4gKiDmlofku7bkuIvovb1cclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIG56LWJ1dHRvbiBkb3duLWZpbGUgaHR0cC11cmw9XCJhc3NldHMvZGVtb3t7aX19XCIgZmlsZS1uYW1lPVwiZGVtb+S4reaWh1wiPnt7aX19PC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBEb3duRmlsZURpcmVjdGl2ZSB7XHJcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xyXG4gIEBJbnB1dCgnaHR0cC1kYXRhJylcclxuICBodHRwRGF0YTogYW55O1xyXG4gIC8qKiDor7fmsYLnsbvlnosgKi9cclxuICBASW5wdXQoJ2h0dHAtbWV0aG9kJylcclxuICBodHRwTWV0aG9kOiBzdHJpbmcgPSAnZ2V0JztcclxuICAvKiog5LiL6L295Zyw5Z2AICovXHJcbiAgQElucHV0KCdodHRwLXVybCcpXHJcbiAgaHR0cFVybDogc3RyaW5nO1xyXG4gIC8qKiDmjIflrprmlofku7blkI3vvIzoi6XkuLrnqbrku47mnI3liqHnq6/ov5Tlm57nmoQgYGhlYWRlcmAg5Lit6I635Y+WIGBmaWxlbmFtZWDjgIFgeC1maWxlbmFtZWAgKi9cclxuICBASW5wdXQoJ2ZpbGUtbmFtZScpXHJcbiAgZmlsZU5hbWU6IHN0cmluZztcclxuICAvKiog5oiQ5Yqf5Zue6LCDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgc3VjY2VzczogRXZlbnRFbWl0dGVyPEh0dHBSZXNwb25zZTxCbG9iPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBSZXNwb25zZTxCbG9iPj4oKTtcclxuICAvKiog6ZSZ6K+v5Zue6LCDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgZ2V0RGlzcG9zaXRpb24oZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhcnI6IGFueSA9IChkYXRhIHx8ICcnKVxyXG4gICAgICAuc3BsaXQoJzsnKVxyXG4gICAgICAuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKVxyXG4gICAgICAubWFwKHYgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcclxuICAgICAgICBjb25zdCB1dGZJZCA9IGBVVEYtOCcnYDtcclxuICAgICAgICBsZXQgdmFsdWUgPSBzdHJBcnJbMV07XHJcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cih1dGZJZC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB7IFtzdHJBcnJbMF0udHJpbSgpXTogdmFsdWUgfTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgobywgaXRlbTogYW55KSA9PiBpdGVtLCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCxcclxuICApIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgKCh0aGlzLl9odHRwIHx8IHRoaXMuaHR0cCkgYXMgYW55KVxyXG4gICAgICAucmVxdWVzdCh0aGlzLmh0dHBNZXRob2QsIHRoaXMuaHR0cFVybCwge1xyXG4gICAgICAgIHBhcmFtczogdGhpcy5odHRwRGF0YSB8fCB7fSxcclxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IEh0dHBSZXNwb25zZTxCbG9iPikgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCB8fCByZXMuYm9keS5zaXplIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KHJlcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGRpc3Bvc2l0aW9uOiBhbnkgPSB0aGlzLmdldERpc3Bvc2l0aW9uKFxyXG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtZGlzcG9zaXRpb24nKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZU5hbWUgfHxcclxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lKmBdIHx8XHJcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZWBdIHx8XHJcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fFxyXG4gICAgICAgICAgICByZXMuaGVhZGVycy5nZXQoJ3gtZmlsZW5hbWUnKTtcclxuICAgICAgICAgIHNhdmVBcyhyZXMuYm9keSwgZGVjb2RlVVJJKGZpbGVOYW1lKSk7XHJcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xyXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XHJcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=