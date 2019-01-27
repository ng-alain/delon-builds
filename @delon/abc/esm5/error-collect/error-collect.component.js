/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, Inject, Input, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { ErrorCollectConfig } from './error-collect.config';
var ErrorCollectComponent = /** @class */ (function () {
    function ErrorCollectComponent(cog, el, cdr, doc) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, tslib_1.__assign({}, new ErrorCollectConfig(), cog));
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
        this.cdr.markForCheck();
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
            throw new Error('No found form element');
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
                    template: "\n    <i nz-icon type=\"exclamation-circle\"></i>\n    <span class=\"pl-sm\">{{ count }}</span>\n  ",
                    host: { '[class.error-collect]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'errorCollect'
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
    ErrorCollectComponent.prototype.cdr;
    /** @type {?} */
    ErrorCollectComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBcUJFLCtCQUNFLEdBQXVCLEVBQ2YsRUFBYyxFQUNkLEdBQXNCLEVBRUosR0FBUTtRQUgxQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFSixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBZjVCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFNUSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTNDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFTUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksdUJBQU8sSUFBSSxrQkFBa0IsRUFBRSxFQUFLLEdBQUcsRUFBRyxDQUFDO0lBQy9ELENBQUM7SUFFRCxzQkFBWSx5Q0FBTTs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUVPLHNDQUFNOzs7SUFBZDs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFL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UixtQ0FBc0I7O0lBQ3RCLG9DQUE4Qjs7SUFFOUIsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBFcnJvckNvbGxlY3RDb25maWcgfSBmcm9tICcuL2Vycm9yLWNvbGxlY3QuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJyb3ItY29sbGVjdCwgW2Vycm9yLWNvbGxlY3RdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIHR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgPHNwYW4gY2xhc3M9XCJwbC1zbVwiPnt7IGNvdW50IH19PC9zcGFuPlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnZXJyb3JDb2xsZWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb2xsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlICR0aW1lID0gbnVsbDtcbiAgcHJpdmF0ZSBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudDtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmcmVxOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG9mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZC1ub25lJykgX2hpZGVuID0gdHJ1ZTtcblxuICBjb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBFcnJvckNvbGxlY3RDb25maWcsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgRXJyb3JDb2xsZWN0Q29uZmlnKCksIC4uLmNvZyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVyckVscygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvckFsbCgnLmhhcy1lcnJvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmVyckVscy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID09PSB0aGlzLmNvdW50KSByZXR1cm47XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2hpZGVuID0gY291bnQgPT09IDA7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIG56LWZvcm0tY29udHJvbFxuICAgIGNvbnN0IGVscyA9IHRoaXMuZXJyRWxzO1xuICAgIGNvbnN0IGZvcm1JdGVtRWwgPSB0aGlzLmZpbmRQYXJlbnQoZWxzWzBdLCAnW256LWZvcm0tY29udHJvbF0nKSB8fCBlbHNbMF07XG4gICAgZm9ybUl0ZW1FbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLiR0aW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgdGhpcy5mcmVxKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLiR0aW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhcmVudChlbDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGxldCByZXRFbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignTm8gZm91bmQgZm9ybSBlbGVtZW50Jyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=