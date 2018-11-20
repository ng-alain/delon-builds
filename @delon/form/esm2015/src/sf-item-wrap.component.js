/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SFItemWrapComponent {
    constructor() {
        this.title = null;
    }
    /**
     * @return {?}
     */
    get t() {
        return this.title === null ? this.schema.title : this.title;
    }
}
SFItemWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item-wrap',
                template: "<nz-form-item [style.width.px]=\"ui.width\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                preserveWhitespaces: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFZVyxVQUFLLEdBQVcsSUFBSSxDQUFDO0lBS2hDLENBQUM7Ozs7SUFIQyxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw2OEJBQTRDO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7aUJBRUUsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQU5OLGlDQUFvQjs7SUFDcEIscUNBQTBCOztJQUMxQixpQ0FBNEI7O0lBQzVCLHdDQUE0Qjs7SUFDNUIsb0NBQXVCOztJQUN2Qix3Q0FBNEI7O0lBQzVCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1XcmFwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBASW5wdXQoKSBzaG93RXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IG51bGw7XG5cbiAgZ2V0IHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPT09IG51bGwgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHRoaXMudGl0bGU7XG4gIH1cbn1cbiJdfQ==