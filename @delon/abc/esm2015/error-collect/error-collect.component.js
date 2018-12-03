/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, ElementRef, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputNumber } from '@delon/util';
import { ErrorCollectConfig } from './error-collect.config';
export class ErrorCollectComponent {
    /**
     * @param {?} cog
     * @param {?} el
     * @param {?} cd
     * @param {?} doc
     */
    constructor(cog, el, cd, doc) {
        this.el = el;
        this.cd = cd;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, cog);
    }
    /**
     * @return {?}
     */
    get errEls() {
        return this.formEl.querySelectorAll('.has-error');
    }
    /**
     * @return {?}
     */
    update() {
        /** @type {?} */
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.count === 0)
            return false;
        // nz-form-control
        /** @type {?} */
        const els = this.errEls;
        /** @type {?} */
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
    }
    /**
     * @return {?}
     */
    install() {
        this.uninstall();
        this.$time = setInterval(() => this.update(), this.freq);
        this.update();
    }
    /**
     * @return {?}
     */
    uninstall() {
        clearInterval(this.$time);
    }
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    findParent(el, selector) {
        /** @type {?} */
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('未找到有效 form 元素');
        this.install();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
ErrorCollectComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-collect, [error-collect]',
                template: `
  <i nz-icon type="exclamation-circle"></i>
  <span class="pl-sm">{{count}}</span>`,
                host: { '[class.error-collect]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ErrorCollectComponent.ctorParameters = () => [
    { type: ErrorCollectConfig },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBVTVELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFpQmhDLFlBQ0UsR0FBdUIsRUFDZixFQUFjLEVBQ2QsRUFBcUIsRUFDSCxHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNILFFBQUcsR0FBSCxHQUFHLENBQUs7UUFwQjVCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFZckIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFVBQUssR0FBRyxDQUFDLENBQUM7UUFRUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRU8sTUFBTTs7Y0FDTixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBR0QsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7OztjQUU3QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU07O2NBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVPLE9BQU87UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVPLFNBQVM7UUFDZixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxFQUFPLEVBQUUsUUFBZ0I7O1lBQ3RDLEtBQUssR0FBRyxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QixLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNYLE1BQU07YUFDUDtZQUNELEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFOzt1Q0FFMkI7Z0JBQ3JDLElBQUksRUFBRSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRTtnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFUUSxrQkFBa0I7WUFUekIsVUFBVTtZQUlWLGlCQUFpQjs0Q0FvQ2QsTUFBTSxTQUFDLFFBQVE7OzttQkFqQmpCLEtBQUs7d0JBSUwsS0FBSztxQkFJTCxXQUFXLFNBQUMsY0FBYztxQkEwQjFCLFlBQVksU0FBQyxPQUFPOztBQWhDckI7SUFEQyxXQUFXLEVBQUU7O21EQUNEO0FBSWI7SUFEQyxXQUFXLEVBQUU7O3dEQUNJOzs7SUFUbEIsc0NBQXFCOztJQUNyQix1Q0FBZ0M7O0lBRWhDLHFDQUVhOztJQUViLDBDQUVrQjs7SUFFbEIsdUNBQ2M7O0lBRWQsc0NBQVU7O0lBSVIsbUNBQXNCOztJQUN0QixtQ0FBNkI7O0lBQzdCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29uZmlnIH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxpIG56LWljb24gdHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgPHNwYW4gY2xhc3M9XCJwbC1zbVwiPnt7Y291bnR9fTwvc3Bhbj5gLFxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSAkdGltZSA9IG51bGw7XG4gIHByaXZhdGUgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgZnJlcTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIG9mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZC1ub25lJylcbiAgX2hpZGVuID0gdHJ1ZTtcblxuICBjb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBFcnJvckNvbGxlY3RDb25maWcsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlcnJFbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYXMtZXJyb3InKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5lcnJFbHMubGVuZ3RoO1xuICAgIGlmIChjb3VudCA9PT0gdGhpcy5jb3VudCkgcmV0dXJuO1xuICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB0aGlzLl9oaWRlbiA9IGNvdW50ID09PSAwO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIG56LWZvcm0tY29udHJvbFxuICAgIGNvbnN0IGVscyA9IHRoaXMuZXJyRWxzO1xuICAgIGNvbnN0IGZvcm1JdGVtRWwgPSB0aGlzLmZpbmRQYXJlbnQoZWxzWzBdLCAnW256LWZvcm0tY29udHJvbF0nKSB8fCBlbHNbMF07XG4gICAgZm9ybUl0ZW1FbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLiR0aW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgdGhpcy5mcmVxKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLiR0aW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhcmVudChlbDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgbGV0IHJldEVsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICByZXRFbCA9IGVsO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldEVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtRWwgPSB0aGlzLmZpbmRQYXJlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9ybScpO1xuICAgIGlmICh0aGlzLmZvcm1FbCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLDmnInmlYggZm9ybSDlhYPntKAnKTtcbiAgICB0aGlzLmluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gIH1cbn1cbiJdfQ==