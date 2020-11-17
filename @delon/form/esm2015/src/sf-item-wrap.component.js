/**
 * @fileoverview added by tsickle
 * Generated from: src/sf-item-wrap.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
export class SFItemWrapComponent {
    constructor() {
        this.title = null;
    }
    /**
     * @return {?}
     */
    get t() {
        return this.title === null ? (/** @type {?} */ (this.schema.title)) : this.title;
    }
    /**
     * @return {?}
     */
    get oh() {
        return (/** @type {?} */ (this.ui.optionalHelp));
    }
}
SFItemWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item-wrap',
                template: "<nz-form-item [style.width.px]=\"ui.width\" [class.ant-form-item-has-error]=\"showError\" [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon\"\n        ></i>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-item-explain\">\n      <div @helpMotion>{{ error }}</div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"schema._description\"></div>\n  </nz-col>\n</nz-form-item>\n",
                animations: [helpMotion],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
SFItemWrapComponent.propDecorators = {
    id: [{ type: Input }],
    schema: [{ type: Input }],
    ui: [{ type: Input }],
    showError: [{ type: Input }],
    error: [{ type: Input }],
    showTitle: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SFItemWrapComponent.prototype.id;
    /** @type {?} */
    SFItemWrapComponent.prototype.schema;
    /** @type {?} */
    SFItemWrapComponent.prototype.ui;
    /** @type {?} */
    SFItemWrapComponent.prototype.showError;
    /** @type {?} */
    SFItemWrapComponent.prototype.error;
    /** @type {?} */
    SFItemWrapComponent.prototype.showTitle;
    /** @type {?} */
    SFItemWrapComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtaXRlbS13cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVcxRCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBY1csVUFBSyxHQUFrQixJQUFJLENBQUM7SUFTdkMsQ0FBQzs7OztJQVBDLElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQWtCLENBQUM7SUFDaEQsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsdWtEQUE0QztnQkFDNUMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN4QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O2lCQUVFLEtBQUs7cUJBQ0wsS0FBSztpQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFOTixpQ0FBb0I7O0lBQ3BCLHFDQUEwQjs7SUFDMUIsaUNBQTRCOztJQUM1Qix3Q0FBNEI7O0lBQzVCLG9DQUF1Qjs7SUFDdkIsd0NBQTRCOztJQUM1QixvQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1XcmFwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBASW5wdXQoKSBzaG93RXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGdldCB0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPT09IG51bGwgPyB0aGlzLnNjaGVtYS50aXRsZSEgOiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cbn1cbiJdfQ==