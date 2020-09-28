/**
 * @fileoverview added by tsickle
 * Generated from: down-file.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
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
        // tslint:disable-next-line:no-output-native
        this.success = new EventEmitter();
        /**
         * 错误回调
         */
        // tslint:disable-next-line:no-output-native
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
     * @param {?} ev
     * @return {?}
     */
    _click(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(yield this.pre(ev)))) {
                ev.stopPropagation();
                ev.preventDefault();
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
                saveAs((/** @type {?} */ (res.body)), decodeURI((/** @type {?} */ (fileName))));
                this.success.emit(res);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            err => this.error.emit(err)), (/**
             * @return {?}
             */
            () => this.setDisabled(false)));
        });
    }
}
DownFileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[down-file]',
                exportAs: 'downFile',
                host: {
                    '(click)': '_click($event)',
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
    pre: [{ type: Input }],
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
     * 下载前回调
     * @type {?}
     */
    DownFileDirective.prototype.pre;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi1maWxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9kb3duLWZpbGUvIiwic291cmNlcyI6WyJkb3duLWZpbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQVVwQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQW1DNUIsWUFBb0IsRUFBaUMsRUFBVSxLQUFrQjtRQUE3RCxPQUFFLEdBQUYsRUFBRSxDQUErQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWE7UUFsQ3pFLHlCQUFvQixHQUFHLElBQUksQ0FBQzs7OztRQU1kLGVBQVUsR0FBVyxLQUFLLENBQUM7Ozs7O1FBUzlCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7Ozs7UUFHakQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1lBaUI3QyxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hDLElBQUk7WUFDRixvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUFDLFdBQU0sR0FBRTtRQUNWLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7Ozs7SUF2Qk8sY0FBYyxDQUFDLElBQW1COztjQUNsQyxHQUFHLEdBQWMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FB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LENBQUM7Z0JBQ2xJLE1BQU0sQ0FBQyxtQkFBQSxHQUFHLENBQUMsSUFBSSxFQUFDLEVBQUUsU0FBUyxDQUFDLG1CQUFBLFFBQVEsRUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQzs7OztZQUNELEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7WUFDM0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDOUIsQ0FBQztRQUNOLENBQUM7S0FBQTs7O1lBMUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsZ0JBQWdCO2lCQUM1QjthQUNGOzs7O1lBWG1CLFVBQVU7WUFDckIsV0FBVzs7O3VCQWNqQixLQUFLLFNBQUMsV0FBVzt1QkFFakIsS0FBSyxTQUFDLFdBQVc7eUJBRWpCLEtBQUssU0FBQyxhQUFhO3NCQUVuQixLQUFLLFNBQUMsVUFBVTt1QkFFaEIsS0FBSyxTQUFDLFdBQVc7a0JBRWpCLEtBQUs7c0JBR0wsTUFBTTtvQkFHTixNQUFNOzs7Ozs7O0lBbEJQLGlEQUFvQzs7Ozs7SUFFcEMscUNBQWlDOzs7OztJQUVqQyxxQ0FBaUM7Ozs7O0lBRWpDLHVDQUFpRDs7Ozs7SUFFakQsb0NBQW1DOzs7OztJQUVuQyxxQ0FBNkU7Ozs7O0lBRTdFLGdDQUFtRDs7Ozs7SUFHbkQsb0NBQW9FOzs7OztJQUdwRSxrQ0FBbUQ7Ozs7O0lBZ0J2QywrQkFBeUM7Ozs7O0lBQUUsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rvd24tZmlsZV0nLFxuICBleHBvcnRBczogJ2Rvd25GaWxlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRG93bkZpbGVEaXJlY3RpdmUge1xuICBwcml2YXRlIGlzRmlsZVNhdmVyU3VwcG9ydGVkID0gdHJ1ZTtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtZGF0YScpIGh0dHBEYXRhOiB7fTtcbiAgLyoqIFVSTOivt+axguWPguaVsCAqL1xuICBASW5wdXQoJ2h0dHAtYm9keScpIGh0dHBCb2R5OiB7fTtcbiAgLyoqIOivt+axguexu+WeiyAqL1xuICBASW5wdXQoJ2h0dHAtbWV0aG9kJykgaHR0cE1ldGhvZDogc3RyaW5nID0gJ2dldCc7XG4gIC8qKiDkuIvovb3lnLDlnYAgKi9cbiAgQElucHV0KCdodHRwLXVybCcpIGh0dHBVcmw6IHN0cmluZztcbiAgLyoqIOaMh+WumuaWh+S7tuWQje+8jOiLpeS4uuepuuS7juacjeWKoeerr+i/lOWbnueahCBgaGVhZGVyYCDkuK3ojrflj5YgYGZpbGVuYW1lYOOAgWB4LWZpbGVuYW1lYCAqL1xuICBASW5wdXQoJ2ZpbGUtbmFtZScpIGZpbGVOYW1lOiBzdHJpbmcgfCAoKHJlcDogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiBzdHJpbmcpO1xuICAvKiog5LiL6L295YmN5Zue6LCDICovXG4gIEBJbnB1dCgpIHByZTogKGV2OiBNb3VzZUV2ZW50KSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICAvKiog5oiQ5Yqf5Zue6LCDICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwUmVzcG9uc2U8QmxvYj4+KCk7XG4gIC8qKiDplJnor6/lm57osIMgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXREaXNwb3NpdGlvbihkYXRhOiBzdHJpbmcgfCBudWxsKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBhcnI6IEFycmF5PHt9PiA9IChkYXRhIHx8ICcnKVxuICAgICAgLnNwbGl0KCc7JylcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCc9JykpXG4gICAgICAubWFwKHYgPT4ge1xuICAgICAgICBjb25zdCBzdHJBcnIgPSB2LnNwbGl0KCc9Jyk7XG4gICAgICAgIGNvbnN0IHV0ZklkID0gYFVURi04JydgO1xuICAgICAgICBsZXQgdmFsdWUgPSBzdHJBcnJbMV07XG4gICAgICAgIGlmICh2YWx1ZS5zdGFydHNXaXRoKHV0ZklkKSkgdmFsdWUgPSB2YWx1ZS5zdWJzdHIodXRmSWQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHsgW3N0ckFyclswXS50cmltKCldOiB2YWx1ZSB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKF9vLCBpdGVtKSA9PiBpdGVtLCB7fSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PiwgcHJpdmF0ZSBfaHR0cDogX0h0dHBDbGllbnQpIHtcbiAgICBsZXQgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSAhIW5ldyBCbG9iKCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHRoaXMuaXNGaWxlU2F2ZXJTdXBwb3J0ZWQgPSBpc0ZpbGVTYXZlclN1cHBvcnRlZDtcbiAgICBpZiAoIWlzRmlsZVNhdmVyU3VwcG9ydGVkKSB7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGRvd24tZmlsZV9fbm90LXN1cHBvcnRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldERpc2FibGVkKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGVsLmRpc2FibGVkID0gc3RhdHVzO1xuICAgIGVsLmNsYXNzTGlzdFtzdGF0dXMgPyAnYWRkJyA6ICdyZW1vdmUnXShgZG93bi1maWxlX19kaXNhYmxlZGApO1xuICB9XG5cbiAgYXN5bmMgX2NsaWNrKGV2OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmlzRmlsZVNhdmVyU3VwcG9ydGVkIHx8ICh0eXBlb2YgdGhpcy5wcmUgPT09ICdmdW5jdGlvbicgJiYgIShhd2FpdCB0aGlzLnByZShldikpKSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldERpc2FibGVkKHRydWUpO1xuICAgIHRoaXMuX2h0dHBcbiAgICAgIC5yZXF1ZXN0KHRoaXMuaHR0cE1ldGhvZCwgdGhpcy5odHRwVXJsLCB7XG4gICAgICAgIHBhcmFtczogdGhpcy5odHRwRGF0YSB8fCB7fSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgICAgIGJvZHk6IHRoaXMuaHR0cEJvZHksXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPEJsb2I+KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCB8fCByZXMuYm9keSEuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQocmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGlzcG9zaXRpb24gPSB0aGlzLmdldERpc3Bvc2l0aW9uKHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1kaXNwb3NpdGlvbicpKTtcbiAgICAgICAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmZpbGVOYW1lO1xuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU5hbWUgPT09ICdmdW5jdGlvbicpIGZpbGVOYW1lID0gZmlsZU5hbWUocmVzKTtcbiAgICAgICAgICBmaWxlTmFtZSA9XG4gICAgICAgICAgICBmaWxlTmFtZSB8fCBkaXNwb3NpdGlvbltgZmlsZW5hbWUqYF0gfHwgZGlzcG9zaXRpb25bYGZpbGVuYW1lYF0gfHwgcmVzLmhlYWRlcnMuZ2V0KCdmaWxlbmFtZScpIHx8IHJlcy5oZWFkZXJzLmdldCgneC1maWxlbmFtZScpO1xuICAgICAgICAgIHNhdmVBcyhyZXMuYm9keSEsIGRlY29kZVVSSShmaWxlTmFtZSBhcyBzdHJpbmcpKTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdChyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4gdGhpcy5lcnJvci5lbWl0KGVyciksXG4gICAgICAgICgpID0+IHRoaXMuc2V0RGlzYWJsZWQoZmFsc2UpLFxuICAgICAgKTtcbiAgfVxufVxuIl19