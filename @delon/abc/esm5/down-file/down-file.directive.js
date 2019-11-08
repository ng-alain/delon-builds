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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZG93bi1maWxlLyIsInNvdXJjZXMiOlsiZG93bi1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVwQztJQW9DRSwyQkFBb0IsRUFBaUMsRUFBVSxLQUFrQjtRQUE3RCxPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7UUE1QnpFLHlCQUFvQixHQUFHLElBQUksQ0FBQzs7OztRQUlkLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7UUFNOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDOzs7O1FBRWpELFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztZQWlCN0Msb0JBQW9CLEdBQUcsS0FBSztRQUNoQyxJQUFJO1lBQ0Ysb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckM7UUFBQyxXQUFNLEdBQUU7UUFDVixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7Ozs7O0lBdkJPLDBDQUFjOzs7OztJQUF0QixVQUF1QixJQUFtQjs7WUFDbEMsR0FBRyxHQUFjLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1Ys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QUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0Y7Ozs7Z0JBVm1CLFVBQVU7Z0JBQ3JCLFdBQVc7OzsyQkFhakIsS0FBSyxTQUFDLFdBQVc7NkJBRWpCLEtBQUssU0FBQyxhQUFhOzBCQUVuQixLQUFLLFNBQUMsVUFBVTsyQkFFaEIsS0FBSyxTQUFDLFdBQVc7MEJBRWpCLE1BQU07d0JBRU4sTUFBTTs7SUFnRVQsd0JBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQTdFWSxpQkFBaUI7Ozs7OztJQUM1QixpREFBb0M7Ozs7O0lBRXBDLHFDQUFpQzs7Ozs7SUFFakMsdUNBQWlEOzs7OztJQUVqRCxvQ0FBbUM7Ozs7O0lBRW5DLHFDQUFxQzs7Ozs7SUFFckMsb0NBQW9FOzs7OztJQUVwRSxrQ0FBbUQ7Ozs7O0lBZ0J2QywrQkFBeUM7Ozs7O0lBQUUsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZG93bi1maWxlXScsXG4gIGV4cG9ydEFzOiAnZG93bkZpbGUnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBEb3duRmlsZURpcmVjdGl2ZSB7XG4gIHByaXZhdGUgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSB0cnVlO1xuICAvKiogVVJM6K+35rGC5Y+C5pWwICovXG4gIEBJbnB1dCgnaHR0cC1kYXRhJykgaHR0cERhdGE6IHt9O1xuICAvKiog6K+35rGC57G75Z6LICovXG4gIEBJbnB1dCgnaHR0cC1tZXRob2QnKSBodHRwTWV0aG9kOiBzdHJpbmcgPSAnZ2V0JztcbiAgLyoqIOS4i+i9veWcsOWdgCAqL1xuICBASW5wdXQoJ2h0dHAtdXJsJykgaHR0cFVybDogc3RyaW5nO1xuICAvKiog5oyH5a6a5paH5Lu25ZCN77yM6Iul5Li656m65LuO5pyN5Yqh56uv6L+U5Zue55qEIGBoZWFkZXJgIOS4reiOt+WPliBgZmlsZW5hbWVg44CBYHgtZmlsZW5hbWVgICovXG4gIEBJbnB1dCgnZmlsZS1uYW1lJykgZmlsZU5hbWU6IHN0cmluZztcbiAgLyoqIOaIkOWKn+WbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8SHR0cFJlc3BvbnNlPEJsb2I+PigpO1xuICAvKiog6ZSZ6K+v5Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgZ2V0RGlzcG9zaXRpb24oZGF0YTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IGFycjogQXJyYXk8e30+ID0gKGRhdGEgfHwgJycpXG4gICAgICAuc3BsaXQoJzsnKVxuICAgICAgLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSlcbiAgICAgIC5tYXAodiA9PiB7XG4gICAgICAgIGNvbnN0IHN0ckFyciA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgY29uc3QgdXRmSWQgPSBgVVRGLTgnJ2A7XG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ckFyclsxXTtcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgodXRmSWQpKSB2YWx1ZSA9IHZhbHVlLnN1YnN0cih1dGZJZC5sZW5ndGgpO1xuICAgICAgICByZXR1cm4geyBbc3RyQXJyWzBdLnRyaW0oKV06IHZhbHVlIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoX28sIGl0ZW0pID0+IGl0ZW0sIHt9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCkge1xuICAgIGxldCBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBpc0ZpbGVTYXZlclN1cHBvcnRlZCA9ICEhbmV3IEJsb2IoKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgdGhpcy5pc0ZpbGVTYXZlclN1cHBvcnRlZCA9IGlzRmlsZVNhdmVyU3VwcG9ydGVkO1xuICAgIGlmICghaXNGaWxlU2F2ZXJTdXBwb3J0ZWQpIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgZG93bi1maWxlX19ub3Qtc3VwcG9ydGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWwuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgZWwuY2xhc3NMaXN0W3N0YXR1cyA/ICdhZGQnIDogJ3JlbW92ZSddKGBkb3duLWZpbGVfX2Rpc2FibGVkYCk7XG4gIH1cblxuICBfY2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RGlzYWJsZWQodHJ1ZSk7XG4gICAgdGhpcy5faHR0cFxuICAgICAgLnJlcXVlc3QodGhpcy5odHRwTWV0aG9kLCB0aGlzLmh0dHBVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB0aGlzLmh0dHBEYXRhIHx8IHt9LFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBIdHRwUmVzcG9uc2U8QmxvYj4pID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwIHx8IHJlcy5ib2R5IS5zaXplIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkaXNwb3NpdGlvbiA9IHRoaXMuZ2V0RGlzcG9zaXRpb24ocmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWRpc3Bvc2l0aW9uJykpO1xuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID1cbiAgICAgICAgICAgIHRoaXMuZmlsZU5hbWUgfHxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uW2BmaWxlbmFtZSpgXSB8fFxuICAgICAgICAgICAgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHxcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzLmdldCgnZmlsZW5hbWUnKSB8fFxuICAgICAgICAgICAgcmVzLmhlYWRlcnMuZ2V0KCd4LWZpbGVuYW1lJyk7XG4gICAgICAgICAgc2F2ZUFzKHJlcy5ib2R5LCBkZWNvZGVVUkkoZmlsZU5hbWUpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5lcnJvci5lbWl0KGVyciksXG4gICAgICAgICgpID0+IHRoaXMuc2V0RGlzYWJsZWQoZmFsc2UpLFxuICAgICAgKTtcbiAgfVxufVxuIl19