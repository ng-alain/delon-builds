/**
 * @fileoverview added by tsickle
 * Generated from: error-collect.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { ErrorCollectConfig } from './error-collect.config';
export class ErrorCollectComponent {
    /**
     * @param {?} cog
     * @param {?} el
     * @param {?} cdr
     * @param {?} doc
     */
    constructor(cog, el, cdr, doc) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, Object.assign(Object.assign({}, new ErrorCollectConfig()), cog));
    }
    /**
     * @private
     * @return {?}
     */
    get errEls() {
        return (/** @type {?} */ (this.formEl)).querySelectorAll('.ant-form-item-has-error');
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        /** @type {?} */
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
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
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        this.uninstall();
        this.$time = setInterval((/**
         * @return {?}
         */
        () => this.update()), this.freq);
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    uninstall() {
        clearInterval((/** @type {?} */ (this.$time)));
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    findParent(el, selector) {
        /** @type {?} */
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = (/** @type {?} */ (el));
                break;
            }
            el = (/** @type {?} */ (el.parentElement));
        }
        return retEl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
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
                exportAs: 'errorCollect',
                template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="pl-sm">{{ count }}</span>
  `,
                host: {
                    '[class.error-collect]': 'true',
                    '[class.d-none]': '_hiden',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
    offsetTop: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "freq", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "offsetTop", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.$time;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.formEl;
    /** @type {?} */
    ErrorCollectComponent.prototype.freq;
    /** @type {?} */
    ErrorCollectComponent.prototype.offsetTop;
    /** @type {?} */
    ErrorCollectComponent.prototype._hiden;
    /** @type {?} */
    ErrorCollectComponent.prototype.count;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBa0I1RCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBV2hDLFlBQVksR0FBdUIsRUFBVSxFQUFjLEVBQVUsR0FBc0IsRUFBNEIsR0FBUTtRQUFsRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQVZ2SCxVQUFLLEdBQWUsSUFBSSxDQUFDO1FBTWpDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtDQUFPLElBQUksa0JBQWtCLEVBQUUsR0FBSyxHQUFHLEVBQUcsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRU8sTUFBTTs7Y0FDTixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2hDLElBQUksS0FBSyxLQUFLLElB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QUUxQyx1Q0FBYzs7SUFFZCxzQ0FBVTs7Ozs7SUFFMkIsbUNBQXNCOzs7OztJQUFFLG9DQUE4Qjs7Ozs7SUFBRSxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29uZmlnIH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIGV4cG9ydEFzOiAnZXJyb3JDb2xsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgICA8c3BhbiBjbGFzcz1cInBsLXNtXCI+e3sgY291bnQgfX08L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmVycm9yLWNvbGxlY3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZC1ub25lXSc6ICdfaGlkZW4nLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgJHRpbWU6IGFueSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmcmVxOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG9mZnNldFRvcDogbnVtYmVyO1xuXG4gIF9oaWRlbiA9IHRydWU7XG5cbiAgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogRXJyb3JDb2xsZWN0Q29uZmlnLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgLi4ubmV3IEVycm9yQ29sbGVjdENvbmZpZygpLCAuLi5jb2cgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlcnJFbHMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1FbCEucXVlcnlTZWxlY3RvckFsbCgnLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yJyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZXJyRWxzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5faGlkZW4gPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9jbGljaygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIG56LWZvcm0tY29udHJvbFxuICAgIGNvbnN0IGVscyA9IHRoaXMuZXJyRWxzO1xuICAgIGNvbnN0IGZvcm1JdGVtRWwgPSB0aGlzLmZpbmRQYXJlbnQoZWxzWzBdLCAnW256LWZvcm0tY29udHJvbF0nKSB8fCBlbHNbMF07XG4gICAgZm9ybUl0ZW1FbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5vZmZzZXRUb3A7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLiR0aW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgdGhpcy5mcmVxKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLiR0aW1lISk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsIHtcbiAgICBsZXQgcmV0RWw6IEhUTUxGb3JtRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldEVsID0gZWwgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignTm8gZm91bmQgZm9ybSBlbGVtZW50Jyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=