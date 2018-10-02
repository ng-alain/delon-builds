/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, ElementRef, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputNumber } from '@delon/util';
import { ErrorCollectConfig } from './error-collect.config';
/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
var ErrorCollectComponent = /** @class */ (function () {
    function ErrorCollectComponent(cog, el, cd, doc) {
        this.el = el;
        this.cd = cd;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, cog);
    }
    Object.defineProperty(ErrorCollectComponent.prototype, "errEls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formEl.querySelectorAll('.has-error');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this.count === 0)
            return false;
        /** @type {?} */
        var els = this.errEls;
        /** @type {?} */
        var formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uninstall();
        this.$time = setInterval(function () { return _this.update(); }, this.freq);
        this.update();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        clearInterval(this.$time);
    };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    ErrorCollectComponent.prototype.findParent = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        /** @type {?} */
        var retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('未找到有效 form 元素');
        this.install();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    ErrorCollectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'error-collect, [error-collect]',
                    template: "\n  <i class=\"anticon anticon-exclamation-circle\"></i>\n  <span class=\"pl-sm\">{{count}}</span>",
                    host: { '[class.error-collect]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    ErrorCollectComponent.ctorParameters = function () { return [
        { type: ErrorCollectConfig },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ErrorCollectComponent.propDecorators = {
        freq: [{ type: Input }],
        offsetTop: [{ type: Input }],
        _hiden: [{ type: HostBinding, args: ['class.d-none',] }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], ErrorCollectComponent.prototype, "freq", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], ErrorCollectComponent.prototype, "offsetTop", void 0);
    return ErrorCollectComponent;
}());
export { ErrorCollectComponent };
if (false) {
    /** @type {?} */
    ErrorCollectComponent.prototype.$time;
    /** @type {?} */
    ErrorCollectComponent.prototype.formEl;
    /** @type {?} */
    ErrorCollectComponent.prototype.freq;
    /** @type {?} */
    ErrorCollectComponent.prototype.offsetTop;
    /** @type {?} */
    ErrorCollectComponent.prototype._hiden;
    /** @type {?} */
    ErrorCollectComponent.prototype.count;
    /** @type {?} */
    ErrorCollectComponent.prototype.el;
    /** @type {?} */
    ErrorCollectComponent.prototype.cd;
    /** @type {?} */
    ErrorCollectComponent.prototype.doc;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUFnQzFELCtCQUNFLEdBQXVCLEVBQ2YsSUFDQSxJQUNrQixHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDZ0IsUUFBRyxHQUFILEdBQUcsQ0FBSztxQkFwQnBCLElBQUk7c0JBWVgsSUFBSTtxQkFFTCxDQUFDO1FBUVAsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUI7MEJBRVcseUNBQU07Ozs7O1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7SUFHNUMsc0NBQU07Ozs7O1FBQ1osSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7OztJQUl6QixzQ0FBTTs7O0lBRE47UUFFRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDOztRQUVuQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztRQUN4QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUVoQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN0RDs7OztJQUVPLHVDQUFPOzs7OztRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7OztJQUdSLHlDQUFTOzs7O1FBQ2YsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUdwQiwwQ0FBVTs7Ozs7Y0FBQyxFQUFPLEVBQUUsUUFBZ0I7O1FBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxNQUFNO2FBQ1A7WUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdmLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSxvR0FFMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRTtvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWRRLGtCQUFrQjtnQkFUekIsVUFBVTtnQkFJVixpQkFBaUI7Z0RBeUNkLE1BQU0sU0FBQyxRQUFROzs7dUJBakJqQixLQUFLOzRCQUlMLEtBQUs7eUJBSUwsV0FBVyxTQUFDLGNBQWM7eUJBMEIxQixZQUFZLFNBQUMsT0FBTzs7O1FBakNwQixXQUFXLEVBQUU7Ozs7UUFJYixXQUFXLEVBQUU7OztnQ0F2Q2hCOztTQThCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25EZXN0cm95LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbmZpZyB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIOmUmeivr+a2iOaBr+mHh+mbhuWZqFxyXG4gKiBQU++8muiZveeEtuatpOazleW5tuS4jeWlveeci++8jOS9huWvueWTjeW6lOW8j+ihqOWNlSbmqKHmnb/ooajljZXmnInlvojlpb3nmoTmlYjmnpzjgIJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXJyb3ItY29sbGVjdCwgW2Vycm9yLWNvbGxlY3RdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICA8c3BhbiBjbGFzcz1cInBsLXNtXCI+e3tjb3VudH19PC9zcGFuPmAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmVycm9yLWNvbGxlY3RdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSAkdGltZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGZyZXE6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG9mZnNldFRvcDogbnVtYmVyO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmQtbm9uZScpXHJcbiAgX2hpZGVuID0gdHJ1ZTtcclxuXHJcbiAgY291bnQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvZzogRXJyb3JDb2xsZWN0Q29uZmlnLFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGVyckVscygpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFzLWVycm9yJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5lcnJFbHMubGVuZ3RoO1xyXG4gICAgaWYgKGNvdW50ID09PSB0aGlzLmNvdW50KSByZXR1cm47XHJcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICB0aGlzLl9oaWRlbiA9IGNvdW50ID09PSAwO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gbnotZm9ybS1jb250cm9sXHJcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcclxuICAgIGNvbnN0IGZvcm1JdGVtRWwgPSB0aGlzLmZpbmRQYXJlbnQoZWxzWzBdLCAnW256LWZvcm0tY29udHJvbF0nKSB8fCBlbHNbMF07XHJcbiAgICBmb3JtSXRlbUVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcclxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5vZmZzZXRUb3A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gICAgdGhpcy4kdGltZSA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIHRoaXMuZnJlcSk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuJHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kUGFyZW50KGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXRFbCA9IG51bGw7XHJcbiAgICB3aGlsZSAoZWwpIHtcclxuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcmV0RWwgPSBlbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0RWw7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcclxuICAgIGlmICh0aGlzLmZvcm1FbCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLDmnInmlYggZm9ybSDlhYPntKAnKTtcclxuICAgIHRoaXMuaW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=