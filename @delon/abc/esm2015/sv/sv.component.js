/**
 * @fileoverview added by tsickle
 * Generated from: sv.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { InputBoolean, InputNumber, isEmpty } from '@delon/util';
import { SVContainerComponent } from './sv-container.component';
/** @type {?} */
const prefixCls = `sv`;
export class SVComponent {
    /**
     * @param {?} el
     * @param {?} parent
     * @param {?} rep
     * @param {?} ren
     */
    constructor(el, parent, rep, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    // #endregion
    /**
     * @return {?}
     */
    get paddingValue() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get labelWidth() {
        const { labelWidth, layout } = this.parent;
        return layout === 'horizontal' ? labelWidth : null;
    }
    /**
     * @private
     * @return {?}
     */
    setClass() {
        const { el, ren, col, clsMap, type, rep } = this;
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.removeClass(el, cls)));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls}__item`);
        if (this.parent.labelWidth)
            clsMap.push(`${prefixCls}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls}__type-${type}`);
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.addClass(el, cls)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    checkContent() {
        const { conEl } = this;
        /** @type {?} */
        const def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (conEl.nativeElement));
        /** @type {?} */
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
}
SVComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv, [sv]',
                exportAs: 'sv',
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!label\" [class.sv__label-width]=\"labelWidth != null\" [style.width.px]=\"labelWidth\">\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n",
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SVComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ResponsiveService },
    { type: Renderer2 }
];
SVComponent.propDecorators = {
    conEl: [{ type: ViewChild, args: ['conEl', { static: false },] }],
    optional: [{ type: Input }],
    optionalHelp: [{ type: Input }],
    label: [{ type: Input }],
    unit: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null),
    __metadata("design:type", Boolean)
], SVComponent.prototype, "default", void 0);
if (false) {
    /** @type {?} */
    SVComponent.ngAcceptInputType_col;
    /** @type {?} */
    SVComponent.ngAcceptInputType_default;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.conEl;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.clsMap;
    /** @type {?} */
    SVComponent.prototype.optional;
    /** @type {?} */
    SVComponent.prototype.optionalHelp;
    /** @type {?} */
    SVComponent.prototype.label;
    /** @type {?} */
    SVComponent.prototype.unit;
    /** @type {?} */
    SVComponent.prototype.col;
    /** @type {?} */
    SVComponent.prototype.default;
    /** @type {?} */
    SVComponent.prototype.type;
    /** @type {?} */
    SVComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.rep;
    /**
     * @type {?}
     * @private
     */
    SVComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYWJjL3N2LyIsInNvdXJjZXMiOlsic3YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFMUQsU0FBUyxHQUFHLElBQUk7QUFjdEIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUE4QnRCLFlBQ0UsRUFBYyxFQUNhLE1BQTRCLEVBQy9DLEdBQXNCLEVBQ3RCLEdBQWM7UUFGSyxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUMvQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBM0JoQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBNkI1QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBbkJELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELElBQUksVUFBVTtjQUNOLEVBQUUsVUFB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QUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOztBQUZzQjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzt3Q0FBYTtBQUNYO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7OzRDQUFrQjs7O0lBZjlDLGtDQUEwQzs7SUFDMUMsc0NBQStDOzs7OztJQUUvQyw0QkFDMEI7Ozs7O0lBQzFCLHlCQUF3Qjs7Ozs7SUFDeEIsNkJBQThCOztJQUk5QiwrQkFBOEM7O0lBQzlDLG1DQUFrRDs7SUFDbEQsNEJBQTJDOztJQUMzQywyQkFBMEM7O0lBQzFDLDBCQUF3Qzs7SUFDeEMsOEJBQThDOztJQUM5QywyQkFBNEQ7O0lBZTFELDZCQUF1RDs7Ozs7SUFDdkQsMEJBQThCOzs7OztJQUM5QiwwQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIGlzRW1wdHksIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3N2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIGV4cG9ydEFzOiAnc3YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3YuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5wYWRkaW5nLWxlZnQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWZhdWx0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29uRWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHVuaXQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGdldCBsYWJlbFdpZHRoKCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHsgbGFiZWxXaWR0aCwgbGF5b3V0IH0gPSB0aGlzLnBhcmVudDtcbiAgICByZXR1cm4gbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyBsYWJlbFdpZHRoIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XG4gICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLnBhcmVudC5sYWJlbFdpZHRoKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtLWZpeGVkYCk7XG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29uRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xuICAgIGlmICghKGRlZiAhPSBudWxsID8gZGVmIDogdGhpcy5wYXJlbnQuZGVmYXVsdCkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IGNvbkVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9XG59XG4iXX0=