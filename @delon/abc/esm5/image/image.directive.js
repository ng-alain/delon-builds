/**
 * @fileoverview added by tsickle
 * Generated from: image.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { InputNumber } from '@delon/util';
import { AlainConfigService } from '@delon/theme';
/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
var ImageDirective = /** @class */ (function () {
    function ImageDirective(el, configSrv) {
        this.inited = false;
        configSrv.attach(this, 'image', { size: 64, error: "./assets/img/logo.svg" });
        this.imgEl = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ImageDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.update();
        this.updateError();
        this.inited = true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.inited)
            return;
        if (changes.error) {
            this.updateError();
        }
        this.update();
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newSrc = this.src;
        var _a = this, size = _a.size, imgEl = _a.imgEl;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            var arr = newSrc.split('/');
            /** @type {?} */
            var imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
        imgEl.height = size;
        imgEl.width = size;
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.updateError = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, imgEl = _a.imgEl, error = _a.error;
        // tslint:disable-next-line: only-arrow-functions
        imgEl.onerror = (/**
         * @return {?}
         */
        function () {
            this.onerror = null;
            this.src = error;
        });
    };
    ImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[_src]',
                    exportAs: '_src',
                },] }
    ];
    /** @nocollapse */
    ImageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AlainConfigService }
    ]; };
    ImageDirective.propDecorators = {
        src: [{ type: Input, args: ['_src',] }],
        size: [{ type: Input }],
        error: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ImageDirective.prototype, "size", void 0);
    return ImageDirective;
}());
export { ImageDirective };
if (false) {
    /** @type {?} */
    ImageDirective.prototype.src;
    /** @type {?} */
    ImageDirective.prototype.size;
    /** @type {?} */
    ImageDirective.prototype.error;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9pbWFnZS8iLCJzb3VyY2VzIjpbImltYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWtELE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQVFwRTtJQVlFLHdCQUFZLEVBQWdDLEVBQUUsU0FBNkI7UUFIbkUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUlyQixTQUFTLENBQUMsTUFBTSxDQUE0QixJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQTZEO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDekIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLCtCQUFNOzs7O0lBQWQ7O1lBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ2YsSUFBQSxTQUFzQixFQUFwQixjQUFJLEVBQUUsZ0JBQWM7UUFFNUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDekIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDdkIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDdkYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0MsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyxvQ0FBVzs7OztJQUFuQjtRQUNRLElBQUEsU0FBdUIsRUFBckIsZ0JBQUssRUFBRSxnQkFBYztRQUM3QixpREFBaUQ7UUFDakQsS0FBSyxDQUFDLE9BQU87OztRQUFHO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7Ozs7Z0JBYm1CLFVBQVU7Z0JBRXJCLGtCQUFrQjs7O3NCQWF4QixLQUFLLFNBQUMsTUFBTTt1QkFDWixLQUFLO3dCQUNMLEtBQUs7O0lBRGtCO1FBQWQsV0FBVyxFQUFFOztnREFBYztJQW1EdkMscUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXJEWSxjQUFjOzs7SUFDekIsNkJBQTJCOztJQUMzQiw4QkFBcUM7O0lBQ3JDLCtCQUF1Qjs7Ozs7SUFFdkIsZ0NBQXVCOzs7OztJQUN2QiwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5JbWFnZUNvbmZpZyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbi8qKlxuICogaW1n5qCH562+XG4gKiArIOaUr+aMgeW+ruS/oeOAgXFx5aS05YOP6KeE5YiZ57yp55Wl5Zu+6KeE5YiZXG4gKiArIOaUr+aMgeenu+mZpGh0dHAmaHR0cHPljY/orq5odHRwXG4gKiArIOaUr+aMgeWinuWKoG9uZXJyb3Lkuovku7ZcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW19zcmNdJyxcbiAgZXhwb3J0QXM6ICdfc3JjJyxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgnX3NyYycpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbWdFbDogSFRNTEltYWdlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZjxIVE1MSW1hZ2VFbGVtZW50PiwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluSW1hZ2VDb25maWcsICdpbWFnZSc+KHRoaXMsICdpbWFnZScsIHsgc2l6ZTogNjQsIGVycm9yOiBgLi9hc3NldHMvaW1nL2xvZ28uc3ZnYCB9KTtcbiAgICB0aGlzLmltZ0VsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSByZXR1cm47XG4gICAgaWYgKGNoYW5nZXMuZXJyb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIGxldCBuZXdTcmMgPSB0aGlzLnNyYztcbiAgICBjb25zdCB7IHNpemUsIGltZ0VsIH0gPSB0aGlzO1xuXG4gICAgaWYgKG5ld1NyYy5pbmNsdWRlcygncWxvZ28uY24nKSkge1xuICAgICAgY29uc3QgYXJyID0gbmV3U3JjLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBpbWdTaXplID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgIGFyclthcnIubGVuZ3RoIC0gMV0gPSBpbWdTaXplID09PSAnMCcgfHwgK2ltZ1NpemUgIT09IHNpemUgPyBzaXplLnRvU3RyaW5nKCkgOiBpbWdTaXplO1xuICAgICAgbmV3U3JjID0gYXJyLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICBuZXdTcmMgPSBuZXdTcmMucmVwbGFjZSgvXig/Omh0dHBzPzopL2ksICcnKTtcblxuICAgIGltZ0VsLnNyYyA9IG5ld1NyYztcbiAgICBpbWdFbC5oZWlnaHQgPSBzaXplO1xuICAgIGltZ0VsLndpZHRoID0gc2l6ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgY29uc3QgeyBpbWdFbCwgZXJyb3IgfSA9IHRoaXM7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9uc1xuICAgIGltZ0VsLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5zcmMgPSBlcnJvcjtcbiAgICB9O1xuICB9XG59XG4iXX0=