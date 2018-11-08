/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        // nz-form-control
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
                    template: "\n  <i nz-icon type=\"exclamation-circle\"></i>\n  <span class=\"pl-sm\">{{count}}</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU01RDtJQTBCRSwrQkFDRSxHQUF1QixFQUNmLEVBQWMsRUFDZCxFQUFxQixFQUNILEdBQVE7UUFGMUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ0gsUUFBRyxHQUFILEdBQUcsQ0FBSztRQXBCNUIsVUFBSyxHQUFHLElBQUksQ0FBQztRQVlyQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsVUFBSyxHQUFHLENBQUMsQ0FBQztRQVFSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBWSx5Q0FBTTs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUVPLHNDQUFNOzs7SUFBZDs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNqQyxJ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QTZCOztJQUM3QixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbmZpZyB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb25maWcnO1xuXG4vKipcbiAqIOmUmeivr+a2iOaBr+mHh+mbhuWZqFxuICogUFPvvJromb3nhLbmraTms5XlubbkuI3lpb3nnIvvvIzkvYblr7nlk43lupTlvI/ooajljZUm5qih5p2/6KGo5Y2V5pyJ5b6I5aW955qE5pWI5p6c44CCXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxpIG56LWljb24gdHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgPHNwYW4gY2xhc3M9XCJwbC1zbVwiPnt7Y291bnR9fTwvc3Bhbj5gLFxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgJHRpbWUgPSBudWxsO1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGZyZXE6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBvZmZzZXRUb3A6IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmQtbm9uZScpXG4gIF9oaWRlbiA9IHRydWU7XG5cbiAgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogRXJyb3JDb2xsZWN0Q29uZmlnLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFzLWVycm9yJyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZXJyRWxzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5faGlkZW4gPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY291bnQgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcbiAgICBjb25zdCBmb3JtSXRlbUVsID0gdGhpcy5maW5kUGFyZW50KGVsc1swXSwgJ1tuei1mb3JtLWNvbnRyb2xdJykgfHwgZWxzWzBdO1xuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMub2Zmc2V0VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy4kdGltZSA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIHRoaXMuZnJlcSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kdGltZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGxldCByZXRFbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcign5pyq5om+5Yiw5pyJ5pWIIGZvcm0g5YWD57SgJyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=