/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SFItemWrapComponent = /** @class */ (function () {
    function SFItemWrapComponent() {
        this.title = null;
    }
    Object.defineProperty(SFItemWrapComponent.prototype, "t", {
        get: /**
         * @return {?}
         */
        function () {
            return this.title === null ? this.schema.title : this.title;
        },
        enumerable: true,
        configurable: true
    });
    SFItemWrapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item-wrap',
                    template: "<nz-form-item [style.width.px]=\"ui.width\">\n  <nz-col *ngIf=\"showTitle\"\n          [nzSpan]=\"ui.spanLabel\"\n          class=\"ant-form-item-label\">\n    <label *ngIf=\"t\"\n           [attr.for]=\"id\"\n           [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\"\n                    [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip\n             nz-icon\n             type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\"\n          [nzSpan]=\"ui.spanControl\"\n          [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\"\n         [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <nz-form-extra *ngIf=\"schema.description\"\n                     [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n    </div>\n  </nz-col>\n</nz-form-item>\n"
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
    return SFItemWrapComponent;
}());
export { SFItemWrapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWpEO0lBQUE7UUFXVyxVQUFLLEdBQWtCLElBQUksQ0FBQztJQUt2QyxDQUFDO0lBSEMsc0JBQUksa0NBQUM7Ozs7UUFBTDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlELENBQUM7OztPQUFBOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGttQ0FBNEM7aUJBQzdDOzs7cUJBRUUsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFLUiwwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWlksbUJBQW1COzs7SUFDOUIsaUNBQW9COztJQUNwQixxQ0FBMEI7O0lBQzFCLGlDQUE0Qjs7SUFDNUIsd0NBQTRCOztJQUM1QixvQ0FBdUI7O0lBQ3ZCLHdDQUE0Qjs7SUFDNUIsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbS13cmFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPT09IG51bGwgPyB0aGlzLnNjaGVtYS50aXRsZSA6IHRoaXMudGl0bGU7XG4gIH1cbn1cbiJdfQ==