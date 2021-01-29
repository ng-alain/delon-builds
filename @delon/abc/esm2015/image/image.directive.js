/**
 * @fileoverview added by tsickle
 * Generated from: image.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/other';
export class ImageDirective {
    /**
     * @param {?} el
     * @param {?} configSrv
     * @param {?} http
     * @param {?} platform
     */
    constructor(el, configSrv, http, platform) {
        this.http = http;
        this.platform = platform;
        this.useHttp = false;
        this.inited = false;
        configSrv.attach(this, 'image', { size: 64, error: `./assets/img/logo.svg` });
        this.imgEl = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.update();
        this.updateError();
        this.inited = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { size, imgEl } = this;
        imgEl.height = size;
        imgEl.width = size;
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            this.update();
        }
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        const { size, imgEl, useHttp } = this;
        if (useHttp) {
            this.getByHttp();
            return;
        }
        /** @type {?} */
        let newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            const arr = newSrc.split('/');
            /** @type {?} */
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
    }
    /**
     * @private
     * @return {?}
     */
    getByHttp() {
        if (!this.platform.isBrowser) {
            return;
        }
        const { imgEl } = this;
        this.http.get(this.src, null, { responseType: 'blob' }).subscribe((/**
         * @param {?} blob
         * @return {?}
         */
        (blob) => {
            /** @type {?} */
            const reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            () => (imgEl.src = (/** @type {?} */ (reader.result))));
            reader.onerror = (/**
             * @return {?}
             */
            () => this.setError());
            reader.readAsDataURL(blob);
        }), (/**
         * @return {?}
         */
        () => this.setError()));
    }
    /**
     * @private
     * @return {?}
     */
    updateError() {
        const { imgEl, error } = this;
        // tslint:disable-next-line: only-arrow-functions, typedef
        imgEl.onerror = (/**
         * @return {?}
         */
        function () {
            this.onerror = null;
            this.src = error;
        });
    }
    /**
     * @private
     * @return {?}
     */
    setError() {
        const { imgEl, error } = this;
        imgEl.src = error;
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: '_src',
            },] }
];
/** @nocollapse */
ImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AlainConfigService },
    { type: _HttpClient },
    { type: Platform }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }],
    useHttp: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ImageDirective.prototype, "useHttp", void 0);
if (false) {
    /** @type {?} */
    ImageDirective.ngAcceptInputType_size;
    /** @type {?} */
    ImageDirective.ngAcceptInputType_useHttp;
    /** @type {?} */
    ImageDirective.prototype.src;
    /** @type {?} */
    ImageDirective.prototype.size;
    /** @type {?} */
    ImageDirective.prototype.error;
    /** @type {?} */
    ImageDirective.prototype.useHttp;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.imgEl;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2ltYWdlL2ltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFrRCxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBTXpGLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBWXpCLFlBQVksRUFBZ0MsRUFBRSxTQUE2QixFQUFVLElBQWlCLEVBQVUsUUFBa0I7UUFBN0MsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFMekcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSXJCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBNkQ7Y0FDakUsRUFBRSxJQUFJLEVB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Qjs7OztZQVJtQixVQUFVO1lBRXJCLGtCQUFrQjtZQURsQixXQUFXO1lBRlgsUUFBUTs7O2tCQWNkLEtBQUssU0FBQyxNQUFNO21CQUNaLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOztBQUZrQjtJQUFkLFdBQVcsRUFBRTs7NENBQWM7QUFFWjtJQUFmLFlBQVksRUFBRTs7K0NBQWlCOzs7SUFOekMsc0NBQTJDOztJQUMzQyx5Q0FBK0M7O0lBRS9DLDZCQUEyQjs7SUFDM0IsOEJBQXFDOztJQUNyQywrQkFBdUI7O0lBQ3ZCLGlDQUF5Qzs7Ozs7SUFFekMsZ0NBQXVCOzs7OztJQUN2QiwrQkFBZ0M7Ozs7O0lBRTZDLDhCQUF5Qjs7Ozs7SUFBRSxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW19zcmNdJyxcbiAgZXhwb3J0QXM6ICdfc3JjJyxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3VzZUh0dHA6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoJ19zcmMnKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlSHR0cCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW1nRWw6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWY8SFRNTEltYWdlRWxlbWVudD4sIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ2ltYWdlJywgeyBzaXplOiA2NCwgZXJyb3I6IGAuL2Fzc2V0cy9pbWcvbG9nby5zdmdgIH0pO1xuICAgIHRoaXMuaW1nRWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2l6ZSwgaW1nRWwgfSA9IHRoaXM7XG4gICAgaW1nRWwuaGVpZ2h0ID0gc2l6ZTtcbiAgICBpbWdFbC53aWR0aCA9IHNpemU7XG5cbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBzaXplLCBpbWdFbCwgdXNlSHR0cCB9ID0gdGhpcztcbiAgICBpZiAodXNlSHR0cCkge1xuICAgICAgdGhpcy5nZXRCeUh0dHAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3U3JjID0gdGhpcy5zcmM7XG4gICAgaWYgKG5ld1NyYy5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBpbWdTaXplID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPSBpbWdTaXplID09PSAnMCcgfHwgK2ltZ1NpemUgIT09IHNpemUgPyBzaXplLnRvU3RyaW5nKCkgOiBpbWdTaXplO1xuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBuZXdTcmMgPSBuZXdTcmMucmVwbGFjZSgvXig/Omh0dHBzPzopL2ksICcnKTtcblxuICAgIGltZ0VsLnNyYyA9IG5ld1NyYztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGltZ0VsIH0gPSB0aGlzO1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5zcmMsIG51bGwsIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSkuc3Vic2NyaWJlKFxuICAgICAgKGJsb2I6IEJsb2IpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IChpbWdFbC5zcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gdGhpcy5zZXRFcnJvcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiB0aGlzLnNldEVycm9yKCksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKTogdm9pZCB7XG4gICAgY29uc3QgeyBpbWdFbCwgZXJyb3IgfSA9IHRoaXM7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9ucywgdHlwZWRlZlxuICAgIGltZ0VsLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5zcmMgPSBlcnJvcjtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICBpbWdFbC5zcmMgPSBlcnJvcjtcbiAgfVxufVxuIl19