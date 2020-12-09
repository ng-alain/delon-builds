/**
 * @fileoverview added by tsickle
 * Generated from: image.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFrRCxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQU12RyxNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQVl6QixZQUFZLEVBQWdDLEVBQUUsU0FBNkIsRUFBVSxJQUFpQixFQUFVLFFBQWtCO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHpHLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFakMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUlyQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTZEO2NBQ2pFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDNUIsS0FBSyxD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V0FBVztZQUZYLFFBQVE7OztrQkFhZCxLQUFLLFNBQUMsTUFBTTttQkFDWixLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzs7QUFGa0I7SUFBZCxXQUFXLEVBQUU7OzRDQUFjO0FBRVo7SUFBZixZQUFZLEVBQUU7OytDQUFpQjs7O0lBTnpDLHNDQUEyQzs7SUFDM0MseUNBQStDOztJQUUvQyw2QkFBMkI7O0lBQzNCLDhCQUFxQzs7SUFDckMsK0JBQXVCOztJQUN2QixpQ0FBeUM7Ozs7O0lBRXpDLGdDQUF1Qjs7Ozs7SUFDdkIsK0JBQWdDOzs7OztJQUU2Qyw4QkFBeUI7Ozs7O0lBQUUsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbX3NyY10nLFxuICBleHBvcnRBczogJ19zcmMnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdXNlSHR0cDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VIdHRwID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbWdFbDogSFRNTEltYWdlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZjxIVE1MSW1hZ2VFbGVtZW50PiwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAnaW1hZ2UnLCB7IHNpemU6IDY0LCBlcnJvcjogYC4vYXNzZXRzL2ltZy9sb2dvLnN2Z2AgfSk7XG4gICAgdGhpcy5pbWdFbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzaXplLCBpbWdFbCB9ID0gdGhpcztcbiAgICBpbWdFbC5oZWlnaHQgPSBzaXplO1xuICAgIGltZ0VsLndpZHRoID0gc2l6ZTtcblxuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNpemUsIGltZ0VsLCB1c2VIdHRwIH0gPSB0aGlzO1xuICAgIGlmICh1c2VIdHRwKSB7XG4gICAgICB0aGlzLmdldEJ5SHR0cCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcbiAgICBpZiAobmV3U3JjLmluY2x1ZGVzKCdxbG9nby5jbicpKSB7XG4gICAgICBjb25zdCBhcnIgPSBuZXdTcmMuc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGltZ1NpemUgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXSA9IGltZ1NpemUgPT09ICcwJyB8fCAraW1nU2l6ZSAhPT0gc2l6ZSA/IHNpemUudG9TdHJpbmcoKSA6IGltZ1NpemU7XG4gICAgICBuZXdTcmMgPSBhcnIuam9pbignLycpO1xuICAgIH1cblxuICAgIG5ld1NyYyA9IG5ld1NyYy5yZXBsYWNlKC9eKD86aHR0cHM/OikvaSwgJycpO1xuXG4gICAgaW1nRWwuc3JjID0gbmV3U3JjO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaW1nRWwgfSA9IHRoaXM7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnNyYywgbnVsbCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KS5zdWJzY3JpYmUoXG4gICAgICAoYmxvYjogQmxvYikgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gKGltZ0VsLnNyYyA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB0aGlzLnNldEVycm9yKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgfSxcbiAgICAgICgpID0+IHRoaXMuc2V0RXJyb3IoKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGltZ0VsLCBlcnJvciB9ID0gdGhpcztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9ubHktYXJyb3ctZnVuY3Rpb25zLCB0eXBlZGVmXG4gICAgaW1nRWwub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLnNyYyA9IGVycm9yO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW1nRWwsIGVycm9yIH0gPSB0aGlzO1xuICAgIGltZ0VsLnNyYyA9IGVycm9yO1xuICB9XG59XG4iXX0=